---
theme: ../../../theme-codecentric/theme
title: Harness Engineering
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

<h1 class="cover-title">Coding<br/>is dead.</h1>

<style scoped>
:deep(.cc.title-slide) { justify-content: center; padding-bottom: 0; }
:deep(h1.cover-title) {
  font-size: 7.5rem;
  line-height: 0.92;
  font-weight: 700;
  letter-spacing: -0.03em;
}
</style>

<!--
Folie 1 (Original-PDF 1) — Cover. Provokante These als Einstieg: „Coding is dead."
Ziel: Aufmerksamkeit erzeugen und den Bogen spannen — nicht das Programmieren ist tot, sondern die Rolle verschiebt sich. Das lösen wir über den Talk auf.
-->

---
layout: statement
nologo: false
---

<div class="quotes">
  <div class="q q-a">
    <p class="q-text">"1 million lines of code (LOC) in just a few months."</p>
    <p class="q-src">— OpenAI Engineering Team</p>
  </div>
  <div class="q q-b">
    <p class="q-text">"3000 LOC in just a few hours"</p>
    <p class="q-src">— codecentric customer</p>
  </div>
  <div class="q q-c">
    <p class="q-text">"4500 LOC & 10000 LOTC in a few days"</p>
    <p class="q-src">— My project</p>
  </div>
  <div class="q q-d">
    <p class="q-text">“Vorher 300 PT nachher mit AI 100 PT”</p>
    <p class="q-src">— Mein Projekt</p>
  </div>
</div>

<style scoped>
.quotes { height: 100%; width: 100%; position: relative; }
.q-text { font-style: italic; font-size: 1.7rem; font-weight: 400; }
.q-src  { color: var(--cc-blue); font-weight: 700; font-size: 1.15rem; margin-top: 0.3rem; padding-left: 1.5rem; }
.q { position: absolute; }
.q-a { top: 8%; left: 2%; }
.q-b { top: 33%; left: 40%; }
.q-c { top: 56%; left: 2%; }
.q-d { top: 76%; left: 38%; }
</style>

<!--
Folie 2 (Original-PDF 2) — Vier Zitate / LOC-Zahlen aus der Praxis.
Ziel: Belegen, dass Code-Generierung explodiert — Mengen, die früher Monate brauchten, entstehen in Stunden/Tagen. Generierung ist kein Engpass mehr.
Sagen kann man: Die Zahlen sind real (OpenAI, codecentric-Kunde, eigene Projekte). Wenn das Schreiben von Code so billig wird — wo liegt dann der neue Engpass? Das ist die Leitfrage.
-->

---
layout: cc
class: 'stmt'
nologo: false
---

<div class="stmt-text" style="font-size: 5rem">
  <p>I analyze.</p>
  <p>I design.</p>
  <p>I write code.</p>
</div>

<!--
Folie 3 (Original-PDF 3) — Das klassische Selbstbild des Software Engineers.
Ziel: Die gewohnte Tätigkeitskette etablieren, bevor wir sie durchstreichen. Analysieren, entwerfen, Code schreiben — so haben wir uns definiert.
-->

---
layout: cc
class: 'stmt'
nologo: false
---

<div class="stmt-text" style="font-size: 5rem">
  <p class="struck">I analyze.</p>
  <p class="struck">I design.</p>
  <p class="struck">I write code.</p>
  <p class="caption" style="font-size: 1.9rem; margin-top: 1.3rem">— Software Engineering til 2025</p>
</div>

<!--
Folie 4 (Original-PDF 4) — Dasselbe Selbstbild, durchgestrichen: „Software Engineering bis 2025".
Ziel: Den Bruch markieren. Das alte Tätigkeitsprofil läuft aus — die AI übernimmt Analyse, Entwurf und das Schreiben von Code.
-->

---
layout: cc
class: 'stmt'
nologo: false
---

<div class="stmt-text" style="font-size: 4.6rem">
  <p class="struck">I analyze.</p>
  <p class="struck">I design.</p>
  <p class="struck">I write code.</p>
  <p class="pink">I review.</p>
  <p class="caption" style="font-size: 1.9rem; margin-top: 1.1rem">— Software Engineering from 2025</p>
