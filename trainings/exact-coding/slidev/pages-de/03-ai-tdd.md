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
    <li class="p"><strong>1. Test schreiben:</strong> Sicherstellen, dass er rot ist (fehlschlägt)</li>
    <li class="g"><strong>2. Grün machen:</strong> Code implementieren, bis der Test grün ist</li>
    <li class="b"><strong>3. Refactor:</strong> Die Implementierung vereinfachen, refactern.</li>
    <li class="y"><strong>Nächster Test</strong></li>
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
class: tdd-de
---

<span class="secno">03</span>
<h2 class="slash">AI TDD — WHAT?!</h2>

<div class="tdd-layout">
  <TrafficLight />
  <ul class="dots tdd-steps">
    <li class="p"><strong>1. Test schreiben:</strong> Sicherstellen, dass er rot ist (fehlschlägt)&nbsp;<strong>-&nbsp;KI</strong></li>
    <li class="g"><strong>2. Grün machen:</strong> Code implementieren, bis der Test grün ist&nbsp;<strong>-&nbsp;KI</strong></li>
    <li class="b"><strong>3. Refactor:</strong> Die Implementierung vereinfachen, refactern.&nbsp;<strong>-&nbsp;KI</strong></li>
    <li class="y"><strong>Nächster Test</strong></li>
  </ul>
</div>

