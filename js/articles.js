// ============================================================
// Articles module — flashcards for der/die/das
// Reads global NOUNS (data/nouns.js)
// ============================================================

const ArticlesModule = (function () {
  let deck = [];
  let index = 0;
  let revealed = false;
  let keyHandler = null;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function genderClass(article) {
    const a = article.toLowerCase();
    if (a === 'der') return 'der';
    if (a === 'die') return 'die';
    return 'das';
  }

  function render(container) {
    const card = deck[index];
    const lang = window.APP_LANG || 'en';
    const translation = lang === 'pt' ? card.pt : card.en;

    container.innerHTML = `
      <div class="flash-wrap">
        <div class="flash-header">
          <div>
            <div class="eyebrow" style="font-family:var(--mono);font-size:0.7rem;letter-spacing:0.18em;text-transform:uppercase;color:var(--accent);margin-bottom:0.2rem;">${t('moduleNo')} 01</div>
            <div class="flash-title">${t('flashTitle')}</div>
          </div>
          <div class="flash-counter">
            <span id="card-index">${index + 1}</span>
            <span> ${t('cardOf')} </span>
            <span>${deck.length}</span>
          </div>
        </div>

        <div class="flashcard ${revealed ? 'revealed' : ''}" id="flashcard">
          <div class="bar ${genderClass(card.article)}"></div>
          <div class="category">${card.category || ''}</div>
          <div class="article">${card.article}</div>
          <div class="noun">${card.noun}</div>
          <div class="translation">${translation || ''}</div>
        </div>

        <div class="flash-controls">
          <button class="btn" id="prev-btn">← ${t('prev')}</button>
          <button class="btn primary" id="flip-btn">${revealed ? t('hide') : t('flip')}</button>
          <button class="btn" id="next-btn">${t('next')} →</button>
          <button class="btn ghost" id="shuffle-btn">↻ ${t('shuffle')}</button>
        </div>

        <div class="gender-legend">
          <span><i class="der"></i>${t('legendDer')}</span>
          <span><i class="die"></i>${t('legendDie')}</span>
          <span><i class="das"></i>${t('legendDas')}</span>
        </div>

        <div class="kbd-hint">${t('kbdHint')}</div>
      </div>
    `;

    document.getElementById('prev-btn').addEventListener('click', prev);
    document.getElementById('next-btn').addEventListener('click', next);
    document.getElementById('flip-btn').addEventListener('click', flip);
    document.getElementById('shuffle-btn').addEventListener('click', () => {
      deck = shuffle(deck);
      index = 0;
      revealed = false;
      render(container);
    });
  }

  function transitionTo(container, fn) {
    const card = document.getElementById('flashcard');
    if (!card) { fn(); render(container); return; }
    card.classList.add('fade');
    setTimeout(() => { fn(); render(container); }, 120);
  }

  function next() {
    const container = document.getElementById('view');
    transitionTo(container, () => {
      index = (index + 1) % deck.length;
      revealed = false;
    });
  }

  function prev() {
    const container = document.getElementById('view');
    transitionTo(container, () => {
      index = (index - 1 + deck.length) % deck.length;
      revealed = false;
    });
  }

  function flip() {
    revealed = !revealed;
    const fc = document.getElementById('flashcard');
    const btn = document.getElementById('flip-btn');
    if (!fc) return;
    fc.classList.toggle('revealed', revealed);
    if (btn) btn.textContent = revealed ? t('hide') : t('flip');
  }

  function onKey(e) {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
    if (e.code === 'Space') { e.preventDefault(); flip(); }
    else if (e.code === 'ArrowRight') { next(); }
    else if (e.code === 'ArrowLeft')  { prev(); }
  }

  return {
    init(container) {
      if (typeof NOUNS === 'undefined' || !NOUNS.length) {
        container.innerHTML = '<p>Noun data not loaded.</p>';
        return;
      }
      deck = shuffle(NOUNS);
      index = 0;
      revealed = false;
      render(container);
      keyHandler = onKey;
      document.addEventListener('keydown', keyHandler);
    },
    destroy() {
      if (keyHandler) document.removeEventListener('keydown', keyHandler);
      keyHandler = null;
    }
  };
})();
