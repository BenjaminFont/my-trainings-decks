# Theme `slidev-theme-codecentric`

Geteiltes codecentric-Slidev-Theme mit zwei Varianten. Drei CSS-Schichten,
neun Layouts, eine Marken-Asset-Quelle.

## Architektur — warum eine Variante die andere nicht überschreibt

```
base.css        global   Tokens, Rubik @font-face, weißer Hintergrund, Logo, Goto-Fix
training.css    .cc      alle Trainings-Bausteine sind unter .cc gescoped
pitch.css       .pitch   Basis-Typografie unter .slidev-layout.pitch; Bausteine als .cc-*
```

Der entscheidende Punkt: Die Pitch-Basis-Typografie ist **auf
`.slidev-layout.pitch` gescoped** (nicht global auf `.slidev-layout`). Damit
greift sie nur auf Folien mit einem Pitch-Layout und lässt Trainings-Folien
(`.cc`) unberührt. Beide Varianten liegen daher konfliktfrei in einem Theme;
ein Deck nutzt in der Praxis nur eine.

## Theme einbinden

Im Deck-`slides.md`-Frontmatter:

```yaml
theme: ../../theme        # relativer Pfad zu diesem Verzeichnis
fonts: { sans: Rubik, local: Rubik, provider: none }
```

Löst du ein Deck aus dem Repo heraus, hast du drei Optionen:
1. `theme/` mitkopieren und den relativen Pfad anpassen, oder
2. das Theme als npm-Paket veröffentlichen und per Namen referenzieren, oder
3. das Theme als Git-Submodule einbinden.

## Layouts

### Training

| Layout | Zweck | Props |
|--------|-------|-------|
| `cover` | Titelfolie (Titel unten, grüne Linie) | `secno`, `headline`, `subtitle`, `nologo` — Titel besser als `<h1>`-Slot |
| `cc` | Standard-Inhaltsfolie | `variant` (`center`/`title`), `nologo` |
| `section` | Kapitel-Trenner (großer zentrierter Titel) | `secno`, `headline` (`\n` → `<br>`), `nologo` |
| `topic` | Bild-Header (Titel oben, Vollbild-Bild) | `secno`, `headline`, `image`, `imagePosition`, `nologo` |
| `statement` | großes zentriertes Statement (Text als Slot) | `secno`, `nologo` |
| `imagecard` | Vollbild-Bildkarte | `secno`, `image`, `maxHeight`, `dark`, `nologo` |

Komplexe Inhaltsfolien: `layout: cc` mit Inline `<span class="secno">NN</span>`
+ `<h2 class="slash">…</h2>`.

### Pitch

| Layout | Zweck | Props |
|--------|-------|-------|
| `pitch-cover` | vollflächiges Cover (Slot) | `variant` (`green` Default / `white`), `nologo` |
| `pitch` | Standard-Inhaltsfolie | `foot` (Label unten links), `nologo` |
| `pitch-section` | Sektions-/Statement-Trenner (Slot) | `nologo` |

## CSS-Klassen (Auswahl)

### Training (`.cc`)
- Text: `.big`, `.huge`, `.lead`, `.accent`, `.red`, `.underline-green`, `em.u`
- Listen: `ul.dots` (Pastell-Punkte, auto-Farbwechsel; `.y/.b/.g/.p` erzwingen),
  `ul.plain`, `ol.steps`, `ul.agenda` (mit `.ag-no`/`.ag-ti`/`.pill`)
- Karten: `.cards > .card` (`.y/.b/.g/.p`), `.two-col`
- Code: Fenced Blocks automatisch dunkel; `code.inline`
- Tabellen: Standard-Markdown-Tabellen (grüner Header)
- Sonstiges: `.flow` (Pfeil-Schritte), `.pill` (`green/red/blue`), `.note`,
  `.timing`, `.trainers`, `.em-card` (Example-Mapping)

### Pitch (`.pitch` / `.cc-*`)
- Headline: `.cc-h-slash` (// davor), `.cc-divider`, `.cc-underline`
- Grid: `.cc-grid.cols-1…5`
- Bausteine: `.cc-phase` (`.p1/.p2/.p3`), `.cc-timeline > .step`,
  `.cc-factor` (`.f1…f5`), `.cc-steps`, `.cc-table` (`.total`), `.cc-tile`,
  `.cc-card` (Tints `.tint-*`), `.lead-card` (`.green/.blue`), `.cc-cross`,
  `.qbox`, `.om-tile`, `.cc-bubble`, `.cc-square`
- Folientypen: `.cc-section` (eyebrow + h1 + sub), `.cc-statement` + `.cc-mark`
  (Marker, auch `.blue/.yellow`), `.cc-close` + `.cc-close-card`,
  `.cc-testi-wall > .cc-testi`
- Helfer: `.cc-muted`, `.cc-note`, `.cc-chip`, `.cc-slashes`

## Assets

`public/` wird unter `/theme/` ausgeliefert:
- `public/fonts/Rubik-*.ttf` — 9 Schnitte, von `base.css` eingebunden
- `public/img/logo-{black,white}.{svg,png}` — von den Layouts als `:src`
  referenziert

Logo abschalten: `nologo: true` im Folien-Frontmatter.