<!--
PDF-Seite 12 — TDD mit KI. Identischer Zyklus, aber jeder Schritt wird von der KI ausgeführt („- KI"): Test schreiben, grün machen, refactern — alles die KI, gesteuert durch den TDD-Rahmen.
Ziel: Zeigen, dass sich die Methode nicht ändert — nur die ausführende Hand. Der TDD-Rahmen diszipliniert die KI.
Sagen kann man: „Gleicher Zyklus, nur macht jetzt die KI jeden Schritt. Der Clou: Der TDD-Rahmen hält die KI auf Kurs — sie schreibt nur den Code, der nötig ist, damit der Test grün wird."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">AI TDD — WHY?!</h2>

<ul class="dots">
  <li class="y"><strong>Verbessert die Code-Qualität:</strong> TDD-Workflows erzeugen durchgehend einfacheren, weniger komplexen Code als Nicht-TDD-Ansätze.</li>
  <li class="b"><strong>Verhindert Over-Engineering:</strong> Eine Checkliste OHNE TDD führt sogar zum komplexesten Code; TDD erzwingt einen „minimalistischen" Fokus.</li>
  <li class="g"><strong>Diszipliniert die KI:</strong> Strukturiertes TDD hält die KI vom „Vibe Coding" und Über-Implementieren ab — es entsteht nur der Code, der nötig ist, um einen Test zu bestehen.</li>
  <li class="p"><strong>Verifiziert die Logik:</strong> Die KI muss Test-Fehlschläge vorhersagen; so passt ihr „mentales Modell" zum echten Code-Stand und sie verliert den Faden nicht.</li>
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
  <li class="y"><strong>Ein kontrolliertes Labor:</strong> Dieselben Coding-Katas, immer wieder gebaut, jeweils nur eine Variable verändert</li>
  <li class="b">659 Läufe insgesamt</li>
  <li class="g">Claude Code CLI, headless, kein Mensch in der Schleife</li>
  <li class="p">Nur Anthropic (Opus 4.6/4.7, Sonnet 4.6, Haiku 4.5)</li>
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
    <p class="card-sub">6 GENERATIONEN · V1 → V8</p>
    <ul class="dots compact">
      <li class="y"><strong>Vibe-Coding</strong>-Baselines (v1/v2) — nur „implementiere X", keine Tests</li>
      <li class="y"><strong>Striktes TDD</strong> mit Red / Green / Refactor (v4–v6)</li>
      <li class="y"><strong>Hybrid</strong> &amp; isolierte Refactor-Subagenten (v6/v7)</li>
      <li class="y"><strong>Verzögertes Refactor</strong> nach Vibe-Coding (v8)</li>
    </ul>
  </div>
  <div class="card b">
    <h3>Prompt style</h3>
    <p class="card-sub">3 VARIANTEN</p>
    <ul class="dots compact">
      <li class="b"><strong>Prosa</strong> — Regeln in Worten beschrieben, keine Beispiele</li>
      <li class="b"><strong>User-Story</strong> — „Als … möchte ich …", keine Beispiele</li>
      <li class="b"><strong>Example-Mapping</strong> — Regeln + konkrete I/O-Beispiele</li>
    </ul>
  </div>
  <div class="card g">
    <h3>Kata × Model</h3>
    <p class="card-sub">5 KATAS · THINKING AN/AUS</p>
    <ul class="dots compact">
      <li class="g"><strong>Bekannte</strong> Aufgaben (Game of Life), im Training gesehen</li>
      <li class="g"><strong>Neue</strong> Domäne (Claim-Office) — eine ungesehene Versicherungs-Spec</li>
      <li class="g">Jedes Modell mit <strong>Thinking an und aus</strong></li>
    </ul>
  </div>
</div>

<div class="flow perrun">
  <span class="perrun-label">PRO LAUF</span>
  <span class="step"><strong>Agent baut die Kata</strong><br><span class="gl">headless, frischer Container</span></span>
  <span class="arrow">→</span>
  <span class="step"><strong>Tests + Analyzer laufen</strong><br><span class="gl">Vitest, ESLint, SonarJS, Stryker</span></span>
  <span class="arrow">→</span>
  <span class="step"><strong>Metriken extrahiert</strong><br><span class="gl">Qualität, Korrektheit, Kosten</span></span>
  <span class="arrow">→</span>
  <span class="step"><strong>Pro Kata aggregiert</strong><br><span class="gl">Workflow × Modell-Tabellen</span></span>
</div>

<!--
PDF-Seite 15 — die drei unabhängig variierten Achsen.
1) Workflow (6 Generationen, V1→V8): von Vibe-Coding-Baselines (v1/v2, nur „implement X", keine Tests) über striktes TDD mit Red/Green/Refactor (v4–v6), Hybrid + isolierte Refactor-Subagenten (v6/v7) bis Delayed Refactor nach Vibe-Coding (v8).
2) Prompt-Stil (3 Varianten): Prosa (Regeln in Worten, keine Beispiele), User-Story („Als … möchte ich …", keine Beispiele), Example-Mapping (Regeln + konkrete I/O-Beispiele).
3) Kata × Modell (5 Katas, Thinking an/aus): bekannte Aufgaben (Game of Life, im Training gesehen) vs. neue Domäne (Claim-Office, ungesehene Versicherungs-Spec); jedes Modell mit Thinking an und aus.
Pro Lauf: Agent baut die Kata (headless, frischer Container) → Tests + Analyzer laufen (Vitest, ESLint, SonarJS, Stryker) → Metriken extrahiert (Qualität, Korrektheit, Kosten) → pro Kata aggregiert (Workflow × Modell).
Ziel: Zeigen, dass jede Achse sauber isoliert wurde — daher sind die Schlüsse belastbar.
-->

---
layout: cc
class: dense measured-slide de-compact
---

<span class="secno">03</span>
<h2 class="slash">AI TDD — WHY: What they measured</h2>

