# Harness Engineering — Slidev

Migration des PDF-Decks `../Harness Engineering v1.pdf` (26 Seiten, Englisch)
nach [Slidev](https://sli.dev/). Eine PDF-Seite = eine Folie, gleiche Reihenfolge.

> Es gibt eine zweite, ausführlichere deutsche Fassung unter
> `../harness-engineering-v2/slidev` (38 Folien, mit ArchUnit-/Cucumber-Code
> und den Harness-Evals).

## Starten

```bash
npm install
npm run dev      # Präsentation auf http://localhost:3030
```

- **Presenter-Modus** (mit Speaker-Notes): http://localhost:3030/presenter/
- **Übersicht**: Taste `o`
- Navigation: Pfeiltasten · `f` Vollbild

## Bauen / Exportieren

```bash
npm run build    # statisches dist/ (SPA)
npm run export   # PDF (playwright-chromium ist installiert)
```

## Struktur

- `slides.md` — das gesamte Deck (Cover + alle Folien inline)
- `components/*.vue` — als HTML/CSS/Vue nachgebaute Diagramme aus dem PDF
  (`Diamonds`, `DomainModelling`, `DomainConsumable`, `ExampleMapping`,
  `HarnessTimeline`, `ImproveTrigger`, `ThankYou`)
- `styles/extra.css` — deck-spezifische Ergänzungen (Diagramm-Primitive,
  Pastell-„soft"-Töne); die Brand-Basis kommt aus `../../theme-codecentric`
- `public/img` — nur echte Raster aus dem PDF (Straßenfoto, Hände, Porträt, QR)

Brand, Rubik-Fonts, Logos und die Layouts (`cover`, `cc`, `section`,
`statement`, `imagecard`) stammen aus dem geteilten Theme
`../../theme-codecentric` (per `theme:` im Headmatter eingebunden) — nicht im
Deck dupliziert. Speaker-Notes (Deutsch, mit Original-PDF-Seitennummer) stehen
als `<!-- ... -->` am Ende jeder Folie.
