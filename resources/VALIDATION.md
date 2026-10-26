# Verification record

Verified locally on Windows on 2026-10-25 (America/Chicago), using the synthetic fixture only.

| Stack/check | Result |
| --- | --- |
| TypeScript compiler | Passed |
| JavaScript API tests | 7 passed |
| TypeScript Cucumber browser scenarios | 3 passed, 14 steps |
| Java TestNG / Cucumber / REST Assured | 10 passed |
| Python pytest / Selenium / Requests / unittest examples | 14 passed |
| Python Ruff checks | Passed |
| Allure HTML generation | Passed for TypeScript (3), Java (10), Python (14) |
| npm dependency audit | 0 reported vulnerabilities at verification time; Node dependency scope only |

Controlled failing browser checks verified screenshot creation and Allure attachments in all three browser stacks. Those deliberate failures were kept separate from the final passing report results. Allure summaries showed no retries or flaky results.

Local tools included Node 24.22.1, Python 3.12.1, Java 18, Maven 3.8.4, and Chrome 156. The CI configuration selects Java 17.

## GitHub-hosted verification

The private repository `blz0r/qa-automation-portfolio` ran commit `519ab6b7a810ddc397ae7759ee8dc79ab458dc10` on GitHub-hosted Ubuntu runners on 2026-10-25 (America/Chicago).

- [Web and API run](https://github.com/blz0r/qa-automation-portfolio/actions/runs/40269483985): passed, including TypeScript checking, 7 JavaScript API tests, 3 Cucumber browser scenarios, HTML generation and artifact upload.
- [Java and Python run](https://github.com/blz0r/qa-automation-portfolio/actions/runs/40269484020): both jobs passed. Java reported 10 tests with no failures/errors/skips; Python reported 14 passed. Both generated Allure HTML and uploaded artifacts.

Downloaded artifacts passed ZIP integrity checks. Allure summaries reported 3/3 web, 10/10 Java and 14/14 Python passes. Artifact SHA-256 hashes matched GitHub's published digests. The Java Cucumber and API counts are subsets of its 10 tests, not extra tests to add again. GitHub report artifacts have seven-day retention; downloaded copies are retained separately with the portfolio evidence.

The Java example pins its working Cucumber/TestNG integration. Cucumber 8 deprecates that runner for future removal; review migration guidance when upgrading. Selenium emitted a nearest-CDP-version warning with Chrome 156; the standard WebDriver checks passed, and no CDP-specific coverage is claimed.

The [Android Appium run](https://github.com/blz0r/qa-automation-portfolio/actions/runs/40269936589) passed on commit `f1cd356d19871bb689e239b90b2d90f426457dd3`. It ran Appium 3.8.0 and UiAutomator2 8.7.0 against the pinned ApiDemos sample on an Android API 35 emulator. JUnit and Allure both confirm **2 tests passed**, with no failures/errors/skips. HTML generation and artifact upload passed. Its downloaded artifact passed ZIP integrity and matched GitHub's SHA-256 digest.

The first Android run found a native selector error and preserved a failure screenshot plus Allure attachment. That failure is retained separately; the corrected run uses explicit Android resource IDs. See [the debugging example](DEBUGGING_EXAMPLE.md). The passing rerun is a new run of the fixed commit, not a hidden retry or a passing result assigned to the initial failure.

BrowserStack is configured but was not executed, per the owner's choice to avoid creating an account. Default-cloud and tunnel-target guard checks passed locally; provider connectivity remains unverified. Security, load, accessibility, production environments, and additional browsers were not validated.

This is a newly written generic demonstration, not a claim that these exact tests or results were used at a previous employer. See [portfolio context](PORTFOLIO_CONTEXT.md).
