---
layout: cc
variant: center
---

<PlayDivider color="green" title="AI<br>TDD" />

<!--
PDF-Seite 10 — Kapitel-Trenner „AI TDD". Grünes Play-Dreieck = Kapitel 03.
Ziel: Der Hauptteil — Test-Driven Development mit der KI als ausführende Hand, plus das Experiment, das den Nutzen belegt.
Sagen kann man: „Drittes Kapitel: AI TDD. Erst die Mechanik, dann die Belege aus einem kontrollierten Experiment."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">TDD — WHAT?!</h2>

<div class="tdd-layout">
  <TrafficLight />
  <ul class="dots tdd-steps">
    <li class="p"><strong>1. Write Test:</strong> Make sure it is red (breaks)</li>
    <li class="g"><strong>2. Make Green:</strong> Implement the code so test is green</li>
    <li class="b"><strong>3. Refactor:</strong> Simplify the implementation, refactor.</li>
    <li class="y"><strong>Next Test</strong></li>
  </ul>
</div>

<!--
PDF-Seite 11 — TDD klassisch. Der Red-Green-Refactor-Zyklus als Ampel:
1) Write Test — sicherstellen, dass er rot ist (fehlschlägt).
2) Make Green — gerade so viel Code, dass der Test grün wird.
3) Refactor — die Implementierung vereinfachen.
Danach: Next Test, Zyklus wiederholen.
Ziel: Die Grundmechanik von TDD auffrischen, bevor die KI-Variante kommt.
Sagen kann man: „Klassisches TDD in drei Schritten: erst der rote Test, dann minimaler Code bis grün, dann aufräumen — und von vorn. Auf der nächsten Folie übernimmt die KI genau diese Schritte."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">AI TDD — WHAT?!</h2>

<div class="tdd-layout">
  <TrafficLight />
  <ul class="dots tdd-steps">
    <li class="p"><strong>1. Write Test:</strong> Make sure it is red (breaks)&nbsp;<strong>- AI</strong></li>
    <li class="g"><strong>2. Make Green:</strong> Implement the code so test is green&nbsp;<strong>- AI</strong></li>
    <li class="b"><strong>3. Refactor:</strong> Simplify the implementation, refactor.&nbsp;<strong>- AI</strong></li>
    <li class="y"><strong>Next Test</strong></li>
  </ul>
</div>

<!--
PDF-Seite 12 — TDD mit KI. Identischer Zyklus, aber jeder Schritt wird von der KI ausgeführt („- AI"): Test schreiben, grün machen, refactern — alles die KI, gesteuert durch den TDD-Rahmen.
Ziel: Zeigen, dass sich die Methode nicht ändert — nur die ausführende Hand. Der TDD-Rahmen diszipliniert die KI.
Sagen kann man: „Gleicher Zyklus, nur macht jetzt die KI jeden Schritt. Der Clou: Der TDD-Rahmen hält die KI auf Kurs — sie schreibt nur den Code, der nötig ist, damit der Test grün wird."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">AI TDD — WHY?!</h2>

<ul class="dots">
  <li class="y"><strong>Simplifies Code Quality:</strong> TDD workflows consistently produce simpler, less complex code than non-TDD approaches.</li>
  <li class="b"><strong>Prevents Over-Engineering:</strong> Using a checklist without TDD actually leads to the most complex code; TDD forces a "minimalist" focus.</li>
  <li class="g"><strong>Enforces AI Discipline:</strong> Structured TDD prevents AI from "vibe coding" or over-implementing, ensuring it only writes the code necessary to pass a test.</li>
  <li class="p"><strong>Verifies Logic:</strong> Requiring an AI to predict test failures ensures its "mental model" matches the actual code state, preventing it from losing the thread.</li>
</ul>

<!--
PDF-Seite 13 — AI TDD, warum. Vier Gründe:
1) Bessere Code-Qualität — TDD-Workflows erzeugen durchgehend einfacheren, weniger komplexen Code als Nicht-TDD.
2) Verhindert Over-Engineering — eine Checkliste OHNE TDD führt sogar zum komplexesten Code; TDD erzwingt minimalistischen Fokus.
3) Diszipliniert die KI — strukturiertes TDD hält die KI vom „Vibe Coding" und Über-Implementieren ab; nur der nötige Code entsteht.
4) Verifiziert die Logik — die KI muss Test-Fehlschläge vorhersagen; so passt ihr „mentales Modell" zum echten Code-Stand und sie verliert den Faden nicht.
Ziel: Den Mehrwert von TDD speziell für KI-Agenten begründen — Disziplin und Einfachheit sind die Hebel.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">AI TDD — WHY: The experiment</h2>

