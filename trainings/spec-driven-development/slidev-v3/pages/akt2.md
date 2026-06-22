---
layout: section
secno: "02"
headline: "Spec-Driven Development\nmit OpenSpec"
nologo: true
---

<p class="lead">Was es ist — und warum OpenSpec dafür passt</p>

<!--
Titelfolie zu Akt 2 (~15 min).
Ziel: Den Begriff Spec-Driven Development einführen und dann zeigen, warum OpenSpec das passende Werkzeug dafür ist.
Sagen kannst du: „Wir haben gesehen, was eine Spec ist. Jetzt: Was heißt Spec-Driven Development konkret — und warum nehmen wir dafür OpenSpec?"
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Was ist Spec-Driven Development?</h2>
<p class="body" style="margin-top:0.2em">Die <strong>Spec kommt vor dem Code</strong> — und bleibt der Bezugspunkt. Nicht „erst bauen, dann dokumentieren", sondern: erst das <strong>WAS/WARUM</strong> klären, dann den Agenten dagegen bauen lassen.</p>
<div class="flow" style="margin-top:0.8em">
  <span class="step"><strong>Spec</strong><br><span class="gl">WAS &amp; WARUM</span></span><span class="arrow">→</span>
  <span class="step"><strong>Plan</strong><br><span class="gl">WIE</span></span><span class="arrow">→</span>
  <span class="step"><strong>Code</strong><br><span class="gl">Umsetzung</span></span><span class="arrow">→</span>
  <span class="step"><strong>Abnahme</strong><br><span class="gl">gegen die Spec</span></span>
</div>
<ul class="dots compact" style="margin-top:0.8em">
  <li class="g">Die Spec ist die <strong>geteilte Quelle</strong> für Mensch und KI-Agent</li>
  <li class="b">Sie bleibt <strong>lebendig</strong> — wird nicht nach dem Bauen weggeworfen</li>
  <li class="y">Gegen sie wird <strong>abgenommen</strong> — sie ist das Kriterium für „fertig &amp; richtig"</li>
</ul>

<!--
NEU (vom Nutzer gewünscht): Eine Folie, die kurz erklärt, was Spec-Driven Development ist — ersetzt die frühere Kernproblem- und Vergleichstabellen-Folie.
Ziel: Den Begriff sauber definieren, bevor wir bei OpenSpec ins Detail gehen. Knüpft an Akt 1 an (WAS/WARUM vs. WIE, Abnahme).
Was du sagen kannst:
• Spec-Driven Development heißt im Kern: Die Spezifikation kommt VOR dem Code und bleibt der Bezugspunkt. Nicht erst bauen und hinterher dokumentieren, sondern erst das WAS und WARUM klären, dann bauen — auch und gerade, wenn ein KI-Agent baut.
• Der Ablauf: Spec (WAS/WARUM) → Plan (WIE) → Code → Abnahme gegen die Spec. Genau die Trennung aus Akt 1.
• Drei Eigenschaften, die es ausmachen: Die Spec ist die geteilte Quelle für Mensch UND Agent; sie bleibt lebendig (wird nicht weggeworfen); und gegen sie wird abgenommen — sie ist das objektive „fertig & richtig"-Kriterium.
• Es gibt mehrere Frameworks dafür (spec-kit, BMAD, OpenSpec). Wir nehmen OpenSpec — warum, zeigt die nächste Folie.
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Warum wir OpenSpec wählen</h2>
<ul class="dots">
  <li class="g"><strong>Brownfield-first</strong> — passt auf bestehenden Code, nicht nur grüne Wiese</li>
  <li class="b"><strong>Delta statt Voll-Spec</strong> — beschreibt nur <code class="inline">ADDED / MODIFIED / REMOVED</code></li>
  <li class="y"><strong>Lebende Verhaltens-Spec</strong> — beim <code class="inline">sync</code> werden Specs per <strong>Merge</strong> automatisch aktuell gehalten</li>
  <li class="p"><strong>Leicht &amp; fluid</strong> — „actions, not phases", reines Markdown</li>
</ul>
<p class="note">Genau das passt zu Teams, die <strong>bestehende Produkte weiterentwickeln</strong> — und zu unserer Mission: Planung als gemeinsame Arbeitsweise.</p>

