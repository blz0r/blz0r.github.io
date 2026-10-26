# Defect report template

Use one report per distinct issue. Replace every placeholder with observed evidence.

**Title:** [Action or condition] causes [observable problem]

**Environment:** app version/commit, URL or environment label, browser/device, operating system

**Severity:** [impact and why]  
**Priority:** [business urgency and why]

**Preconditions and data:** dedicated test account, required state and synthetic record identifiers. Do not include passwords, tokens or private customer data.

**Steps to reproduce:**

1. [Starting state]
2. [Action]
3. [Action that exposes the problem]

**Expected result:** [Requirement and visible outcome]

**Actual result:** [What was observed]

**Reproducibility:** [Attempts, occurrences and relevant conditions]

**Evidence:** screenshot, sanitized log, test case/run ID, report link and timestamp/timezone

**Impact or workaround:** [Who is affected, blocked flow and any verified workaround]

**Retest:** fixed version, steps repeated, actual result, regression checks and final status

Do not call a controlled assertion mismatch a product defect: it proves failure handling, not that the demo application is broken.