<ul class="dots">
  <li class="y"><strong>A controlled lab:</strong> The same coding katas, built over and over, varying one thing at a time</li>
  <li class="b">Runs 659 total</li>
  <li class="g">Claude Code CLI, headless, no human in the loop</li>
  <li class="p">Anthropic only (Opus 4.6/4.7, Sonnet 4.6, Haiku 4.5)</li>
</ul>

<!--
PDF-Seite 14 — das Experiment, Setup. Ein kontrolliertes Labor: dieselben Coding-Katas immer wieder gebaut, jeweils nur eine Variable verändert.
- 659 Läufe insgesamt.
- Claude Code CLI, headless, kein Mensch in der Schleife.
- Nur Anthropic-Modelle (Opus 4.6/4.7, Sonnet 4.6, Haiku 4.5).
Ziel: Die Methodik glaubwürdig machen — kontrolliert, reproduzierbar, große Stichprobe.
Sagen kann man: „Damit die Aussagen belastbar sind: 659 Läufe, gleiche Aufgaben, immer nur eine Stellschraube verändert, komplett automatisiert. So lässt sich Ursache und Wirkung trennen."
-->

---
layout: cc
class: dense
---

<span class="secno">03</span>
<h2 class="slash">AI TDD — WHY: The three axes verified independently</h2>

<div class="cards axes">
  <div class="card y">
    <h3>Workflow</h3>
    <p class="card-sub">6 GENERATIONS · V1 → V8</p>
    <ul class="dots compact">
      <li class="y"><strong>Vibe-coding</strong> baselines (v1/v2) — just "implement X", no tests</li>
      <li class="y"><strong>Strict TDD</strong> with Red / Green / Refactor (v4–v6)</li>
      <li class="y"><strong>Hybrid</strong> &amp; isolated refactor subagents (v6/v7)</li>
      <li class="y"><strong>Delayed refactor</strong> after vibe-coding (v8)</li>
    </ul>
  </div>
  <div class="card b">
    <h3>Prompt style</h3>
    <p class="card-sub">3 VARIANTS</p>
    <ul class="dots compact">
      <li class="b"><strong>Prose</strong> — rules described in words, no examples</li>
      <li class="b"><strong>User-story</strong> — "As a… I want…", no examples</li>
      <li class="b"><strong>Example-Mapping</strong> — rules + concrete I/O examples</li>
    </ul>
  </div>
  <div class="card g">
    <h3>Kata × Model</h3>
    <p class="card-sub">5 KATAS · THINKING ON/OFF</p>
    <ul class="dots compact">
      <li class="g"><strong>Known</strong> tasks (game-of-life) the model saw in training</li>
      <li class="g"><strong>Novel</strong> domain (claim-office) — an unseen insurance spec</li>
      <li class="g">Each model run with <strong>thinking on and off</strong></li>
    </ul>
  </div>
</div>

<div class="flow perrun">
  <span class="perrun-label">PER RUN</span>
  <span class="step"><strong>Agent builds the kata</strong><br><span class="gl">headless, fresh container</span></span>
  <span class="arrow">→</span>
  <span class="step"><strong>Tests + analyzers run</strong><br><span class="gl">Vitest, ESLint, SonarJS, Stryker</span></span>
  <span class="arrow">→</span>
  <span class="step"><strong>Metrics extracted</strong><br><span class="gl">quality, correctness, cost</span></span>
  <span class="arrow">→</span>
  <span class="step"><strong>Aggregated per kata</strong><br><span class="gl">workflow × model tables</span></span>
</div>