<div class="three-col measured">
  <div class="mcol">
    <h3>Korrektheit</h3>
    <p class="metric"><code class="inline">tests_passing</code></p>
    <p class="mdesc">Innerer Check: Werden die eigenen Vitest-Tests des Agenten grün? Ein fehlschlagender Lauf zählt nie als Lösung.</p>
    <p class="metric"><code class="inline">verification_pct</code> <span class="pill green">KEY</span></p>
    <p class="mdesc">Äußerer Check: Anteil einer <strong>externen</strong> Acceptance-Suite, die der Agent nie gesehen hat und die besteht (0–1). Das ehrliche Korrektheits-Signal.</p>
    <h3 class="mt">Effizienz / Kosten</h3>
    <p class="metric"><code class="inline">total_tokens</code></p>
    <p class="mdesc">Alle Tokens über den Lauf inkl. Subagenten — der Preis des Ergebnisses.</p>
    <p class="metric"><code class="inline">duration_seconds</code></p>
    <p class="mdesc">Wall-Clock-Zeit von Anfang bis Ende.</p>
  </div>
  <div class="mcol">
    <h3>Code-Qualität &amp; Komplexität</h3>
    <p class="metric"><code class="inline">cognitive_max</code> <span class="pill blue">MAIN</span></p>
    <p class="mdesc">SonarSource Cognitive Complexity der schlimmsten Funktion — gewichtet Verschachtelung wie ein menschlicher Leser. <strong>Die Headline-Metrik der Studie.</strong></p>
    <p class="metric"><code class="inline">mccabe_max</code> &nbsp; <code class="inline">cc_longest_function</code></p>
    <p class="mdesc">Klassische zyklomatische Komplexität &amp; längste Funktion — die schlimmste Stelle im Code.</p>
    <p class="metric"><code class="inline">smell_total</code></p>
    <p class="mdesc">Alle ESLint- + SonarJS-Verstöße: Magic Numbers, Duplikation, Komplexitäts-Logik …</p>
    <p class="metric"><code class="inline">code_mass</code> <span class="pill blue">APP</span> <code class="inline">cc_loc</code></p>
    <p class="mdesc">Gewichtete Größe der Produktiv-Konstrukte &amp; Zeilen — was das Feature wirklich kostet.</p>
  </div>
  <div class="mcol">
    <h3>Teststärke &amp; Disziplin</h3>
    <p class="metric"><code class="inline">mutation_score</code> <span class="pill">HIDDEN</span></p>
    <p class="mdesc">Stryker mutiert den Code — fangen die Tests des Agenten es? In keinem Prompt genannt, also nicht gambar (Goodhart-resistent).</p>
    <p class="msub">Coverage</p>
    <p class="metric"><code class="inline">coverage_statements_pct</code> / <code class="inline">branches_pct</code></p>
    <p class="mdesc">— wie viel die Tests abdecken.</p>
    <p class="msub">TDD-Disziplin</p>
    <p class="metric"><code class="inline">cycle_count</code> , <code class="inline">refactorings_applied</code></p>
    <p class="mdesc">Red-Phasen-Fehlervorhersagen — wurde der Prozess wirklich befolgt?</p>
    <div class="direction-box">
      <strong>Richtung:</strong> Komplexität, Smells &amp; Kosten — <strong>niedriger ist besser</strong>. Korrektheit, Mutation Score &amp; Coverage — <strong>höher ist besser</strong>.
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
    <p class="winner-note">striktes TDD · inline Red/Green + isolierter Refactor-Agent</p>
  </div>
  <div class="result-x">×</div>
  <div class="card">
    <p class="card-sub">MODELL</p>
    <p class="winner">Opus 4.7</p>
    <p class="winner-note">Thinking aus (no-thinking)</p>
  </div>
  <div class="result-x">×</div>
  <div class="card">
    <p class="card-sub">PROMPT STYLE</p>
    <p class="winner">Example-Mapping</p>
    <p class="winner-note">Regeln + konkrete I/O-Beispiele</p>
  </div>
</div>

