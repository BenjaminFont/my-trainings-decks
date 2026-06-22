# Tools for developing — Slidev

Migration des PDF-Decks `../Tools for developing English - 13.06.pdf` nach Slidev,
im codecentric-Theme (identisch zu `spec-driven-development/` und
`context-engineering/`).

## Starten

```bash
npm install        # einmalig
npm run dev        # http://localhost:3030
npm run export     # verify/Export nach PDF (Playwright-Chromium nötig)
npm run build      # statische SPA nach dist/
```

## Aufbau

- `slides.md` — alle 12 Folien (1 PDF-Seite = 1 Folie, gleiche Reihenfolge).
  Speaker-Notes auf Deutsch mit Original-PDF-Nummer je Folie.
- `layouts/cc.vue` — codecentric-Slide-Layout (`variant: title|center`,
  `class: photo-head`, Footer-Logo via `nologo`).
- `styles/main.css` — codecentric-Theme (Rubik, `//`-Marker, Farben, Tabellen)
  + deck-spezifische Ergänzungen (Link-Listen, Feature-Block, Bild-Wände,
  Modell-Tabelle).
- `public/fonts/` — Rubik (lokal, `provider: none`).
- `public/img/` — Logos (codecentric) sowie aus dem PDF extrahierte Bilder:
  Anime-Banner (Section-Header), Tool-/Modell-Logowände, Claude-Code-Showcase.

## Folien

| # | Folie | Layout |
|---|-------|--------|
| 1 | Tools for developing (Cover) | `variant: title` |
| 2 | 01 // Dictation Tools (Header) | `photo-head` |
| 3 | Dictation Tools (Links) | cc |
| 4 | 02 // Sandboxing (Header) | `photo-head` |
| 5 | Sandboxing (Links) | cc |
| 6 | 03 // Coding Tools (Header) | `photo-head` |
| 7 | Tools – Wie Sand am Meer | cc (Logowand) |
| 8 | Tools – Good features stand out | cc (2-spaltig) |
| 9 | Tools – Show Case Claude Code | `variant: center` |
| 10 | Tools – Welches Modell ?! | cc (Logowand) |
| 11 | Tools – Welches Modell ?! | cc (Tabelle) |
| 12 | Vielen Dank! | `variant: center` |
