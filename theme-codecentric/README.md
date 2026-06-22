# codecentric Slidev Templates

Markenkonforme [Slidev](https://sli.dev/)-Vorlagen im codecentric-Look — als
Startpunkt für eigene Decks. Ein gemeinsames Theme, **zwei Varianten**:

| Variante | Wofür | Charakter |
|----------|-------|-----------|
| **Training** | Wissensvermittlung: Workshops, Talks, technische Themen | viele Folien, inhaltsreich, Code & Diagramme, Agenda, Speaker-Notes |
| **Pitch** | Überzeugen: Angebote, Vertrieb, Management-Decks | wenige Folien, große Aussagen, viel Weißraum, Phasen/Timeline/KPI |

Beide teilen denselben **Brand-Kern** (centric green `#22F4AE`, Rubik-Schrift,
das `//`-Signature-Element, Logo) — Farben/Fonts/Logo werden also nur an *einer*
Stelle gepflegt.

```
.
├── theme/                     # geteiltes Slidev-Theme (Brand + beide Varianten)
│   ├── styles/
│   │   ├── base.css           #   Brand-Kern: Tokens, Rubik, Hintergrund, Logo
│   │   ├── training.css       #   Training-Bausteine (alles unter .cc)
│   │   ├── pitch.css          #   Pitch-Bausteine (.pitch / .cc-*)
│   │   └── index.ts           #   lädt alle drei
│   ├── layouts/
│   │   ├── cover/cc/section/   #   Training-Layouts
│   │   │   topic/statement/imagecard.vue
│   │   └── pitch-cover/pitch/pitch-section.vue   # Pitch-Layouts
│   ├── public/                #   wird unter /theme/ ausgeliefert
│   │   ├── fonts/Rubik-*.ttf
│   │   └── img/logo-{black,white}.{svg,png}
│   └── package.json
└── templates/
    ├── training/              # lauffähiges Training-Starter-Deck
    └── pitch/                 # lauffähiges Pitch-Starter-Deck
```

## Schnellstart

Ein Starter-Deck kopieren, Abhängigkeiten installieren, loslegen:

```bash
cp -R templates/training mein-deck      # oder templates/pitch
cd mein-deck
npm install
npm run dev                             # öffnet http://localhost:3030
```

Bauen / exportieren:

```bash
npm run build       # statische SPA nach dist/
npm run export      # PDF
```

> Die Decks referenzieren das Theme relativ über `theme: ../../theme` im
> Frontmatter. Wenn du ein Deck **aus diesem Repo herauslöst**, passe den
> `theme:`-Pfad an (oder kopiere `theme/` mit) — siehe
> [theme/README.md](theme/README.md).

## Welche Variante nehme ich?

- **Erkläre / lehre ich etwas?** → `templates/training`. Dünne `slides.md` +
  Kapitel in `pages/*.md`, Layouts `cover · cc · section · topic · statement ·
  imagecard`, Bausteine wie Dot-Listen, Karten, Code, Tabellen, Agenda.
- **Überzeuge / verkaufe ich etwas?** → `templates/pitch`. Eine `slides.md`
  inline, Layouts `pitch-cover · pitch · pitch-section`, Bausteine wie
  Phasen-Karten, Lead-Cards, Timeline, KPI-Tabelle, Statement, Testimonials.

Die vollständige Layout- und CSS-Klassen-Referenz steht in
[theme/README.md](theme/README.md).

## Drei harte Regeln (sonst bricht der Build)

1. **Theme-`public/` wird unter `/theme/` ausgeliefert.** Fonts/Logos aus dem
   Theme als `/theme/fonts/…` bzw. `/theme/img/…` referenzieren. Deck-eigene
   Inhaltsbilder bleiben `/img/…` (Deck-`public/`).
2. **`title` ist ein reserviertes Slidev-Frontmatter-Feld** und erreicht ein
   Layout NICHT als Prop. Überschriften-Prop heißt deshalb `headline`; das
   Pitch-Foot-Label heißt `foot`. Auf dem Cover die Überschrift als
   Slot-`<h1>` schreiben.
3. **Theme-Assets in Layouts immer als `:src` (gebunden)**, nie als
   `src="/theme/…"` — sonst scheitert `slidev build` an der Auflösung zur
   Build-Zeit.

## Marke

| Rolle | Name | Hex |
|-------|------|-----|
| Primär/Akzent | centric green | `#22F4AE` |
| Sekundär | code blue | `#00C9EC` |
| | centric mint | `#47D9CB` |
| | yellow | `#F7EA2D` |
| | red | `#FF5A5F` |
| | iris blue | `#007286` |
| Text | black | `#000000` |
| Flächen | white | `#FFFFFF` |

Schrift: **Rubik** (lokal, `provider: none` — keine Google-Fonts-Abhängigkeit).
Signature-Element: Doppel-Schrägstrich `//` in centric green vor Headlines
(max. ein Set pro Folie). Hintergrund weiß, viel Weißraum.
