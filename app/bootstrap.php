<?php
declare(strict_types=1);

const APP_ROOT = __DIR__ . '/..';
const DATA_DIR = APP_ROOT . '/data';
const EXPORT_DIR = APP_ROOT . '/exports';

function max_upload_bytes(): int
{
    $configured = getenv('MAX_UPLOAD_BYTES');
    if ($configured === false || !ctype_digit($configured)) {
        return 2_000_000;
    }
    return min(max((int) $configured, 1_024), 2_000_000);
}

function app_db(): PDO
{
    static $db = null;
    if ($db instanceof PDO) {
        return $db;
    }

    if (!is_dir(DATA_DIR) && !mkdir(DATA_DIR, 0700, true) && !is_dir(DATA_DIR)) {
        throw new RuntimeException('Unable to initialize application storage.');
    }

    $db = new PDO('sqlite:' . DATA_DIR . '/app.sqlite', null, null, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    $db->exec('PRAGMA foreign_keys = ON');
    $db->exec('PRAGMA busy_timeout = 5000');
    $db->exec(
        'CREATE TABLE IF NOT EXISTS settings (
            setting_key TEXT PRIMARY KEY,
            setting_value TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS jobs (
            id TEXT PRIMARY KEY,
            state TEXT NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS check_rate_limit (
            id INTEGER PRIMARY KEY CHECK (id = 1),
            last_request REAL NOT NULL
        );
        CREATE TABLE IF NOT EXISTS job_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            job_id TEXT NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
            result_json TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS job_results_job_id ON job_results(job_id);'
    );
    $jobColumns = array_column($db->query('PRAGMA table_info(jobs)')->fetchAll(), 'name');
    if (!in_array('links_json', $jobColumns, true)) {
        $db->exec("ALTER TABLE jobs ADD COLUMN links_json TEXT NOT NULL DEFAULT '[]'");
    }
    if (!in_array('metadata_json', $jobColumns, true)) {
        $db->exec("ALTER TABLE jobs ADD COLUMN metadata_json TEXT NOT NULL DEFAULT '[]'");
    }

    return $db;
}

function json_response(array $payload, int $status = 200): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function api_success(mixed $data): never
{
    json_response(['success' => true, 'data' => $data, 'error' => null]);
}

function api_error(string $code, string $message, int $status = 400): never
{
    json_response([
        'success' => false,
        'data' => null,
        'error' => ['code' => $code, 'message' => $message],
    ], $status);
}

function request_json(): array
{
    $raw = file_get_contents('php://input');
    if ($raw === false || trim($raw) === '') {
        return [];
    }

    try {
        $data = json_decode($raw, true, 64, JSON_THROW_ON_ERROR);
    } catch (JsonException) {
        api_error('INVALID_JSON', 'The request body must be valid JSON.');
    }

    if (!is_array($data)) {
        api_error('INVALID_REQUEST', 'The request body must be a JSON object.');
    }
    return $data;
}

function set_setting(string $key, mixed $value): void
{
    $statement = app_db()->prepare(
        'INSERT INTO settings (setting_key, setting_value) VALUES (:key, :value)
         ON CONFLICT(setting_key) DO UPDATE SET setting_value = excluded.setting_value'
    );
    $statement->execute([
        ':key' => $key,
        ':value' => json_encode($value, JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
    ]);
}

function get_setting(string $key, mixed $default = null): mixed
{
    $statement = app_db()->prepare('SELECT setting_value FROM settings WHERE setting_key = :key');
    $statement->execute([':key' => $key]);
    $value = $statement->fetchColumn();
    if ($value === false) {
        return $default;
    }

    try {
        return json_decode((string) $value, true, 32, JSON_THROW_ON_ERROR);
    } catch (JsonException) {
        return $default;
    }
}

function extract_telegram_links(string $text): array
{
    preg_match_all(
        '~(?<![A-Z0-9_@./-])(?:https?://)?(?:www\.)?(?:t\.me|telegram\.me)/[^\s<>"\'`]+~iu',
        $text,
        $matches
    );

    $links = [];
    foreach ($matches[0] ?? [] as $candidate) {
        $candidate = rtrim($candidate, ".,!?;:)]}»”’。，、！？؛）】」』〉》");
        $candidate = preg_replace('/[.,!?;:。，、！？؛）】」』〉》]+$/u', '', $candidate) ?? $candidate;
        $url = str_starts_with(strtolower($candidate), 'http')
            ? $candidate
            : 'https://' . $candidate;
        $parts = parse_url($url);
        if (!is_array($parts)) {
            continue;
        }
        $host = strtolower($parts['host'] ?? '');
        $host = str_starts_with($host, 'www.') ? substr($host, 4) : $host;
        if (!in_array($host, ['t.me', 'telegram.me'], true)) {
            continue;
        }

        $path = $parts['path'] ?? '';
        if ($path === '' || $path === '/') {
            continue;
        }
        if (preg_match('~^/([A-Za-z][A-Za-z0-9_]{4,31})(/\d+)?$~', $path, $usernamePath)
            || preg_match('~^/s/([A-Za-z][A-Za-z0-9_]{4,31})(/\d+)?$~', $path, $usernamePath)) {
            $path = preg_replace_callback(
                '~^(/(?:s/)?)([A-Za-z][A-Za-z0-9_]{4,31})(/\d+)?$~i',
                static fn (array $parts): string => strtolower($parts[1] . $parts[2]) . ($parts[3] ?? ''),
                $path
            ) ?? $path;
        }
        $normalized = 'https://t.me' . $path;
        if (!isset($links[$normalized])) {
            $links[$normalized] = true;
        }
    }

    return array_keys($links);
}

function link_kind(string $link): string
{
    $path = parse_url($link, PHP_URL_PATH);
    if (!is_string($path)) {
        return 'invalid';
    }
    if (preg_match('~^/\+[^/]+(?:/\d+)?$~', $path)) {
        return 'private';
    }
    if (preg_match('~^/joinchat/[^/]+(?:/\d+)?$~', $path)) {
        return 'private';
    }
    if (preg_match('~^/c/\d+(?:/\d+)?$~', $path)) {
        return 'private';
    }
    if (preg_match('~^/(?:[A-Za-z][A-Za-z0-9_]{4,31}|s/[A-Za-z][A-Za-z0-9_]{4,31})(?:/\d+)?$~', $path)) {
        return 'public';
    }
    return 'invalid';
}

function clean_title(string $value): string
{
    $value = html_entity_decode(strip_tags($value), ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $value = preg_replace('/\s+/u', ' ', trim($value)) ?? trim($value);
    return mb_substr($value, 0, 180, 'UTF-8');
}

function check_public_link(string $link): array
{
    $now = gmdate('Y-m-d H:i:s') . ' UTC';
    $kind = link_kind($link);
    $result = [
        'link' => $link,
        'category' => 'UNKNOWN_ERROR',
        'type' => $kind,
        'name' => null,
        'visibility' => 'Public',
        'checkedAt' => $now,
        'details' => 'The public preview did not provide enough evidence to verify this link.',
    ];

    if ($kind === 'private') {
        return array_merge($result, [
            'category' => 'PRIVATE',
            'visibility' => 'Private',
            'details' => 'Private invite and internal links are not checked in Normal Mode.',
        ]);
    }
    if ($kind === 'invalid') {
        return array_merge($result, [
            'category' => 'INVALID_FORMAT',
            'visibility' => 'Unknown',
            'details' => 'This Telegram URL does not match a supported link format.',
        ]);
    }
    if (!function_exists('curl_init')) {
        return $result;
    }

    $curl = curl_init($link);
    if ($curl === false) {
        return $result;
    }
    curl_setopt_array($curl, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_CONNECTTIMEOUT => 6,
        CURLOPT_TIMEOUT => 12,
        CURLOPT_MAXFILESIZE => 1_000_000,
        CURLOPT_USERAGENT => 'TelegramLinkChecker/1.0 (+public preview check)',
        CURLOPT_HTTPHEADER => ['Accept: text/html'],
        CURLOPT_PROTOCOLS => CURLPROTO_HTTPS,
        CURLOPT_REDIR_PROTOCOLS => CURLPROTO_HTTPS,
    ]);
    $html = curl_exec($curl);
    $httpCode = (int) curl_getinfo($curl, CURLINFO_HTTP_CODE);
    $curlError = curl_errno($curl);
    curl_close($curl);

    if (!is_string($html) || $curlError !== 0) {
        return $result;
    }
    if ($httpCode === 404 || $httpCode === 410) {
        return array_merge($result, [
            'category' => 'USERNAME_NOT_FOUND',
            'details' => 'Telegram returned an unavailable or not-found public page.',
        ]);
    }
    if ($httpCode === 429) {
        return array_merge($result, [
            'category' => 'UNKNOWN_ERROR',
            'details' => 'Telegram rate-limited the public preview request. Try again later.',
        ]);
    }
    if ($httpCode < 200 || $httpCode >= 300) {
        return array_merge($result, [
            'details' => 'Telegram did not return a successful public preview response.',
        ]);
    }

    $plain = strtolower(html_entity_decode(strip_tags($html), ENT_QUOTES | ENT_HTML5, 'UTF-8'));
    $plain = preg_replace('/\s+/u', ' ', $plain) ?? $plain;
    if (preg_match('/(?:invite link|link) (?:is )?(?:invalid|expired|revoked)|invite hash expired/', $plain)) {
        return array_merge($result, [
            'category' => str_contains($plain, 'expired') || str_contains($plain, 'revoked') ? 'EXPIRED' : 'REVOKED',
            'visibility' => 'Private',
            'details' => 'The public page indicates that this invite link is no longer available.',
        ]);
    }
    if (str_contains($plain, 'username not found') || str_contains($plain, 'this username is not occupied')) {
        return array_merge($result, [
            'category' => 'USERNAME_NOT_FOUND',
            'details' => 'Telegram indicates that this public username was not found.',
        ]);
    }
    if (str_contains($plain, 'channel is private') || str_contains($plain, 'this channel is private')) {
        return array_merge($result, [
            'category' => 'PRIVATE',
            'visibility' => 'Private',
            'details' => 'Telegram indicates that this destination is private.',
        ]);
    }
    if (str_contains($plain, 'restricted') || str_contains($plain, 'unavailable in your country')) {
        return array_merge($result, [
            'category' => 'RESTRICTED',
            'details' => 'Telegram indicates that this public page is restricted.',
        ]);
    }

    $title = null;
    if (preg_match('~<meta\b[^>]*\bproperty\s*=\s*["\']og:title["\'][^>]*\bcontent\s*=\s*["\']([^"\']*)["\']~iu', $html, $meta)
        || preg_match('~<meta\b[^>]*\bcontent\s*=\s*["\']([^"\']*)["\'][^>]*\bproperty\s*=\s*["\']og:title["\']~iu', $html, $meta)
        || preg_match('~<title\b[^>]*>(.*?)</title>~isu', $html, $meta)) {
        $title = clean_title($meta[1]);
    }
    if ($title !== null && $title !== '' && !preg_match('/^telegram(?::|$)/i', $title)) {
        return array_merge($result, [
            'category' => 'VALID',
            'name' => $title,
            'details' => 'A public Telegram page with destination metadata was found.',
        ]);
    }

    return $result;
}

function unique_export_path(string $filename): string
{
    if (!is_dir(EXPORT_DIR) && !mkdir(EXPORT_DIR, 0700, true) && !is_dir(EXPORT_DIR)) {
        throw new RuntimeException('Unable to initialize export storage.');
    }
    $base = pathinfo($filename, PATHINFO_FILENAME);
    $extension = pathinfo($filename, PATHINFO_EXTENSION);
    $candidate = EXPORT_DIR . '/' . $filename;
    $suffix = 1;
    while (true) {
        $handle = @fopen($candidate, 'x');
        if (is_resource($handle)) {
            fclose($handle);
            return $candidate;
        }
        if (!file_exists($candidate)) {
            throw new RuntimeException('Unable to reserve a unique export filename.');
        }
        $candidate = EXPORT_DIR . '/' . $base . ' (' . $suffix . ').' . $extension;
        $suffix++;
    }
}
