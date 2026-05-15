// ============================================================
// Cases module — Nominativ / Akkusativ / Dativ / Genitiv
// Reads global CASES_DATA (data/cases.js)
//
// CASES_DATA shape:
//   explanations: { nominativ|akkusativ|dativ|genitiv: { en: {...}, pt: {...} } }
//   articleTable / pronounTable / indefiniteTable: { headers: { en, pt }, rows: [[...]] }
//   exercises: [{ sentence, answer, case: "Nominativ"|"Akkusativ"|..., hintEn, hintPt }]
// ============================================================

const CasesModule = (function () {
  const CAP = { nominativ: 'Nominativ', akkusativ: 'Akkusativ', dativ: 'Dativ', genitiv: 'Genitiv' };

  let activeTab = 'nominativ';
  let practiceDeck = [];
  let practiceIndex = 0;
  let practiceFilter = 'all';
  let score = { right: 0, wrong: 0, seen: 0 };
  let answered = false;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function lang() { return window.APP_LANG || 'en'; }

  // ---------- Explanation tab ----------
  function renderExplanation(caseKey) {
    const data = CASES_DATA.explanations[caseKey][lang()];
    return `
      <div class="explain">
        <div>
          <h3>${data.title}</h3>
          <div class="question">${data.questions}</div>
        </div>
        <p class="intro">${data.intro}</p>

        <div class="examples">
          <h4>${t('examplesH')}</h4>
          <ul>
            ${data.examples.map(ex => `
              <li>
                <span class="de">${ex.de}</span>
                <span class="gloss">${ex.gloss}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="rules">
          <h4>${t('rulesH')}</h4>
          <ul>
            ${data.rules.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>

        ${renderTables(caseKey)}
      </div>
    `;
  }

  function renderTable(tableData, title, highlightCase) {
    const headers = tableData.headers[lang()] || tableData.headers.en;
    const rows = tableData.rows;
    return `
      <div class="table-block">
        <h4>${title}</h4>
        <table class="decl">
          <thead>
            <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${rows.map(row => {
              const isHighlighted = highlightCase && row[0] && row[0].toLowerCase() === highlightCase.toLowerCase();
              return `<tr style="${isHighlighted ? 'background:var(--accent-soft);' : ''}">
                ${row.map(cell => `<td>${cell}</td>`).join('')}
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderTables(caseKey) {
    const cd = CASES_DATA;
    const highlight = CAP[caseKey];
    return `
      <div class="tables">
        ${renderTable(cd.articleTable,    t('tableArt'),  highlight)}
        ${renderTable(cd.indefiniteTable, t('tableInd'),  highlight)}
        ${renderTable(cd.pronounTable,    t('tablePron'), null)}
      </div>
    `;
  }

  // ---------- Practice tab ----------
  function buildPracticeDeck() {
    let pool = CASES_DATA.exercises;
    if (practiceFilter !== 'all') {
      pool = pool.filter(ex => ex.case === practiceFilter);
    }
    practiceDeck = shuffle(pool);
    practiceIndex = 0;
    answered = false;
  }

  function renderPractice() {
    if (!practiceDeck.length) buildPracticeDeck();
    if (!practiceDeck.length) {
      return `<div class="practice"><p>No exercises match the filter.</p></div>`;
    }
    const ex = practiceDeck[practiceIndex];
    const hint = lang() === 'pt' ? ex.hintPt : ex.hintEn;
    const sentenceHtml = ex.sentence.replace('___', '<span class="blank">&nbsp;</span>');

    const filters = ['all', 'Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];

    return `
      <div class="practice">
        <div class="practice-filter">
          ${filters.map(k => `
            <button class="chip ${practiceFilter === k ? 'active' : ''}" data-filter="${k}">
              ${k === 'all' ? t('practiceAll') : k}
            </button>
          `).join('')}
        </div>

        <div class="practice-card">
          <div class="practice-meta">
            <span>${t('practiceTitle')}</span>
            <span class="case-tag">${ex.case}</span>
          </div>

          <div class="practice-sentence">${sentenceHtml}</div>
          <div class="practice-hint">${hint}</div>

          <input
            type="text"
            class="practice-input"
            id="practice-input"
            placeholder="${t('inputPh')}"
            autocomplete="off"
            autocapitalize="off"
            spellcheck="false"
          />

          <div class="practice-actions">
            <button class="btn primary" id="check-btn">${t('check')}</button>
            <button class="btn" id="skip-btn">${t('skip')} →</button>
          </div>

          <div class="feedback" id="feedback"></div>

          <div class="score-bar">
            <span><strong id="score-right">${score.right}</strong> ✓ · <strong id="score-wrong">${score.wrong}</strong> ✗</span>
            <span>${t('seen')}: <strong id="score-seen">${score.seen}</strong> / ${practiceDeck.length}</span>
          </div>
        </div>

        <p class="kbd-hint">${t('typeHint')}</p>
      </div>
    `;
  }

  function attachPracticeHandlers() {
    const input = document.getElementById('practice-input');
    const checkBtn = document.getElementById('check-btn');
    const skipBtn = document.getElementById('skip-btn');

    if (input) {
      input.focus();
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (!answered) checkAnswer();
          else advance();
        }
      });
    }
    if (checkBtn) checkBtn.addEventListener('click', () => {
      if (!answered) checkAnswer(); else advance();
    });
    if (skipBtn) skipBtn.addEventListener('click', advance);

    document.querySelectorAll('.chip[data-filter]').forEach(chip => {
      chip.addEventListener('click', () => {
        practiceFilter = chip.dataset.filter;
        score = { right: 0, wrong: 0, seen: 0 };
        buildPracticeDeck();
        renderActiveTab();
      });
    });
  }

  function normalize(s) {
    return (s || '').trim().toLowerCase();
  }

  function checkAnswer() {
    const input = document.getElementById('practice-input');
    const fb = document.getElementById('feedback');
    if (!input || !fb) return;
    const ex = practiceDeck[practiceIndex];
    const userAns = normalize(input.value);
    const correct = normalize(ex.answer);

    answered = true;
    score.seen += 1;

    if (userAns === correct) {
      score.right += 1;
      input.classList.add('correct');
      fb.className = 'feedback show ok';
      fb.innerHTML = `
        <div class="label">${t('correct')}</div>
        <div class="answer">${ex.answer}</div>
      `;
    } else {
      score.wrong += 1;
      input.classList.add('wrong');
      fb.className = 'feedback show bad';
      fb.innerHTML = `
        <div class="label">${t('incorrect')} ${t('correctIs')}</div>
        <div class="answer">${ex.answer}</div>
      `;
    }

    document.getElementById('score-right').textContent = score.right;
    document.getElementById('score-wrong').textContent = score.wrong;
    document.getElementById('score-seen').textContent  = score.seen;

    const checkBtn = document.getElementById('check-btn');
    if (checkBtn) checkBtn.textContent = t('continue') + ' →';
  }

  function advance() {
    practiceIndex = (practiceIndex + 1) % practiceDeck.length;
    answered = false;
    renderActiveTab();
  }

  // ---------- Tab orchestration ----------
  function renderActiveTab() {
    const body = document.getElementById('cases-body');
    if (!body) return;
    if (activeTab === 'practice') {
      body.innerHTML = renderPractice();
      attachPracticeHandlers();
    } else {
      body.innerHTML = renderExplanation(activeTab);
    }
    document.querySelectorAll('.tab').forEach(tabEl => {
      tabEl.classList.toggle('active', tabEl.dataset.tab === activeTab);
    });
  }

  function render(container) {
    container.innerHTML = `
      <div class="cases-header">
        <div class="eyebrow">${t('moduleNo')} 02</div>
        <h2>${t('casesTitle')}</h2>
        <p style="font-family:var(--mono);font-size:0.78rem;letter-spacing:0.14em;color:var(--muted);text-transform:uppercase;margin-top:0.4rem;">
          ${t('casesEyebrow')}
        </p>
      </div>

      <div class="tabs" role="tablist">
        <button class="tab" data-tab="nominativ">${t('tabNom')}</button>
        <button class="tab" data-tab="akkusativ">${t('tabAkk')}</button>
        <button class="tab" data-tab="dativ">${t('tabDat')}</button>
        <button class="tab" data-tab="genitiv">${t('tabGen')}</button>
        <button class="tab" data-tab="practice">${t('tabPractice')}</button>
      </div>

      <div id="cases-body"></div>
    `;

    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        activeTab = tab.dataset.tab;
        renderActiveTab();
      });
    });

    renderActiveTab();
  }

  return {
    init(container) {
      if (typeof CASES_DATA === 'undefined') {
        container.innerHTML = '<p>Cases data not loaded.</p>';
        return;
      }
      activeTab = 'nominativ';
      buildPracticeDeck();
      score = { right: 0, wrong: 0, seen: 0 };
      render(container);
    },
    destroy() {}
  };
})();
