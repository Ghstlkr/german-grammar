// Data for the German Cases module: Nominativ, Akkusativ, Dativ, Genitiv
// Contains: explanations (EN + PT), pronoun & article tables, and ~100 fill-in-the-blank exercises.

const CASES_DATA = {
  // ---------- Explanations ----------
  explanations: {
    nominativ: {
      en: {
        title: "Nominativ — the Subject Case",
        intro: "The Nominativ is the case of the subject of the sentence: the person or thing doing the action. It also follows the verbs sein, werden, and bleiben.",
        questions: "Wer? (Who?) / Was? (What?)",
        examples: [
          { de: "Der Hund schläft.", gloss: "The dog sleeps." },
          { de: "Die Frau liest ein Buch.", gloss: "The woman reads a book." },
          { de: "Das Kind ist müde.", gloss: "The child is tired." },
          { de: "Ich bin Lehrer.", gloss: "I am a teacher. (sein → Nominativ on both sides)" }
        ],
        rules: [
          "The subject of the verb is always in Nominativ.",
          "After sein, werden and bleiben, both nouns are in Nominativ.",
          "Dictionary form of nouns uses the Nominativ article (der/die/das)."
        ]
      },
      pt: {
        title: "Nominativ — o Caso do Sujeito",
        intro: "O Nominativ é o caso do sujeito da frase: a pessoa ou coisa que pratica a ação. Também é usado após os verbos sein (ser), werden (tornar-se) e bleiben (permanecer).",
        questions: "Wer? (Quem?) / Was? (O quê?)",
        examples: [
          { de: "Der Hund schläft.", gloss: "O cachorro dorme." },
          { de: "Die Frau liest ein Buch.", gloss: "A mulher lê um livro." },
          { de: "Das Kind ist müde.", gloss: "A criança está cansada." },
          { de: "Ich bin Lehrer.", gloss: "Eu sou professor. (sein → Nominativ nos dois lados)" }
        ],
        rules: [
          "O sujeito do verbo está sempre no Nominativ.",
          "Após sein, werden e bleiben, ambos os substantivos ficam no Nominativ.",
          "A forma de dicionário dos substantivos usa o artigo Nominativ (der/die/das)."
        ]
      }
    },

    akkusativ: {
      en: {
        title: "Akkusativ — the Direct Object Case",
        intro: "The Akkusativ marks the direct object of the sentence: the thing being acted upon. It also follows certain prepositions.",
        questions: "Wen? (Whom?) / Was? (What?)",
        examples: [
          { de: "Ich sehe den Hund.", gloss: "I see the dog." },
          { de: "Er liest die Zeitung.", gloss: "He reads the newspaper." },
          { de: "Wir kaufen das Auto.", gloss: "We buy the car." },
          { de: "Sie hat einen Bruder.", gloss: "She has a brother." }
        ],
        rules: [
          "Only the masculine article changes visibly: der → den, ein → einen.",
          "die (feminine), das (neuter) and die (plural) stay the same.",
          "Akkusativ-only prepositions: durch, für, gegen, ohne, um, bis, entlang.",
          "Two-way prepositions (an, auf, hinter, in, neben, über, unter, vor, zwischen) take Akkusativ for movement/direction."
        ]
      },
      pt: {
        title: "Akkusativ — o Caso do Objeto Direto",
        intro: "O Akkusativ marca o objeto direto da frase: a coisa que sofre a ação. Também segue certas preposições.",
        questions: "Wen? (Quem?) / Was? (O quê?)",
        examples: [
          { de: "Ich sehe den Hund.", gloss: "Eu vejo o cachorro." },
          { de: "Er liest die Zeitung.", gloss: "Ele lê o jornal." },
          { de: "Wir kaufen das Auto.", gloss: "Compramos o carro." },
          { de: "Sie hat einen Bruder.", gloss: "Ela tem um irmão." }
        ],
        rules: [
          "Apenas o artigo masculino muda visivelmente: der → den, ein → einen.",
          "die (feminino), das (neutro) e die (plural) permanecem iguais.",
          "Preposições que sempre pedem Akkusativ: durch, für, gegen, ohne, um, bis, entlang.",
          "Preposições de duas vias (an, auf, hinter, in, neben, über, unter, vor, zwischen) pedem Akkusativ quando indicam movimento/direção."
        ]
      }
    },

    dativ: {
      en: {
        title: "Dativ — the Indirect Object Case",
        intro: "The Dativ marks the indirect object: usually the person who receives or benefits from the action. Many prepositions and verbs require Dativ.",
        questions: "Wem? (To whom?)",
        examples: [
          { de: "Ich gebe dem Mann das Buch.", gloss: "I give the man the book." },
          { de: "Sie hilft der Frau.", gloss: "She helps the woman." },
          { de: "Wir schenken dem Kind ein Spielzeug.", gloss: "We give the child a toy." },
          { de: "Er fährt mit dem Auto.", gloss: "He drives by car." }
        ],
        rules: [
          "All articles change: der/das → dem, die (f) → der, die (pl) → den + -n on the noun.",
          "Dativ-only prepositions: aus, bei, mit, nach, seit, von, zu, gegenüber.",
          "Two-way prepositions take Dativ for location (no movement).",
          "Dativ verbs include: helfen, danken, gefallen, gehören, antworten, glauben, folgen."
        ]
      },
      pt: {
        title: "Dativ — o Caso do Objeto Indireto",
        intro: "O Dativ marca o objeto indireto: geralmente a pessoa que recebe ou se beneficia da ação. Muitas preposições e verbos exigem Dativ.",
        questions: "Wem? (A quem?)",
        examples: [
          { de: "Ich gebe dem Mann das Buch.", gloss: "Eu dou o livro ao homem." },
          { de: "Sie hilft der Frau.", gloss: "Ela ajuda a mulher." },
          { de: "Wir schenken dem Kind ein Spielzeug.", gloss: "Damos um brinquedo à criança." },
          { de: "Er fährt mit dem Auto.", gloss: "Ele anda de carro." }
        ],
        rules: [
          "Todos os artigos mudam: der/das → dem, die (f) → der, die (pl) → den + -n no substantivo.",
          "Preposições que sempre pedem Dativ: aus, bei, mit, nach, seit, von, zu, gegenüber.",
          "Preposições de duas vias pedem Dativ para localização (sem movimento).",
          "Verbos que pedem Dativ: helfen, danken, gefallen, gehören, antworten, glauben, folgen."
        ]
      }
    },

    genitiv: {
      en: {
        title: "Genitiv — the Possessive Case",
        intro: "The Genitiv shows possession or close relationship. In spoken German it is often replaced by von + Dativ, but it remains essential in writing and after certain prepositions.",
        questions: "Wessen? (Whose?)",
        examples: [
          { de: "Das Auto des Mannes.", gloss: "The man's car." },
          { de: "Die Tasche der Frau.", gloss: "The woman's bag." },
          { de: "Das Spielzeug des Kindes.", gloss: "The child's toy." },
          { de: "Wegen des Wetters bleibe ich zu Hause.", gloss: "Because of the weather, I stay home." }
        ],
        rules: [
          "Masculine & neuter: der/das → des, and the noun gets -(e)s: der Mann → des Mannes.",
          "Feminine: die → der, no ending change on the noun: die Frau → der Frau.",
          "Plural: die → der, no ending change: die Kinder → der Kinder.",
          "Genitiv prepositions: wegen, während, trotz, statt, außerhalb, innerhalb, oberhalb, unterhalb."
        ]
      },
      pt: {
        title: "Genitiv — o Caso Possessivo",
        intro: "O Genitiv indica posse ou relação próxima. Na fala, é frequentemente substituído por von + Dativ, mas continua essencial na escrita e após certas preposições.",
        questions: "Wessen? (De quem?)",
        examples: [
          { de: "Das Auto des Mannes.", gloss: "O carro do homem." },
          { de: "Die Tasche der Frau.", gloss: "A bolsa da mulher." },
          { de: "Das Spielzeug des Kindes.", gloss: "O brinquedo da criança." },
          { de: "Wegen des Wetters bleibe ich zu Hause.", gloss: "Por causa do tempo, fico em casa." }
        ],
        rules: [
          "Masculino e neutro: der/das → des, e o substantivo recebe -(e)s: der Mann → des Mannes.",
          "Feminino: die → der, sem mudança no substantivo: die Frau → der Frau.",
          "Plural: die → der, sem mudança: die Kinder → der Kinder.",
          "Preposições que pedem Genitiv: wegen, während, trotz, statt, außerhalb, innerhalb, oberhalb, unterhalb."
        ]
      }
    }
  },

  // ---------- Article declension table ----------
  articleTable: {
    headers: { en: ["Case", "Masculine", "Feminine", "Neuter", "Plural"],
               pt: ["Caso",  "Masculino", "Feminino", "Neutro", "Plural"] },
    rows: [
      ["Nominativ", "der",  "die", "das", "die"],
      ["Akkusativ", "den",  "die", "das", "die"],
      ["Dativ",     "dem",  "der", "dem", "den"],
      ["Genitiv",   "des",  "der", "des", "der"]
    ]
  },

  // ---------- Personal pronoun declension ----------
  pronounTable: {
    headers: { en: ["Person", "Nominativ", "Akkusativ", "Dativ", "Genitiv (rare)"],
               pt: ["Pessoa",  "Nominativ", "Akkusativ", "Dativ", "Genitiv (raro)"] },
    rows: [
      ["1st sg",  "ich",  "mich", "mir",   "meiner"],
      ["2nd sg",  "du",   "dich", "dir",   "deiner"],
      ["3rd sg m","er",   "ihn",  "ihm",   "seiner"],
      ["3rd sg f","sie",  "sie",  "ihr",   "ihrer"],
      ["3rd sg n","es",   "es",   "ihm",   "seiner"],
      ["1st pl",  "wir",  "uns",  "uns",   "unser"],
      ["2nd pl",  "ihr",  "euch", "euch",  "euer"],
      ["3rd pl",  "sie",  "sie",  "ihnen", "ihrer"],
      ["Formal",  "Sie",  "Sie",  "Ihnen", "Ihrer"]
    ]
  },

  // ---------- Indefinite article declension ----------
  indefiniteTable: {
    headers: { en: ["Case", "Masculine", "Feminine", "Neuter"],
               pt: ["Caso",  "Masculino", "Feminino", "Neutro"] },
    rows: [
      ["Nominativ", "ein",   "eine",  "ein"],
      ["Akkusativ", "einen", "eine",  "ein"],
      ["Dativ",     "einem", "einer", "einem"],
      ["Genitiv",   "eines", "einer", "eines"]
    ]
  },

  // ---------- Fill-in-the-blank exercises ----------
  // Each: sentence with ___ blank, answer (case-sensitive), case label, hint EN + PT.
  exercises: [
    // ===== NOMINATIV =====
    { sentence: "___ Mann liest ein Buch.", answer: "Der", case: "Nominativ", hintEn: "Masculine subject", hintPt: "Sujeito masculino" },
    { sentence: "___ Frau kommt aus Deutschland.", answer: "Die", case: "Nominativ", hintEn: "Feminine subject", hintPt: "Sujeito feminino" },
    { sentence: "___ Kind spielt im Garten.", answer: "Das", case: "Nominativ", hintEn: "Neuter subject", hintPt: "Sujeito neutro" },
    { sentence: "___ Hund bellt laut.", answer: "Der", case: "Nominativ", hintEn: "Masculine subject", hintPt: "Sujeito masculino" },
    { sentence: "___ Sonne scheint hell.", answer: "Die", case: "Nominativ", hintEn: "Feminine subject", hintPt: "Sujeito feminino" },
    { sentence: "___ Auto ist neu.", answer: "Das", case: "Nominativ", hintEn: "Neuter subject", hintPt: "Sujeito neutro" },
    { sentence: "___ Lehrer erklärt die Grammatik.", answer: "Der", case: "Nominativ", hintEn: "Masculine subject", hintPt: "Sujeito masculino" },
    { sentence: "___ Katze schläft auf dem Sofa.", answer: "Die", case: "Nominativ", hintEn: "Feminine subject", hintPt: "Sujeito feminino" },
    { sentence: "___ Brot ist frisch.", answer: "Das", case: "Nominativ", hintEn: "Neuter subject", hintPt: "Sujeito neutro" },
    { sentence: "___ Bus fährt um acht Uhr.", answer: "Der", case: "Nominativ", hintEn: "Masculine subject", hintPt: "Sujeito masculino" },
    { sentence: "___ Blume riecht schön.", answer: "Die", case: "Nominativ", hintEn: "Feminine subject", hintPt: "Sujeito feminino" },
    { sentence: "___ Buch liegt auf dem Tisch.", answer: "Das", case: "Nominativ", hintEn: "Neuter subject", hintPt: "Sujeito neutro" },
    { sentence: "___ Vater arbeitet im Büro.", answer: "Der", case: "Nominativ", hintEn: "Masculine subject", hintPt: "Sujeito masculino" },
    { sentence: "___ Mutter kocht das Essen.", answer: "Die", case: "Nominativ", hintEn: "Feminine subject", hintPt: "Sujeito feminino" },
    { sentence: "___ Mädchen singt ein Lied.", answer: "Das", case: "Nominativ", hintEn: "Neuter subject", hintPt: "Sujeito neutro" },
    { sentence: "Heute ist ___ Wetter schön.", answer: "das", case: "Nominativ", hintEn: "Neuter subject (lowercase, middle of sentence)", hintPt: "Sujeito neutro (minúsculo, no meio da frase)" },
    { sentence: "Dort steht ___ Lehrerin.", answer: "die", case: "Nominativ", hintEn: "Feminine subject", hintPt: "Sujeito feminino" },
    { sentence: "Hier wohnt ___ Onkel von Anna.", answer: "der", case: "Nominativ", hintEn: "Masculine subject", hintPt: "Sujeito masculino" },

    // ===== AKKUSATIV =====
    { sentence: "Ich sehe ___ Mann.", answer: "den", case: "Akkusativ", hintEn: "Masculine direct object", hintPt: "Objeto direto masculino" },
    { sentence: "Er liest ___ Zeitung.", answer: "die", case: "Akkusativ", hintEn: "Feminine direct object", hintPt: "Objeto direto feminino" },
    { sentence: "Wir kaufen ___ Auto.", answer: "das", case: "Akkusativ", hintEn: "Neuter direct object", hintPt: "Objeto direto neutro" },
    { sentence: "Sie hat ___ Bruder.", answer: "einen", case: "Akkusativ", hintEn: "Indefinite, masculine direct object", hintPt: "Indefinido, objeto direto masculino" },
    { sentence: "Wir besuchen ___ Großmutter.", answer: "die", case: "Akkusativ", hintEn: "Feminine direct object", hintPt: "Objeto direto feminino" },
    { sentence: "Ich esse ___ Apfel.", answer: "den", case: "Akkusativ", hintEn: "Masculine direct object", hintPt: "Objeto direto masculino" },
    { sentence: "Er liebt ___ Frau.", answer: "die", case: "Akkusativ", hintEn: "Feminine direct object", hintPt: "Objeto direto feminino" },
    { sentence: "Das Kind trinkt ___ Wasser.", answer: "das", case: "Akkusativ", hintEn: "Neuter direct object", hintPt: "Objeto direto neutro" },
    { sentence: "Sie sucht ___ Schlüssel.", answer: "den", case: "Akkusativ", hintEn: "Masculine direct object", hintPt: "Objeto direto masculino" },
    { sentence: "Ich brauche ___ Hilfe.", answer: "die", case: "Akkusativ", hintEn: "Feminine direct object", hintPt: "Objeto direto feminino" },
    { sentence: "Wir besuchen ___ Museum.", answer: "das", case: "Akkusativ", hintEn: "Neuter direct object", hintPt: "Objeto direto neutro" },
    { sentence: "Ich kaufe ___ Hund.", answer: "einen", case: "Akkusativ", hintEn: "Indefinite masculine", hintPt: "Indefinido masculino" },
    { sentence: "Sie hat ___ Idee.", answer: "eine", case: "Akkusativ", hintEn: "Indefinite feminine", hintPt: "Indefinido feminino" },
    { sentence: "Er bestellt ___ Bier.", answer: "ein", case: "Akkusativ", hintEn: "Indefinite neuter", hintPt: "Indefinido neutro" },
    { sentence: "Wir gehen durch ___ Park.", answer: "den", case: "Akkusativ", hintEn: "durch always takes Akkusativ", hintPt: "durch sempre pede Akkusativ" },
    { sentence: "Das Geschenk ist für ___ Mutter.", answer: "die", case: "Akkusativ", hintEn: "für always takes Akkusativ", hintPt: "für sempre pede Akkusativ" },
    { sentence: "Er kämpft gegen ___ Feind.", answer: "den", case: "Akkusativ", hintEn: "gegen always takes Akkusativ", hintPt: "gegen sempre pede Akkusativ" },
    { sentence: "Sie geht ohne ___ Regenschirm.", answer: "den", case: "Akkusativ", hintEn: "ohne always takes Akkusativ", hintPt: "ohne sempre pede Akkusativ" },
    { sentence: "Wir laufen um ___ See.", answer: "den", case: "Akkusativ", hintEn: "um always takes Akkusativ", hintPt: "um sempre pede Akkusativ" },
    { sentence: "Ich finde ___ Buch interessant.", answer: "das", case: "Akkusativ", hintEn: "Neuter direct object", hintPt: "Objeto direto neutro" },
    { sentence: "Magst du ___ Film?", answer: "den", case: "Akkusativ", hintEn: "Masculine direct object", hintPt: "Objeto direto masculino" },
    { sentence: "Er fragt ___ Frau nach dem Weg.", answer: "die", case: "Akkusativ", hintEn: "Feminine direct object", hintPt: "Objeto direto feminino" },
    { sentence: "Wir lieben ___ Leben.", answer: "das", case: "Akkusativ", hintEn: "Neuter direct object", hintPt: "Objeto direto neutro" },

    // ===== DATIV =====
    { sentence: "Ich gebe ___ Mann das Buch.", answer: "dem", case: "Dativ", hintEn: "Masculine indirect object", hintPt: "Objeto indireto masculino" },
    { sentence: "Sie hilft ___ Frau.", answer: "der", case: "Dativ", hintEn: "Feminine indirect object", hintPt: "Objeto indireto feminino" },
    { sentence: "Wir schenken ___ Kind ein Spielzeug.", answer: "dem", case: "Dativ", hintEn: "Neuter indirect object", hintPt: "Objeto indireto neutro" },
    { sentence: "Das Buch gehört ___ Lehrer.", answer: "dem", case: "Dativ", hintEn: "gehören → Dativ", hintPt: "gehören → Dativ" },
    { sentence: "Er antwortet ___ Frage.", answer: "der", case: "Dativ", hintEn: "antworten → Dativ; feminine", hintPt: "antworten → Dativ; feminino" },
    { sentence: "Ich danke ___ Freund für die Hilfe.", answer: "dem", case: "Dativ", hintEn: "danken → Dativ", hintPt: "danken → Dativ" },
    { sentence: "Das Haus gefällt ___ Frau.", answer: "der", case: "Dativ", hintEn: "gefallen → Dativ", hintPt: "gefallen → Dativ" },
    { sentence: "Wir folgen ___ Wegweiser.", answer: "dem", case: "Dativ", hintEn: "folgen → Dativ", hintPt: "folgen → Dativ" },
    { sentence: "Er kommt aus ___ Stadt.", answer: "der", case: "Dativ", hintEn: "aus always → Dativ; Stadt is feminine", hintPt: "aus sempre → Dativ; Stadt é feminino" },
    { sentence: "Sie wohnt bei ___ Großmutter.", answer: "der", case: "Dativ", hintEn: "bei always → Dativ", hintPt: "bei sempre → Dativ" },
    { sentence: "Wir fahren mit ___ Auto.", answer: "dem", case: "Dativ", hintEn: "mit always → Dativ", hintPt: "mit sempre → Dativ" },
    { sentence: "Nach ___ Essen gehe ich schlafen.", answer: "dem", case: "Dativ", hintEn: "nach always → Dativ", hintPt: "nach sempre → Dativ" },
    { sentence: "Seit ___ Reise bin ich müde.", answer: "der", case: "Dativ", hintEn: "seit always → Dativ", hintPt: "seit sempre → Dativ" },
    { sentence: "Das ist ein Geschenk von ___ Vater.", answer: "dem", case: "Dativ", hintEn: "von always → Dativ", hintPt: "von sempre → Dativ" },
    { sentence: "Wir gehen zu ___ Bahnhof.", answer: "dem", case: "Dativ", hintEn: "zu always → Dativ", hintPt: "zu sempre → Dativ" },
    { sentence: "Sie sitzt gegenüber ___ Mann.", answer: "dem", case: "Dativ", hintEn: "gegenüber → Dativ", hintPt: "gegenüber → Dativ" },
    { sentence: "Ich helfe ___ Mutter beim Kochen.", answer: "der", case: "Dativ", hintEn: "helfen → Dativ", hintPt: "helfen → Dativ" },
    { sentence: "Das Auto steht in ___ Garage.", answer: "der", case: "Dativ", hintEn: "Location (in + Dativ); feminine", hintPt: "Localização (in + Dativ); feminino" },
    { sentence: "Der Hund liegt auf ___ Sofa.", answer: "dem", case: "Dativ", hintEn: "Location (auf + Dativ); neuter", hintPt: "Localização (auf + Dativ); neutro" },
    { sentence: "Das Bild hängt an ___ Wand.", answer: "der", case: "Dativ", hintEn: "Location (an + Dativ); feminine", hintPt: "Localização (an + Dativ); feminino" },
    { sentence: "Die Lampe steht neben ___ Bett.", answer: "dem", case: "Dativ", hintEn: "Location (neben + Dativ); neuter", hintPt: "Localização (neben + Dativ); neutro" },
    { sentence: "Die Tasche liegt unter ___ Stuhl.", answer: "dem", case: "Dativ", hintEn: "Location (unter + Dativ); masculine", hintPt: "Localização (unter + Dativ); masculino" },
    { sentence: "Ich gehöre ___ Klub.", answer: "dem", case: "Dativ", hintEn: "gehören → Dativ", hintPt: "gehören → Dativ" },
    { sentence: "Sie glaubt ___ Mann nicht.", answer: "dem", case: "Dativ", hintEn: "glauben (a pessoa) → Dativ", hintPt: "glauben (à pessoa) → Dativ" },
    { sentence: "Er erzählt ___ Kindern eine Geschichte.", answer: "den", case: "Dativ", hintEn: "Dativ plural: die → den (+ -n)", hintPt: "Dativ plural: die → den (+ -n)" },
    { sentence: "Wir gratulieren ___ Lehrerin.", answer: "der", case: "Dativ", hintEn: "gratulieren → Dativ", hintPt: "gratulieren → Dativ" },

    // ===== GENITIV =====
    { sentence: "Das Auto ___ Mannes ist rot.", answer: "des", case: "Genitiv", hintEn: "Masculine possessor", hintPt: "Possuidor masculino" },
    { sentence: "Die Tasche ___ Frau ist neu.", answer: "der", case: "Genitiv", hintEn: "Feminine possessor", hintPt: "Possuidora feminina" },
    { sentence: "Das Spielzeug ___ Kindes liegt am Boden.", answer: "des", case: "Genitiv", hintEn: "Neuter possessor", hintPt: "Possuidor neutro" },
    { sentence: "Das Haus ___ Lehrers ist groß.", answer: "des", case: "Genitiv", hintEn: "Masculine possessor", hintPt: "Possuidor masculino" },
    { sentence: "Die Farbe ___ Sonne ist gelb.", answer: "der", case: "Genitiv", hintEn: "Feminine possessor", hintPt: "Possuidora feminina" },
    { sentence: "Das Ende ___ Films war traurig.", answer: "des", case: "Genitiv", hintEn: "Masculine possessor (Films = Genitiv form)", hintPt: "Possuidor masculino (Films é a forma Genitiv)" },
    { sentence: "Wegen ___ Wetters bleiben wir zu Hause.", answer: "des", case: "Genitiv", hintEn: "wegen → Genitiv; neuter", hintPt: "wegen → Genitiv; neutro" },
    { sentence: "Während ___ Pause trinken wir Kaffee.", answer: "der", case: "Genitiv", hintEn: "während → Genitiv; feminine", hintPt: "während → Genitiv; feminino" },
    { sentence: "Trotz ___ Regens gehen wir spazieren.", answer: "des", case: "Genitiv", hintEn: "trotz → Genitiv; masculine", hintPt: "trotz → Genitiv; masculino" },
    { sentence: "Statt ___ Buches kaufe ich einen Film.", answer: "des", case: "Genitiv", hintEn: "statt → Genitiv; neuter", hintPt: "statt → Genitiv; neutro" },
    { sentence: "Außerhalb ___ Stadt gibt es Wälder.", answer: "der", case: "Genitiv", hintEn: "außerhalb → Genitiv; feminine", hintPt: "außerhalb → Genitiv; feminino" },
    { sentence: "Innerhalb ___ Hauses ist es warm.", answer: "des", case: "Genitiv", hintEn: "innerhalb → Genitiv; neuter", hintPt: "innerhalb → Genitiv; neutro" },
    { sentence: "Das ist das Buch ___ Lehrerin.", answer: "der", case: "Genitiv", hintEn: "Feminine possessor", hintPt: "Possuidora feminina" },
    { sentence: "Die Meinung ___ Kinder zählt auch.", answer: "der", case: "Genitiv", hintEn: "Plural possessor", hintPt: "Possuidor plural" },
    { sentence: "Der Name ___ Hundes ist Bello.", answer: "des", case: "Genitiv", hintEn: "Masculine possessor", hintPt: "Possuidor masculino" },
    { sentence: "Das Zimmer ___ Mädchens ist klein.", answer: "des", case: "Genitiv", hintEn: "Neuter possessor", hintPt: "Possuidor neutro" },
    { sentence: "Die Tochter ___ Königs heißt Anna.", answer: "des", case: "Genitiv", hintEn: "Masculine possessor", hintPt: "Possuidor masculino" },
    { sentence: "Die Mutter ___ Freundes ist nett.", answer: "des", case: "Genitiv", hintEn: "Masculine possessor", hintPt: "Possuidor masculino" },
    { sentence: "Das Auto ___ Nachbarin steht draußen.", answer: "der", case: "Genitiv", hintEn: "Feminine possessor", hintPt: "Possuidora feminina" },
    { sentence: "Trotz ___ Krankheit arbeitet er weiter.", answer: "der", case: "Genitiv", hintEn: "trotz → Genitiv; feminine", hintPt: "trotz → Genitiv; feminino" },

    // ===== PRONOUN EXERCISES =====
    { sentence: "Ich liebe ___. (you, informal)", answer: "dich", case: "Akkusativ", hintEn: "Personal pronoun, 2nd person singular, Akkusativ", hintPt: "Pronome pessoal, 2ª pessoa singular, Akkusativ" },
    { sentence: "Er sieht ___. (me)", answer: "mich", case: "Akkusativ", hintEn: "Personal pronoun, 1st person singular, Akkusativ", hintPt: "Pronome pessoal, 1ª pessoa singular, Akkusativ" },
    { sentence: "Wir helfen ___. (him)", answer: "ihm", case: "Dativ", hintEn: "helfen → Dativ; er → ihm", hintPt: "helfen → Dativ; er → ihm" },
    { sentence: "Sie gibt ___ das Buch. (me)", answer: "mir", case: "Dativ", hintEn: "Indirect object: ich → mir", hintPt: "Objeto indireto: ich → mir" },
    { sentence: "Kennst du ___? (her)", answer: "sie", case: "Akkusativ", hintEn: "sie (she) stays sie in Akkusativ", hintPt: "sie (ela) permanece sie no Akkusativ" },
    { sentence: "Das Geschenk ist für ___. (you, formal)", answer: "Sie", case: "Akkusativ", hintEn: "Formal Sie stays Sie in Akkusativ", hintPt: "Sie formal permanece Sie no Akkusativ" },
    { sentence: "Ich glaube ___. (him)", answer: "ihm", case: "Dativ", hintEn: "glauben (person) → Dativ; er → ihm", hintPt: "glauben (pessoa) → Dativ; er → ihm" },
    { sentence: "Ohne ___ gehe ich nicht. (you, informal)", answer: "dich", case: "Akkusativ", hintEn: "ohne → Akkusativ; du → dich", hintPt: "ohne → Akkusativ; du → dich" },
    { sentence: "Sie wohnt bei ___. (us)", answer: "uns", case: "Dativ", hintEn: "bei → Dativ; wir → uns", hintPt: "bei → Dativ; wir → uns" },
    { sentence: "Ich danke ___. (you all, informal)", answer: "euch", case: "Dativ", hintEn: "danken → Dativ; ihr → euch", hintPt: "danken → Dativ; ihr → euch" },
    { sentence: "Er hat ___ gesehen. (them)", answer: "sie", case: "Akkusativ", hintEn: "3rd plural sie stays sie in Akkusativ", hintPt: "3ª pessoa plural sie permanece sie no Akkusativ" },
    { sentence: "Wir antworten ___. (you all, informal)", answer: "euch", case: "Dativ", hintEn: "antworten → Dativ; ihr → euch", hintPt: "antworten → Dativ; ihr → euch" },
    { sentence: "Kannst du ___ helfen? (her)", answer: "ihr", case: "Dativ", hintEn: "helfen → Dativ; sie (f) → ihr", hintPt: "helfen → Dativ; sie (f) → ihr" },
    { sentence: "Das Buch gehört ___. (me)", answer: "mir", case: "Dativ", hintEn: "gehören → Dativ; ich → mir", hintPt: "gehören → Dativ; ich → mir" },
    { sentence: "Ich sehe ___. (them)", answer: "sie", case: "Akkusativ", hintEn: "3rd plural Akkusativ = sie", hintPt: "3ª plural Akkusativ = sie" },
    { sentence: "Er lädt ___ ein. (us)", answer: "uns", case: "Akkusativ", hintEn: "wir → uns in Akkusativ", hintPt: "wir → uns no Akkusativ" },
    { sentence: "Sie schreibt ___ einen Brief. (him)", answer: "ihm", case: "Dativ", hintEn: "Indirect object; er → ihm", hintPt: "Objeto indireto; er → ihm" },
    { sentence: "Ohne ___ ist die Party langweilig. (you all)", answer: "euch", case: "Akkusativ", hintEn: "ohne → Akkusativ; ihr → euch", hintPt: "ohne → Akkusativ; ihr → euch" },
    { sentence: "Wir kommen mit ___. (you, formal)", answer: "Ihnen", case: "Dativ", hintEn: "mit → Dativ; Sie formal → Ihnen", hintPt: "mit → Dativ; Sie formal → Ihnen" },
    { sentence: "Ich vermisse ___. (you, informal)", answer: "dich", case: "Akkusativ", hintEn: "du → dich in Akkusativ", hintPt: "du → dich no Akkusativ" }
  ]
};

if (typeof module !== 'undefined') module.exports = CASES_DATA;
