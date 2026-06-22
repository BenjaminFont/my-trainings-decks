# Context-Engineering-Workshop — Slidev

Migration des PDF-Decks aus `../` (`1.pdf` … `45.pdf`) nach [Slidev](https://sli.dev/).
Ein durchgehendes Deck statt 45 einzelner PDF-Seiten — im codecentric-Stil,
identisch zum [SDD-Workshop-Deck](../../spec-driven-development/slidev/).

## Starten

```bash
npm install
npm run dev          # Vollversion (45 Folien) auf http://localhost:3030
npm run dev:no-teams # Kurzfassung ohne Agent Teams (36 Folien)
```

- **Presenter-Modus** (mit Speaker-Notes): http://localhost:3030/presenter/
- **Übersicht**: Taste `o`
- Navigation: Pfeiltasten · `f` Vollbild

## Zwei Varianten

- **`slides.md`** — Vollversion (45 Folien): Foundations → Context Files →
  Subagents → Agent Teams.
- **`slides-no-teams.md`** — Kurzfassung (36 Folien): endet nach dem
  Subagents-Kapitel, ohne Agent Teams. Bindet dieselben `pages/01–03`,
  Komponenten, Bilder und das Theme ein — nur das Cover und der
  „Delegate"-Trenner („Subagents" statt „Subagents / Agent Teams") sind eigen.
  Änderungen an `pages/01–03` wirken auf **beide** Decks.

## Bauen / Exportieren

```bash
npm run build            # Vollversion -> dist/
npm run export           # Vollversion -> tiger-teams-lead.pdf
npm run build:no-teams   # Kurzfassung -> dist-no-teams/
npm run export:no-teams  # Kurzfassung -> slides-no-teams-export.pdf
```

## Struktur

- `slides.md` — Einstieg Vollversion (Cover + Delegate-Trenner) + `src:`-Kapitel
- `slides-no-teams.md` — Einstieg Kurzfassung (endet nach `pages/03-subagents.md`)
- `pages/01-foundations.md` — Kontextgrenzen (Size, Needle/Haystack, Lost in the Middle, Smart Zone, Strategien)
- `pages/02-context-files.md` — Write/Select: CLAUDE.md, Rules, Conditional Rules, Progressive Disclosure
- `pages/03-subagents.md` — Delegate: Subagents (Eigenschaften, Agent-File, Muster)
- `pages/04-agent-teams.md` — Agent-Teams (Features, MCP/Rules je Rolle, Vergleich) — nur Vollversion
- `layouts/cc.vue` — codecentric-Slide-Layout (Varianten `title` / `center`, Footer-Logo)
- `components/Agent.vue`, `components/TeamStar.vue`, `components/ReviewFan.vue` — wiederverwendbare Diagramm-Bausteine
- `styles/main.css` — codecentric-Theme (SDD-Basis + Context-Engineering-Ergänzungen)
- `public/fonts`, `public/img` — Rubik-Schrift, Logos, extrahierte Bilder/Charts

## Konventionen pro Folie

```yaml
---
layout: cc
variant: center   # oder title  (weglassen = Standard-Inhaltsfolie)
nologo: true      # Footer-Logo unterdrücken
class: photo-head # Section-Header mit Foto-Banner
---
```

Folieninhalt ist bewusst **rohes HTML** mit den Theme-Klassen
(`.slash`, `.dots`, `.split-title`, `.pcircle`, `.venn`, `.ctxbar`, `.tag-pill` …),
am Original orientiert. Code-Beispiele sind echte Markdown-Codeblöcke.
Speaker-Notes (deutsch) stehen als `<!-- ... -->` am Ende jeder Folie und
nennen jeweils die Original-PDF-Nummer.

## Bilder

Nicht in CSS reproduzierbare Visuals wurden aus den PDFs extrahiert
(`pdfimages` für eingebettete JPEGs):

| Bild | Quelle | Folie |
|------|--------|-------|
| `prompt-vs-context.jpg` | 2.pdf | Prompt- vs. Context-Engineering (Anthropic) |
| `needle-haystack.jpg` | 4.pdf | contextarena.ai-Chart |
| `subagent-vs-team-arch.jpg` | 43.pdf | Architektur-Vergleich |
| `cover-*.jpg`, `working-slot.jpg` | 9/12/23/27/29.pdf | Kapitel-/Foto-Header |

Alle übrigen Diagramme (Glockenkurve, Smart-Zone-Balken, Pastell-Kreise,
Venn, Agenten-Karten/-Flows, Team-Stern) sind in HTML/CSS/Vue nachgebaut.
