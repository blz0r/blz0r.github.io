/* Original portfolio content. Keep claims tied to the linked verification record. */
window.portfolioCodeExamples = {
  typescript: {
    file: 'tests/steps/login.steps.ts', stack: 'WebdriverIO · Cucumber',
    caption: 'Assert the dashboard is visible and its welcome message matches the requirement.',
    code: `Then('I see the welcome message {string}',
  async (message: string) => {
    await expect(DashboardPage.panel)
      .toBeDisplayed();
    await expect(DashboardPage.welcome)
      .toHaveText(message);
  });`
  },
  javascript: {
    file: 'tests/api/local-api.test.mjs', stack: 'Node test runner · strict assertions',
    caption: 'Check both the status and the response contract using only invented demo data.',
    code: `test('wrong credentials return 401 and no user object',
  async () => {
    const response = await login({
      email: 'learner@example.test',
      password: 'incorrect'
    });
    assert.equal(response.status, 401);
    assert.deepEqual(await response.json(), {
      error: 'Email or password is incorrect'
    });
  });`
  },
  java: {
    file: 'java/src/test/java/example/ApiContractTest.java', stack: 'TestNG · REST Assured · Allure',
    caption: 'Give a test a readable reporting step, then assert the API status and JSON content.',
    code: `@Test public void healthIsReady() {
    Allure.step("Health contract", () ->
        request().get("/health")
            .then().statusCode(200)
            .contentType("application/json")
            .body("status", equalTo("ok")));
}`
  },
  python: {
    file: 'python/tests/test_api.py', stack: 'pytest · Requests · JSON Schema',
    caption: 'Validate the response shape before checking its expected task IDs.',
    code: `def test_tasks_schema(api, base_url):
    response = api.get(
        base_url + "/api/tasks", timeout=5)
    assert response.status_code == 200
    validate(response.json(), TASK_SCHEMA)
    assert [
        task["id"]
        for task in response.json()["tasks"]
    ] == [1, 2]`
  }
};
window.portfolioProjects = [
  {
    id: 'castlehill', category: 'EARLIER QA / CODING TEST', title: 'CastleHillGaming',
    summary: 'A separate Java browser-testing project preserved in a public repository.',
    work: 'The reviewed source includes Maven setup, a Cucumber runner, step definitions, and Selenium browser interactions. It provides earlier context for my work with browser testing.',
    context: 'This is a coding-test project, not the new cross-language framework or an employer production system. Its source was inspected during portfolio preparation; it has not been rerun as part of the current framework verification. The repository is public.'
  },
  {
    id: 'calculator', category: 'PYTHON / FUNDAMENTALS', title: 'A Python calculator',
    summary: 'A small programming project focused on the basics.',
    work: 'The calculator gives me a compact example of Python program structure, handling input, and carrying out arithmetic operations.',
    context: 'The two Python files were matched to the saved local originals during portfolio preparation. The repository is private, so its link requires authorized GitHub access. No new execution result is claimed here.'
  },
  {
    id: 'machine-learning', category: 'COURSEWORK / MODEL EVALUATION', title: 'Machine learning coursework',
    summary: 'Working through prediction and classification problems as part of my studies.',
    work: 'Projects include medical insurance cost regression, online purchase classification, and a CNN for TrashNet image categories. The work explores preparing data, training models, and looking beyond a single overall score to class-level results.',
    context: 'These are learning projects. The portfolio does not claim production deployment or quote model performance figures. They are included to show the range of problems I am studying alongside QA.'
  }
];
