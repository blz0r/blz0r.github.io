(() => {
  const tabs = [...document.querySelectorAll('[data-language]')];
  const examples = window.portfolioCodeExamples || {};
  const panel = document.querySelector('#code-panel');
  function selectLanguage(tab, moveFocus = false) {
    const example = examples[tab.dataset.language];
    if (!example) return;
    for (const item of tabs) {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    }
    panel.setAttribute('aria-labelledby', tab.id);
    document.querySelector('#code-example').textContent = example.code;
    document.querySelector('#code-filename').textContent = example.file;
    document.querySelector('#code-stack').textContent = example.stack;
    document.querySelector('#code-caption').textContent = example.caption;
    if (moveFocus) tab.focus();
  }
  for (const tab of tabs) {
    tab.addEventListener('click', () => selectLanguage(tab));
    tab.addEventListener('keydown', event => {
      const current = tabs.indexOf(tab);
      let next;
      if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
      if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectLanguage(tabs[next], true);
    });
  }
  const dialog = document.querySelector('.project-dialog');
  const projects = window.portfolioProjects || [];
  let opener;
  for (const button of document.querySelectorAll('.project-details')) {
    button.hidden = false;
    button.addEventListener('click', () => {
      const project = projects.find(item => item.id === button.dataset.project);
      if (!project) return;
      opener = button;
      for (const key of ['category', 'title', 'summary', 'work', 'context']) {
        document.querySelector(`#dialog-${key}`).textContent = project[key];
      }
      dialog.showModal();
    });
  }
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => opener?.focus());
})();
