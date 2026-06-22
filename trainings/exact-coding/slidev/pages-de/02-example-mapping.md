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
class: tight-dots
---

<span class="secno">02</span>
<h2 class="slash">Example Mapping — WHAT's that?!</h2>

<ul class="dots">
  <li class="y"><strong>Eine kollaborative Discovery-Technik:</strong> Ein strukturiertes Gespräch, mit dem Agile Teams Anforderungen klären und ein gemeinsames Verständnis erreichen, bevor die Entwicklung startet.</li>
  <li class="b"><strong>Das „Vier-Farben"-Framework:</strong> Eine visuelle Methode mit farbigen Karten — Gelb (Stories), Blau (Regeln), Grün (Beispiele) und Rot (Fragen) — um die Logik zu ordnen.</li>
  <li class="g"><strong>Ein Refinement-Werkzeug:</strong> Eine kurze Session (typisch 20–30 Minuten), die eine User Story in ihre konkreten Geschäftsregeln und Edge Cases zerlegt.</li>
  <li class="p"><strong>Eine Brücke zum Testen:</strong> Ein Weg, abstrakte Ideen in konkrete „grüne" Beispiele zu überführen, die zur Grundlage automatisierter Acceptance-Tests werden.</li>
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
  <li class="y"><strong>Schafft gemeinsames Verständnis:</strong> Richtet die „Three Amigos" (Business, Dev, QA) auf das exakte Verhalten eines Features aus und verhindert teure Missverständnisse mitten im Sprint.</li>
  <li class="b"><strong>Deckt fehlende Informationen auf:</strong> Findet Lücken in der Logik oder offene Fragen (rote Karten) schnell, bevor Code entsteht — weniger Tech-Debt und Rework.</li>
  <li class="g"><strong>Vereinfacht die Testerstellung:</strong> Liefert eine fertige Liste konkreter Szenarien (grüne Karten), die sich direkt in automatisierte Acceptance-Tests oder Gherkin-Skripte überführen lässt.</li>
  <li class="p"><strong>Schätzt Stories realistisch:</strong> Macht sichtbar, ob eine Story zu komplex ist; zu viele blaue Karten (Regeln) sind ein klares Signal, die Story aufzuteilen.</li>
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
    <p class="em-caption"><strong>Example Mapping</strong><br><span class="lead">Gemeinsam im Team erarbeitet</span></p>
    <div class="em-card em-story">Story: Kunde bucht einen Termin</div>
    <div class="em-row">
      <div class="em-card em-rule">Regel 1<br>nur Mo–Fr 8–18</div>
      <div class="em-card em-rule">Regel 2<br>min. 24h Vorlauf</div>
    </div>
    <div class="em-row">
      <div class="em-card em-ex">Beispiel<br>Mi 14:00 ✔︎</div>
      <div class="em-card em-ex">Beispiel<br>Sa 10:00 ✘</div>
      <div class="em-card em-ex">Beispiel<br>in 2h ✘</div>
    </div>
    <div class="em-card em-q">? Auch an Feiertagen geschlossen ?</div>
  </div>

  <div class="em-arrows">→</div>

  <div class="em-right">
    <p class="em-caption right"><strong>Was daraus wird</strong><br><span class="lead">Story-Kontext + ausführbare Tests</span></p>
    <div class="em-card em-story">
      <strong>Story-Beschreibung:</strong><br>
      ## Feature: Termin buchen<br>
      Als Kunde möchte ich einen Termin vereinbaren.<br><br>
      <strong>Regeln:</strong>
      <div class="em-row">
        <div class="em-card em-rule">Regel 1<br>nur Mo–Fr 8–18</div>
        <div class="em-card em-rule">Regel 2<br>min. 24h Vorlauf…</div>
      </div>
    </div>
    <div class="em-card em-ex gherkin">
      <strong>Edge-Case-Tests (Gherkin)</strong><br><br>
      Szenario: Sa abgelehnt [Regel 1]<br>
      Wenn ich Sa 10:00 wähle<br>
      Dann wird es abgelehnt<br>
      Und Meldung: „Nur Wochentage"<br><br>
      Szenario: in 2h abgelehnt [Regel 2]<br>
      Wenn Start in 2 Stunden<br>
      Dann wird es abgelehnt<br>
      Und Meldung: „Vorlauf 24h"
    </div>
  </div>
</div>

<!--
PDF-Seite 9 — Example Mapping, wie. Links die Karten-Session, rechts das Ergebnis.
Links: gelbe Story-Karte („Kunde bucht einen Termin"), zwei blaue Regel-Karten (Mo–Fr 8–18; min. 24h Vorlauf), drei grüne Beispiel-Karten (Mi 14:00 ✔, Sa 10:00 ✘, in 2h ✘) und eine rote Frage-Karte („Auch an Feiertagen geschlossen?").
Rechts: daraus wird Story-Kontext + ausführbare Tests — eine Story-Beschreibung mit Regeln und konkrete Gherkin-Szenarien (Wenn/Dann) inklusive erwarteter Fehlermeldungen.
Ziel: Den Übergang von der gemeinsamen Karten-Session zu maschinenlesbaren Acceptance-Tests zeigen — die grünen/roten Beispiele werden zu Gherkin-Szenarien.
Sagen kann man: „Links arbeitet das Team mit Karten. Rechts seht ihr, was daraus wird: eine klare Story plus Edge-Case-Tests in Gherkin. Genau diese Beispiele füttern wir später der KI — sie sind die Brücke zu EXACT."
-->
