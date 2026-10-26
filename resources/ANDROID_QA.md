# Android Appium QA

The Android Appium QA GitHub Actions workflow runs only when manually started from the repository's Actions tab. It provisions a GitHub-hosted Ubuntu Android emulator through the pinned ReactiveCircus emulator action; no BrowserStack account, repository secret, or locally installed Android SDK is used.

## What it checks

The workflow installs Appium 3.8.0 and UiAutomator2 driver 8.7.0 on the runner, then downloads the Appium project's ApiDemos sample app release v6.0.18. It verifies the APK SHA-256 (a9eecf37b26cd084855c530db81c2bb1b91f4c1b095a04f47aa7c20e2791f686) before Appium installs it on an Android API 35 emulator. The two scenarios navigate to the Views examples and enter a name and password in ApiDemos' text-entry dialog, then verify the visible name and password field. The password is masked, so the test does not claim to read back its cleartext value.

ApiDemos is a third-party demonstration app used for Appium training. These checks demonstrate the automation setup; they do not test this template as a production Android app or claim prior employment experience.

## Run it

1. Push the repository to GitHub.
2. Open Actions, select Android Appium QA, and choose Run workflow.
3. When the run finishes, open its android-appium-reports artifact for JUnit XML, Allure results and HTML report, failure screenshots, the Appium server log, and Android logcat/device properties when a failure occurs.

The job has a 35-minute bound, including emulator startup. The Appium readiness probe is limited to 60 seconds; Android boot readiness is bounded at 120 seconds after the emulator action reports readiness. Artifacts are retained for seven days. GitHub-hosted runner availability and usage are subject to the repository owner's GitHub plan and limits.

## Pin maintenance

The APK release version and SHA-256, Appium, UiAutomator2, emulator action commit, Node, Java, and Android API level are explicit in the workflow and runner script. Review upstream releases and re-verify the APK checksum before changing any of these pins.

## Verified run

[Run 40269936589](https://github.com/blz0r/qa-automation-portfolio/actions/runs/40269936589) passed both scenarios on 2026-10-25 (America/Chicago). JUnit and Allure each confirm two passes; report generation and artifact upload passed. The initial selector failure and its screenshot remain separate debugging evidence. See [validation](VALIDATION.md) and [the debugging example](DEBUGGING_EXAMPLE.md).
