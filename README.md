# Grammatik — German Grammar Trainer

A modular, browser-based study tool for German grammar. No build step, no dependencies — just open `index.html` or push to GitHub Pages.

## Features

- **Module 1 — Articles**: 1,448 German nouns as flashcards with colored bars encoding gender (blue = `der`, pink = `die`, green = `das`). Keyboard navigation, shuffle, and reveal-translation.
- **Module 2 — Cases**: Nominativ, Akkusativ, Dativ, Genitiv. Each case has its own explanation tab with examples, rules, and declension tables (definite articles, indefinite articles, personal pronouns). A practice tab provides ~95 fill-in-the-blank exercises with instant feedback.
- **Bilingual UI**: English (default) and Portuguese, switchable from the top bar. Preference saved in `localStorage`.

## Quick start

Clone and open:

```bash
git clone https://github.com/<your-user>/<this-repo>.git
cd <this-repo>
# Just open index.html in your browser
```

Or serve locally with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Go to **Settings → Pages**.
3. Source: **Deploy from a branch** → `main` → `/ (root)`.
4. Save. Your app will be live at `https://<your-user>.github.io/<repo>/`.

No build step required — everything is static HTML/CSS/JS.

## Project structure

```
.
├── index.html          # Entry point
├── css/
│   └── styles.css      # Editorial Bauhaus styling
├── js/
│   ├── i18n.js         # English + Portuguese translations
│   ├── articles.js     # Articles flashcard module
│   ├── cases.js        # Cases explanation + practice module
│   └── app.js          # Main controller, routing, language toggle
└── data/
    ├── nouns.js        # 1,448 German nouns (const NOUNS)
    └── cases.js        # Cases explanations, tables, exercises
```

## Adding more flashcards

Open `data/nouns.js` and push new entries into the `NOUNS` array:

```js
const NOUNS = [
  // ... existing entries
  { article: "der", noun: "Schreibtisch", en: "desk", pt: "secretária", category: "house" },
];
```

Required fields: `article` (`der` | `die` | `das`), `noun`, `en`, `pt`. Optional: `category`.

## Adding more practice sentences

In `data/cases.js`, append to `CASES_DATA.exercises`:

```js
{
  sentence: "Ich gebe ___ Mann das Buch.",
  answer: "dem",
  case: "dativ",
  hintEn: "to the man (masculine, Dativ)",
  hintPt: "ao homem (masculino, Dativ)"
}
```

The placeholder `___` is where the blank appears. The `case` field accepts `nominativ`, `akkusativ`, `dativ`, `genitiv`, or `pronoun`.

## Building a new module

Each module is a self-contained IIFE returning `{ init(container), destroy() }`. To add one:

1. Create `js/<your-module>.js` exposing `const YourModule = (function(){ ... })();`.
2. Include it in `index.html` after the other modules.
3. Add a card to the home grid in `js/app.js` (`renderHome`) and a route branch (`route()`).
4. Add translation keys to `js/i18n.js` under both `en` and `pt`.

## Keyboard shortcuts (Articles)

| Key            | Action            |
|----------------|-------------------|
| `Space`        | Reveal translation |
| `→`            | Next card          |
| `←`            | Previous card      |

## License

MIT — use it, fork it, study with it.
