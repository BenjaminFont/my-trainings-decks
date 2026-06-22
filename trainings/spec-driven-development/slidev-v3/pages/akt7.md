---
layout: section
secno: "07"
headline: Synthese &amp; Mitnehmen
nologo: true
---

<p class="lead">Was nehmt ihr mit?</p>

<!--
Titelfolie zu Akt 7 (~10 min) — der Abschluss.
Ziel: Den Bogen schließen und das Erlebte verdichten. Kurz halten — der Wert lag im Tun.
Was du sagen kannst: „Lasst uns das Erlebte kurz einordnen — was die beiden Methoden zusammen leisten, welches Dokument für wen ist, und was ihr konkret mitnehmt."
-->

---
layout: cc
variant: center
---

<span class="secno">07</span>
<p class="lead">Die zwei Methoden im Zusammenspiel</p>
<Pipeline :steps="['Example Mapping', 'Scenarios', 'Requirements', 'OpenSpec-Change']" accentLast />
<div class="two-col" style="margin-top:1em">
  <div class="card g"><h3>Example Mapping</h3><p class="lead">holt die <strong>Korrektheit</strong> — die richtigen Regeln &amp; Beispiele, gemeinsam herausgefragt.</p></div>
  <div class="card b"><h3>OpenSpec</h3><p class="lead">gibt die <strong>Form</strong> — lebende, domänensortierte Spec mit Scenarios.</p></div>
</div>

<!--
Die Synthese in einem Bild: Example Mapping liefert die Korrektheit, OpenSpec die Form.
Ziel: Das zentrale Zusammenspiel verankern, das den ganzen Workshop trägt.
Was du sagen kannst:
• Die Kette: Aus dem Example Mapping kommen konkrete Beispiele, die werden zu Scenarios, die wandern in die Requirements, und das Ganze ist ein OpenSpec-Change.
• Die Arbeitsteilung der beiden Methoden: Example Mapping sichert die KORREKTHEIT — sind das die richtigen Regeln und Beispiele? Das ist Discovery, gemeinsam, herausgefragt. OpenSpec gibt die FORM — eine lebende, nach Domänen sortierte Spec, in der die Scenarios als Akzeptanzkriterien leben.
• Zusammen: eine Planung, die richtig ist UND lebendig bleibt. Keine der beiden Methoden leistet das allein.
-->

---
layout: cc
class: dense
---

<span class="secno">07</span>
<h2 class="slash">Merk-Tabelle: Dokument → Rolle</h2>
<table class="tight">
  <thead><tr><th>Dokument</th><th>Primär für</th><th>Inhalt</th></tr></thead>
  <tbody>
    <tr><td><code class="inline">proposal.md</code></td><td><span class="pill blue">PM · PO · PEM</span></td><td>Warum, Scope, offene Fragen</td></tr>
    <tr><td><code class="inline">spec.md</code> — Scenarios</td><td><span class="pill green">QA + PO</span></td><td>Akzeptanzkriterien (Given/When/Then)</td></tr>
    <tr><td><code class="inline">design.md</code></td><td><span class="pill blue">Dev · Architect</span></td><td>technische Umsetzung</td></tr>
    <tr><td><code class="inline">tasks.md</code></td><td><span class="pill blue">Dev</span></td><td>Arbeitsschritte</td></tr>
  </tbody>
</table>
<p class="note">Die <strong>Scenarios</strong> bleiben die gemeinsame Naht zwischen QA und Dev — fotografiert das mit.</p>

<!--
Die Dokument→Rolle-Tabelle als bewusste Wiederholung — die wichtigste Merk-Folie des Tages.
Ziel: Das zentrale Outcome zum Mitnehmen verdichten. Diese Folie ist die „Spickzettel"-Folie.
Was du sagen kannst:
• Das ist die Folie zum Abfotografieren. proposal.md für PM/PO/PEM, die Scenarios in der Spec für QA und PO, design.md für Dev/Architect, tasks.md für Dev.
• Der Kern, der bleibt: Die Scenarios sind die gemeinsame Naht zwischen QA und Dev — dort treffen sich „was soll es tun" und „wie nehmen wir ab". Genau dort lohnt sich Example Mapping am meisten.
-->

---
layout: cc
---

<span class="secno">07</span>
<h2 class="slash">Was nehmt ihr mit?</h2>
<ul class="dots">
  <li class="g"><strong>OpenSpec</strong> als Brownfield-Default — lebende, domänensortierte Spec</li>
  <li class="b"><strong>Example Mapping</strong> als Ritual zwischen <strong>PEM · QA · Dev</strong></li>
  <li class="y">Die <strong>Rollen-Landkarte</strong> — wer welches Planning-Dokument besitzt</li>
  <li class="p">Eine ehrliche Grenze: <em class="u">gepflegt = Konformität, Korrektheit kommt aus dem Gespräch</em></li>
</ul>
<p class="note">Wer es nicht nur pflegen, sondern <strong>erzwingen</strong> will → ausführbare Contracts (BDD/Tests). Das ist der nächste Schritt — ein eigenes Thema.</p>

<!--
Die Abschlussfolie: das Mitnehmbare in vier Punkten, plus ein ehrlicher Ausblick.
Ziel: Konkretheit am Ende — vier greifbare Dinge, und eine faire Einordnung der Grenze.
Was du sagen kannst:
• Ihr nehmt OpenSpec als Default-Arbeitsweise für bestehende Produkte mit — eine Spec, die lebt.
• Ihr nehmt Example Mapping als gemeinsames Ritual mit — die halbe Stunde, in der PEM, QA und Dev vor dem Bauen die richtigen Beispiele abklären, spart hinten ein Vielfaches.
• Ihr nehmt die Rollen-Landkarte mit — wer welches Dokument besitzt.
• Und eine ehrliche Grenze: OpenSpec hält die Spec gepflegt, das sichert Konformität. Die Korrektheit — ob die Beispiele die richtigen sind — kommt aus dem Gespräch, nicht aus dem Tool.
• Ausblick (ein Satz, nicht vertiefen): Wer die Spec nicht nur pflegen, sondern maschinell erzwingen will, bindet die Scenarios an ausführbare Tests (BDD/Cucumber, strict). Das ist der nächste Schritt und ein eigener Workshop — heute haben wir die Arbeitsweise gelegt, auf der das aufbaut.
• Danke + offene Runde für Fragen.
-->
