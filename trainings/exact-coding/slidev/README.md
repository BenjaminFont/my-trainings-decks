# EXACT-Coding — Slidev

Migration des PDF-Decks `../EXACT Coding-2.pdf` (19 Seiten) nach
[Slidev](https://sli.dev/). Ein durchgehendes Deck statt einer statischen PDF.

Thema: **Example-guided AI-Collaborative Test-driven Coding (EXACT)** — der Bogen
von Vibe Coding über Example Mapping zu AI-gestütztem TDD, belegt durch ein
kontrolliertes Experiment (659 Läufe, Claude Code CLI).

Es gibt **zwei Sprachvarianten** desselben Decks, die sich Theme, Komponenten,
CSS und Bilder teilen:

- **Englisch** (Original): `slides.md` + `pages/`
- **Deutsch**: `slides-de.md` + `pages-de/` — Inhalte übersetzt, die
  **Überschriften bleiben bewusst englisch** (1:1 wie im Original).

## Starten

```bash
npm install
npm run dev       # Englische Fassung   (http://localhost:3030)
npm run dev:de    # Deutsche Fassung
```

- **Presenter-Modus** (mit Speaker-Notes): `…/presenter/`
- **Übersicht**: Taste `o`
- Navigation: Pfeiltasten · `f` Vollbild · Einzelfolie via `/<n>`

## Bauen / Exportieren

```bash
npm run build     # EN: statisches dist/ (SPA)
npm run export    # EN: PDF -> tiger-teams-lead.pdf
npm run build:de  # DE: statisches dist-de/
npm run export:de # DE: PDF -> slides-de-export.pdf
```

## Struktur

- `slides.md` / `slides-de.md` — Cover (PDF S.1) + bindet die Kapitel via `src:` ein
- `pages/…` bzw. `pages-de/…` — gleiche Kapitelstruktur je Sprache:
  - `00-authors.md` — Autoren (S.2)
  - `01-vibe-coding.md` — Kapitel 01: Vibe Coding (S.3–5)
  - `02-example-mapping.md` — Kapitel 02: Example Mapping (S.6–9)
  - `03-ai-tdd.md` — Kapitel 03: AI TDD inkl. Experiment (S.10–18)
  - `99-working-slot.md` — Working Slot / Foto-Abschluss (S.19)
- `layouts/cc.vue` — codecentric-Slide-Layout (Varianten `title` / `center`)
- `styles/main.css` — geteiltes codecentric-Theme + EXACT-spezifische Ergänzungen
- `components/` — nachgebaute Diagramme (siehe unten)
- `public/fonts`, `public/img` — Rubik-Schrift, Logos, extrahierte Raster

## Nachgebaute Diagramme (HTML/CSS/Vue statt Screenshot)

- `components/PlayDivider.vue` — farbiges, abgerundetes Play-Dreieck + großer
  Titel als Kapitel-Trenner (gelb = Vibe, blau = Example Mapping, grün = AI TDD).
- `components/TrafficLight.vue` — Ampel (RED / GREEN / REFACTOR) der TDD-Folien.
- CSS-only im Theme: Gradient-Spektrum „Vibe vs Handmade" (S.5),
  Example-Mapping-Karten (S.9, nutzt die `em-*`-Klassen), Drei-Achsen-Karten
  (S.15), Metrik-Spalten „What they measured" (S.16), Result-Gewinner-Karten
  und Detail-Spalten (S.17/18).

## Extrahierte Raster (echte Fotos, nicht nachbaubar)

`public/img/`: `author-ferdinand.jpg`, `author-marco.jpg` (Autoren-Fotos mit
grünem Rahmen, S.2), `vibe-tweets.jpg` (Tweet-Screenshot @leojr94, S.4),
`working-slot.jpg` (Story-Map-Foto, S.19). Per `pdfimages -j` in
Originalauflösung aus der PDF gezogen.

## Konventionen pro Folie

```yaml
---
layout: cc
variant: center   # oder title  (weglassen = Standard-Inhaltsfolie)
class: dense       # dichtere Datenfolien (S.9/15/16/17/18); tight-dots für S.8
nologo: true       # Footer-Logo unterdrücken
---
```

Folieninhalt ist bewusst **rohes HTML** mit den Theme-Klassen
(`.slash`, `.dots`, `.cards`, `.flow`, `.pill`, `.big` …). Speaker-Notes auf
Deutsch (Ziel + „Sagen kann man") stehen als `<!-- ... -->` am Ende jeder Folie,
inkl. der jeweiligen Original-PDF-Seitennummer.
