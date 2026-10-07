<?php
declare(strict_types=1);

require_once __DIR__ . '/bootstrap.php';

header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('X-Frame-Options: DENY');

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';
$method = strtoupper($_SERVER['REQUEST_METHOD'] ?? 'GET');

try {
    if ($path === '/api/health' && $method === 'GET') {
        api_success(['status' => 'ok', 'mode' => 'normal', 'version' => '1.0.0']);
    }

    if ($path === '/api/config' && $method === 'GET') {
        api_success(['premiumAvailable' => false, 'maxUploadBytes' => max_upload_bytes()]);
    }

    if ($path === '/api/extract' && $method === 'POST') {
        $body = request_json();
        $text = $body['text'] ?? null;
        if (!is_string($text)) {
            api_error('VALIDATION_ERROR', 'Provide text to extract links from.');
        }
        if (strlen($text) > max_upload_bytes()) {
            api_error('TEXT_TOO_LARGE', 'Pasted text must be smaller than 2 MB.');
        }
        $links = extract_telegram_links($text);
        api_success([
            'links' => $links,
            'count' => count($links),
            'duplicatesRemoved' => max(0, (preg_match_all('~(?<![A-Z0-9_@./-])(?:https?://)?(?:www\.)?(?:t\.me|telegram\.me)/[^\s<>"\'`]+~iu', $text) ?: 0) - count($links)),
        ]);
    }

    if ($path === '/api/upload' && $method === 'POST') {
        $file = $_FILES['file'] ?? null;
        if (!is_array($file) || ($file['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) {
            api_error('UPLOAD_ERROR', 'Choose a readable text file and try again.');
        }
        if (($file['size'] ?? 0) > max_upload_bytes()) {
            api_error('FILE_TOO_LARGE', 'Files must be smaller than 2 MB.');
        }
        $extension = strtolower(pathinfo((string) ($file['name'] ?? ''), PATHINFO_EXTENSION));
        if (!in_array($extension, ['txt', 'csv', 'log', 'md'], true)) {
            api_error('UNSUPPORTED_FILE', 'Supported file types are .txt, .csv, .log, and .md.');
        }
        $contents = file_get_contents((string) $file['tmp_name']);
        if (!is_string($contents)) {
            api_error('INVALID_FILE', 'This file is not readable text.');
        }
        if (str_starts_with($contents, "\xFF\xFE")) {
            $contents = mb_convert_encoding(substr($contents, 2), 'UTF-8', 'UTF-16LE');
        } elseif (str_starts_with($contents, "\xFE\xFF")) {
            $contents = mb_convert_encoding(substr($contents, 2), 'UTF-8', 'UTF-16BE');
        } elseif (str_contains($contents, "\0")) {
            api_error('INVALID_FILE', 'This file is not readable text.');
        } elseif (!mb_check_encoding($contents, 'UTF-8')) {
            $contents = mb_convert_encoding($contents, 'UTF-8', 'Windows-1252');
        }
        $links = extract_telegram_links($contents);
        api_success([
            'filename' => basename((string) $file['name']),
            'links' => $links,
            'count' => count($links),
        ]);
    }

    if ($path === '/api/settings' && $method === 'GET') {
        api_success([
            'language' => get_setting('language', 'en'),
            'theme' => get_setting('theme', 'light'),
            'metadata' => get_setting('metadata', ['link', 'name', 'visibility', 'status', 'checkedAt']),
        ]);
    }

    if ($path === '/api/settings' && $method === 'POST') {
        $body = request_json();
        if (isset($body['language'])) {
            if (!in_array($body['language'], ['en', 'hi', 'bn', 'ru', 'zh', 'ja', 'ko', 'es', 'fr', 'ar'], true)) {
                api_error('VALIDATION_ERROR', 'Choose a supported language.');
            }
            set_setting('language', $body['language']);
        }
        if (isset($body['theme'])) {
            if (!in_array($body['theme'], ['light', 'dark'], true)) {
                api_error('VALIDATION_ERROR', 'Choose a supported theme.');
            }
            set_setting('theme', $body['theme']);
        }
        if (isset($body['metadata'])) {
            $allowed = ['link', 'name', 'visibility', 'status', 'checkedAt'];
            if (!is_array($body['metadata'])
                || array_filter($body['metadata'], static fn (mixed $value): bool => !is_string($value)) !== []
                || array_diff($body['metadata'], $allowed) !== []) {
                api_error('VALIDATION_ERROR', 'Metadata selection contains an unsupported field.');
            }
            set_setting('metadata', array_values(array_unique($body['metadata'])));
        }
        api_success(['saved' => true]);
    }

    if ($path === '/api/jobs' && $method === 'POST') {
        $body = request_json();
        $links = $body['links'] ?? [];
        $metadata = $body['metadata'] ?? [];
        if (!is_array($links) || count($links) > 5_000 || !is_array($metadata)) {
            api_error('VALIDATION_ERROR', 'The checking session input is invalid or too large.');
        }
        foreach ($links as $link) {
            $parts = is_string($link) ? parse_url($link) : false;
            if (!is_array($parts) || strtolower($parts['scheme'] ?? '') !== 'https' || !in_array(strtolower($parts['host'] ?? ''), ['t.me', 'telegram.me'], true)) {
                api_error('VALIDATION_ERROR', 'The checking session contains an unsupported link.');
            }
        }
        $allowedMetadata = ['link', 'name', 'visibility', 'status', 'checkedAt'];
        if (array_filter($metadata, static fn (mixed $value): bool => !is_string($value)) !== []
            || array_diff($metadata, $allowedMetadata) !== []) {
            api_error('VALIDATION_ERROR', 'The checking session metadata is invalid.');
        }
        $id = bin2hex(random_bytes(16));
        $now = gmdate('c');
        $statement = app_db()->prepare('INSERT INTO jobs (id, state, created_at, updated_at, links_json, metadata_json) VALUES (?, ?, ?, ?, ?, ?)');
        $statement->execute([
            $id,
            'queued',
            $now,
            $now,
            json_encode(array_values(array_unique($links)), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
            json_encode(array_values(array_unique($metadata)), JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
        ]);
        api_success(['id' => $id, 'state' => 'queued']);
    }

    if (preg_match('~^/api/jobs/([a-f0-9]{32})$~', $path, $jobMatch) && $method === 'GET') {
        $statement = app_db()->prepare('SELECT id, state, created_at, updated_at, links_json, metadata_json FROM jobs WHERE id = ?');
        $statement->execute([$jobMatch[1]]);
        $job = $statement->fetch();
        if (!$job) {
            api_error('NOT_FOUND', 'This checking session was not found.', 404);
        }
        $job['links'] = json_decode($job['links_json'], true, 32, JSON_THROW_ON_ERROR);
        $job['metadata'] = json_decode($job['metadata_json'], true, 32, JSON_THROW_ON_ERROR);
        unset($job['links_json'], $job['metadata_json']);
        $results = app_db()->prepare('SELECT result_json FROM job_results WHERE job_id = ? ORDER BY id');
        $results->execute([$jobMatch[1]]);
        $job['results'] = array_map(
            static fn (array $row): array => json_decode($row['result_json'], true, 32, JSON_THROW_ON_ERROR),
            $results->fetchAll()
        );
        api_success($job);
    }

    if (preg_match('~^/api/jobs/([a-f0-9]{32})/state$~', $path, $jobMatch) && $method === 'POST') {
        $body = request_json();
        $state = $body['state'] ?? null;
        $states = ['queued', 'running', 'paused', 'stopping', 'completed', 'failed', 'cancelled'];
        if (!is_string($state) || !in_array($state, $states, true)) {
            api_error('VALIDATION_ERROR', 'The requested job state is invalid.');
        }
        $db = app_db();
        $db->beginTransaction();
        $check = $db->prepare('SELECT state FROM jobs WHERE id = ?');
        $check->execute([$jobMatch[1]]);
        $previous = $check->fetchColumn();
        if ($previous === false) {
            $db->rollBack();
            api_error('NOT_FOUND', 'This checking session was not found.', 404);
        }
        $transitions = [
            'queued' => ['running', 'cancelled', 'failed'],
            'running' => ['paused', 'stopping', 'completed', 'failed', 'cancelled'],
            'paused' => ['running', 'stopping', 'failed', 'cancelled'],
            'stopping' => ['completed', 'failed', 'cancelled'],
            'completed' => [],
            'failed' => [],
            'cancelled' => [],
        ];
        if ($state !== $previous && !in_array($state, $transitions[$previous] ?? [], true)) {
            $db->rollBack();
            api_error('INVALID_TRANSITION', 'This checking session cannot enter the requested state.', 409);
        }
        $update = $db->prepare('UPDATE jobs SET state = ?, updated_at = ? WHERE id = ?');
        $update->execute([$state, gmdate('c'), $jobMatch[1]]);
        $db->commit();
        api_success(['state' => $state]);
    }

    if (preg_match('~^/api/jobs/([a-f0-9]{32})/results$~', $path, $jobMatch) && $method === 'POST') {
        $body = request_json();
        $result = $body['result'] ?? null;
        $categories = ['VALID', 'EXPIRED', 'REVOKED', 'PRIVATE', 'RESTRICTED', 'USERNAME_NOT_FOUND', 'INVALID_FORMAT', 'UNKNOWN_ERROR'];
        if (!is_array($result) || !is_string($result['link'] ?? null) || !in_array($result['category'] ?? null, $categories, true)) {
            api_error('VALIDATION_ERROR', 'The result record is invalid.');
        }
        $job = app_db()->prepare('SELECT 1 FROM jobs WHERE id = ?');
        $job->execute([$jobMatch[1]]);
        if (!$job->fetchColumn()) {
            api_error('NOT_FOUND', 'This checking session was not found.', 404);
        }
        $insert = app_db()->prepare('INSERT INTO job_results (job_id, result_json) VALUES (?, ?)');
        $insert->execute([
            $jobMatch[1],
            json_encode($result, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_THROW_ON_ERROR),
        ]);
        api_success(['saved' => true]);
    }

    if ($path === '/api/check' && $method === 'POST') {
        $body = request_json();
        $link = $body['link'] ?? null;
        if (!is_string($link) || strlen($link) > 2_048) {
            api_error('VALIDATION_ERROR', 'Provide one Telegram link to check.');
        }
        $parts = parse_url($link);
        if (!is_array($parts) || !in_array(strtolower($parts['host'] ?? ''), ['t.me', 'telegram.me'], true) || strtolower($parts['scheme'] ?? '') !== 'https') {
            api_error('VALIDATION_ERROR', 'Only HTTPS links hosted by t.me or telegram.me can be checked.');
        }
        $safeLink = 'https://' . strtolower($parts['host']) . ($parts['path'] ?? '/');
        if (link_kind($safeLink) === 'public') {
            $db = app_db();
            $db->beginTransaction();
            $rate = $db->query('SELECT last_request FROM check_rate_limit WHERE id = 1')->fetchColumn();
            $now = microtime(true);
            if ($rate !== false && $now - (float) $rate < 0.5) {
                $db->rollBack();
                header('Retry-After: 1');
                api_error('RATE_LIMITED', 'Please wait briefly before checking another public link.', 429);
            }
            $update = $db->prepare('INSERT INTO check_rate_limit (id, last_request) VALUES (1, ?) ON CONFLICT(id) DO UPDATE SET last_request = excluded.last_request');
            $update->execute([$now]);
            $db->commit();
        }
        api_success(check_public_link($safeLink));
    }

    if ($path === '/api/export' && $method === 'POST') {
        $body = request_json();
        $category = $body['category'] ?? null;
        $results = $body['results'] ?? null;
        $filenames = [
            'VALID' => 'working_links.txt',
            'EXPIRED' => 'expired_links.txt',
            'REVOKED' => 'revoked_links.txt',
            'PRIVATE' => 'manual_check_private.txt',
            'RESTRICTED' => 'restricted_links.txt',
            'USERNAME_NOT_FOUND' => 'username_not_found.txt',
            'INVALID_FORMAT' => 'invalid_format.txt',
            'UNKNOWN_ERROR' => 'unknown_errors.txt',
        ];
        if (!is_string($category) || !isset($filenames[$category]) || !is_array($results)) {
            api_error('VALIDATION_ERROR', 'Choose a valid export category and result list.');
        }
        $lines = [];
        foreach ($results as $result) {
            if (is_array($result) && ($result['category'] ?? null) === $category && is_string($result['link'] ?? null)) {
                $parts = parse_url($result['link']);
                if (is_array($parts)
                    && strtolower($parts['scheme'] ?? '') === 'https'
                    && in_array(strtolower($parts['host'] ?? ''), ['t.me', 'telegram.me'], true)
                    && !isset($parts['user'])
                    && !isset($parts['pass'])) {
                    $lines[] = 'https://' . strtolower($parts['host']) . ($parts['path'] ?? '/');
                }
            }
        }
        if ($lines === []) {
            api_error('EMPTY_EXPORT', 'There are no results in this category to export.');
        }
        $filePath = unique_export_path($filenames[$category]);
        if (file_put_contents($filePath, implode(PHP_EOL, array_unique($lines)) . PHP_EOL, LOCK_EX) === false) {
            api_error('EXPORT_ERROR', 'The export could not be created.', 500);
        }
        header('Content-Type: text/plain; charset=utf-8');
        header('Content-Disposition: attachment; filename="' . basename($filePath) . '"');
        header('Content-Length: ' . filesize($filePath));
        header('X-Content-Type-Options: nosniff');
        readfile($filePath);
        exit;
    }

    api_error('NOT_FOUND', 'The requested API endpoint was not found.', 404);
} catch (Throwable $exception) {
    error_log('Application request failed: ' . $exception->getMessage());
    api_error('SERVER_ERROR', 'The request could not be completed. Please try again.', 500);
}
