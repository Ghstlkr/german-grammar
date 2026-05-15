// ============================================================
// i18n: English (default) and Portuguese
// ============================================================

const I18N = {
  en: {
    // App / Brand
    brand:        "Grammatik",
    brandSub:     "German Trainer",
    footer:       "An open study tool for the German language",

    // Language toggle (shows the OTHER language to switch to)
    langToggle:   "PT",

    // Home
    homeEyebrow:  "Learn German with intent",
    homeTitle1:   "A modular trainer for ",
    homeTitleEm:  "German grammar",
    homeTitle2:   ".",
    homeTag:      "Articles, cases, and practice — built for clarity, not noise. Pick a module to begin.",
    moduleNo:     "Module",

    // Module cards
    mod1Title:    "Articles",
    mod1Desc:     "Drill der / die / das with over 1,400 nouns. Colored bars on each card encode the gender at a glance.",
    mod1Meta:     "1448 nouns · Flashcards",

    mod2Title:    "Cases",
    mod2Desc:     "Nominativ, Akkusativ, Dativ, Genitiv — explained, tabulated, and practiced with fill-in-the-blank sentences.",
    mod2Meta:     "4 cases · Practice mode",

    // Common
    back:         "Back",
    next:         "Next",
    prev:         "Previous",
    flip:         "Reveal",
    hide:         "Hide",
    shuffle:      "Shuffle",
    check:        "Check",
    skip:         "Skip",
    continue:     "Continue",
    showAnswer:   "Show answer",

    // Articles module
    flashTitle:   "Articles drill",
    cardOf:       "of",
    legendDer:    "der · masculine",
    legendDie:    "die · feminine",
    legendDas:    "das · neuter",
    kbdHint:      "Press SPACE to reveal · → next · ← previous",

    // Cases module
    casesTitle:   "The Four Cases",
    casesEyebrow: "Nominativ · Akkusativ · Dativ · Genitiv",
    tabNom:       "Nominativ",
    tabAkk:       "Akkusativ",
    tabDat:       "Dativ",
    tabGen:       "Genitiv",
    tabPractice:  "Practice",
    examplesH:    "Examples",
    rulesH:       "Key rules",
    tableArt:     "Definite articles",
    tableInd:     "Indefinite articles (ein/eine)",
    tablePron:    "Personal pronouns",

    // Practice
    practiceTitle:"Fill in the blank",
    practiceAll:  "All cases",
    correct:      "Correct.",
    incorrect:    "Not quite.",
    correctIs:    "Correct answer:",
    nice:         "Nice work.",
    score:        "Score",
    seen:         "Seen",
    inputPh:      "Type your answer",
    typeHint:     "Press Enter to check",
  },

  pt: {
    brand:        "Gramática",
    brandSub:     "Treinador de Alemão",
    footer:       "Uma ferramenta de estudo aberta para a língua alemã",

    langToggle:   "EN",

    homeEyebrow:  "Aprende alemão com clareza",
    homeTitle1:   "Um treinador modular para ",
    homeTitleEm:  "gramática alemã",
    homeTitle2:   ".",
    homeTag:      "Artigos, casos e prática — feito para ser claro, sem ruído. Escolhe um módulo para começar.",
    moduleNo:     "Módulo",

    mod1Title:    "Artigos",
    mod1Desc:     "Treina der / die / das com mais de 1.400 substantivos. Barras coloridas em cada cartão indicam o género de relance.",
    mod1Meta:     "1448 substantivos · Flashcards",

    mod2Title:    "Casos",
    mod2Desc:     "Nominativ, Akkusativ, Dativ, Genitiv — explicados, tabelados e praticados com frases de preencher.",
    mod2Meta:     "4 casos · Modo prática",

    back:         "Voltar",
    next:         "Próximo",
    prev:         "Anterior",
    flip:         "Revelar",
    hide:         "Ocultar",
    shuffle:      "Baralhar",
    check:        "Verificar",
    skip:         "Saltar",
    continue:     "Continuar",
    showAnswer:   "Mostrar resposta",

    flashTitle:   "Treino de artigos",
    cardOf:       "de",
    legendDer:    "der · masculino",
    legendDie:    "die · feminino",
    legendDas:    "das · neutro",
    kbdHint:      "ESPAÇO para revelar · → seguinte · ← anterior",

    casesTitle:   "Os Quatro Casos",
    casesEyebrow: "Nominativ · Akkusativ · Dativ · Genitiv",
    tabNom:       "Nominativ",
    tabAkk:       "Akkusativ",
    tabDat:       "Dativ",
    tabGen:       "Genitiv",
    tabPractice:  "Prática",
    examplesH:    "Exemplos",
    rulesH:       "Regras principais",
    tableArt:     "Artigos definidos",
    tableInd:     "Artigos indefinidos (ein/eine)",
    tablePron:    "Pronomes pessoais",

    practiceTitle:"Preenche o espaço",
    practiceAll:  "Todos os casos",
    correct:      "Correto.",
    incorrect:    "Não exatamente.",
    correctIs:    "Resposta correta:",
    nice:         "Bom trabalho.",
    score:        "Pontuação",
    seen:         "Vistos",
    inputPh:      "Escreve a tua resposta",
    typeHint:     "Pressiona Enter para verificar",
  }
};

// Resolves a key against current language with fallback to English.
function t(key) {
  const lang = (window.APP_LANG || 'en');
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}
