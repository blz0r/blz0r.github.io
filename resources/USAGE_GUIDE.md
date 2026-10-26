# Using and adapting the QA template

## Choose a version

All three versions exercise the same original synthetic login/dashboard and HTTP API. They demonstrate the same core acceptance requirements through different languages and runners. Python includes additional parameterized and unittest-style cases, so test counts differ.

| Version | Main tools | First commands | Guide |
| --- | --- | --- | --- |
| TypeScript / JavaScript | WebdriverIO, Cucumber, Node test runner, TypeScript | `npm ci`, `npm run typecheck`, `npm test` | Root README |
| Java | Selenium, Cucumber, TestNG, REST Assured, Maven | Start `npm run fixture`, then `cd java` and `mvn clean test` | java/README.md |
| Python | Selenium, pytest, Requests, JSON Schema, unittest-style assertions, Ruff | Create a venv, install python/requirements.txt, run `python -m pytest` from python/ | python/README.md |

Use Node.js 24 and Chrome for the shared fixture and primary stack. Java needs a JDK 17+ and Maven 3.8+; Python needs Python 3.12+. Select a supported Node version before installing npm dependencies. Do not solve a version mismatch by disabling the engine check.

## First run

1. Extract the source package into a new project folder. Keep the whole folder structure because Java and Python share `fixtures/`.
2. Follow one version's README and run its default local suite. No BrowserStack account or mobile device is needed for default tests.
3. Inspect the XML/JSON results and generate its Allure HTML report from the root:

```text
npm run report:web
npm run report:java
npm run report:python
```

Run a report command only after the corresponding tests. The Allure CLI is pinned in the npm lockfile. HTML outputs are under `reports/allure-web`, `reports/allure-java` and `reports/allure-python`, each with an `index.html`. Serve a generated directory locally when your browser restricts file-based navigation, for example `python -m http.server 8080 --bind 127.0.0.1 --directory reports/allure-python`.

Keep reports for different stacks separate. Clear old raw results before collecting a fresh run; otherwise Allure can combine multiple runs. Root `npm run clean:reports` clears root reports; Java uses `mvn clean test`. For Python, remove only its generated `reports/allure-results` directory or choose a fresh `--alluredir` before rerunning. Do not remove source or fixture folders.

## Adapt it for another application

1. Write the application's acceptance criteria in `TEST_PLAN.md` before changing selectors.
2. Replace page-object selectors and actions in the chosen version. Prefer stable test IDs or accessible selectors; avoid brittle full XPath paths.
3. Replace the synthetic account with dedicated test accounts supplied through your environment or secret store. Never put production passwords in feature examples, test IDs or parameter names.
4. Update API paths, response contracts and assertions. The demo API is stateless and does not implement production authentication or a database.
5. Test locally, inspect failures and record the actual environment and result. A configured integration is not evidence of a passed run.
6. Review screenshots, logs and reports for private information before sharing them.

### Add a browser scenario

- TypeScript: add a Gherkin scenario under `tests/features`, implement reusable actions under `tests/pages`, then connect steps under `tests/steps`.
- Java: add a feature under `java/src/test/resources`, put selectors/actions in `pages`, and assertions/hooks in `steps`. The TestNG runner drives the Cucumber scenarios.
- Python: add a readable test under `python/tests/test_web.py` or a new test module, reusing page objects and the browser fixture. `tests/test_unittest_style.py` demonstrates older unittest assertion style inside pytest's fixture lifecycle; run it with pytest, not standalone unittest discovery.

Use explicit waits for application state. Keep test isolation and cleanup in hooks/fixtures instead of copying setup into each case. The supplied credentials are public invented demo values only.

### Add an API case

JavaScript uses Node's test runner and HTTP fetch, Java uses REST Assured/TestNG, and Python uses Requests/pytest with JSON Schema validation. Assert status and response meaning; avoid checking only that a response exists. Include invalid input, missing fields and unknown routes alongside successful requests.

## CI workflow

