---
layout: section
secno: "04"
headline: Example Mapping
nologo: true
---

<p class="lead">Was, warum &amp; wie</p>

<!--
Titelfolie zu Akt 4 (~12 min) — die Methode, bevor wir sie üben.
Ziel: Example Mapping in drei Schritten einführen: WAS ist es, WARUM machen wir es, WIE läuft es. Danach (Akt 5) wird es geübt.
Sagen kannst du: „Wir schauen uns Example Mapping in drei Schritten an: erst was es ist, dann warum wir es machen, dann wie es konkret abläuft. Danach üben wir es direkt selbst."
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Was — eine kollaborative Methode</h2>
<p class="body" style="margin-top:0.2em">Example Mapping ist eine <strong>schnelle Workshop-Methode</strong>, um eine Story <em>vor</em> der Umsetzung gemeinsam zu durchdringen — mit konkreten <strong>Beispielen</strong> statt abstrakter Anforderungen.</p>
<ul class="dots compact" style="margin-top:0.6em">
  <li class="g"><strong>Kollaborativ</strong> — PM/PO, QA und Dev sitzen zusammen</li>
  <li class="b"><strong>Beispiel-getrieben</strong> — man redet in konkreten Fällen, nicht in Prosa</li>
  <li class="y"><strong>Timeboxed</strong> — wenige Minuten pro Story, Karten an Wand/Board</li>
  <li class="p"><strong>Erprobt</strong> — Matt Wynne, ~2015; aus der BDD-Welt</li>
</ul>
<p class="note">Ergebnis: ein geteiltes Verständnis — und konkrete Beispiele, mit denen man weiterarbeiten kann.</p>

<!--
WAS — was Example Mapping ist (vom Nutzer als erste Folie gewünscht).
Ziel: Die Methode einordnen, bevor wir Nutzen (warum) und Mechanik (wie) zeigen.
Was du sagen kannst:
• Example Mapping ist eine schnelle, kollaborative Workshop-Methode, um eine User-Story VOR der Umsetzung gemeinsam zu durchdringen — und zwar über konkrete Beispiele statt abstrakter Anforderungstexte.
• Kollaborativ: die relevanten Rollen sitzen zusammen — PM/PO (Fachsicht), QA (Randfälle), Dev (Machbarkeit).
• Beispiel-getrieben: statt „das System soll robust mit Eingaben umgehen" sagt man „bei Eingabe X passiert Y". Konkret, überprüfbar.
• Timeboxed: pro Story nur wenige Minuten; gearbeitet wird mit farbigen Karten an einer Wand oder einem Board.
• Erprobt: die Methode stammt von Matt Wynne (~2015) aus der BDD-Community — nichts Exotisches.
• Ergebnis ist ein geteiltes Verständnis plus konkrete Beispiele, mit denen das Team direkt weiterarbeitet.
-->

---
layout: cc
variant: center
---

<span class="secno">04</span>
<p class="lead">Warum — es ergänzt OpenSpec</p>
<div class="flow" style="margin-top:0.6em;justify-content:center">
  <span class="step">🟢 grüne Karten</span><span class="arrow">→</span>
  <span class="step"><code class="inline">#### Scenario:</code> in den Requirements</span>
</div>
<div class="flow" style="margin-top:0.5em;justify-content:center">
  <span class="step">🔴 rote Karten</span><span class="arrow">→</span>
  <span class="step">Open Questions im <code class="inline">proposal.md</code></span>
</div>
<p class="big" style="margin-top:0.9em">Mehr <span class="accent">Qualität</span> durch granularere<br>Akzeptanzkriterien.</p>
<p class="note" style="margin-top:0.6em">Und: Regeln + konkrete Beispiele sind <strong>ideales Futter für LLMs</strong> — Agenten setzen Anforderungen damit deutlich treffsicherer um als mit Prosa. Nicht nur Menschen profitieren.</p>

