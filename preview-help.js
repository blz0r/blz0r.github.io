(() => {
  const source = document.currentScript;
  const app = source?.dataset.allureApp;
  if (location.protocol !== 'file:') {
    if (app) {
      const script = document.createElement('script');
      script.src = app;
      document.head.append(script);
    }
    return;
  }
  document.addEventListener('DOMContentLoaded', () => {
    const notice = document.createElement('section');
    notice.setAttribute('role', 'status');
    notice.style.cssText = 'font:16px/1.7 Arial,sans-serif;background:#f2f5f8;color:#1d2c3b;padding:28px;margin:24px;border:1px solid #ccd6df;border-radius:4px;max-width:850px';
    const heading = document.createElement('h1');
    heading.textContent = app ? 'Open the report through the portfolio launcher' : 'Opening the interactive reports';
    heading.style.cssText = 'font-size:23px;line-height:1.3;margin:0 0 16px';
    const message = document.createElement('p');
    message.textContent = 'In the site folder, double-click Start Portfolio.cmd. It opens the portfolio at a local http:// address, where all four reports can load. Keep the launcher window open while viewing reports.';
    const detail = document.createElement('p');
    detail.textContent = 'Direct file:// links cannot load the report data. No sign-in or internet connection is needed for the saved reports.';
    notice.append(heading, message, detail);
    if (app) {
      document.body.replaceChildren(notice);
    } else {
      document.body.prepend(notice);
    }
  });
})();
