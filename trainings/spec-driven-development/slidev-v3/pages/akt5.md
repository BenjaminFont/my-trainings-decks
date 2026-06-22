---
layout: section
headline: Example Mapping üben
nologo: true
---

<ChapterMark secno="05" tag="Plenum · Rinder-Tinder 🐮" />

<!--
Titelfolie zu Akt 5 (~23 min) — der erste Hands-on-Teil.
Ziel: Markieren, dass wir jetzt selbst mappen — am echten Rinder-Tinder-Feature aus Akt 3 (GenAI-Avatar), damit die Methode direkt am Workshop-Beispiel geübt wird.
Was du sagen kannst: „Jetzt üben wir Example Mapping gemeinsam — und zwar am selben Feature wie eben: dem GenAI-Avatar im Rinder-Tinder. Wir haben zwei Regeln vorgegeben, den Rest malen wir gemeinsam aus."
-->

---
layout: cc
---

<span class="secno">05</span>
<h2 class="slash">Unser Feature: GenAI-Avatar 🐮</h2>
<div class="em-card em-story" style="font-size:0.85em">🟡 <strong>Story:</strong> Als Rinder-Tinder-Nutzer möchte ich mir per Prompt ein KI-Avatar als Profilbild erzeugen.</div>
<div class="em-row" style="margin-top:0.5em">
  <div class="em-card em-rule" style="font-size:0.8em">🔵 <strong>Regel:</strong> Der Prompt muss zum Thema „Rind" passen.</div>
  <div class="em-card em-rule" style="font-size:0.8em">🔵 <strong>Regel:</strong> Max. 3 Generierungen pro Tag und Nutzer.</div>
</div>
<p class="note" style="margin-top:0.8em">Zwei Regeln sind vorgegeben — die <strong>grünen</strong> Beispiele und <strong>roten</strong> Fragen malen wir gleich gemeinsam aus.</p>

<!--
Das Beispiel: GenAI-Avatar im Rinder-Tinder (dasselbe Feature wie im Lebenszyklus aus Akt 3).
Ziel: Example Mapping direkt am Workshop-Feature üben, mit zwei vorgegebenen Regeln als Startpunkt — genug Randfälle für eine echte Übung.
Was du sagen kannst:
• Die Story: Ein Nutzer will sich per Text-Prompt ein KI-Avatar als Profilbild generieren — genau das Feature, das wir eben im OpenSpec-Lebenszyklus durchgespielt haben.
• Zwei Regeln habe ich schon gesetzt: der Prompt muss thematisch zum Rind passen (kein beliebiges Bild), und es gibt ein Limit von 3 Generierungen pro Tag und Nutzer (Kosten/Missbrauch).
• Mehr nicht — den Rest erarbeiten wir gemeinsam: Welche konkreten Beispiele fallen euch ein? Was ist ein gültiger Prompt, was ein abgelehnter? Was passiert beim 4. Versuch? Und welche Fragen sind noch offen?
• Gute Randfälle zum Anregen: „Rind im Weltall" (ok?), „Auto" (Ablehnung), genau die 3. vs. 4. Generierung, leerer Prompt, anstößiger Prompt.
-->

---
layout: cc
---

