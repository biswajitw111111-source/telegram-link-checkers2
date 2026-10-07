<?php
declare(strict_types=1);

header("Content-Security-Policy: default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; font-src 'self' data:");
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');
header('X-Frame-Options: DENY');
header('Permissions-Policy: camera=(), microphone=(), geolocation=()');
?><!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f5f7fb">
    <meta name="description" content="A thoughtful, privacy-first way to review public Telegram links.">
    <title>Linkwell — Telegram link checker</title>
    <link rel="stylesheet" href="/assets/style.css">
    <script src="/assets/app.js" defer></script>
</head>
<body>
    <div class="app-shell">
        <aside class="sidebar" id="sidebar">
            <a class="brand" href="/" aria-label="Linkwell home">
                <span class="brand-mark"><span></span><span></span><span></span></span>
                <span class="brand-name">linkwell<span>.</span></span>
            </a>
            <div class="workspace-label" data-i18n="workspace">WORKSPACE</div>
            <nav class="primary-nav" aria-label="Main navigation">
                <button class="nav-item active" data-view="checker"><span class="nav-icon">⌕</span><span data-i18n="checker">Link checker</span></button>
                <button class="nav-item" data-view="history"><span class="nav-icon">◷</span><span data-i18n="history">Scan history</span></button>
            </nav>
            <div class="sidebar-bottom">
                <div class="side-tip">
                    <div class="tip-orb">✳</div>
                    <strong data-i18n="privateByDesign">Private by design</strong>
                    <p data-i18n="privateTip">Your links stay on this server. No Telegram login needed for public checks.</p>
                </div>
                <div class="profile-row">
                    <div class="avatar">L</div>
                    <div><strong>Local workspace</strong><span data-i18n="personalSpace">Personal space</span></div>
                    <span class="profile-dots" aria-hidden="true">···</span>
                </div>
            </div>
        </aside>
        <main class="main-area">
            <header class="topbar">
                <button class="mobile-menu" id="mobile-menu" aria-label="Open navigation">☰</button>
                <div class="breadcrumb"><span data-i18n="workspace">WORKSPACE</span><b>/</b><strong id="breadcrumb-current" data-i18n="checker">Link checker</strong></div>
                <div class="top-actions">
                    <label class="language-label" for="language-select">文</label>
                    <select id="language-select" class="language-select" aria-label="Language">
                        <option value="en">English</option><option value="hi">हिन्दी</option><option value="bn">বাংলা</option><option value="ru">Русский</option><option value="zh">中文</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="es">Español</option><option value="fr">Français</option><option value="ar">العربية</option>
                    </select>
                    <button id="theme-toggle" class="icon-button" aria-label="Toggle theme" title="Toggle theme">◐</button>
                    <button id="settings-open" class="icon-button settings-button" aria-label="Open settings" title="Settings">⚙</button>
                </div>
            </header>
            <div id="view-checker" class="page-content">
                <section class="welcome-row">
                    <div>
                        <div class="eyebrow"><span class="live-dot"></span><span data-i18n="publicCheck">PUBLIC LINK CHECKER</span></div>
                        <h1 data-i18n="welcomeTitle">Know where your links lead.</h1>
                        <p class="welcome-copy" data-i18n="welcomeCopy">A clearer view of your Telegram links. Paste, review, and check public pages in one calm workspace.</p>
                    </div>
                    <div class="welcome-note"><span class="note-spark">✳</span><span data-i18n="noLogin">No Telegram login required</span></div>
                </section>
                <section class="stats-grid" aria-label="Scan statistics">
                    <article class="stat-card"><div class="stat-top"><span data-i18n="totalLinks">Total links</span><span class="stat-symbol blue">↗</span></div><strong id="stat-total">0</strong><small data-i18n="readyToReview">Ready to review</small></article>
                    <article class="stat-card"><div class="stat-top"><span data-i18n="publicValid">Public pages</span><span class="stat-symbol green">✓</span></div><strong id="stat-valid">0</strong><small data-i18n="confirmedMetadata">With page metadata</small></article>
                    <article class="stat-card"><div class="stat-top"><span data-i18n="manualCheck">Manual check</span><span class="stat-symbol amber">↗</span></div><strong id="stat-private">0</strong><small data-i18n="privateLinks">Private links</small></article>
                    <article class="stat-card"><div class="stat-top"><span data-i18n="needsReview">Needs review</span><span class="stat-symbol violet">◷</span></div><strong id="stat-review">0</strong><small data-i18n="notEnoughEvidence">Not enough evidence</small></article>
                </section>
                <section class="workspace-card" id="input-card">
                    <div class="section-heading"><div><span class="step-tag"><span>01</span> <span data-i18n="yourLinks">YOUR LINKS</span></span><h2 data-i18n="addTelegramLinks">Add Telegram links</h2><p data-i18n="pasteOrUpload">Paste text or upload a small text file to get started.</p></div><button id="clear-input" class="text-button" data-i18n="clear">Clear</button></div>
                    <div class="input-grid">
                        <div class="paste-panel">
                            <label for="link-input" class="input-label" data-i18n="pasteText">Paste your text</label>
                            <textarea id="link-input" placeholder="https://t.me/designnotes&#10;https://t.me/+your-private-invite" maxlength="2000000"></textarea>
                            <div class="input-footer"><span id="char-count">0 characters</span><button id="extract-button" class="button button-primary"><span data-i18n="extractLinks">Extract links</span><span aria-hidden="true">→</span></button></div>
                        </div>
                        <div class="upload-panel">
                            <div class="upload-graphic"><span>↑</span></div>
                            <strong data-i18n="dropFile">Drop a file here</strong>
                            <p data-i18n="uploadDescription">or choose from your device</p>
                            <button type="button" id="browse-files" class="button button-secondary" data-i18n="browseFiles">Browse files</button>
                            <input id="file-input" class="visually-hidden" type="file" accept=".txt,.csv,.log,.md,text/plain,text/csv">
                            <small data-i18n="fileLimits">TXT, CSV, LOG, MD · up to 2 MB</small>
                        </div>
                    </div>
                    <div id="input-error" class="inline-alert error-alert" role="alert" hidden></div>
                </section>
                <section id="review-section" class="workspace-card review-card" hidden>
                    <div class="section-heading"><div><span class="step-tag"><span>02</span> <span data-i18n="reviewLinks">REVIEW LINKS</span></span><h2 data-i18n="foundLinks">Your extracted links</h2><p id="extraction-summary"></p></div><button id="reset-links" class="text-button" data-i18n="startOver">Start over</button></div>
                    <div class="review-toolbar"><label class="check-label"><input type="checkbox" id="select-all" checked><span data-i18n="selectAll">Select all</span></label><span id="selected-count"></span><button id="remove-selected" class="text-button" data-i18n="removeSelected">Remove selected</button></div>
                    <div id="link-list" class="link-list"></div>
                    <div class="review-footer"><span class="subtle-note"><span class="note-spark">✳</span> <span data-i18n="privateRouted">Private links are routed to manual review.</span></span><button id="continue-button" class="button button-primary"><span data-i18n="chooseMode">Choose check mode</span><span aria-hidden="true">→</span></button></div>
                </section>
                <section id="mode-section" class="workspace-card mode-card" hidden>
                    <div class="section-heading"><div><span class="step-tag"><span>03</span> <span data-i18n="checkMode">CHECK MODE</span></span><h2 data-i18n="chooseHow">Choose how to check</h2><p data-i18n="modeIntro">Pick the verification method that fits your needs.</p></div></div>
                    <div class="mode-grid">
                        <button class="mode-option selected" id="normal-mode">
                            <span class="mode-icon normal-icon">◎</span><span class="mode-badge" data-i18n="available">AVAILABLE</span><strong data-i18n="normalMode">Normal mode</strong><span data-i18n="normalDescription">Check public Telegram page previews. No account or API credentials needed.</span><span class="mode-foot"><span data-i18n="privacyFirst">Privacy-first</span><span>↗</span></span>
                        </button>
                        <button class="mode-option premium-option" id="premium-mode" disabled aria-describedby="premium-note">
                            <span class="mode-icon premium-icon">✦</span><span class="mode-badge muted-badge" data-i18n="notConfigured">NOT CONFIGURED</span><strong data-i18n="premiumMode">Premium mode</strong><span data-i18n="premiumDescription">Telegram API verification with deeper metadata.</span><span class="mode-foot"><span id="premium-note" data-i18n="premiumUnavailable">Requires a separate Telethon service</span><span>⌁</span></span>
                        </button>
                    </div>
                    <div class="inline-alert info-alert"><span>ⓘ</span><span data-i18n="normalLimitation">Normal checks use Telegram's public web previews. Private links cannot be reliably verified without Telegram authentication.</span></div>
                    <div class="section-heading metadata-heading"><div><span class="step-tag"><span>04</span> <span data-i18n="resultDetails">RESULT DETAILS</span></span><h2 data-i18n="chooseMetadata">Choose result details</h2><p data-i18n="metadataDescription">Select the fields to keep in your result list and exports.</p></div></div>
                    <div id="metadata-options" class="metadata-grid"></div>
                    <div class="metadata-footer"><label class="check-label"><input type="checkbox" id="save-default"><span data-i18n="saveDefault">Save as my default</span></label><div><button id="reset-default-metadata" class="text-button" data-i18n="resetDefault">Reset default</button><button id="back-to-links" class="button button-secondary" data-i18n="back">Back</button><button id="start-check" class="button button-primary"><span data-i18n="startChecking">Start checking</span><span aria-hidden="true">→</span></button></div></div>
                </section>
                <section id="progress-section" class="workspace-card progress-card" aria-live="polite" hidden>
                    <div class="progress-header"><div><span class="step-tag"><span>05</span> <span data-i18n="liveCheck">LIVE CHECK</span></span><h2 id="progress-title" data-i18n="checkingLinks">Checking your links</h2><p id="progress-subtitle" data-i18n="checkingCarefully">Checking public pages carefully and sequentially.</p></div><span id="job-badge" class="status-pill running-pill"><span class="live-dot"></span><span data-i18n="running">Running</span></span></div>
                    <div class="progress-numbers"><strong><span id="progress-count">0</span><small> / <span id="progress-total">0</span></small></strong><span id="progress-percent">0%</span></div>
                    <div class="progress-track"><span id="progress-fill"></span></div>
                    <div class="progress-meta"><span><span data-i18n="currentLink">Current link</span><strong id="current-link">—</strong></span><span><span data-i18n="elapsed">Elapsed</span><strong id="elapsed-time">00:00</strong></span><span><span data-i18n="estimated">Est. remaining</span><strong id="estimated-time">—</strong></span></div>
                    <div class="scan-stats" id="scan-stats"></div>
                    <div id="live-results" class="live-results"></div>
                    <div class="progress-actions"><span id="pause-hint" data-i18n="pauseHint">You can pause at any time. Completed results are saved automatically.</span><div><button id="pause-check" class="button button-secondary" data-i18n="pause">Pause</button><button id="stop-check" class="button button-danger" data-i18n="stopSave">Stop & save</button><button id="resume-check" class="button button-primary" data-i18n="resume" hidden>Resume</button></div></div>
                </section>
                <section id="results-section" class="workspace-card results-card" hidden>
                    <div class="section-heading"><div><span class="step-tag"><span>06</span> <span data-i18n="results">RESULTS</span></span><h2 data-i18n="scanResults">Your scan results</h2><p id="result-summary"></p></div><button id="scan-again" class="button button-secondary" data-i18n="newScan">New scan</button></div>
                    <div id="result-counters" class="result-counters"></div>
                    <div class="results-toolbar"><div class="search-box"><span>⌕</span><label class="visually-hidden" for="result-search" data-i18n="searchLinks">Search links or names</label><input id="result-search" type="search" data-i18n-placeholder="searchLinks" placeholder="Search links or names"></div><select id="result-filter" aria-label="Filter results"></select></div>
                    <div id="results-list" class="results-list"></div>
                    <div class="export-box"><div><strong data-i18n="exportResults">Export results</strong><p data-i18n="exportDescription">Select categories to download as separate text files.</p></div><div id="export-options" class="export-options"></div><button id="export-button" class="button button-primary" data-i18n="downloadSelected">Download selected</button></div>
                </section>
                <div class="page-footer"><span>© 2026 Linkwell</span><span><span class="footer-dot"></span><span data-i18n="footerPrivacy">Your data stays in your local workspace</span></span><span data-i18n="version">VERSION 1.0</span></div>
            </div>
            <div id="view-history" class="page-content history-page" hidden>
                <section class="welcome-row"><div><div class="eyebrow"><span class="live-dot"></span><span data-i18n="yourWorkspace">YOUR WORKSPACE</span></div><h1 data-i18n="historyTitle">Scan history</h1><p class="welcome-copy" data-i18n="historyCopy">Pick up where you left off. Your recent checking sessions live here.</p></div></section>
                <section class="workspace-card"><div id="history-list" class="history-list"></div></section>
            </div>
        </main>
    </div>
    <div id="toast-region" class="toast-region" aria-live="polite" aria-atomic="true"></div>
</body>
</html>
