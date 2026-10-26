# BrowserStack run guide

The manual `BrowserStack QA (manual)` workflow runs the existing TypeScript/Cucumber login checks in Chrome on Windows 11. It hosts the synthetic fixture on a disposable GitHub runner and opens a BrowserStack Local tunnel restricted to `127.0.0.1:4173`. It closes the tunnel and fixture after the run. Your personal PC does not run the tunnel.

An active BrowserStack Automate account or eligible trial is required. No account, subscription, or purchase is created by this project. Runs can consume both BrowserStack allowance and private-repository Actions minutes. The workflow does not run on pushes or pull requests.

1. In GitHub repository Settings → Secrets and variables → Actions, add `BROWSERSTACK_USERNAME` and `BROWSERSTACK_ACCESS_KEY` as repository secrets, using the values from your BrowserStack account. Never commit keys or paste them into issues, reports, or chat.
2. Open Actions → BrowserStack QA (manual) → Run workflow.
3. Inspect the job result and download `browserstack-qa-reports`. The Allure HTML and JUnit files must agree with the job outcome.
4. In BrowserStack Automate, find the build named `QA portfolio Actions <run ID>`. Inspect session status, video and logs. A successful connection alone is not a passing test.

The tunnel binary is downloaded from BrowserStack's official Linux download endpoint during the run. Raw tunnel logs stay temporary and are not uploaded, because provider logs may contain account details. Synthetic app test reports are uploaded with seven-day retention.

The existing `npm run test:cloud` also supports an authorized external HTTPS deployment through `CLOUD_BASE_URL`, without tunnel mode. The manual workflow uses its own fixture and explicit tunnel identity.

Status: integration prepared; no cloud test success is claimed until a real run and provider sessions have been verified.

References: [BrowserStack Local flags](https://www.browserstack.com/docs/local-testing/binary-params), [WebdriverIO cloud services](https://webdriver.io/docs/cloudservices), [BrowserStack local testing](https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs/webdriverio/local-testing).