<ul class="dots result-bullets">
  <li class="y"><strong>Der Workflow macht es wartbar.</strong> v6.1-hybrid ist die <strong>robusteste</strong> Struktur — Rang 1 oder im engen Spitzenfeld auf jeder Qualitätsachse, der <strong>einzige</strong> Workflow mit 0 % Ausreißerquote und keinem Einbruch bei der neuen Kata.</li>
  <li class="b"><strong>Das Modell setzt die Decke.</strong> Opus 4.7 (Thinking aus) führt das Modell-Ranking bei Code-Qualität an — geringste Komplexitäts-Spitzen, wenigste Smells, vor Sonnet 4.6 und Opus 4.6. <span class="lead">Thinking half keinem von beiden.</span></li>
  <li class="g"><strong>Example-Mapping macht es korrekt.</strong> Auf einer neuen Domäne ist es der dominante <strong>Korrektheits</strong>-Hebel: konkrete I/O-Beispiele lösen Spec-Mehrdeutigkeit auf und heben die externe Verifikation um <strong>+48 bis +64 Punkte</strong> gegenüber Prosa.</li>
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
    <p class="col-head">Wartbarkeit &amp; Komplexität <span class="lead">— niedriger ist besser</span></p>
    <p class="metric"><code class="inline">cognitive_max</code> <span class="accent-num">0 % Ausreißer</span></p>
    <p class="mdesc">Die Headline-Metrik der Studie (SonarSource Cognitive Complexity), v6.1: alle 10 Läufe bleiben in [1, 7].</p>
    <p class="metric"><code class="inline">mccabe_max</code> &nbsp; <code class="inline">cc_longest_function</code></p>
    <p class="mdesc">Geringste Komplexitäts-Spitzen — strikte Phasenstruktur + Refactor glättet die schlimmste Funktion.</p>
    <p class="metric"><code class="inline">smell_total</code> <span class="accent-num">≈ 2,2</span></p>
    <p class="mdesc">Wenigste ESLint- + SonarJS-Verstöße über alle Regeln.</p>
    <p class="metric"><code class="inline">code_mass</code> <span class="pill blue">APP</span> <code class="inline">cc_loc</code></p>
    <p class="mdesc">Kompakter Produktiv-Code — weniger zu lesen, reviewen und pflegen.</p>
  </div>
  <div>
    <p class="col-head">Korrektheit &amp; Robustheit <span class="lead">— höher ist besser</span></p>
    <p class="metric"><code class="inline">verification_pct</code> <span class="accent-num">0,28 → 1,00</span></p>
    <p class="mdesc">Externe Acceptance-Suite auf der neuen Kata: reines Vibe-Coding (v1/v2) erreicht 0,28; striktes TDD mit Refactor erreicht perfekte 1,00.</p>
    <p class="metric"><code class="inline">mutation_score</code> <span class="accent-num">am stabilsten</span></p>
    <p class="mdesc">Goodhart-resistente Hidden-Metrik (in keinem Prompt genannt). v6.1 ist der stabilste Workflow — geringste Varianz über Replikate.</p>
    <p class="metric"><span class="lead">Prompt-Hebel</span> <span class="accent-num">+48–64 pp</span></p>
    <p class="mdesc">Example-Mapping vs. Prosa auf der neuen Domäne (Opus 4.6 &amp; Sonnet 4.6, no-thinking) — konkrete Beispiele beseitigen Spec-Mehrdeutigkeit.</p>
  </div>
</div>

<p class="price-line"><span class="red">Qualität hat ihren Preis:</span> v6.1-hybrid verbrennt die meisten Tokens <strong>~33M</strong></p>

<!--
PDF-Seite 18 — das Ergebnis im Detail, zwei Spalten.
Maintainability & Komplexität (niedriger = besser): cognitive_max mit 0 % Ausreißern (Headline-Metrik, v6.1: alle 10 Läufe in [1,7]); mccabe_max / cc_longest_function mit den geringsten Spitzen (strikte Phasenstruktur + Refactor glättet die schlimmste Funktion); smell_total ≈ 2,2 (wenigste Verstöße); code_mass / cc_loc kompakt (weniger zu lesen, reviewen, pflegen).
Correctness & Robustheit (höher = besser): verification_pct 0,28 → 1,00 (externe Acceptance-Suite auf der neuen Kata: reines Vibe-Coding v1/v2 = 0,28; striktes TDD mit Refactor = perfekte 1,00); mutation_score am stabilsten (Goodhart-resistente Hidden-Metrik, geringste Varianz); Prompt-Hebel +48–64 pp (Example-Mapping vs. Prose auf neuer Domäne, Opus 4.6 & Sonnet 4.6, no-thinking).
Pointe: Qualität hat ihren Preis — v6.1-hybrid verbrennt mit ~33M die meisten Tokens.
Ziel: Die Belege konkret untermauern UND ehrlich den Trade-off nennen: bestes Ergebnis, aber teuerster Lauf.
Sagen kann man: „Die Zahlen im Detail. Und ganz ehrlich: Der beste Workflow ist auch der teuerste — rund 33 Millionen Tokens. Qualität kostet, das muss man wissen und bewusst entscheiden."
-->