</div>

<!--
Folie 5 (Original-PDF 5) — Was bleibt: „I review." (rosa hervorgehoben) — „Software Engineering ab 2025".
Ziel: Die neue Kernaufgabe benennen. Wenn die AI generiert, wird Review (im weiten Sinn: prüfen, lenken, absichern) zur zentralen menschlichen Tätigkeit.
-->

---
layout: none
class: no-logo
---

<div class="road-slide">
  <img src="/img/road.png" alt="Straße in eine offene Landschaft — der Weg vor uns" />
</div>

<style scoped>
.road-slide { width: 100%; height: 100%; }
.road-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
</style>

<!--
Folie 6 (Original-PDF 6) — Übergangs-Bildfolie (Straße/Landschaft, schwarz-weiß).
Ziel: Atempause und Szenenwechsel. Der Weg in die neue Disziplin. Hier kann man kurz innehalten, bevor das „Wie" kommt.
-->

---
layout: cc
class: 'stmt'
nologo: false
---

<div class="stmt-text equation" style="font-size: 3.3rem; line-height: 1.3">
  <p class="line1">Quality &amp; Speed</p>
  <p class="line2">= Domain Understanding and</p>
  <p class="line3">good Agent Harness</p>
</div>

<style scoped>
.equation .line1 { font-weight: 700; }
.equation .line2, .equation .line3 { font-weight: 400; }
</style>

<!--
Folie 7 (Original-PDF 7) — Die zentrale These als Gleichung: Qualität & Geschwindigkeit = Domänen-Verständnis + gutes Agent-Harness.
Ziel: Die zwei Hebel benennen, um die sich der ganze Talk dreht. Schnelligkeit allein reicht nicht — Qualität entsteht aus echtem Domänenverständnis UND einem guten Harness um den Agenten.
Sagen kann man: Das sind die beiden Säulen. Erst Product Engineering (Domäne konsumierbar machen), dann Harness Engineering (Leitplanken um den Agenten).
-->

---
layout: cc
class: 'center-text'
---

<div class="dd-slide">
  <Diamonds size="150px" :labels='["Problem","Solution","Implementation"]' />
  <div class="roles">
    <div class="cc-pill role-pill" style="grid-column: 1 / 4;">PO / PM / BA</div>
    <div class="cc-pill role-pill" style="grid-column: 5 / 10;">Software Engineer</div>
    <div class="cc-pill role-pill" style="grid-column: 1 / 10;">Product Engineer</div>
  </div>
</div>

<style scoped>
.dd-slide { width: 100%; padding: 0 1rem; }
.roles { display: grid; grid-template-columns: repeat(9, 1fr); gap: 0.9rem 0.6rem; margin-top: 3.5rem; }
.role-pill { background: var(--cc-gray-soft); }
</style>

<!--
Folie 8 (Original-PDF 8) — Double Diamond: Problem · Lösung · Umsetzung und die Rollen-Spannweite.
Ziel: Zeigen, welche Rolle welchen Raum abdeckt. PO/PM/BA sitzen im Problemraum, der klassische Software Engineer in Lösung/Umsetzung — der Product Engineer spannt über alle drei.
Sagen kann man: Die Pointe ist die unterste Leiste: Der Product Engineer deckt die gesamte Breite ab, vom Problem bis zur Umsetzung.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Product Engineer</h2>
</div>

<div class="body-text">
  A developer who not only builds solutions but actively works within the
  problem space — understands users, penetrates domains, and shares
  responsibility for outcomes. They combine technical excellence with
  product thinking and ask not just <b class="t-red">how</b>, but
  <b class="t-red">what</b> and <b class="t-red">why</b>.
</div>

<style scoped>
.head-row { margin-bottom: 2.2rem; }
.head-row h2 { font-size: 2.4rem; }
.cc-slashes { font-size: 2.4rem; }
.body-text { font-size: 1.9rem; line-height: 1.5; max-width: 46rem; font-weight: 400; }
</style>

