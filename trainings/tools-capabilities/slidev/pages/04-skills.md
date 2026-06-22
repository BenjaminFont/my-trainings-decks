---
layout: topic
headline: "Customization: SKILLS"
image: /img/dartboard.jpg
---

<!--
Original-PDF 12 — Section-Divider zur dritten Schicht „Customization".
Ziel: Den Sprung von „generische Erweiterung" (MCP) zu „auf uns zugeschnitten" (Skills) markieren.
Was du sagen kannst: „MCP gibt Claude neue Fähigkeiten. Skills bringen Claude bei, wie WIR arbeiten — unsere Scripts, unsere Konventionen, unsere wiederkehrenden Abläufe. Das ist die Zielscheibe: Treffsicherheit für den eigenen Kontext."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">SKILLS</h2>

<ul class="dots">
  <li><strong>Context on demand</strong> — Markdown-Dateien werden nur geladen, wenn sie gebraucht werden</li>
  <li><strong>Two triggers</strong> — per Slash-Command durch den User (<code class="inline">/deploy</code>) oder automatisch durch Claude je nach Aufgabe</li>
  <li><strong>Customizable</strong> — eigene Scripts, CLIs und Projekt-Konventionen für Claude zugänglich machen</li>
  <li><strong>It's a standard</strong> — Gemini, Codex, OpenCode nutzen alle Skills</li>
</ul>

<!--
Original-PDF 13 — Was Skills ausmacht.
Ziel: Die vier Kernideen von Skills vermitteln.
Was du sagen kannst:
• Context on demand: Eine Skill ist im Kern eine Markdown-Datei. Sie liegt nur als kurze Beschreibung im Kontext und wird erst vollständig geladen, wenn sie relevant ist — das schont den Context-Window.
• Two triggers: Entweder ruft der User sie aktiv per /command auf, oder Claude erkennt selbst, dass die Skill zur Aufgabe passt.
• Customizable: Genau hier bringen wir unsere eigenen Scripts, CLIs und Konventionen ein.
• It's a standard: Skills sind kein Claude-Sonderweg — andere Coding-Agents nutzen dasselbe Format.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">SKILLS</h2>

<p class="body"><code class="inline">./.claude/skills/&lt;skill-name&gt;/SKILL.md</code></p>

<ul class="plain" style="font-size:0.66em; line-height:1.45; margin-top:0.6em">
  <li><strong><code class="inline">name</code></strong> — Anzeigename (Default: Ordnername). Nur Kleinbuchstaben, Zahlen, Bindestriche.</li>
  <li><strong><code class="inline">description</code></strong> — sagt Claude UND dem User, wann die Skill passt</li>
  <li><strong><code class="inline">allowed-tools</code></strong> — Tools, die die Skill OHNE Nachfrage nutzen darf (z. B. <code class="inline">Read</code>, <code class="inline">Bash(git:*)</code>)</li>
  <li><strong><code class="inline">model</code></strong> — Modell-Override (opus, sonnet, haiku)</li>
  <li><strong><code class="inline">context</code></strong> — <code class="inline">fork</code> = Skill läuft als isolierter Sub-Agent</li>
  <li><strong><code class="inline">agent</code></strong> — Sub-Agent-Typ bei <code class="inline">context: fork</code> (Explore, Plan oder Custom aus <code class="inline">.claude/agents/</code>)</li>
  <li><strong><code class="inline">user-invocable</code></strong> — <code class="inline">false</code> = User kann NICHT per <code class="inline">/name</code> aufrufen, nur Auto-Trigger</li>
  <li><strong><code class="inline">disable-model-invocation</code></strong> — <code class="inline">true</code> = Claude kann NICHT auto-triggern, nur per <code class="inline">/name</code></li>
  <li><strong><code class="inline">argument-hint</code></strong> — Autocomplete-Hinweis (z. B. <code class="inline">[issue-number]</code>)</li>
  <li><strong><code class="inline">hooks</code></strong> — Lifecycle-Hooks (alle 17 Events: SessionStart, PreToolUse, Stop, …)</li>
</ul>

<!--
Original-PDF 14 — Der Aufbau einer SKILL.md.
Ziel: Die Felder im Frontmatter durchgehen, damit die Teilnehmer eine Skill lesen und schreiben können.
Was du sagen kannst: „Jede Skill ist ein Ordner unter .claude/skills/ mit einer SKILL.md. Oben im YAML-Frontmatter steuern diese Felder das Verhalten." Nicht jedes Feld einzeln vorlesen — die zwei wichtigsten betonen: description (entscheidet, ob die Skill überhaupt gefunden/getriggert wird) und allowed-tools (Sicherheit/Reibung). Der Rest ist Feintuning.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">SKILLS — Progressive Disclosure</h2>

