# Shamsul Khan — QA portfolio

A static, QA-first portfolio built with HTML, CSS and JavaScript. No package installation or build is required. Includes readable guides and four saved interactive Allure reports. The starter ZIP is withheld from this public repository pending separate approval.

## Preview

**Windows:** double-click `Start Portfolio.cmd`. The launcher opens your default browser at a local HTTP address. Keep its window open while using reports; Ctrl+C stops it. Python 3 is already installed on this PC.

From this directory, run `python -m http.server 8768 --bind 127.0.0.1`, then open `http://127.0.0.1:8768/`. Use an HTTP server: Allure reports load saved data through browser requests. Stop the server with Ctrl+C.

## Contents

- `index.html`, `qa.css`: structure and responsive design.
- `projects.js`: code excerpts and project notes.
- `script.js`: keyboard-accessible language tabs and project dialogs.
- The QA starter ZIP is available in the local review package; its public upload is pending approval.
- `assets/android-failure.png`: ApiDemos diagnostic screenshot.
- `resources/`: formatted guides and matching Markdown originals.
- `reports/web`, `reports/java`, `reports/python`, `reports/android`: saved Allure HTML and supporting files. Keep each directory intact.
- `.nojekyll`: preserves static assets on GitHub Pages.

## Verified scope

Hosted evidence: 7 JavaScript API checks plus 3 TypeScript browser scenarios, 10 Java tests, 14 Python tests, and 2 corrected Android/Appium scenarios. Language versions overlap; counts are not distinct requirement or production-coverage totals. Web Allure contains browser scenarios; JavaScript API results are in JUnit in the original CI artifacts.

BrowserStack is configured but unrun. Android uses Appium's third-party ApiDemos sample on a GitHub-hosted emulator. The main browser/API app and data are synthetic. No employer source, credentials or employer reports are included. Historical projects are identified separately and are not claimed to have been rerun.

JavaScript syntax checks passed. Browser checks covered language tabs including arrow keys, dialogs including Escape/focus restoration, expandable workflow notes, and four report pages. Desktop and 390-pixel phone layouts were inspected; no page-wide phone overflow was found. The results table scrolls within its container. Local links and anchors were checked. This is not a complete accessibility audit.

## GitHub Pages preparation

This is the source for https://blz0r.github.io/. GitHub Pages is configured from the main branch root, preserving every report folder and `.nojekyll`. Relative URLs support project Pages paths. Branch-based Pages supports the root or `/docs`, not `/site`.

Source and CI links currently point to a private repository and require authorized GitHub access. Saved reports work locally; the public starter download is not included. Decide repository visibility and distribution terms before public deployment. Allure is third-party software credited in its report footer; ApiDemos and testing libraries remain their authors' work.