<!--
Folie 9 (Original-PDF 9) — Definition „Product Engineer".
Ziel: Die Rolle scharf machen. Nicht nur bauen, sondern im Problemraum arbeiten, Nutzer verstehen, Domänen durchdringen, Ergebnisse mitverantworten. Schlüsselfrage: nicht nur „wie", sondern „was" und „warum".
-->

---
layout: cc
class: 'center-text'
---

<div class="dd-slide">
  <Diamonds size="180px" :labels='["Problem","Lösung","Umsetzung"]' />
  <div class="roles2">
    <div class="cc-pill role-pill" style="background: var(--cc-gray-soft);">Product Engineer</div>
    <div class="cc-pill role-pill" style="background: var(--cc-red-soft);">AI</div>
  </div>
</div>

<style scoped>
.dd-slide { width: 100%; padding: 0 1rem; }
.roles2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2.8rem; }
</style>

<!--
Folie 10 (Original-PDF 10) — Double Diamond mit Aufteilung Product Engineer / AI.
Ziel: Die Arbeitsteilung zeigen: Der Product Engineer verantwortet den Problemraum, die AI übernimmt die Umsetzung. Übergang zur Frage: Wie machen wir den Problemraum für die AI nutzbar?
-->

---
layout: cc
class: 'stmt'
nologo: false
---

<div class="stmt-text" style="font-size: 3.6rem; line-height: 1.18">
  <p>Make the problem space</p>
  <p>consumable for AI</p>
  <p class="it">(Context Engineering)</p>
</div>

<!--
Folie 11 (Original-PDF 11) — Leitsatz: Den Problemraum für die AI konsumierbar machen (Context Engineering).
Ziel: Das erste große Werkzeug benennen. Bevor der Agent gut arbeiten kann, müssen wir die Fachlichkeit so aufbereiten, dass sie ins Kontextfenster passt und nutzbar ist.
-->

---
layout: cc
class: 'dm-page'
---

<DomainModelling />

<style scoped>
:deep(.slidev-layout.cc.dm-page) { padding-top: 3%; }
</style>

<!--
Folie 12 (Original-PDF 12) — Domain Modelling: zweistufiger Prozess Analyse → Development.
Ziel: Den konkreten Workflow zeigen. 1. Analyse (native Code-Analyse, Fragen zum Prozesswissen, Transkription von Nutzerinterviews, Synthese) erzeugt md-Dateien (p1.md, p2.md, p_spec_1.md), validiert durch Fachexperten. 2. Development (Planning, Solutioning, Implementing) — jeweils mit Claude Code / Opus, Sonnet.
Sagen kann man: Markdown-Dateien sind die Brücke zwischen Analyse und Umsetzung — die konsumierbare Domäne als Artefakt.
-->

---
layout: cc
---

<DomainConsumable />

<!--
Folie 13 (Original-PDF 13) — Die konsumierbare Domäne speist spezialisierte Agenten.
Ziel: Zeigen, wie die md-Artefakte (processes.md, glossar.md, user.md) als Kontext für Agenten dienen: Domain-Expert-Agent (klärt fachliche Fragen), Example-Mapping-Agent (formt Anforderungen), weitere Agents (User, Review, …).
-->

---
layout: cc
class: 'center-text'
---

<div class="dd-slide">
  <Diamonds size="170px" :labels='["Problem","Solution","Implementation"]' />
  <div class="roles2">
    <div class="cc-pill role-pill" style="background: var(--cc-gray-soft);">Product Engineer</div>
    <div class="cc-pill role-pill" style="background: var(--cc-red-soft);">AI</div>
  </div>
  <div class="up-arrow">↑</div>
</div>

<style scoped>
.dd-slide { width: 100%; padding: 0 1rem; }
.roles2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2.6rem; }
.role-pill { width: 100%; }
.up-arrow { font-size: 2.8rem; text-align: center; line-height: 1; margin-top: 0.6rem; }
</style>