<!--
PDF-Seite 15 — die drei unabhängig variierten Achsen.
1) Workflow (6 Generationen, V1→V8): von Vibe-Coding-Baselines (v1/v2, nur „implement X", keine Tests) über striktes TDD mit Red/Green/Refactor (v4–v6), Hybrid + isolierte Refactor-Subagenten (v6/v7) bis Delayed Refactor nach Vibe-Coding (v8).
2) Prompt-Stil (3 Varianten): Prose (Regeln in Worten, keine Beispiele), User-Story („As a… I want…", keine Beispiele), Example-Mapping (Regeln + konkrete I/O-Beispiele).
3) Kata × Modell (5 Katas, Thinking on/off): bekannte Aufgaben (Game of Life, im Training gesehen) vs. neue Domäne (Claim-Office, ungesehene Versicherungs-Spec); jedes Modell mit Thinking an und aus.
Pro Lauf: Agent baut die Kata (headless, frischer Container) → Tests + Analyzer laufen (Vitest, ESLint, SonarJS, Stryker) → Metriken extrahiert (Qualität, Korrektheit, Kosten) → pro Kata aggregiert (Workflow × Modell).
Ziel: Zeigen, dass jede Achse sauber isoliert wurde — daher sind die Schlüsse belastbar.
-->

---
layout: cc
class: dense measured-slide
---

<span class="secno">03</span>
<h2 class="slash">AI TDD — WHY: What they measured</h2>

<div class="three-col measured">
  <div class="mcol">
    <h3>Correctness</h3>
    <p class="metric"><code class="inline">tests_passing</code></p>
    <p class="mdesc">Inner check: do the agent's own Vitest tests go green? A failing run never counts as a solution.</p>
    <p class="metric"><code class="inline">verification_pct</code> <span class="pill green">KEY</span></p>
    <p class="mdesc">Outer check: share of an <strong>external</strong> acceptance suite the agent never saw that passes (0–1). The honest correctness signal.</p>
    <h3 class="mt">Efficiency / cost</h3>
    <p class="metric"><code class="inline">total_tokens</code></p>
    <p class="mdesc">All tokens across the run incl. subagents — the price of the result.</p>
    <p class="metric"><code class="inline">duration_seconds</code></p>
    <p class="mdesc">Wall-clock time end to end.</p>
  </div>
  <div class="mcol">
    <h3>Code quality &amp; complexity</h3>
    <p class="metric"><code class="inline">cognitive_max</code> <span class="pill blue">MAIN</span></p>
    <p class="mdesc">SonarSource Cognitive Complexity of the worst function — weights nesting like a human reader. <strong>The study's headline metric.</strong></p>
    <p class="metric"><code class="inline">mccabe_max</code> &nbsp; <code class="inline">cc_longest_function</code></p>
    <p class="mdesc">Classic cyclomatic complexity &amp; longest function — the worst spot in the code.</p>
    <p class="metric"><code class="inline">smell_total</code></p>
    <p class="mdesc">All ESLint + SonarJS rule violations: magic numbers, duplication, complexity logic…</p>
    <p class="metric"><code class="inline">code_mass</code> <span class="pill blue">APP</span> <code class="inline">cc_loc</code></p>
    <p class="mdesc">Weighted size of production constructs &amp; lines — how much code the feature really costs.</p>
  </div>
  <div class="mcol">
    <h3>Test strength &amp; discipline</h3>
    <p class="metric"><code class="inline">mutation_score</code> <span class="pill">HIDDEN</span></p>
    <p class="mdesc">Stryker mutates the code — do the agent's tests catch it? Never named in any prompt, so it can't be gamed (Goodhart-resistant).</p>
    <p class="msub">Coverage</p>
    <p class="metric"><code class="inline">coverage_statements_pct</code> / <code class="inline">branches_pct</code></p>
    <p class="mdesc">— how much the tests exercise.</p>
    <p class="msub">TDD discipline</p>
    <p class="metric"><code class="inline">cycle_count</code> , <code class="inline">refactorings_applied</code></p>
    <p class="mdesc">red-phase failure predictions — was the process actually followed?</p>
    <div class="direction-box">
      <strong>Direction:</strong> complexity, smells &amp; cost — <strong>lower is better</strong>. Correctness, mutation score &amp; coverage — <strong>higher is better</strong>.
    </div>
  </div>
</div>

