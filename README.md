# Linkwell — Telegram Link Checker

A PHP 8.1+ web application for extracting Telegram links, reviewing a deduplicated list, and cautiously checking public Telegram page previews. The interface is responsive, supports ten languages, and keeps scan results and preferences in SQLite.

## Features

- Extracts `t.me` and `telegram.me` links from pasted text or `.txt`, `.csv`, `.log`, and `.md` uploads.
- Normalizes Telegram hostnames, removes duplicates in first-seen order, and supports usernames, message links, invite links, and internal channel links.
- Checks public links sequentially using Telegram's public web preview. It does not consider HTTP 200 alone proof that a destination exists.
- Applies a shared server-side interval between public checks to avoid request bursts.
- Immediately routes private invite and `/c/` links to **PRIVATE** without requesting them in Normal Mode.
- Provides live progress, pause, resume, stop-and-save, result search/filter, and per-category text downloads.
- Saves scan results and language, theme, and metadata preferences in SQLite.
- Supports English, Hindi, Bengali, Russian, Chinese, Japanese, Korean, Spanish, French, and Arabic (RTL).
- Provides a responsive light/dark interface.

## Architecture

- PHP 8.1+ API and HTML entry point (`app/`, `public/`).
- Vanilla JavaScript and CSS frontend (`public/assets/`); no Node build is needed.
- SQLite persistence through PDO SQLite (`data/app.sqlite`).
- PHP cURL performs allowlisted HTTPS checks only against Telegram domains; redirects are not followed.

## Requirements

- PHP 8.1 or newer.
- PHP extensions: `pdo_sqlite`, `curl`, and `mbstring`.
- A network connection from the PHP server to `https://t.me` for public checks.

Check extensions with `php -m`.

## Run locally

From the repository root:

```sh
php -S 127.0.0.1:8000 -t public public/router.php
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000). SQLite storage is initialized on first request. The web process must be able to write to `data/` and `exports/`.

To configure the optional upload/input limit, copy `.env.example` to `.env`, then export its values in the environment that starts PHP. For example, in a POSIX shell:

```sh
set -a
. ./.env
set +a
php -S 127.0.0.1:8000 -t public public/router.php
```

`MAX_UPLOAD_BYTES` defaults to 2,000,000 and is clamped between 1 KiB and 2 MB.

## Normal Mode

Normal Mode needs no Telegram account or API credentials. It classifies invite hashes and `/joinchat/` and `/c/` links as **PRIVATE** without fetching them, and saves those links under `manual_check_private.txt` when exported.

For public pages, the checker inspects Telegram's response status and available preview/title signals. Ambiguous responses remain **UNKNOWN_ERROR**; a successful HTTP status by itself is not reported as proof. Telegram may restrict previews, and public web checks cannot authoritatively verify membership, private links, or all failure states.

## Premium Mode

Premium Mode is shown as unavailable and cannot be started in this PHP-only deployment. The supplied product brief specifies server-side Telethon authentication; Telethon is a Python library and no secure Telethon service or authentication flow is included here. The app does not collect Telegram API credentials or pretend that a Premium check occurred. Enabling Premium requires a separately deployed, authenticated Telethon service with secure server-side OTP/session handling and a documented API contract.

## Data, privacy, and security

- No user account is required. Preferences and scan results are stored locally in the deployment's SQLite database.
- Uploaded file names are never used as filesystem paths. Only text-oriented extensions and bounded files are accepted; uploads are read from PHP's temporary upload storage.
- Checks accept HTTPS Telegram hostnames only and disable redirects to avoid following a Telegram response to an arbitrary destination.
- No arbitrary URL is accepted by the checking API; external HTTP requests are restricted to `t.me` and `telegram.me`.
- HTML preview markup is never rendered in the browser. Titles are stripped, entity-decoded, whitespace-normalized, and length-limited.
- API credentials, Telegram sessions, SQLite data, and generated exports are not part of the source tree; runtime data directories are ignored by Git.
- Deploy behind HTTPS and an appropriate web server. Restrict filesystem permissions for `data/` and `exports/`; protect the deployment with its own access controls if multiple people can reach it, because the app is designed as a single local workspace rather than a multi-tenant service.

## Results and exports

Results use these categories: `VALID`, `EXPIRED`, `REVOKED`, `PRIVATE`, `RESTRICTED`, `USERNAME_NOT_FOUND`, `INVALID_FORMAT`, and `UNKNOWN_ERROR`. Some failure categories can only be reported when Telegram's public response explicitly indicates them; ambiguous cases stay unknown.

The Results view supports category filters and text search. Select categories to download separate `.txt` files. Exports are created under `exports/`; a suffix such as `(1)` is added instead of overwriting an earlier file. Empty categories do not produce files.

## Tests and checks

Run the PHP test suite:

```sh
php tests/run.php
```

Validate the PHP files:

```sh
find app public tests -name '*.php' -print0 | xargs -0 -n1 php -l
```

Check the browser script syntax:

```sh
node --check public/assets/app.js
```

## Deployment

Configure the PHP runtime with the required extensions, serve `public/` as the document root, and route unknown paths through `public/router.php` (or equivalent web-server rewrites). Ensure PHP can write to the repository's `data/` and `exports/` directories. Do not expose the repository root as the document root.

The app uses same-origin API requests and does not require a CORS allowlist or external frontend build. In a production deployment, use HTTPS, PHP's production settings, web-server request/body size limits, backups for SQLite, and explicit access controls appropriate to the deployment.

## Troubleshooting

- **Blank or unavailable page:** confirm the PHP built-in server is running and that `public/` is its document root.
- **Storage error:** ensure the PHP user can create and write `data/` and `exports/`.
- **Public check shows Unknown error:** Telegram may block the host, restrict the preview, rate-limit requests, or return insufficient metadata. The app intentionally does not infer validity from HTTP 200 alone.
- **Upload rejected:** only `.txt`, `.csv`, `.log`, and `.md` files within the configured size limit are accepted.
- **Missing extension:** install/enable `pdo_sqlite`, `curl`, or `mbstring` for the PHP runtime and restart the server.