<!--
Folie 14 (Original-PDF 14) — Double Diamond, Fokus wandert zur Umsetzung (Pfeil nach oben unter „AI").
Ziel: Den Blick auf den Umsetzungsraum lenken. Wir haben die Domäne konsumierbar gemacht — jetzt geht es darum, die AI-Umsetzung gut zu machen. Überleitung zu Example Mapping / Tests als Feedforward.
-->

---
layout: cc
class: 'em-page'
---

<ExampleMapping />

<style scoped>
:deep(.slidev-layout.cc.em-page) { padding-top: 2.5%; }
</style>

<!--
Folie 15 (Original-PDF 15) — Example Mapping wird zu Story-Kontext + ausführbaren Tests.
Ziel: Konkret zeigen, wie aus gemeinsamem Example Mapping im Team (Story, Rules, Examples, offene Fragen) eine Story-Description plus Gherkin-Edge-Case-Tests entsteht — direkt als Feedforward für den Agenten nutzbar.
-->

---
layout: cc
class: 'center-text'
---

<div class="dd-slide">
  <Diamonds size="170px" :labels='["Problem","Solution","Implementation"]' />
  <div class="roles2">
    <div class="cc-pill role-pill" style="background: var(--cc-gray-soft);">Product Engineer</div>
    <div class="ai-col">
      <div class="harness-top"></div>
      <div class="cc-pill role-pill" style="background: var(--cc-red-soft);">AI</div>
      <div class="harness-bot"></div>
      <div class="harness-label">Harness Engineering</div>
      <div class="up-arrow">↑</div>
    </div>
  </div>
</div>

<style scoped>
.dd-slide { width: 100%; padding: 0 1rem; }
.roles2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2.4rem; align-items: start; }
.ai-col { display: flex; flex-direction: column; align-items: stretch; position: relative; }
.harness-top, .harness-bot { height: 3px; background: var(--cc-red); margin: 0.5rem 0; }
.harness-label { color: var(--cc-red); font-weight: 600; text-align: center; margin-top: 0.4rem; font-size: 1.3rem; }
.up-arrow { font-size: 2.6rem; text-align: center; line-height: 1; position: absolute; left: -2.2rem; bottom: -1rem; }
</style>

<!--
Folie 16 (Original-PDF 16) — Double Diamond: „Harness Engineering" als Klammer um die AI-Umsetzung.
Ziel: Den zweiten großen Hebel einführen. Die rote Klammer um „AI" markiert das Thema: das System aus Leitplanken rund um den Coding-Agenten.
-->

---
layout: cc
---

<div class="rings-slide">
  <div class="labels">
    <div class="lbl l-user">User Harness<span class="leader"></span></div>
    <div class="lbl l-model">Model<span class="leader"></span></div>
    <div class="lbl l-tool">Tool Harness<br/>e.g. Claude Code<span class="leader"></span></div>
  </div>
  <div class="rings">
    <div class="ring r1">
      <div class="ring r2">
        <div class="ring r3"></div>
      </div>
    </div>
  </div>
</div>