<!--
PDF-Seite 16 — was gemessen wurde, drei Gruppen.
Correctness: tests_passing (innerer Check: gehen die eigenen Vitest-Tests grün? Ein fehlschlagender Lauf zählt nie als Lösung) und verification_pct (KEY — äußerer Check: Anteil einer EXTERNEN, dem Agenten unbekannten Acceptance-Suite, der besteht; das ehrliche Korrektheits-Signal). Efficiency/cost: total_tokens (alle Tokens inkl. Subagenten = Preis des Ergebnisses) und duration_seconds.
Code-Qualität & Komplexität: cognitive_max (MAIN/Headline — SonarSource Cognitive Complexity der schlimmsten Funktion, gewichtet Verschachtelung wie ein menschlicher Leser), mccabe_max / cc_longest_function (klassische zyklomatische Komplexität & längste Funktion), smell_total (alle ESLint+SonarJS-Verstöße), code_mass / cc_loc (gewichtete Codegröße — was das Feature wirklich kostet).
Test-Stärke & Disziplin: mutation_score (HIDDEN — Stryker mutiert den Code; fangen die Tests es? In keinem Prompt genannt, also nicht gambar, Goodhart-resistent), Coverage (statements/branches), TDD-Disziplin (cycle_count, refactorings_applied, Red-Phase-Vorhersagen — wurde der Prozess wirklich gelebt?).
Richtung: Komplexität, Smells & Kosten — niedriger ist besser. Korrektheit, Mutation Score & Coverage — höher ist besser.
Ziel: Klarmachen, dass nicht nur „läuft es" gemessen wurde, sondern Qualität, Testtiefe und Prozess-Disziplin — und dass die Schlüssel-Metrik manipulationssicher ist.
-->

---
layout: cc
class: dense
---

<span class="secno">03</span>
<h2 class="slash">AI TDD — WHY: The result</h2>

<div class="cards result-winners">
  <div class="card">
    <p class="card-sub">WORKFLOW</p>
    <p class="winner">v6.1-hybrid</p>
    <p class="winner-note">strict TDD · inline Red/Green + isolated Refactor agent</p>
  </div>
  <div class="result-x">×</div>
  <div class="card">
    <p class="card-sub">MODEL</p>
    <p class="winner">Opus 4.7</p>
    <p class="winner-note">thinking off (no-thinking)</p>
  </div>
  <div class="result-x">×</div>
  <div class="card">
    <p class="card-sub">PROMPT STYLE</p>
    <p class="winner">Example-Mapping</p>
    <p class="winner-note">rules + concrete I/O examples</p>
  </div>
</div>

<ul class="dots result-bullets">
  <li class="y"><strong>The workflow makes it maintainable.</strong> v6.1-hybrid is the most <strong>robust</strong> structure — rank 1 or in the tight top field across every quality axis, the <strong>only</strong> workflow with a 0% outlier rate and no collapse on the novel kata.</li>
  <li class="b"><strong>The model sets the ceiling.</strong> Opus 4.7 (thinking off) leads the model ranking on code quality — lowest complexity spikes and fewest smells, ahead of Sonnet 4.6 and Opus 4.6. <span class="lead">Thinking helped neither.</span></li>
  <li class="g"><strong>Example-Mapping makes it correct.</strong> On a novel domain it is the dominant <strong>correctness</strong> lever: concrete I/O examples resolve spec ambiguity, lifting external verification by <strong>+48 to +64 points</strong> over prose.</li>
</ul>

<!--
PDF-Seite 17 — das Ergebnis, die Gewinner-Kombination: Workflow v6.1-hybrid × Modell Opus 4.7 (thinking off) × Prompt-Stil Example-Mapping.
Drei Kernaussagen:
1) Der Workflow macht es wartbar. v6.1-hybrid (striktes TDD, inline Red/Green + isolierter Refactor-Agent) ist die robusteste Struktur — Rang 1 oder dicht dran auf jeder Qualitätsachse, der einzige Workflow mit 0 % Ausreißerquote und keinem Einbruch bei der neuen Kata.
2) Das Modell setzt die Decke. Opus 4.7 (thinking off) führt das Modell-Ranking bei Code-Qualität an — geringste Komplexitäts-Spitzen, wenigste Smells, vor Sonnet 4.6 und Opus 4.6. Thinking half keinem von beiden.
3) Example-Mapping macht es korrekt. Auf neuer Domäne der dominante Korrektheits-Hebel: konkrete I/O-Beispiele lösen Spec-Mehrdeutigkeit auf und heben die externe Verifikation um +48 bis +64 Punkte gegenüber Prose.
Ziel: Die drei Achsen zu einer Handlungsempfehlung verdichten — Struktur (Workflow), Modellwahl und Beispiele wirken auf je andere Qualitätsdimension.
-->

