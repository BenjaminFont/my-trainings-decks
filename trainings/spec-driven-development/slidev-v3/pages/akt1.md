---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="huge">„Was ist eine<br>Spezifikation?"</p>

<!--
Eröffnungsfrage als Vollbild — ein kurzer Denkanstoß.
Ziel: Das Publikum die intuitive Antwort aktivieren lassen („ein Dokument, das beschreibt, was zu bauen ist"), bevor wir sie schärfen.
Sagen kannst du: Stellt die Frage offen, 10 Sekunden Stille oder zwei Zurufe. Die meisten denken an ein Dokument. Wir schärfen das gleich: Es geht ums Bestimmen und ums Prüfen, nicht ums Dokument an sich.
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<h2 class="slash" style="justify-content:center">Die Wurzel</h2>
<div class="flow etym" style="margin-top:0.7em;justify-content:center">
  <span class="step">specere <span class="gl">sehen</span></span><span class="arrow">→</span>
  <span class="step">species <span class="gl">Art</span></span><span class="arrow">→</span>
  <span class="step">specificare <span class="gl">zuordnen</span></span><span class="arrow">→</span>
  <span class="step">specificatio <span class="gl">Bestimmung</span></span>
</div>
<p class="note">Vom <strong>Sehen</strong> zum <strong>Bestimmen</strong> einer Art — das Vage greifbar machen.</p>

<!--
Die Wortwurzel als Kette: lat. specere (sehen) → species (Art/Gestalt) → spätlat. specificare (einer Art zuordnen) → specificatio.
Ziel: Zeigen, dass „spezifizieren" wörtlich heißt, das Unbestimmte sichtbar und einzeln bestimmbar zu machen — uralt, kein moderner Methoden-Begriff.
Sagen kannst du: Es beginnt beim Sehen. Aus dem Sehen wird das Erkennen einer Art, daraus das Zuordnen zu einer Art, daraus die Spezifikation. Spezifizieren heißt: aus dem Allgemeinen das Einzelne, Bestimmte machen.
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="lead">spezifizieren — wörtlich:</p>
<p class="huge">Das Unbestimmte<br>bestimmt machen.</p>

<!--
Die Kernbedeutung als Vollbild-Aussage.
Ziel: Die Wortwurzel auf einen einprägsamen Satz verdichten.
Sagen kannst du: Das ist die ganze Wurzel in einem Satz. Spezifizieren ist nichts anderes, als Unbestimmtes bestimmt zu machen — das Vage greifbar. Haltet den Gedanken fest, gleich wird daraus ein prüfbarer Anspruch.
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="lead">„specification" — technisch ab 1833</p>
<p class="huge">im Patentrecht</p>
<p class="big" style="margin-top:0.6em">Ein <em class="u">prüfbarer Anspruch</em>.</p>

<!--
Das erste technische Auftreten des Wortes: „specification" ab 1833 im Patentrecht.
Ziel: Den Aha-Moment setzen — schon die allererste technische Spec war ein rechtlich prüfbarer Anspruch.
Sagen kannst du: Im Patentrecht musste die „specification" so präzise sein, dass man einen Anspruch dagegen prüfen und durchsetzen konnte. Das ist die DNA der Spec: nicht „ungefähr so", sondern „dagegen kann man abnehmen". Genau diese Prüfbarkeit braucht heute auch das KI-Coding wieder.
-->

---
layout: cc
variant: center
nologo: true
---

<span class="secno">01</span>
<p class="huge">Wie kam die Spec<br>in die Software?</p>

<!--
Übergangsfolie — Wechsel vom allgemeinen Spec-Begriff zur Software-Geschichte.
Ziel: Die Brücke schlagen: Die uralte Idee der prüfbaren Spec kam in die Softwareentwicklung — und blieb, auch wenn die Form sich änderte.
Sagen kannst du: Wir haben die Wurzel gesehen. Jetzt kurz: Wie kam die Spec in die Software? Die Geschichte ist voller Missverständnisse — Stichwort Waterfall — aber der Zweck blieb derselbe. Drei Stationen genügen.
-->

---
layout: cc
class: dense
---

<span class="secno">01</span>
<h2 class="slash">Stationen auf dem Weg</h2>
<ul class="dots compact">
  <li class="b"><strong>Royce, 1970</strong> — zeichnete die starre Phasenkette (Requirements → Design → Code → Test) und <em class="u">warnte davor</em>. Erst später „Waterfall" genannt.</li>
  <li class="g"><strong>IEEE 830, 1998</strong> — forderte erstmals: Anforderungen müssen <strong>verifizierbar</strong> sein. Richtig gedacht — nur fehlte das Werkzeug.</li>
  <li class="y"><strong>Agile, 2001</strong> — die Spec verschwand nicht, sie <strong>wanderte</strong>: in Tests, Akzeptanzkriterien, Typen, Contracts.</li>
  <li class="p"><strong>ATDD, ~2002</strong> — Acceptance-Test-Driven Development: der <strong>Akzeptanztest</strong> wird zur Spec, vor dem Code.</li>
  <li class="b"><strong>BDD, ~2006</strong> — Behavior-Driven Development (Dan North): Verhalten als <strong>Given/When/Then</strong> — genau die Form, die OpenSpec heute nutzt.</li>
</ul>

<!--
Die Software-Geschichte als Stationen-Timeline (verdichtet aus der Ganztags-Version), jetzt erweitert um ATDD und BDD als Ankerpunkte — der Nutzer wollte diese ausdrücklich dabei haben, weil sie die Brücke zu Given/When/Then und OpenSpec schlagen.
Ziel: Glaubwürdigkeit aufbauen, das Kernmissverständnis korrigieren (die Spec wurde nie überflüssig, sie wechselte die Form) und die Linie bis zu BDD/Given-When-Then ziehen, das in Akt 3/4 wieder auftaucht.
Was du sagen kannst:
• Royce 1970: Er hat die berühmte Phasenkette gezeichnet, sie aber NICHT „Waterfall" genannt und ausdrücklich vor dem starren, einmaligen Durchziehen gewarnt — er empfahl Iteration. Der Mythos kam später. Lehre: Das Phasenmodell scheitert, weil Fehler erst am Ende auffallen und Anforderungen sich während der Bauzeit ändern.
• IEEE 830 (1998): Der SRS-Standard forderte schon, dass jede Anforderung verifizierbar sein muss. Die Forderung war richtig — eingelöst wird sie technisch erst heute mit ausführbaren, gebundenen Specs.
• Agile (2001): „working software over comprehensive documentation" wertet Doku nicht ab, es priorisiert. Die Spezifikation verschwand nicht, sie wanderte in Tests, Akzeptanzkriterien, Typen, Contracts — also in Formen, die nicht unbemerkt veralten.
• ATDD (~2002, Ward Cunningham u.a.): Acceptance-Test-Driven Development. Idee: Der Akzeptanztest wird VOR dem Code festgelegt und ist die eigentliche Spezifikation. Erst wenn er grün ist, ist das Feature fertig.
• BDD (~2006, Dan North): Behavior-Driven Development, aus ATDD hervorgegangen. Beschreibt Verhalten in der Sprache Given/When/Then — lesbar für Fachseite UND Maschine. Genau dieses Format nutzt OpenSpec in seinen Scenarios und wir gleich beim Example Mapping. Das ist der Anker, auf den wir den ganzen Tag zurückkommen.
• Jahreszahlen sind die etablierten Community-Eckdaten, keine exakten Geburtstage — als grobe Orientierung nennen.
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Wozu Specs? Und die wichtigste Trennung</h2>
<ul class="dots compact">
  <li class="y"><strong>Arbeitsteilung</strong> — einer beschreibt das <strong>WAS</strong>, ein anderer baut</li>
  <li class="b"><strong>Abnahme</strong> — ein objektives Kriterium für „fertig &amp; richtig"</li>
</ul>
<div class="two-col" style="margin-top:0.6em">
  <div class="card g">
    <h3>WAS / WARUM → Spec</h3>
    <p class="lead">Business-Requirement, in Domänensprache. Ein <strong>Fachexperte</strong> könnte zustimmen.</p>
  </div>
  <div class="card b">
    <h3>WIE / WANN → Plan</h3>
    <p class="lead">Umsetzung: Dateien, Schritte, Architektur, Tests. Interessiert nur den <strong>Entwickler</strong>.</p>
  </div>
</div>
<p class="note" style="margin-top:0.5em"><strong>Lackmustest:</strong> Lösche einen Satz. Ändert er, was ein <em class="u">Fachexperte</em> zustimmt → <strong>Spec</strong>. Ändert er nur, was ein <em class="u">Entwickler</em> baut → <strong>Plan</strong>. <span class="lead">(Klassisch: Lastenheft vs. Pflichtenheft.)</span></p>

<!--
Zusammengeführte Folie aus den früheren zwei Folien „Wozu Specs? Zwei tragende Zwecke" und „Die wichtigste Trennung: WAS/WARUM vs. WIE" — der Nutzer fand die zwei redundant.
Ziel: In einer Folie beides: warum es Specs gibt (Arbeitsteilung + Abnahme) UND die zentrale Abstraktionsachse WAS/WARUM vs. WIE samt anwendbarem Lackmustest. Diese Trennung strukturiert OpenSpec (spec.md vs. design.md/tasks.md) und Example Mapping.
Was du sagen kannst:
• Zwei tragende Zwecke: Arbeitsteilung (einer beschreibt das WAS, ein anderer baut) und Abnahme (objektives Kriterium für „fertig & richtig"). Klassisch ist das die Trennung Lastenheft (Kunde, WAS) / Pflichtenheft (Lieferant, WIE).
• Daraus folgt die wichtigste Unterscheidung: WAS/WARUM gehört in die Spec — das Geschäfts-Requirement in Domänensprache, ein Fachexperte (PO, Stakeholder) könnte zustimmen, ohne Code zu sehen. WIE/WANN gehört in den Plan — konkrete Dateien, Schritte, Architektur, Tests; interessiert nur den Entwickler.
• Der Lackmustest, den ihr mitnehmt: Nehmt einen Satz, löscht ihn gedanklich. Ändert sich, was ein Fachexperte fachlich zustimmen würde? → Spec. Ändert sich nur, was ein Entwickler baut? → Plan.
• Warum das wichtig ist: Genau diese Trennung macht OpenSpec explizit — das WAS/WARUM lebt in spec.md (Requirements), das WIE in design.md und tasks.md. Und Example Mapping arbeitet auf der WAS-Ebene. Beide Zwecke brauchen ein geteiltes, eindeutiges Verständnis zwischen PM, QA und Dev — das Stichwort für den ganzen Workshop. Wir nutzen den Test den ganzen Tag.
-->

---
layout: cc
variant: center
---

<span class="secno">01</span>
<p class="lead">Heute:</p>
<p class="huge">derselbe alte Zweck,<br>ein neuer Abnehmer —<br>der <span class="accent">KI-Agent</span>.</p>

<!--
Abschluss-/Brückenfolie von Akt 1 zu Akt 2.
Ziel: Den Bogen schließen — die alte Idee der prüfbaren Spec trifft auf einen neuen Akteur, den KI-Agenten, und leitet zu den Frameworks über.
Sagen kannst du: Der Zweck der Spec ist seit jeher derselbe: eine Verständnisgrenze überbrücken und Abnahme ermöglichen. Neu ist der Bauer/Abnehmer: Früher ein anderes Team, heute oft ein KI-Agent — ein nicht-deterministischer Generator, der erst recht eine klare, prüfbare Vorgabe braucht, getrennt in WAS und WIE. Genau dafür gibt es Frameworks. Im nächsten Akt: warum wir uns für OpenSpec entschieden haben.
-->
