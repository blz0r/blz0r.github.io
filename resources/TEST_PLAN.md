# Example test plan and traceability

Scope: synthetic login, dashboard and stateless JSON API. Data is invented. This plan describes the starter's intended coverage; use VALIDATION.md for observed run evidence.

| Requirement | Browser coverage | API coverage |
| --- | --- | --- |
| Valid credentials reveal the demo dashboard | All three language versions | Successful login returns the expected user without a password |
| Invalid credentials show a useful error | All three versions | Wrong credentials return 401 |
| Sign-out returns to a cleared login form | All three versions | Not applicable: fixture does not model server sessions |
| A consumer can read the tasks contract | Task display scenario | Status/body checks; Python also validates JSON Schema |
| Missing input is rejected | Browser form validation is limited | Missing fields return 400 |
| Malformed JSON is rejected | Not applicable | Invalid JSON returns 400 |
| Service readiness and unknown paths are visible | Fixture readiness check | Health 200, missing route 404 |

## Risk notes

- The demo has no database, tokens, role permissions or persistent sessions. Do not infer real authentication security from these tests.
- Only local headless Chrome was verified. Optional cloud/device configurations are not executed coverage.
- A failed browser test should produce an actionable assertion, screenshot and report attachment. A controlled failure was used to verify this path, separate from passing regression results.
- Real applications require separate data/setup, authorization, concurrency, accessibility, performance and recovery decisions.

## Reuse this plan

For each real feature, record the requirement, risk, test data, automated/manual case, target environment, expected outcome, actual result and evidence link. Add edge cases based on the application rather than increasing test count for its own sake. Mark blocked and unexecuted checks honestly.

## Release review

Record the commit, dependency lockfiles, runtime/browser versions, command, exit status and report location. Separate controlled failure-proof runs from regression results. Inspect artifacts before sharing and record known gaps rather than treating a green workflow as proof of complete quality.
