---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Was sind subagents</h2>
<div class="agent-row big-agents" style="gap:24px; margin-top:2.4em; flex-wrap:nowrap">
  <Agent color="b" label="Review" />
  <Agent color="y" label="Code Quality" />
  <Agent color="g" label="Research" />
  <Agent color="p" label="Explore" />
  <Agent color="pu" label="Claude Code<br>Guide" />
</div>

<style scoped>
.big-agents .agent { width: 200px; gap: 16px; }
.big-agents .agent .sq { width: 124px; height: 124px; border-radius: 16px; }
.big-agents .agent .sq svg { width: 70px; height: 70px; }
.big-agents .agent .alabel { font-size: 26px; }
</style>

<!--
Slide 26 (Original-PDF 26) — „Was sind Subagents": Beispiele eingebauter Subagents.
Ziel: Konkret machen. Claude Code bringt bereits Subagents mit, z. B. Review, Code Quality, Research, Explore und den Claude-Code-Guide. Jeder ist auf eine Aufgabe spezialisiert.
Sagen kann man: Ihr müsst nicht bei Null anfangen — schaut euch zuerst die mitgelieferten Subagents an. Ein Subagent ist im Kern eine Rolle mit eigenem Systemprompt und eigenem Kontextfenster.
-->

---
layout: topic
secno: "02"
headline: Subagent Properties
image: /img/cover-subagent-props.jpg
---

<!--
Slide 27 (Original-PDF 27) — Kapitel-Header „Subagent Properties".
Ziel: Übergang zu den Eigenschaften/Vorteilen von Subagents.
Sagen kann man: Warum lohnen sich Subagents? Schauen wir auf ihre Kerneigenschaften.
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Subagent Properties</h2>
<div class="agent-row" style="margin-top:1.4em">
  <Agent color="y" label="Claude Code" solid />
  <div class="conn"></div>
  <Agent color="p" label="Review" />
  <div class="conn"></div>
  <Agent color="y" label="Claude Code" solid />
  <div class="conn"></div>
  <Agent color="b" label="Code Quality" />
</div>
<ul class="bullets-lg" style="margin-top:1.6em">
  <li><strong>Less context</strong> load on main agents</li>
  <li><strong>Longer work intervals</strong> with the main agent become possible</li>
  <li>Workflows can be created that enable <strong>parallel work</strong></li>
</ul>

<!--
Slide 28 (Original-PDF 28) — Subagent-Eigenschaften mit Ablauf-Skizze.
Ziel: Die drei Hauptvorteile erklären, illustriert am Fluss Claude Code → Review → Claude Code → Code Quality:
• Less context load — der Hauptagent bleibt schlank, weil Detailarbeit ausgelagert wird.
• Longer work intervals — dadurch sind längere zusammenhängende Arbeitsphasen möglich, bevor der Kontext voll ist.
• Parallel work — Workflows mit parallel arbeitenden Subagents werden möglich.
Sagen kann man: Der Hauptagent delegiert an Review, bekommt ein kompaktes Ergebnis zurück, macht weiter, delegiert an Code Quality. Sein eigenes Fenster bleibt sauber — genau das hält ihn in der Smart Zone.
-->

---
layout: topic
secno: "03"
headline: Agents in Practice
image: /img/cover-agents-practice.jpg
---

<!--
Slide 29 (Original-PDF 29) — Kapitel-Header „Agents in Practice".
Ziel: Vom Konzept zur Umsetzung. Jetzt wird gezeigt, wie ein Subagent konkret definiert wird und welche typischen Muster es gibt.
Sagen kann man: Genug Theorie — wie sieht ein Subagent in der Datei aus, und welche Muster haben sich bewährt?
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Agents in Practice — Agent File</h2>

```md
---
name: your-sub-agent-name
description: Description of when this subagent should be invoked
tools: tool1, tool2, tool3   # Optional - inherits all tools if omitted
model: sonnet                # Optional - specify model alias or 'inherit'
---

Your subagent's system prompt goes here. This can be multiple paragraphs
and should clearly define the subagent's role, capabilities, and approach
to solving problems.

Include specific instructions, best practices, and any constraints
the subagent should follow.
```

<div class="ref-block">References: https://docs.claude.com/en/docs/claude-code/sub-agents#file-format</div>