<span class="secno">05</span>
<h2 class="slash">So sieht ein fertiges Mapping aus</h2>
<div class="two-col" style="margin-top:0.3em;gap:1.5em;align-items:flex-start">
  <div style="flex:1">
    <div class="em-card em-story">🟡 <strong>Story:</strong> Avatar per Prompt erzeugen</div>
    <div class="em-card em-rule">🔵 <strong>Regel:</strong> Prompt muss zum Thema „Rind" passen</div>
    <div class="em-row">
      <div class="em-card em-ex">🟢 „Rind am Strand" → erzeugt ✓</div>
      <div class="em-card em-ex">🟢 „schnelles Auto" → abgelehnt ✗</div>
      <div class="em-card em-ex">🟢 leerer Prompt → Hinweis ✗</div>
    </div>
    <div class="em-card em-rule">🔵 <strong>Regel:</strong> max. 3 pro Tag</div>
    <div class="em-row">
      <div class="em-card em-ex">🟢 4. Versuch am Tag → blockiert ✗</div>
    </div>
    <div class="em-card em-q">🔴 Wer entscheidet, ob ein Prompt „zum Thema" passt?</div>
  </div>
  <div style="flex:1">
    <p class="note" style="margin:0 0 0.4em">Aus den grünen Karten wird:</p>
    <pre style="margin:0"><code class="language-gherkin">Scenario: gültiger Prompt&#10;  Given ein Nutzer im Profil-Editor&#10;  When  er "Rind am Strand" absendet&#10;  Then  wird ein Avatar erzeugt&#10;&#10;Scenario: Tageslimit erreicht&#10;  Given der Nutzer hat heute 3 erzeugt&#10;  When  er ein viertes Mal absendet&#10;  Then  wird er blockiert</code></pre>
    <p class="note" style="margin-top:0.6em">🔴 → Open Question im <code class="inline">proposal.md</code></p>
  </div>
</div>

<!--
Ein fertig gemapptes Beispiel als Muster — am Rinder-Tinder-Avatar-Feature. Links die vier Kartenfarben, rechts wohin die grünen Karten wandern.
Ziel: Den Gruppen ein konkretes Zielbild geben, bevor (oder nachdem) sie selbst mappen — und nochmal sichtbar machen: grüne Karte = Szenario, rote Karte = Open Question.
Was du sagen kannst:
• Links das fertige Mapping: die Story, die zwei vorgegebenen Regeln, pro Regel konkrete Beispiele mit Ergebnis (✓/✗), und eine rote offene Frage.
• Achtet auf die Randfälle: „Rind am Strand" als gültiger Prompt, „schnelles Auto" als thematisch abgelehnter, der leere Prompt, und vor allem die Grenze beim Tageslimit — der 4. Versuch wird blockiert. Solche Grenzfälle sind das Wertvollste am Mapping.
• Die rote Karte hier ist bewusst knifflig: Wer oder was entscheidet, ob ein Prompt „zum Thema Rind" passt? Ein Klassifikator? Eine Moderation? Das ist nicht geraten, sondern offen — kommt ins proposal.md.
• Rechts: Jede grüne Karte wird zu einem Given/When/Then-Szenario — genau das Format, das in die OpenSpec-Requirements wandert (specs/profile/spec.md).
• Das ist das Muster, das ihr gleich selbst erzeugt.
-->

---
layout: cc
---

<span class="secno">05</span>
<h2 class="slash">Jetzt ihr — gemeinsam im Plenum</h2>
<p class="body">Wir mappen das <strong>Avatar-Feature</strong> zusammen auf dem <strong>Miro-Board</strong>. Diese drei Regeln nehmen wir uns vor:</p>
<div class="em-row" style="margin-top:0.5em">
  <div class="em-card em-rule" style="font-size:0.74em">🔵 <strong>Regel 1:</strong> Free-Nutzer 1 Avatar/Tag · Premium bis 3/Tag.</div>
  <div class="em-card em-rule" style="font-size:0.74em">🔵 <strong>Regel 2:</strong> Anstößige oder themenfremde Prompts werden abgelehnt.</div>
  <div class="em-card em-rule" style="font-size:0.74em">🔵 <strong>Regel 3:</strong> Der Avatar wird erst nach Bestätigung als Profilbild gesetzt.</div>
</div>
<div class="two-col" style="margin-top:0.7em">
  <div class="card b"><h3>Rollen</h3><p class="lead"><strong>PEM</strong> moderiert · <strong>QA</strong> treibt Beispiele &amp; Randfälle · <strong>Dev</strong> prüft Machbarkeit.</p></div>
  <div class="card g"><h3>Spielregeln</h3><p class="lead">Konkrete Beispiele statt abstrakter Regeln · Unklares wird <strong>rot</strong> · <em class="u">facilitate, do not invent</em>.</p></div>