<div class="code-cap">Eine einfache SKILL.md</div>

````md {*}{lines:true}
---
name: pdf-processing
description: Extracts text and tables from PDF files, fills forms,
  and merges documents. Use when working with PDF files or when the
  user mentions PDFs, forms, or document extraction.
---

# PDF Processing

## Quick start

Extract text with pdfplumber:

    import pdfplumber
    with pdfplumber.open("file.pdf") as pdf:
        text = pdf.pages[0].extract_text()

## Advanced features

**Form filling**: See [FORMS.md](FORMS.md) for complete guide
````

<!--
Original-PDF 15 — Progressive Disclosure, Teil 1: die einfachste Form.
Ziel: Zeigen, dass eine nützliche Skill sehr klein sein kann — Frontmatter plus ein knapper Markdown-Guide.
Was du sagen kannst: „Das Frontmatter mit name und description ist das Minimum. Der Markdown-Body ist ein kurzer Quick-Start. Wichtig: Die description ist das, was Claude liest, um zu entscheiden, ob die Skill überhaupt geladen wird — also präzise formulieren, inkl. ‚Use when …'."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">SKILLS — Progressive Disclosure</h2>

<div class="code-cap">Zusätzlichen Inhalt auslagern</div>

<div class="two-col">
<div>

```md
# PDF Processing

## Quick start
Extract text with pdfplumber …

## Advanced features
**Form filling**: see reference.md
**Forms**: see forms.md and follow
the instructions.
```
<p class="note">SKILL.md — schlanker Einstieg</p>

</div>
<div>

```md
# PDF Advanced Reference
This document contains advanced PDF
features, examples, and additional
libraries not covered in the main
SKILL.md.

## pypdfium2 (Apache/BSD License)
…
```
<p class="note">reference.md / forms.md — Tiefe bei Bedarf</p>

</div>
</div>

<!--
Original-PDF 16 — Progressive Disclosure, Teil 2: Bundling.
Ziel: Das Kernprinzip zeigen — die SKILL.md bleibt kurz und verweist auf Detail-Dateien, die nur bei Bedarf geladen werden.
Was du sagen kannst: „Statt alles in eine Riesendatei zu packen, hält man die SKILL.md schlank und lagert Details in separate Markdown-Dateien aus. Claude folgt den Links nur, wenn die Aufgabe es verlangt — so bleibt der Kontext klein und fokussiert."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">PDP — High-level Guide mit Referenzen</h2>

```md {*}{lines:true}
---
name: pdf-processing
description: Extracts text and tables from PDF files, fills forms,
  and merges documents. Use when working with PDF files or when the
  user mentions PDFs, forms, or document extraction.
---

# PDF Processing

## Quick start
Extract text with pdfplumber: …

## Advanced features
**Form filling**: See [FORMS.md](FORMS.md) for complete guide
**API reference**: See [REFERENCE.md](REFERENCE.md) for all methods
**Examples**: See [EXAMPLES.md](EXAMPLES.md) for common patterns
```

<!--
Original-PDF 17 — Muster 1: High-level Guide mit Referenzen.
Ziel: Das erste konkrete Organisations-Muster zeigen.
Was du sagen kannst: „Die SKILL.md ist die Landkarte: ein knapper Quick-Start plus eine Handvoll Verweise auf Spezialdateien. Gut, wenn es einen klaren Hauptpfad und ein paar optionale Tiefen gibt."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">PDP — Domain-spezifische Organisation</h2>

<div class="code-tree">

````md {*}{lines:true}
# BigQuery Data Analysis

## Available datasets
**Finance**: Revenue, ARR, billing
  → reference/finance.md
**Sales**: Opportunities, pipeline
  → reference/sales.md
**Product**: API usage, features
  → reference/product.md

## Quick search
    grep -i "revenue" reference/finance.md
    grep -i "pipeline" reference/sales.md
````

<div class="tree">
<div class="root">bigquery-skill/</div>
<div class="ti">├── <strong>SKILL.md</strong> (Übersicht &amp; Navigation)</div>
<div class="ti">└── reference/</div>
<div class="ti">&nbsp;&nbsp;&nbsp;&nbsp;├── finance.md (Revenue, Billing)</div>
<div class="ti">&nbsp;&nbsp;&nbsp;&nbsp;├── sales.md (Opportunities, Pipeline)</div>
<div class="ti">&nbsp;&nbsp;&nbsp;&nbsp;├── product.md (API-Usage, Features)</div>
<div class="ti">&nbsp;&nbsp;&nbsp;&nbsp;└── marketing.md (Campaigns, Attribution)</div>
</div>

