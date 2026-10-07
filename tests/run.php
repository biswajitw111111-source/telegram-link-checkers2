<?php
declare(strict_types=1);

require_once __DIR__ . '/../app/bootstrap.php';

$assertions = 0;
$assertSame = static function (mixed $expected, mixed $actual, string $message) use (&$assertions): void {
    $assertions++;
    if ($expected !== $actual) {
        throw new RuntimeException($message . '; expected ' . var_export($expected, true) . ', got ' . var_export($actual, true));
    }
};

$text = "Try https://t.me/DesignNotes and telegram.me/designnotes. Private: t.me/+Invite_123 and t.me/c/123456/78. Ignore https://example.com/t.me/nottelegram";
$links = extract_telegram_links($text);
$assertSame(
    ['https://t.me/designnotes', 'https://t.me/+Invite_123', 'https://t.me/c/123456/78'],
    $links,
    'Extraction normalizes, deduplicates, and preserves first-seen order'
);
$assertSame(['https://t.me/designnotes'], extract_telegram_links('Link: t.me/DesignNotes。'), 'Extraction trims common Unicode punctuation');
$assertSame('private', link_kind('https://t.me/+Invite_123'), 'Invite hashes are private');
$assertSame('private', link_kind('https://t.me/joinchat/Invite_123'), 'Legacy invite links are private');
$assertSame('private', link_kind('https://t.me/c/123456/78'), 'Internal channel links are private');
$assertSame('public', link_kind('https://t.me/DesignNotes/12'), 'Public username links support message IDs');
$assertSame('invalid', link_kind('https://t.me/no'), 'Malformed Telegram paths are rejected');
$assertSame('PRIVATE', check_public_link('https://t.me/+Invite_123')['category'], 'Normal Mode never scrapes private invite links');
$assertSame('INVALID_FORMAT', check_public_link('https://t.me/no')['category'], 'Malformed links are classified without network access');
$assertSame('Safe & sound', clean_title('<b>Safe &amp; sound</b>'), 'Titles are stripped and entities decoded');

set_setting('test-preference', ['mode' => 'light']);
$assertSame(['mode' => 'light'], get_setting('test-preference'), 'SQLite settings persist structured preferences');
$deletePreference = app_db()->prepare('DELETE FROM settings WHERE setting_key = ?');
$deletePreference->execute(['test-preference']);

$filename = 'test-export-' . bin2hex(random_bytes(4)) . '.txt';
$first = unique_export_path($filename);
file_put_contents($first, 'first');
$second = unique_export_path($filename);
$assertSame(pathinfo($first, PATHINFO_FILENAME) . ' (1).' . pathinfo($filename, PATHINFO_EXTENSION), basename($second), 'Export names never overwrite existing files');
unlink($first);
unlink($second);

echo "PHP tests passed ({$assertions} assertions).\n";
