---
layout: cc
variant: center
---

<PlayDivider color="blue" title="Example<br>Mapping" />

<!--
PDF-Seite 6 — Kapitel-Trenner „Example Mapping". Blaues Play-Dreieck = Kapitel 02.
Ziel: Überleitung von „warum reicht Vibe Coding nicht" zu „wie kommen wir an gute Beispiele/Tests" — Example Mapping als kollaborative Discovery-Technik.
Sagen kann man: „Zweites Kapitel: Example Mapping — die Technik, mit der wir aus einer vagen Story konkrete Regeln und Beispiele machen."
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Example Mapping — WHAT's that?!</h2>

<ul class="dots">
  <li class="y"><strong>A Collaborative Discovery Technique:</strong> A structured conversation used by Agile teams to clarify requirements and reach a shared understanding before development starts.</li>
  <li class="b"><strong>The "Four-Color" Framework:</strong> A visual method using colored cards — Yellow (Stories), Blue (Rules), Green (Examples), and Red (Questions) — to organize logic.</li>
  <li class="g"><strong>A Refinement Tool:</strong> A quick (typically 20–30 minute) session that breaks down a User Story into its specific business rules and concrete edge cases.</li>
  <li class="p"><strong>A Bridge to Testing:</strong> A way to turn abstract ideas into specific "Green" examples that serve as the foundation for automated acceptance tests.</li>
</ul>

<!--
PDF-Seite 7 — Example Mapping, was ist das. Vier Kernaussagen:
1) Kollaborative Discovery-Technik — strukturiertes Gespräch, das Anforderungen klärt, BEVOR entwickelt wird.
2) Das „Vier-Farben"-Framework — gelbe Karten (Stories), blaue (Rules), grüne (Examples), rote (Questions).
3) Ein Refinement-Tool — kurze 20–30-min-Session, die eine User Story in Regeln und konkrete Edge Cases zerlegt.
4) Eine Brücke zum Testen — aus abstrakten Ideen werden konkrete grüne Beispiele, die zur Grundlage automatisierter Acceptance-Tests werden.
Ziel: Example Mapping als leichtgewichtige, visuelle Methode einführen — die Farbkarten merken, sie tauchen auf der HOW-Folie wieder auf.
-->

---
layout: cc
class: tight-dots
---

<span class="secno">02</span>
<h2 class="slash">Example Mapping — WHY?!</h2>

<ul class="dots">
  <li class="y"><strong>Builds Shared Understanding:</strong> Aligns the "Three Amigos" (Business, Dev, QA) on exactly how a feature should behave, preventing expensive mid-sprint misunderstandings.</li>
  <li class="b"><strong>Exposes Missing Information:</strong> Quickly identifies gaps in logic or unanswered questions (Red cards) before any code is written, reducing technical debt and rework.</li>
  <li class="g"><strong>Simplifies Test Creation:</strong> Provides a ready-made list of concrete scenarios (Green cards) that can be directly converted into automated acceptance tests or Gherkin scripts.</li>
  <li class="p"><strong>Sizes Stories Effectively:</strong> Visually reveals if a story is too complex; if there are too many Blue cards (rules), it's a clear sign the story needs to be split into smaller tasks.</li>
</ul>

<!--
PDF-Seite 8 — Example Mapping, warum. Vier Nutzen:
1) Gemeinsames Verständnis — richtet die „Three Amigos" (Business, Dev, QA) auf das exakte Verhalten aus und verhindert teure Missverständnisse mitten im Sprint.
2) Deckt fehlende Infos auf — Lücken und offene Fragen (rote Karten) werden sichtbar, bevor Code entsteht; weniger Tech-Debt und Rework.
3) Vereinfacht Testerstellung — fertige Liste konkreter Szenarien (grüne Karten), direkt in Acceptance-Tests / Gherkin überführbar.
4) Schätzt Stories realistisch — zu viele blaue Karten (Rules) = Story zu komplex, klares Signal zum Aufteilen.
Ziel: Den geschäftlichen und technischen Wert begründen — Example Mapping zahlt sich vor allem durch frühe Klarheit aus.
-->

---
layout: cc
class: dense
---

<span class="secno">02</span>
<h2 class="slash">Example Mapping — HOW</h2>

<div class="em-how">
  <div class="em-left">
    <p class="em-caption"><strong>Example Mapping</strong><br><span class="lead">Developed together as a team</span></p>
    <div class="em-card em-story">Story: Customer books a meeting</div>
    <div class="em-row">
      <div class="em-card em-rule">Rule 1<br>only Mo–Fr 8–18</div>
      <div class="em-card em-rule">Rule 2<br>min. 24h Lead time</div>
    </div>
    <div class="em-row">
      <div class="em-card em-ex">Example<br>Mi 14:00 ✔︎</div>
      <div class="em-card em-ex">Example<br>Sa 10:00 ✘</div>
      <div class="em-card em-ex">Example<br>in 2h ✘</div>
    </div>
    <div class="em-card em-q">? Closed on the holiday too ?</div>
  </div>

  <div class="em-arrows">→</div>

  <div class="em-right">
    <p class="em-caption right"><strong>What it becomes</strong><br><span class="lead">Story context + executable tests</span></p>
    <div class="em-card em-story">
      <strong>Story Description:</strong><br>
      ## Feature: Book Meeting<br>
      As a customer, I want to schedule an appointment.<br><br>
      <strong>Rules:</strong>
      <div class="em-row">
        <div class="em-card em-rule">Rule 1<br>only Mo–Fr 8–18</div>
        <div class="em-card em-rule">Rule 2<br>min. 24h Lead…</div>
      </div>
    </div>
    <div class="em-card em-ex gherkin">
      <strong>Edge Case Tests (Gherkin)</strong><br><br>
      Scenario: Sa rejected [Rule 1]<br>
      When I select Sa 10:00<br>
      Then it is rejected<br>
      And message: "Weekdays only"<br><br>
      Scenario: rejected in 2h [Rule 2]<br>
      When start in 2 hours<br>
      Then it is rejected<br>
      And message: "Lead time 24h"
    </div>
  </div>
</div>

<!--
PDF-Seite 9 — Example Mapping, wie. Links die Karten-Session, rechts das Ergebnis.
Links: gelbe Story-Karte („Customer books a meeting"), zwei blaue Rule-Karten (Mo–Fr 8–18; min. 24h Lead time), drei grüne Example-Karten (Mi 14:00 ✔, Sa 10:00 ✘, in 2h ✘) und eine rote Frage-Karte („Closed on the holiday too?").
Rechts: daraus wird Story-Kontext + ausführbare Tests — eine Story-Beschreibung mit Rules und konkrete Gherkin-Szenarien (Given/When/Then) inklusive erwarteter Fehlermeldungen.
Ziel: Den Übergang von der gemeinsamen Karten-Session zu maschinenlesbaren Acceptance-Tests zeigen — die grünen/roten Beispiele werden zu Gherkin-Szenarien.
Sagen kann man: „Links arbeitet das Team mit Karten. Rechts seht ihr, was daraus wird: eine klare Story plus Edge-Case-Tests in Gherkin. Genau diese Beispiele füttern wir später der KI — sie sind die Brücke zu EXACT."
-->
