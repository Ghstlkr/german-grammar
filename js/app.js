// ============================================================
// App controller — routing, language toggle, menu rendering
// ============================================================

window.APP_LANG = localStorage.getItem('gg_lang') || 'en';

const App = (function () {
  let currentModule = null; // 'home' | 'articles' | 'cases'
  let activeInstance = null;

  function el(sel) { return document.querySelector(sel); }

  function setLang(lang) {
    window.APP_LANG = lang;
    localStorage.setItem('gg_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt' : 'en';
    renderShell();
    route(currentModule || 'home');
  }

  function renderShell() {
    const root = el('#root');
    root.innerHTML = `
      <div class="app">
        <header class="topbar">
          <div class="brand" id="brand-link">
            <span class="dot"></span>
            <span>${t('brand')}</span>
            <span class="sub">${t('brandSub')}</span>
          </div>
          <div class="topbar-actions">
            <button class="back-link" id="back-link" style="display:none;">← ${t('back')}</button>
            <button class="lang-toggle" id="lang-toggle" title="Switch language">${t('langToggle')}</button>
          </div>
        </header>
        <main id="view"></main>
        <footer>${t('footer')} · <span style="opacity:0.7;">© ${new Date().getFullYear()}</span></footer>
      </div>
    `;

    el('#lang-toggle').addEventListener('click', () => {
      setLang(window.APP_LANG === 'en' ? 'pt' : 'en');
    });
    el('#brand-link').addEventListener('click', () => route('home'));
    el('#back-link').addEventListener('click', () => route('home'));
  }

  function renderHome() {
    const view = el('#view');
    view.innerHTML = `
      <section class="hero">
        <div class="eyebrow">${t('homeEyebrow')}</div>
        <h1>${t('homeTitle1')}<em>${t('homeTitleEm')}</em>${t('homeTitle2')}</h1>
        <p class="tag">${t('homeTag')}</p>
      </section>

      <div class="module-grid">
        <button class="module-card" data-route="articles">
          <div class="num">${t('moduleNo')} 01</div>
          <h3>${t('mod1Title')}</h3>
          <p>${t('mod1Desc')}</p>
          <div class="meta">${t('mod1Meta')} →</div>
        </button>

        <button class="module-card" data-route="cases">
          <div class="num">${t('moduleNo')} 02</div>
          <h3>${t('mod2Title')}</h3>
          <p>${t('mod2Desc')}</p>
          <div class="meta">${t('mod2Meta')} →</div>
        </button>
      </div>
    `;

    document.querySelectorAll('.module-card[data-route]').forEach(card => {
      card.addEventListener('click', () => route(card.dataset.route));
    });
  }

  function route(target) {
    // Tear down previous module if any
    if (activeInstance && typeof activeInstance.destroy === 'function') {
      activeInstance.destroy();
    }
    activeInstance = null;
    currentModule = target;

    const view = el('#view');
    const back = el('#back-link');
    view.id = 'view';
    view.innerHTML = '';

    if (target === 'home' || !target) {
      back.style.display = 'none';
      renderHome();
      return;
    }

    back.style.display = '';

    if (target === 'articles') {
      activeInstance = ArticlesModule;
      ArticlesModule.init(view);
    } else if (target === 'cases') {
      activeInstance = CasesModule;
      CasesModule.init(view);
    } else {
      renderHome();
    }
  }

  return {
    start() {
      renderShell();
      route('home');
    }
  };
})();

document.addEventListener('DOMContentLoaded', () => App.start());
