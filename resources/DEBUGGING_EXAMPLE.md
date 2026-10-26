# Example: diagnosing a native Android selector failure

This example comes from building this generic template. It is not an employer defect or a claim about a production application.

## Observed failure

The [first Android CI run](https://github.com/blz0r/qa-automation-portfolio/actions/runs/40269534279) booted its emulator, started Appium, and passed the Views navigation scenario. The text-entry scenario stopped with an invalid CSS selector error. Allure reported one passed scenario and one broken scenario.

The automation used `#io.appium.android.apis:id/username_edit`. WebdriverIO interpreted this as a CSS selector. Native Android resource IDs need an explicit native locator strategy.

## Evidence and correction

The always-upload step preserved JUnit, Allure results, Appium logs and a PNG screenshot despite the test failure. The screenshot showed the ApiDemos Alert Dialogs screen. The error identified a locator parsing problem in the test, not a confirmed defect in ApiDemos.

The correction changed the fields to `id=io.appium.android.apis:id/username_edit` and `id=io.appium.android.apis:id/password_edit`. TypeScript checking passed after the change. A new manual run tests that changed commit; rerunning the old workflow attempt alone would still test the old commit.

See [the verification record](VALIDATION.md) for the corrected run's final result. Keep the original failed run separate from passing evidence. The failure demonstrates that diagnostic artifacts are retained; it must not be described as a passing run or a flaky retry.