<!--
Slide 30 (Original-PDF 30) — Das Agent-Datei-Format.
Ziel: Den Aufbau einer Subagent-Definition zeigen. Frontmatter: name, description (WANN wird er aufgerufen — wichtig für die automatische Auswahl), optional tools (sonst erbt er alle) und model (Alias oder 'inherit'). Darunter der Systemprompt: Rolle, Fähigkeiten, Vorgehen, Constraints.
Sagen kann man: Die `description` ist entscheidend — daran erkennt der Hauptagent, wann er diesen Subagent ziehen soll. Mit `tools` schränkt ihr bewusst ein (z. B. nur lesend für einen Reviewer). Quelle: docs.claude.com/.../sub-agents#file-format.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Agents in Practice — Review Agent</h2>

```md
---
name: review
description: Expert code review specialist. Proactively reviews code for
  quality, security, and maintainability. Use immediately after writing or
  modifying code. MUST BE USED for all code changes.
tools: ["Read", "Grep", "Glob", "Bash"]
model: opus
---

You are a deterministic code review system. You follow a fixed procedure
and report on EVERY check. You do NOT skip checks. You do NOT add checks
that are not listed below.

## Procedure (follow exactly in this order)
### Step 1: Collect the diff
Run `git diff main...HEAD` to get all changes on this branch vs main.
If there is no diff (e.g. on main), run `git diff HEAD~1` instead. ...
```

<div class="ref-block">References: https://docs.claude.com/en/docs/claude-code/sub-agents#file-format</div>