<style scoped>
.rings-slide { display: grid; grid-template-columns: 1fr 1fr; height: 100%; align-items: center; padding: 1rem 2rem; }
.labels { position: relative; height: 100%; }
.lbl { position: absolute; font-size: 1.9rem; right: 1rem; text-align: right; line-height: 1.2; }
.lbl .leader { position: absolute; top: 50%; left: 100%; width: 6.5rem; height: 2px; background: var(--cc-line); }
.l-user  { top: 22%; }
.l-model { top: 50%; transform: translateY(-50%); }
.l-tool  { top: 70%; }
.rings { display: flex; align-items: center; justify-content: center; position: relative; }
.ring { border: 2px solid var(--cc-line); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.r1 { width: 380px; height: 380px; background: var(--cc-green-soft); }
.r2 { width: 250px; height: 250px; background: var(--cc-green); }
.r3 { width: 110px; height: 110px; background: var(--cc-gray-soft); }
</style>

<!--
Folie 17 (Original-PDF 17) — Konzentrische Kreise: User Harness · Model · Tool Harness.
Ziel: Das Harness in Schichten zerlegen. Im Kern das Modell, darum das Tool-Harness (z. B. Claude Code), außen das User-Harness — das, was wir als Product Engineer selbst bauen.
-->

---
layout: section
headline: "Guides\n& Sensors"
---

<div class="sec-sub">Feedforward & Feedback</div>

<style scoped>
.sec-sub { font-size: 1.8rem; font-weight: 500; margin-top: 0.8rem; }
</style>

<!--
Folie 18 (Original-PDF 18) — Kapitel-Trenner: Guides & Sensors (Feedforward & Feedback).
Ziel: Den begrifflichen Rahmen für das Harness setzen. Guides wirken nach vorne (Feedforward), Sensors geben Rückmeldung (Feedback). Das strukturiert die nächsten Folien.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Guides (feedforward)</h2>
</div>

<table class="cc-table compact">
  <thead>
    <tr><th>Example</th><th>Deterministic</th><th>Not deterministic</th><th>Example Implementation</th></tr>
  </thead>
  <tbody>
    <tr><td>Coding Conventions</td><td></td><td class="x">X</td><td>Rule file</td></tr>
    <tr><td>Codemods</td><td class="x">X</td><td></td><td>OpenRewrite recipes</td></tr>
    <tr><td>Bootstrap Templates</td><td class="x">X</td><td></td><td>Scripts to bootstrap a project</td></tr>
    <tr><td>Language Server as Tools</td><td class="x">X</td><td></td><td>Claude Code Plugins</td></tr>
    <tr><td>Gerkin Akzeptanztests</td><td class="x">X</td><td></td><td>Cucumber</td></tr>
    <tr><td>SDD Specs & Plans</td><td></td><td class="x">X</td><td>spec / plan markdowns</td></tr>
    <tr><td>MCP Server</td><td></td><td class="x">X</td><td>context7</td></tr>
  </tbody>
</table>

<style scoped>
.head-row { margin-bottom: 1.4rem; }
.head-row h2 { font-size: 2.1rem; }
.cc-slashes { font-size: 2.1rem; }
</style>

<!--
Folie 19 (Original-PDF 19) — Tabelle „Guides (feedforward)".
Ziel: Konkrete Guides katalogisieren und in deterministisch / nicht-deterministisch einordnen — mit Beispiel-Implementierungen (Rule file, OpenRewrite, Cucumber, context7 …).
Sagen kann man: Deterministische Guides sind verlässlich reproduzierbar; nicht-deterministische (Konventionen, Specs, MCP) brauchen das Modell zur Interpretation.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Sensors (feedbacks)</h2>
</div>

<table class="cc-table compact">
  <thead>
    <tr><th>Example</th><th>Deterministic</th><th>Not deterministic</th><th>Example Implementation</th></tr>
  </thead>
  <tbody>
    <tr><td>Structure Tests</td><td class="x">X</td><td></td><td>Arch Unit Tests</td></tr>
    <tr><td>Instructions how to review</td><td></td><td class="x">X</td><td>review-rules.md</td></tr>
    <tr><td>Review Agents (LLM as a judge)</td><td></td><td class="x">X</td><td>code-review.md<br/>domain-knowledge.md</td></tr>
    <tr><td>Linters</td><td class="x">X</td><td></td><td>npx eslint</td></tr>
    <tr><td>Static Code Analysis</td><td class="x">X</td><td></td><td>Sonar</td></tr>
    <tr><td>MCP Server</td><td></td><td class="x">X</td><td>Kibana, Playwright</td></tr>
  </tbody>
</table>

<style scoped>
.head-row { margin-bottom: 1.4rem; }
.head-row h2 { font-size: 2.1rem; }
.cc-slashes { font-size: 2.1rem; }
</style>

<!--
Folie 20 (Original-PDF 20) — Tabelle „Sensors (feedbacks)".
Ziel: Das Gegenstück zu den Guides — Sensoren, die Rückmeldung über die generierte Lösung geben: Struktur-Tests (ArchUnit), Review-Agenten (LLM as a judge), Linter, Static Analysis (Sonar), MCP-Server (Kibana, Playwright).
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Open API Spec - Contract Based</h2>
</div>

<div class="quad-head">
  <div>Guides</div>
  <div>Sensors</div>
</div>

<div class="quad">
  <div class="q-cell comp">
    <div class="q-tag t-blue">Deterministic</div>
    <div class="q-title">Code Gen as Spec</div>
    <div class="q-desc">OpenAPI Generator creates<br/>Stubs, DTOs, Validation</div>
  </div>
  <div class="q-cell comp">
    <div class="q-title">Contract-Tests</div>
    <div class="q-desc">Schema validation, Dredd,<br/>Spectral linter in CI</div>
  </div>
  <div class="q-cell inf">
    <div class="q-tag t-red">Non Deterministic</div>
    <div class="q-title">Spec as context for agent</div>
    <div class="q-desc">YAML in Prompt, API Skill</div>
  </div>
  <div class="q-cell inf">
    <div class="q-title">LLM-Judge vs Spec</div>
    <div class="q-desc">Review agent verifies if the<br/>implementation genuinely<br/>aligns with the contract</div>
  </div>
</div>

<style scoped>
.head-row { margin-bottom: 0.9rem; }
.head-row h2 { font-size: 2.1rem; }
.cc-slashes { font-size: 2.1rem; }
.quad-head { display: grid; grid-template-columns: 1fr 1fr; text-align: center; font-weight: 700; font-size: 1.3rem; margin-bottom: 0.5rem; }
.quad { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; border-left: 2px solid #888; }
.q-cell { position: relative; padding: 1.5rem 1.4rem; text-align: center; }
.comp { background: #cdeefb; }
.inf  { background: #fdd9e0; }
.q-cell:nth-child(2), .q-cell:nth-child(4) { border-left: 1.5px solid #888; }
.q-cell:nth-child(3), .q-cell:nth-child(4) { border-top: 1.5px solid #888; }
.q-tag { position: absolute; top: 0.5rem; left: 0.8rem; font-weight: 700; font-size: 1.1rem; }
.q-title { font-weight: 700; font-size: 1.4rem; margin: 1rem 0 0.6rem; }
.q-desc { font-size: 1.1rem; font-weight: 400; }
</style>

<!--
Folie 21 (Original-PDF 21) — Quadrant „Open API Spec - Contract Based": Guides × Sensors, deterministisch × nicht-deterministisch.
Ziel: Am konkreten Beispiel (OpenAPI-Contract) zeigen, wie ein Artefakt gleichzeitig Guide UND Sensor sein kann — deterministisch (Code-Gen, Contract-Tests) und nicht-deterministisch (Spec als Kontext, LLM-Judge gegen Spec).
-->

---
layout: cc
---

<ImproveTrigger />

<!--
Folie 22 (Original-PDF 22) — Improve · Product Engineer · Trigger.
Ziel: Die Rolle des Product Engineers im Loop zeigen. Links das Harness (Specs, How-tos, API Contract, LSP; Review-Agents, Logs, Browser), in der Mitte der Engineer, der Feedforward/Feedback steuert, rechts der Coding-Agent mit Generation und Correction.
-->

---
layout: cc
class: 'tl-page'
---

<HarnessTimeline />

<style scoped>
:deep(.slidev-layout.cc.tl-page) { padding-top: 2.5%; }
</style>

<!--
Folie 23 (Original-PDF 23) — Timeline: Feedforward / Feedback mit drei Stufen.
Ziel: Den zeitlichen Ablauf zeigen. Feedforward (LSP, MCP-Knowledge-Graph, Agents.md, How-to/API-Docs, Architecture.md) speist den Agenten; Feedback in drei Stufen — Self-Correction-Loop, Human review, Pipeline — korrigiert. Farben: nicht-deterministisch (rot) vs. deterministisch (blau).
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Review based on Risk</h2>
</div>

<div class="risk-boxes">
  <div class="cc-box rbx" style="background: var(--cc-red-soft);"><div class="rb-t">Core Domain</div><div class="rb-s">Geschäftsregeln</div></div>
  <div class="cc-box rbx" style="background: var(--cc-iris-soft);"><div class="rb-t">Supporting</div><div class="rb-s">professionally complementary</div></div>
  <div class="cc-box rbx" style="background: var(--cc-blue-soft);"><div class="rb-t">Integration</div><div class="rb-s">APIs, Adapter</div></div>
  <div class="cc-box rbx" style="background: var(--cc-mint-soft);"><div class="rb-t">Infrastructure</div><div class="rb-s">Boillerplate</div></div>
</div>

<div class="risk-labels">
  <span>Human Review</span>
  <span class="t-iris">Harness Trust</span>
</div>

<svg class="risk-curve" viewBox="0 0 1000 260" preserveAspectRatio="none">
  <path d="M20,40 C300,40 360,220 980,220" fill="none" stroke="#000" stroke-width="3" marker-end="url(#ah1)"/>
  <path d="M20,220 C300,220 360,40 980,40" fill="none" stroke="#007286" stroke-width="3" stroke-dasharray="9 7" marker-end="url(#ah2)"/>
  <defs>
    <marker id="ah1" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#000"/></marker>
    <marker id="ah2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#007286"/></marker>
  </defs>
</svg>

<style scoped>
.head-row { margin-bottom: 1.4rem; }
.head-row h2 { font-size: 2.1rem; }
.cc-slashes { font-size: 2.1rem; }
.risk-boxes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
.rbx { padding: 0.8em 0.6em; }
.rb-t { font-size: 1.35rem; font-weight: 700; }
.rb-s { font-size: 0.95rem; font-weight: 400; }
.risk-labels { display: flex; justify-content: space-between; font-weight: 700; font-size: 1.4rem; margin-top: 1.4rem; }
.risk-curve { width: 100%; height: 220px; margin-top: 0.5rem; }
</style>

<!--
Folie 24 (Original-PDF 24) — Review based on Risk.
Ziel: Review-Aufwand nach Risiko steuern. Vier Kategorien von Core Domain (Geschäftsregeln) bis Infrastructure (Boilerplate). Je geschäftskritischer, desto mehr menschliches Review; je generischer, desto mehr Harness-Vertrauen. Die zwei Kurven kreuzen sich — Human Review fällt, Harness Trust steigt.
-->

---
layout: cc
class: 'center-text'
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Take Aways</h2>
</div>

<div class="takeaways">
  <div class="ta">
    <div class="cc-dashed ta-icon"><carbon-arrow-left /></div>
    <div class="ta-label">Shift Left</div>
  </div>
  <div class="ta">
    <div class="cc-dashed ta-icon"><carbon-view /></div>
    <div class="ta-label">Guides & Sensors</div>
  </div>
  <div class="ta">
    <div class="cc-dashed ta-icon"><carbon-chart-relationship /></div>
    <div class="ta-label">Harness & Risks</div>
  </div>
</div>

<style scoped>
.head-row { margin-bottom: 3.5rem; align-self: flex-start; position: absolute; top: 10%; left: 7%; }
.head-row h2 { font-size: 2.4rem; }
.cc-slashes { font-size: 2.4rem; }
.takeaways { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; padding: 0 2rem; width: 100%; }
.ta { display: flex; flex-direction: column; align-items: center; gap: 1.6rem; }
.ta-icon { width: 130px; height: 130px; display: flex; align-items: center; justify-content: center; background: #f4f4f1; font-size: 4rem; }
.ta-label { font-size: 1.7rem; font-weight: 700; }
</style>

<!--
Folie 25 (Original-PDF 25) — Take Aways: Shift Left · Guides & Sensors · Harness & Risks.
Ziel: Die drei Kernbotschaften verankern. Shift Left (Qualität früh sichern), Guides & Sensors (Feedforward + Feedback), Harness & Risks (Review nach Risiko).
-->

---
layout: cc
nologo: true
class: 'ty-page'
---

<ThankYou title="Thank You!" />

<style scoped>
:deep(.slidev-layout.cc.ty-page) { padding: 0; }
</style>

<!--
Folie 26 (Original-PDF 26) — Thank You! / Kontakt + QR.
Ziel: Abschluss, Kontaktdaten und QR-Code für Vernetzung (LinkedIn / E-Mail).
-->
