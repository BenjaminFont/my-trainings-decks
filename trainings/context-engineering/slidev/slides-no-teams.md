---
theme: ../../../theme-codecentric/theme
title: Context Engineering (ohne Agent Teams)
titleTemplate: '%s'
canvasWidth: 1280
aspectRatio: 16/9
fonts:
  sans: Rubik
  local: Rubik
  provider: none
layout: cover
nologo: true
class: ''
mdc: true
---

<h1>Context Engineering</h1>

<!--
Cover des Decks „Context Engineering" — Kurzfassung OHNE Agent Teams.
Diese Variante endet nach dem Kapitel „Subagents". Inhaltlich identisch zur
Vollversion (slides.md), nur ohne das Agent-Teams-Kapitel; sie teilt sich
dieselben pages/, components/, public/ und styles/.
Worum es geht: Nicht mehr Kontext ist besser, sondern der richtige Kontext zur richtigen Zeit. Der Bogen reicht von den Grenzen großer Kontextfenster über Kontext-Dateien (CLAUDE.md, Rules, Docs, Workflows) bis zur Delegation an Subagents.
Navigation: Pfeiltasten · F Vollbild · O Übersicht · Presenter-Modus für die Notes.
-->

---
src: ./pages/01-foundations.md
---

---
src: ./pages/02-context-files.md
---

---
layout: section
headline: "Delegate:\nSubagents"
nologo: true
---

<!--
Abschnitts-Trenner zur vierten Strategie: Delegate (Kurzfassung — nur Subagents).
Ziel: Überleitung vom Kontext-in-Dateien zum Kontext-auf-mehrere-Agenten. Statt einen Agenten mit allem zu überladen, verteilen wir Arbeit auf Subagents — jeder mit eigenem, frischem Kontextfenster.
Sagen kann man: Die ersten drei Strategien halten EIN Kontextfenster sauber. Delegate vervielfacht die Fenster: Jeder Helfer denkt in seinem eigenen Slot und gibt nur das Ergebnis zurück.
-->

---
src: ./pages/03-subagents.md
---

---
src: ./pages/05-working-slot-delegate.md
---