<!--
Slide 31 (Original-PDF 31) — Ein realer Review-Agent als Beispiel.
Ziel: Das Format mit Leben füllen. Beachtenswert: die sehr direktive `description` („MUST BE USED for all code changes") erhöht die Wahrscheinlichkeit der automatischen Nutzung; `tools` auf lesend + Bash beschränkt; `model: opus` für anspruchsvolles Reviewing. Der Systemprompt macht den Agenten deterministisch — feste Prozedur, jeder Check wird berichtet, nichts wird ausgelassen.
Sagen kann man: Determinismus ist hier der Trick — ein Reviewer soll nicht kreativ sein, sondern eine Checkliste zuverlässig abarbeiten. Genau das schreibt der Systemprompt vor.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Review Agents</h2>
<ReviewFan />

<!--
Slide 32 (Original-PDF 32) — Muster „Review Agents": mehrere Reviewer parallel.
Ziel: Ein erstes Workflow-Muster zeigen. Der Hauptagent (Claude Code) fächert auf drei parallele Review-Subagents auf und führt deren Ergebnisse wieder zusammen.
Sagen kann man: Mehrere unabhängige Reviews — z. B. einer für Security, einer für Lesbarkeit, einer für Tests — laufen parallel, jeder mit frischem Kontext. Der Hauptagent sammelt die Resultate ein. Das ist Delegation + Parallelität in Aktion.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Domain Knowledge Agent</h2>
<div class="dk-files">
  <span class="tag-pill g">glossar.md</span>
  <span class="tag-pill g">processes.md</span>
  <span class="tag-pill g">user.md</span>
</div>
<div class="agent-row bigger-agents" style="margin-top:1.4em">
  <Agent color="y" label="Claude Code" solid />
  <div class="conn"></div>
  <Agent color="p" label="Domain" />
  <div class="conn"></div>
  <Agent color="y" label="Claude Code" solid />
</div>

<style scoped>
.dk-files { display:flex; gap:18px; justify-content:center; margin-top:1.2em; }
.bigger-agents .agent { width: 180px; }
.bigger-agents .agent .sq { width: 120px; height: 120px; border-radius: 16px; }
.bigger-agents .agent .sq svg { width: 66px; height: 66px; }
.bigger-agents .agent .alabel { font-size: 24px; }
</style>

<!--
Slide 33 (Original-PDF 33) — Muster „Domain Knowledge Agent".
Ziel: Ein Subagent, der Domänenwissen kapselt. Er hat Zugriff auf glossar.md, processes.md und user.md und beantwortet dem Hauptagenten fachliche Fragen — ohne dass dieser das gesamte Domänenwissen im eigenen Fenster halten muss.
Sagen kann man: Statt das ganze Glossar in jede Session zu laden, fragt der Hauptagent den Domain-Agenten gezielt. Der liest die Domänendateien, antwortet kompakt — Kontext bleibt ausgelagert und wird nur bei Bedarf konsultiert.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Documentation Agent</h2>
<div class="dk-files">
  <span class="tag-pill g">api-docs</span>
  <span class="tag-pill g">processes</span>
  <span class="tag-pill g">architecture</span>
</div>
<div class="agent-row bigger-agents" style="margin-top:1.4em">
  <Agent color="y" label="Claude Code" solid />
  <div class="conn"></div>
  <Agent color="p" label="Documentation" />
  <div class="conn"></div>
  <Agent color="y" label="Claude Code" solid />
</div>

<style scoped>
.dk-files { display:flex; gap:18px; justify-content:center; margin-top:1.2em; }
.bigger-agents .agent { width: 180px; }
.bigger-agents .agent .sq { width: 120px; height: 120px; border-radius: 16px; }
.bigger-agents .agent .sq svg { width: 66px; height: 66px; }
.bigger-agents .agent .alabel { font-size: 24px; }
</style>

<!--
Slide 34 (Original-PDF 34) — Muster „Documentation Agent".
Ziel: Analog zum Domain-Agenten, aber für Dokumentation: api-docs, processes, architecture. Der Agent pflegt bzw. konsultiert die Doku und liefert dem Hauptagenten passende Auszüge.
Sagen kann man: Gleiches Prinzip wie beim Domain-Agenten — gekapseltes Wissen, on-demand abgefragt. So eignet sich ein Subagent auch zum konsistenten Erzeugen/Aktualisieren von Doku.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">TDD Agents</h2>
<div class="agent-row" style="margin-top:2em">
  <Agent color="y" label="Claude Code" solid />
  <div class="conn"></div>
  <Agent color="pu" label="Test-list" />
  <div class="conn"></div>
  <Agent color="y" label="Claude Code" solid />
  <div class="conn"></div>
  <Agent color="p" label="Red" />
  <div class="conn"></div>
  <Agent color="y" label="Claude Code" solid />
  <div class="conn"></div>
  <Agent color="g" label="Green" />
</div>

<!--
Slide 35 (Original-PDF 35) — Muster „TDD Agents": Test-Driven Development als Agenten-Kette.
Ziel: Ein mehrstufiger Workflow entlang des TDD-Zyklus. Claude Code → Test-list (Testfälle sammeln) → Claude Code → Red (fehlschlagenden Test schreiben) → Claude Code → Green (Code schreiben, bis der Test grün ist).
Sagen kann man: Jede Phase ist ein spezialisierter Schritt mit eigenem Fokus. Der Hauptagent orchestriert Red/Green, die Subagents übernehmen die klar umrissenen Teilaufgaben. So bleibt der Ablauf diszipliniert — erst der Test, dann der Code.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Agents in Practice — Recommended Approach</h2>
<ul class="bullets-lg" style="margin-top:1em">
  <li>Start working in pairs with the agent <strong>without</strong> subagents</li>
  <li>Subagents are intended for a higher level of automation but are <strong>not totally transparent</strong></li>
  <li>Create agents only for a <strong>specific task or purpose</strong></li>
  <li>Create subagents if you are interested in the <strong>concrete result</strong> rather than the way to the result</li>
  <li>Take a look at the subagents that Claude Code offers by default</li>
</ul>

<!--
Slide 36 (Original-PDF 36) — Empfohlenes Vorgehen mit Subagents.
Ziel: Pragmatische Leitplanken, damit niemand vorschnell alles automatisiert:
• Erst „im Pair" ohne Subagents arbeiten — Gefühl fürs Tool bekommen.
• Subagents bedeuten mehr Automatisierung, aber weniger Transparenz (man sieht den Weg zum Ergebnis nicht vollständig).
• Agenten nur für eine klar umrissene Aufgabe bauen.
• Subagent dann nutzen, wenn nur das Ergebnis zählt, nicht der Weg dorthin.
• Zuerst die mitgelieferten Subagents anschauen.
Sagen kann man: Subagents sind mächtig, aber eine Blackbox. Nehmt sie, wenn euch das Resultat interessiert (z. B. ein Review), nicht wenn ihr jeden Zwischenschritt sehen/steuern wollt. Und fangt klein an.
-->