---
layout: cc
class: dense
---

<span class="secno">03</span>
<h2 class="slash">AI TDD — WHY: The result</h2>

<div class="two-col result-detail">
  <div>
    <p class="col-head">Maintainability &amp; complexity <span class="lead">— lower is better</span></p>
    <p class="metric"><code class="inline">cognitive_max</code> <span class="accent-num">0% outliers</span></p>
    <p class="mdesc">The study's headline metric (SonarSource Cognitive Complexity), v6.1: all 10 runs stay in [1, 7].</p>
    <p class="metric"><code class="inline">mccabe_max</code> &nbsp; <code class="inline">cc_longest_function</code></p>
    <p class="mdesc">Lowest complexity spikes — strict phase structure + refactor flattens the worst function.</p>
    <p class="metric"><code class="inline">smell_total</code> <span class="accent-num">≈ 2.2</span></p>
    <p class="mdesc">Fewest ESLint + SonarJS violations across all rules.</p>
    <p class="metric"><code class="inline">code_mass</code> <span class="pill blue">APP</span> <code class="inline">cc_loc</code></p>
    <p class="mdesc">Compact production code — less to read, review and own.</p>
  </div>
  <div>
    <p class="col-head">Correctness &amp; robustness <span class="lead">— higher is better</span></p>
    <p class="metric"><code class="inline">verification_pct</code> <span class="accent-num">0.28 → 1.00</span></p>
    <p class="mdesc">External acceptance suite on the novel kata: pure vibe-coding (v1/v2) scores 0.28; strict TDD with refactor reaches a perfect 1.00.</p>
    <p class="metric"><code class="inline">mutation_score</code> <span class="accent-num">most stable</span></p>
    <p class="mdesc">Goodhart-resistant hidden metric (never named in any prompt). v6.1 is the most stable workflow — lowest variance across replicates.</p>
    <p class="metric"><span class="lead">Prompt lever</span> <span class="accent-num">+48–64 pp</span></p>
    <p class="mdesc">Example-Mapping vs prose on the novel domain (Opus 4.6 &amp; Sonnet 4.6, no-thinking) — concrete examples kill spec ambiguity.</p>
  </div>
</div>

<p class="price-line"><span class="red">Quality has a price:</span> v6.1-hybrid burns the most tokens <strong>~33M</strong></p>

<!--
PDF-Seite 18 — das Ergebnis im Detail, zwei Spalten.
Maintainability & Komplexität (niedriger = besser): cognitive_max mit 0 % Ausreißern (Headline-Metrik, v6.1: alle 10 Läufe in [1,7]); mccabe_max / cc_longest_function mit den geringsten Spitzen (strikte Phasenstruktur + Refactor glättet die schlimmste Funktion); smell_total ≈ 2,2 (wenigste Verstöße); code_mass / cc_loc kompakt (weniger zu lesen, reviewen, pflegen).
Correctness & Robustheit (höher = besser): verification_pct 0,28 → 1,00 (externe Acceptance-Suite auf der neuen Kata: reines Vibe-Coding v1/v2 = 0,28; striktes TDD mit Refactor = perfekte 1,00); mutation_score am stabilsten (Goodhart-resistente Hidden-Metrik, geringste Varianz); Prompt-Hebel +48–64 pp (Example-Mapping vs. Prose auf neuer Domäne, Opus 4.6 & Sonnet 4.6, no-thinking).
Pointe: Qualität hat ihren Preis — v6.1-hybrid verbrennt mit ~33M die meisten Tokens.
Ziel: Die Belege konkret untermauern UND ehrlich den Trade-off nennen: bestes Ergebnis, aber teuerster Lauf.
Sagen kann man: „Die Zahlen im Detail. Und ganz ehrlich: Der beste Workflow ist auch der teuerste — rund 33 Millionen Tokens. Qualität kostet, das muss man wissen und bewusst entscheiden."
-->