<!--
WARUM — warum man Example Mapping macht (vom Nutzer gewünscht): als Methode, die OpenSpec ergänzt und durch granularere Akzeptanzkriterien mehr Umsetzungsqualität sichert. Plus: Regeln+Beispiele sind ideales Futter für LLMs.
Ziel: Den Nutzen klarmachen — die beiden Methoden greifen ineinander, und das Format hilft Mensch UND Agent.
Was du sagen kannst:
• OpenSpec gibt uns die FORM: Requirements mit Scenarios. Aber es sagt nicht, woher die richtigen, vollständigen Scenarios kommen. Genau die liefert Example Mapping.
• Die grünen Karten — die konkreten Beispiele — werden direkt zu #### Scenario:-Einträgen in den Requirements der Delta-Spec. Das sind die Akzeptanzkriterien.
• Die roten Karten — offene Fragen — wandern in die Open Questions des proposal.md. Nichts wird stillschweigend geraten.
• Der eigentliche Gewinn: mehr Qualität in der Umsetzung durch GRANULARERE Akzeptanzkriterien. Je mehr konkrete Beispiele und Randfälle vorher herausgearbeitet sind, desto weniger Lücken und Missverständnisse bei der Umsetzung.
• Wichtiger Zusatz: Regeln plus konkrete Beispiele sind ideales Futter für LLMs. Agenten setzen Anforderungen, die als klare Regeln und konkrete Input→Ergebnis-Beispiele vorliegen, deutlich treffsicherer um als vage Prosa — Few-Shot-artig. Das Format nützt also nicht nur dem Menschen, sondern macht auch den Coding-Agenten besser.
• PM/PO, QA und Dev ringen diese Beispiele gemeinsam ab — das ist die Korrektheit, die ein Tool allein nicht liefern kann.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Wie — vier Karten</h2>
<div class="cards">
  <div class="card y"><h3>🟡 Story</h3><p class="lead">Die eine User-Story, um die es geht.</p></div>
  <div class="card b"><h3>🔵 Rules</h3><p class="lead">Die Geschäftsregeln dahinter.</p></div>
  <div class="card g"><h3>🟢 Examples</h3><p class="lead">Konkrete Fälle pro Regel: Input → erwartetes Ergebnis.</p></div>
  <div class="card p"><h3>🔴 Open Questions</h3><p class="lead">Ungeklärtes — wird <em class="u">nicht</em> geraten.</p></div>
</div>
<p class="note">Kerndisziplin: <strong>facilitate, do not invent</strong> — der Moderator kennt die Domäne nicht, das Team schon. Niemals Regeln/Beispiele erfinden, immer fragen.</p>

<!--
WIE — die vier Kartenfarben (die Mechanik). Bleibt wie gehabt; jetzt als dritter Schritt nach was/warum.
Ziel: Das Format einführen, das die Gruppen gleich selbst anwenden.
Was du sagen kannst:
• Gelb = Story: die eine User-Story, um die es geht.
• Blau = Rules: die Geschäftsregeln, die für die Story gelten.
• Grün = Examples: konkrete Fälle pro Regel — Input und erwartetes Ergebnis. Das sind Proto-Szenarien (Given/When/Then in spe).
• Rot = Open Questions: alles Ungeklärte. Wichtig: wird dokumentiert, NICHT geraten.
• Die Kerndisziplin: facilitate, do not invent. Der Moderator (oft der PEM/PM) kennt die Domäne nicht so gut wie die Fachleute. Er fragt heraus, er erfindet nichts. Eine erfundene Map sieht vollständig aus, kodiert aber nur die Annahmen des Moderators — und ist damit gefährlich.
• Praxis: timeboxen, eine Karte nach der anderen; lieber viele kleine konkrete Beispiele als abstrakte Regeln.
• Brücke: Genau das üben wir jetzt gemeinsam — am Rinder-Tinder-Avatar-Feature.
-->