</div>

<!--
Die Übergabe ins gemeinsame Mapping auf dem Miro-Board — mit drei konkreten Geschäftsregeln, an denen das Plenum das Example Mapping macht.
Ziel: Das Plenum mit klarem Material loslassen — drei Regeln, die genug Randfälle für eine echte Mapping-Übung bieten.
Die drei Regeln (bewusst so gewählt, dass sie Grenzfälle erzeugen):
• Regel 1 — Free 1/Tag, Premium bis 3/Tag: Randfälle wie „Free-Nutzer 2. Versuch → blockiert", „Premium 4. Versuch → blockiert", „Free-Nutzer wird Premium am selben Tag → zählt das Kontingent neu?". Schöne offene Frage fürs Mapping.
• Regel 2 — anstößige/themenfremde Prompts abgelehnt: „Auto" → abgelehnt (themenfremd), „Gewaltdarstellung" → abgelehnt (anstößig), Graubereich „Rind im Krankenhaus" → wer entscheidet? Rote Karte.
• Regel 3 — Avatar erst nach Bestätigung gesetzt: „Nutzer bestätigt → wird Profilbild", „Nutzer verwirft → altes Bild bleibt", „Nutzer schließt Dialog → was passiert mit dem generierten Bild?".
Was du sagen kannst:
• Wir machen das gemeinsam auf dem Miro-Board — Link/QR einblenden (vorbereiten!).
• Wir nehmen uns diese drei Regeln vor. Pro Regel sammeln wir gemeinsam konkrete grüne Beispiele (Input → Ergebnis) und schreiben alles Unklare auf rote Karten.
• Rollen: Der PEM moderiert (fragt, erfindet nicht), QA treibt Beispiele und Randfälle, Dev meldet Machbarkeit/Knackpunkte.
• Spielregeln: lieber viele kleine konkrete Beispiele als abstrakte Regeln; Unklares wird rot, nicht geraten; facilitate, do not invent.
• Timebox: z.B. 12–15 min mappen, dann kurz gemeinsam anschauen.
-->

---
layout: cc
---

<span class="secno">05</span>
<h2 class="slash">Worauf ihr beim Mappen achtet</h2>
<ul class="dots">
  <li class="g">Pro Regel <strong>konkrete grüne Beispiele</strong>: Input → erwartetes Ergebnis</li>
  <li class="b">Vor allem <strong>Randfälle &amp; Grenzen</strong> — genau an der Schwelle (3. vs. 4. Avatar)</li>
  <li class="p">Alles Unklare wird eine <strong>rote Karte</strong> — nicht geraten</li>
</ul>
<p class="note">Ziel ist nicht Vollständigkeit — sondern dass ihr den <strong>Ablauf</strong> einmal gemeinsam erlebt habt.</p>

<!--
Begleitfolie fürs Plenum-Mapping — was beim Mappen wichtig ist. Ausgelagert von der vollen Auftragsfolie, damit die Regeln Platz haben.
Ziel: Während des Mappens als ruhige Referenz stehen lassen.
Was du sagen kannst:
• Pro Regel sammeln wir konkrete grüne Beispiele — Input und erwartetes Ergebnis, keine abstrakten Umformulierungen der Regel.
• Besonders wertvoll sind Randfälle und Grenzen: genau an der Schwelle, z.B. der 3. vs. der 4. Avatar am Tag, Free vs. Premium genau beim Upgrade.
• Alles, was wir nicht sicher beantworten können, kommt auf eine rote Karte — wir raten nicht, wir notieren die offene Frage.
• Erwartung: Es geht nicht um ein vollständiges Mapping, sondern darum, den Ablauf einmal gemeinsam erlebt zu haben.
-->