</div>

<!--
Original-PDF 18 — Muster 2: Domain-spezifische Organisation.
Ziel: Zeigen, wie man eine Skill nach fachlichen Domänen aufteilt.
Was du sagen kannst: „Bei vielen gleichrangigen Themen — hier Finance, Sales, Product, Marketing — gliedert man pro Domäne eine eigene Referenzdatei. Die SKILL.md wird zum Inhaltsverzeichnis, und Claude springt gezielt in die passende Datei (oder greppt sie)."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">PDP — Conditional Details</h2>

```md {all}{lines:true}
# DOCX Processing

## Creating documents

Use docx-js for new documents. See [DOCX-JS.md](DOCX-JS.md).

## Editing documents

For simple edits, modify the XML directly.

**For tracked changes**: See [REDLINING.md](REDLINING.md)
**For OOXML details**: See [OOXML.md](OOXML.md)
```

<!--
Original-PDF 19 — Muster 3: Conditional Details.
Ziel: Das dritte Muster — Detailtiefe nur für Sonderfälle.
Was du sagen kannst: „Der Standardfall steht direkt in der SKILL.md (‚modify the XML directly'). Nur für Spezialfälle — Tracked Changes, OOXML-Tiefen — wird auf separate Dateien verwiesen. So zahlt der Normalfall nicht für die Ausnahme."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">SKILL Diversity</h2>

<SkillDiversity />

<!--
Original-PDF 20 — Skills können alles ansprechen.
Ziel: Das Spektrum zeigen — eine Skill ist nicht auf MCP beschränkt.
Was du sagen kannst: „Eine Skill ist nur ein Rezept. Was sie dabei aufruft, ist offen: ein MCP-Server, ein klassisches CLI oder ein Node-Script. Dieselbe Skill-Mechanik, drei völlig verschiedene Transportwege — das macht Skills so flexibel."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Example Skills</h2>

<ul class="dots compact">
  <li><strong>Jira Plan Feature:</strong> MCP Jira {id} <span class="arr"></span> Get Context <span class="arr"></span> Plan Feature</li>
  <li><strong>E2E Happy Day:</strong> MCP Playwright <span class="arr"></span> E2E Userflow <span class="arr"></span> Aggregate Context</li>
  <li><strong>Plan Migration:</strong> MCP Context7 <span class="arr"></span> Analyse Code <span class="arr"></span> Migration Plan</li>
  <li><strong>Analyse Logs:</strong> MCP Kibana <span class="arr"></span> Get Logs <span class="arr"></span> Analyse <span class="arr"></span> Create Plan</li>
  <li><strong>Check Documentation:</strong> Analyse Code Changes <span class="arr"></span> Check Docs <span class="arr"></span> Create Docs</li>
</ul>

<!--
Original-PDF 21 — Beispiel-Skills aus der Praxis.
Ziel: Die Theorie erden — fünf konkrete, wiederverwendbare Abläufe als Inspiration.
Was du sagen kannst: „Jede dieser Skills ist eine kleine Kette: erst Kontext über einen MCP-Server holen, dann verarbeiten, dann ein Artefakt erzeugen — ein Plan, ein Test, eine Doku. Genau solche wiederkehrenden Abläufe lohnt es sich als Skill festzuhalten." Überleitung in den Working Slot.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Skills finden — Ressourcen</h2>

<div class="reslinks">
<div>
<div class="rl-head"><span class="pill green">Offiziell</span> &amp; Standard</div>
<ul>
<li><span class="rl-name">anthropics/skills</span> · <span class="rl-url">github.com/anthropics/skills</span><span class="rl-desc">Offizielle, produktionsreife Skills von Anthropic</span></li>
<li><span class="rl-name">Agent Skills Standard</span> · <span class="rl-url">agentskills.io</span><span class="rl-desc">Offene Spezifikation (auch OpenAI, Cursor, Copilot)</span></li>
</ul>
</div>
<div>
<div class="rl-head"><span class="pill blue">Kuratierte</span> Sammlungen</div>
<ul>
<li><span class="rl-name">awesome-claude-skills</span> · <span class="rl-url">github.com/travisvn/awesome-claude-skills</span><span class="rl-desc">Curated Liste, nach Thema gegliedert</span></li>
<li><span class="rl-name">ComposioHQ/awesome-claude-skills</span> · <span class="rl-url">github.com/ComposioHQ/awesome-claude-skills</span><span class="rl-desc">1000+ praxistaugliche Skills &amp; Plugins</span></li>
</ul>
</div>
<div>
<div class="rl-head"><span class="pill green">Doku</span> &amp; Hubs</div>
<ul>
<li><span class="rl-name">Skills Hub</span> · <span class="rl-url">claudeskills.info</span><span class="rl-desc">Durchsuchbarer Skill-Katalog</span></li>
<li><span class="rl-name">Claude Docs</span> · <span class="rl-url">support.claude.com → Skills</span><span class="rl-desc">Was Skills sind &amp; wie man sie nutzt</span></li>
</ul>
</div>
</div>

<p class="src">Tipp: bestehende Skills als Vorlage lesen — eine Skill ist nur eine SKILL.md; das Format ist schnell adaptiert.</p>

<!--
Ressourcen-Folie Skills. Ziel: Anlaufstellen, um sich für den Working Slot inspirieren zu lassen und vorhandene Skills als Vorlage zu nutzen.
Was du sagen kannst:
• Offiziell & Standard: anthropics/skills ist Anthropics eigene, gepflegte Sammlung; agentskills.io ist der offene Standard hinter dem SKILL.md-Format (von OpenAI, Cursor, Copilot u. a. übernommen).
• Kuratierte Sammlungen: awesome-claude-skills (travisvn) und ComposioHQ bündeln community-erprobte Skills nach Thema — gut zum Stöbern für den eigenen Use-Case.
• Doku & Hubs: claudeskills.info als durchsuchbarer Katalog, die Claude-Docs für die Grundlagen.
Merksatz: Eine Skill ist nur eine SKILL.md — am schnellsten lernt man, indem man eine bestehende liest und an den eigenen Ablauf anpasst.
-->

---
layout: topic
headline: Working Slot
image: /img/workshop.jpg
---

<!--
Original-PDF 22 — Abschließender „Working Slot".
Ziel: Hands-on. Die Teilnehmer schreiben ihre erste eigene Skill.
Was du sagen kannst: „Zum Abschluss: Baut eine eigene Skill für einen Ablauf, den ihr regelmäßig macht — SKILL.md mit guter description, ggf. ein Script oder MCP-Aufruf, einmal ausprobieren." Zeitrahmen ansagen, herumgehen, am Ende ein paar Ergebnisse teilen lassen.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Working Slot: Skills — Vorgehen</h2>
<div class="ws three-col" style="margin-top:0.5em">
<div>
<div class="ws-phase"><span class="pill green">Phase 1</span> Entdecken</div>
<ul class="dot-list compact">
<li>Welcher <strong>wiederkehrende Ablauf</strong> lohnt eine Skill?</li>
<li>Welche Skills passen zu eurer <strong>Rolle</strong>?</li>
</ul>
<div class="ws-examples">Anlaufstellen:</div>
<ul class="dot-list compact">
<li>anthropics/skills &amp; awesome-Listen</li>
<li>Eigene Routine-Tasks</li>
</ul>
</div>
<div>
<div class="ws-phase"><span class="pill blue">Phase 2 · Plenum</span> Teilen</div>
<ul class="dot-list compact">
<li>Kurz teilen: <strong>Welche Skill wollt ihr bauen?</strong></li>
<li>Welcher Ablauf — und warum gerade der?</li>
</ul>
</div>
<div>
<div class="ws-phase"><span class="pill green">Phase 3</span> Bauen &amp; Testen</div>
<ul class="dot-list compact">
<li>SKILL.md mit guter <strong>description</strong> schreiben</li>
<li>Einmal <strong>auslösen</strong> &amp; validieren</li>
</ul>
</div>
</div>

<!--
Working Slot „Skills" — Vorgehen. Drei Phasen, parallel zum MCP-Working-Slot:

Phase 1 — Entdecken:
• Aufgabe: Überlegen, welcher wiederkehrende Ablauf sich als Skill lohnt — und welche fertigen Skills zur eigenen Rolle passen (Inspiration auf der Ressourcen-Folie davor).
• Anlaufstellen: anthropics/skills und die awesome-claude-skills-Listen; daneben die eigenen Routine-Tasks (Review, Release Notes, E2E …).

Phase 2 — Plenum / Teilen:
• Kurz teilen: Welche Skill möchtet ihr bauen — welcher Ablauf steckt dahinter und warum gerade der?

Phase 3 — Bauen & Testen:
• Eine SKILL.md mit präziser description schreiben (entscheidet, ob Claude die Skill findet/triggert), ggf. Script oder MCP-Aufruf ergänzen.
• Die Skill einmal auslösen und validieren, ob sie wie gewünscht funktioniert.

Moderation: Phase 1 als stille/kleingruppige Überlegung, Phase 2 als kurze Plenumsrunde, Phase 3 als Hands-on mit Zeitbox; am Ende ein paar Ergebnisse teilen lassen.
-->