- `local-qa.yml` checks TypeScript and runs JavaScript API plus Cucumber browser tests.
- `cross-language.yml` runs separate Java and Python jobs. Java starts and cleans up the shared fixture; Python owns its fixture automatically.
- Jobs have read-only repository permissions and retain report artifacts even when tests fail. They do not publish the application or invoke cloud/mobile commands.

To use on GitHub, create a repository from these reviewed source files, push a branch, and inspect its Actions results. Web/API, Java and Python jobs have passed in the private showcase repository; see [verified runs](VALIDATION.md). Before using a public repository, decide the license and review artifact visibility. Artifact retention is set to seven days in the examples.

## Optional BrowserStack and Android

The TypeScript config includes guarded examples for an existing BrowserStack account and a local Appium/UiAutomator2 Android setup. See the root README and `.env.example` for the exact variables. BrowserStack remains unrun; the separate hosted Android workflow has passed two scenarios, as recorded in [validation](VALIDATION.md).

For external BrowserStack runs, use a compatible authorized HTTPS target. The separate manual BrowserStack workflow uses a restricted tunnel to the synthetic fixture on its disposable runner; see [BrowserStack setup](BROWSERSTACK_QA.md). Cloud runs can consume provider allowance. The separate [Android workflow](ANDROID_QA.md) runs Appium against the third-party ApiDemos sample on a disposable emulator. These manual workflows can consume private-repository Actions minutes. Local mobile runs still require an expendable test app/device and can reset the sample app.

## Tool coverage and boundaries

| Tool or pattern | Actual example |
| --- | --- |
| Cucumber / Gherkin | TypeScript and Java browser scenarios |
| WebdriverIO / TypeScript | Browser runner, typed page objects and configuration |
| JavaScript / Node test | Local API contract assertions |
| Selenium | Java and Python browser automation |
| TestNG | Java scenario execution and API checks |
| REST Assured | Java HTTP status/body checks |
| Maven / Surefire | Java dependency/build/test lifecycle and XML output |
| pytest / parameterization | Python test lifecycle and data-driven API cases |
| unittest style | Two Python compatibility examples using TestCase assertions |
| Requests / JSON Schema | Python HTTP checks and response-shape validation |
| Ruff / TypeScript compiler | Executed Python lint and TypeScript checks |
| Allure | Per-language results, steps, failure attachments and generated HTML |
| JUnit-format XML | CI-readable results from the runners; this does not mean all suites use the JUnit runner |
| GitHub Actions | Local-only workflow definitions; hosted execution still needs verification |
| npm audit | JavaScript dependency scan; not a Java/Python vulnerability audit |
| BrowserStack / Appium | BrowserStack configured but unrun; two Appium scenarios verified on a hosted Android emulator |

API checks here are functional checks, not a security penetration test. No load, accessibility, cross-browser matrix, production authentication or deployment coverage is claimed. Add those only with a real requirement and an executable example.

## Upgrades and troubleshooting

- Use `npm ci` with the lockfile. The Allure DOMPurify override is a narrow patch for an upstream dependency pin; review it when updating Allure.
- Cucumber 8's TestNG bridge is deprecated for future removal. Keep the tested pins until you deliberately migrate the runner and revalidate reports.
- If Selenium reports a CDP version warning, distinguish standard WebDriver checks from features that actually require CDP. The supplied Java cases use standard WebDriver commands.
- If Chrome cannot start, confirm Chrome is installed and try `CHROME_BINARY`. Check that the environment permits a local browser and loopback networking.
- If the fixture port is occupied, choose a free `FIXTURE_PORT` for the JavaScript fixture and point Java's BASE_URL at it. Python normally chooses an ephemeral port itself.

Official references: [WebdriverIO](https://webdriver.io/docs/gettingstarted/), [Selenium](https://www.selenium.dev/documentation/webdriver/), [Cucumber](https://cucumber.io/docs/), [TestNG](https://testng.org/), [REST Assured](https://rest-assured.io/), [pytest](https://docs.pytest.org/), [Allure](https://allurereport.org/docs/), and [GitHub Actions](https://docs.github.com/en/actions).