<!--
Die Begründung für die Tool-Wahl — die vier Stärken von OpenSpec.
Ziel: Die Teilnehmer sollen verstehen, warum dieser Workshop OpenSpec in den Mittelpunkt stellt — es ist die leichteste, lebendigste, am besten zu echten Projekten passende Option.
Was du sagen kannst:
• Brownfield-first: Die meisten von uns arbeiten an bestehendem Code, nicht auf grüner Wiese. OpenSpec ist genau dafür gemacht.
• Delta statt Voll-Spec: Man beschreibt nicht das ganze System neu, sondern nur die Änderung — was hinzukommt, sich ändert, wegfällt. Klein, fokussiert, mehrere parallel.
• Lebende Verhaltens-Spec: Beim sync-Schritt werden die Delta-Specs per Merge in die lebende Domänen-Spec übernommen — so bleiben die Specs automatisch aktuell, ohne dass jemand sie von Hand fortschreibt. Das schaut sich gleich der Lebenszyklus im Detail an.
• Leicht & fluid: „actions, not phases" — man darf Schritte überspringen, iterieren. Reines Markdown.
• Brücke zu Akt 3: Genau wie das im Detail funktioniert — die zwei Verzeichnisse, die Granularität, der Lebenszyklus und welches Dokument für welche Rolle ist — schauen wir uns jetzt an.
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Use Cases — wann Spec-Driven, wann nicht</h2>
<div class="two-col" style="margin-top:0.3em">
  <div class="card g">
    <h3>✓ Lohnt sich</h3>
    <ul class="dots compact" style="margin-top:0.2em">
      <li class="g">Verhalten mit <strong>echten Geschäftsregeln</strong> &amp; Edge Cases</li>
      <li class="g"><strong>Mehrere Rollen</strong> müssen sich einig werden (PM · QA · Dev)</li>
      <li class="g">Brownfield: Feature in <strong>bestehendem</strong> System</li>
      <li class="g">Wissen soll <strong>überdauern</strong> — nicht nur „einmal bauen"</li>
    </ul>
  </div>
  <div class="card p">
    <h3>✗ Eher Overhead</h3>
    <ul class="dots compact" style="margin-top:0.2em">
      <li class="p"><strong>Wegwerf</strong>-Prototyp, Spike, Experiment</li>
      <li class="p">Triviale, regelarme Änderung (Tippfehler, Style)</li>
      <li class="p"><strong>Solo</strong> &amp; klar im Kopf — kein Abstimmbedarf</li>
      <li class="p">Reine Exploration, Richtung noch <strong>unklar</strong></li>
    </ul>
  </div>
</div>
<p class="note">Faustregel: Spec-Driven lohnt, wo <strong>Verhalten geteilt, geprüft und erhalten</strong> werden muss. Nicht Dogma — <em class="u">Werkzeug nach Situation</em>.</p>

<!--
NEU (vom Nutzer als 4. Mission-Outcome gewünscht): Wann sollte man Spec-Driven arbeiten — und wann nicht. Bewusst als Abschluss des Theorieteils (Ende Akt 2), bevor es in die OpenSpec-Mechanik (Akt 3) geht.
Ziel: Erwartungen kalibrieren und Dogmatismus vermeiden — die Teilnehmer sollen einschätzen können, wann sich der Aufwund lohnt. Das nimmt auch den Einwand „das ist mir zu schwer für alles" vorweg.
Was du sagen kannst:
• Lohnt sich, wenn: Es echtes Verhalten mit Geschäftsregeln und Edge Cases gibt (da zahlt sich das Herausarbeiten von Beispielen aus); wenn mehrere Rollen sich einig werden müssen — PM, QA, Dev — und ein geteiltes, prüfbares Verständnis brauchen; im Brownfield, wenn ein Feature in ein bestehendes System eingebettet wird; und wenn das Wissen überdauern soll, statt nur einmalig gebaut zu werden.
• Eher Overhead, wenn: Es ein Wegwerf-Prototyp, Spike oder Experiment ist; bei trivialen, regelarmen Änderungen (Tippfehler, Styling); wenn man solo arbeitet und die Sache klar im Kopf hat, also niemand mit dem man sich abstimmen müsste; und in reiner Exploration, wo die Richtung noch unklar ist — da würde ein harter Contract nur churnen.
• Faustregel: Spec-Driven lohnt sich genau dort, wo Verhalten GETEILT, GEPRÜFT und ERHALTEN werden muss. Es ist kein Dogma, sondern ein Werkzeug — man wählt es nach Situation. Wichtige Sequenz: erst explorieren, wenn es noch unscharf ist; dann, sobald ein Bereich verstanden ist, spec-driven festzurren.
• Brücke zu Akt 3: Für die Fälle links schauen wir uns OpenSpec jetzt im Detail an.
-->
