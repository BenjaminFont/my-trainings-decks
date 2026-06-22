# Talks & Trainings — Slidev Decks

Öffentliche [Slidev](https://sli.dev/) Decks rund um AI-native Engineering
(codecentric). Gebaut + deployt nach GitHub Pages.

**Live:** https://benjaminfont.github.io/my-trainings-decks/

## Aufbau

- `trainings/<thema>/slidev/` · `talks/<thema>/slidev/` — die einzelnen Decks
  (jeweils eigenes Slidev-Projekt mit `package.json`)
- `theme-codecentric/theme` — geteiltes Brand-Theme (Rubik, Farben, Layouts),
  per `theme:`-Headmatter relativ eingebunden
- `scripts/build-pages.mjs` — baut alle Decks mit `--base /my-trainings-decks/<slug>/`
  nach `dist/<slug>/`, erzeugt Landing-Page + `.nojekyll`, patcht absolute
  `/theme/`-Asset-Pfade auf den Base-Pfad
- `.github/workflows/pages.yml` — push auf `main` → build + deploy

## Lokal

Ein Deck entwickeln:

```bash
cd trainings/<thema>/slidev
npm install
npm run dev
```

Alle Decks für Pages bauen:

```bash
node scripts/build-pages.mjs            # → dist/
node scripts/build-pages.mjs <slug>     # nur ein Deck
```

## Neues Deck veröffentlichen

Eintrag in die `DECKS`-Registry in `scripts/build-pages.mjs` aufnehmen
(`slug` / `title` / `group` / `dir`).
