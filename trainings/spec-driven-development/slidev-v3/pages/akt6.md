---
layout: section
headline: "Jetzt im Team —\nvom Example Mapping zu OpenSpec"
nologo: true
---

<ChapterMark secno="06" tag="Team-Hands-on · im Repo 🛠" />

<!--
Titelfolie zu Akt 6 (~28 min) — der Haupt-Hands-on im Team.
Ziel: Den Höhepunkt ankündigen — jetzt geht ihr den ganzen Weg an EUREM eigenen Feature: erst Example Mapping, dann digitalisieren, dann OpenSpec aufsetzen und die Maps in den Propose-Workflow schieben.
Was du sagen kannst: „Jetzt seid ihr dran — im Team, am eigenen Feature. Vier Schritte: Erst macht ihr Example Mapping auf dem Miro-Board. Dann digitalisiert ihr die Maps mit einem Skill zu Markdown. Dann installiert ihr OpenSpec in eurem Repo. Und zum Schluss schiebt ihr die Maps in den OpenSpec-Propose-Workflow."
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">Euer Weg — vier Schritte</h2>
<div class="flow" style="margin-top:0.6em">
  <span class="step"><strong>1.</strong> Example Mapping<br><span class="gl">eigenes Feature · Miro</span></span><span class="arrow">→</span>
  <span class="step"><strong>2.</strong> Digitalisieren<br><span class="gl">Skill → Markdown</span></span><span class="arrow">→</span>
  <span class="step"><strong>3.</strong> OpenSpec<br><span class="gl">installieren</span></span><span class="arrow">→</span>
  <span class="step"><strong>4.</strong> Propose<br><span class="gl">Maps einspeisen</span></span>
</div>
<p class="body" style="margin-top:0.9em">Findet euch in <strong>Teams</strong> zusammen. Ihr arbeitet in <strong>eurem eigenen Repo</strong> an einem <strong>echten Feature</strong> von euch.</p>
<p class="note"><strong>Zuerst</strong> kommt das Example Mapping — alles Weitere baut darauf auf. <em class="u">Kein fertiger Code</em> — es geht um die Arbeitsweise.</p>

<!--
Übersicht über den vier-schrittigen Team-Hands-on. Die Reihenfolge ist neu (vom Nutzer gewünscht): Example Mapping ZUERST, dann digitalisieren, dann OpenSpec installieren, dann propose.
Ziel: Den Ablauf als Landkarte setzen; betonen, dass Example Mapping der Startpunkt ist und am EIGENEN Feature gearbeitet wird.
Was du sagen kannst:
• Vier Schritte: 1) Example Mapping für ein eigenes Feature auf dem Miro-Board, 2) die Maps mit einem Skill digitalisieren (Screenshot → Markdown), 3) OpenSpec im eigenen Repo installieren, 4) die digitalisierten Maps in den OpenSpec-Propose-Workflow schieben.
• Ihr arbeitet im Team an einem echten Feature von euch — nicht am Schulungsbeispiel. So nehmt ihr direkt etwas Verwertbares mit.
• Wichtig: Zuerst das Example Mapping. Alles Weitere baut darauf auf — die Maps sind das Material, das am Ende in OpenSpec landet.
• Wieder die Mission: kein fertiger Code, es geht um die Arbeitsweise und das Zusammenspiel der beiden Methoden.
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">Schritt 1 — Example Mapping für euer Feature</h2>
<p class="body">Nehmt ein <strong>eigenes Feature</strong> (oder eine Story aus eurem Backlog) und mappt es im Team auf dem <strong>Miro-Board</strong>. Dort liegen schon <strong>vorbereitete Karten</strong> für Story, Rules, Examples &amp; Open Questions bereit.</p>
<div class="cards" style="margin-top:0.6em">
  <div class="card y"><h3>🟡 Story</h3><p class="lead">euer Feature in einem Satz</p></div>
  <div class="card b"><h3>🔵 Rules</h3><p class="lead">die Geschäftsregeln</p></div>
  <div class="card g"><h3>🟢 Examples</h3><p class="lead">konkrete Fälle pro Regel</p></div>
  <div class="card p"><h3>🔴 Open Q.</h3><p class="lead">Ungeklärtes — nicht raten</p></div>
</div>
<p class="note">Rollen wie geübt: <strong>PEM</strong> moderiert · <strong>QA</strong> treibt Beispiele &amp; Randfälle · <strong>Dev</strong> prüft Machbarkeit.</p>

<!--
Schritt 1 — Example Mapping am eigenen Feature, auf dem vorbereiteten Miro-Board.
Ziel: Die geübte Methode jetzt am echten eigenen Feature anwenden. Das Miro-Board ist vom Trainer mit Karten-Templates vorbereitet.
Was du sagen kannst:
• Nehmt ein echtes eigenes Feature oder eine Backlog-Story — etwas, das ihr ohnehin bald baut.
• Auf dem Miro-Board habe ich euch schon Karten bereitgestellt: für die Story, die Rules, die Examples und die Open Questions. Ihr müsst die Struktur nicht selbst bauen, nur füllen.
• Geht vor wie eben geübt: Story oben, Regeln darunter, pro Regel konkrete grüne Beispiele, alles Unklare auf rote Karten.
• Rollen wie in der Übung: PEM moderiert und fragt heraus, QA treibt Beispiele und Randfälle, Dev meldet Machbarkeit.
• Timebox ansagen. Ziel: eine brauchbare Map mit echten Beispielen und ehrlichen offenen Fragen.
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">Schritt 2 — Maps digitalisieren</h2>
<p class="body">Eure Karten hängen jetzt auf dem Board. Mit einem <strong>bereitgestellten Skill</strong> digitalisiert ihr sie: <strong>Screenshot der Example Map → strukturiertes Markdown</strong>.</p>
<div class="flow" style="margin-top:0.7em">
  <span class="step">📷 Screenshot der Map</span><span class="arrow">→</span>
  <span class="step">🛠 Skill ausführen</span><span class="arrow">→</span>
  <span class="step"><code class="inline">example-map.md</code></span>
</div>
<p class="note" style="margin-top:0.8em">Skill aus dem bereitgestellten Repo: <code class="inline">github.com/BenjaminFont/example-mapping-skills</code> — Installation/Aufruf siehe README.</p>

<!--
Schritt 2 — die Example Maps mit einem bereitgestellten Skill digitalisieren (Screenshot → Markdown).
Ziel: Den Übergang von der analogen/visuellen Map zu maschinenlesbarem Material zeigen — die Brücke zu OpenSpec.
WICHTIG / TODO: Der konkrete Repo-Link und der Skill-Name werden vom Nutzer noch geliefert — Platzhalter <REPO-LINK> ersetzen, sobald bekannt.
Was du sagen kannst:
• Eure Karten hängen auf dem Board. Damit OpenSpec gleich damit arbeiten kann, brauchen wir sie als Text.
• Dafür gibt es einen Skill, den ich euch bereitstelle: Ihr macht einen Screenshot eurer Example Map, gebt ihn dem Skill, und er schreibt euch ein strukturiertes Markdown-File daraus — Story, Rules, Examples, Open Questions sauber aufgeteilt.
• Den Skill findet ihr im bereitgestellten Repo (Link kommt). Installation und genauer Aufruf stehen in der README.
• Ergebnis: pro Map ein example-map.md, das ihr versionieren und weiterverarbeiten könnt.
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">Schritt 3 — OpenSpec installieren</h2>
<p class="body">Jetzt OpenSpec im <strong>eigenen Repo</strong> aufsetzen:</p>
<pre style="margin:0.5em 0"><code class="language-bash">npx openspec@latest init</code></pre>
<ul class="dots compact" style="margin-top:0.3em">
  <li class="b">Legt die Struktur <code class="inline">openspec/</code> mit <code class="inline">specs/</code> &amp; <code class="inline">changes/</code> an</li>
  <li class="g">Registriert die <code class="inline">/opsx:*</code>-Workflows in eurer IDE / Claude Code</li>
  <li class="y">Danach: kurz prüfen, dass <code class="inline">/opsx:propose</code> verfügbar ist</li>
</ul>
<p class="note">Schritt-für-Schritt-Anleitung im bereitgestellten Repo: <code class="inline">github.com/BenjaminFont/example-mapping-skills</code> → <code class="inline">README</code>.</p>

<!--
Schritt 3 — OpenSpec im eigenen Repo installieren, mit kurzer Anleitung.
Ziel: Die Teilnehmer handlungsfähig machen, OpenSpec selbst aufzusetzen.
WICHTIG / TODO: Genauen Install-Befehl und Repo-Link mit dem vom Nutzer bereitgestellten abgleichen. `npx openspec@latest init` ist der übliche Weg; bei abweichendem Setup im Repo-README anpassen. Platzhalter <REPO-LINK> ersetzen.
Was du sagen kannst:
• Jetzt setzt ihr OpenSpec in eurem eigenen Repo auf — ein Befehl: npx openspec@latest init.
• Das legt die openspec/-Struktur an (specs/ und changes/) und registriert die /opsx:-Workflows in eurer IDE bzw. Claude Code.
• Prüft kurz, dass /opsx:propose verfügbar ist — dann seid ihr startklar.
• Die ausführliche Schritt-für-Schritt-Anleitung liegt im bereitgestellten Repo in der README — inkl. Voraussetzungen und Troubleshooting.
-->

---
layout: cc
---

<span class="secno">06</span>
<h2 class="slash">Schritt 4 — Maps in den Propose-Workflow</h2>
<p class="body">Füttert OpenSpec mit eurem digitalisierten Material und lasst die Planung erzeugen:</p>
<div class="flow" style="margin-top:0.6em">
  <span class="step"><code class="inline">example-map.md</code></span>
  <span class="step">+ <code class="inline">story.md</code> <span class="gl">falls vorhanden</span></span><span class="arrow">→</span>
  <span class="step"><code class="inline">/opsx:propose</code></span><span class="arrow">→</span>
  <span class="step">proposal · spec · design · tasks</span>
</div>
<p class="body" style="margin-top:0.8em">Die <strong>grünen Karten</strong> werden zu <strong>Scenarios</strong> in der Delta-Spec, die <strong>roten</strong> zu <strong>Open Questions</strong> im Proposal — genau wie geübt, jetzt automatisch als Input.</p>
<p class="note">Stopp, sobald die Planung steht. <em class="u">Kein Code</em> — der Wert liegt in der durchgängigen Arbeitsweise.</p>

<!--
Schritt 4 — die digitalisierten Example Maps (plus optional ein Story-File) in den OpenSpec-Propose-Workflow geben.
Ziel: Den Kreis schließen — die in Schritt 1–2 erzeugten Maps werden zum Input für OpenSpec. So sehen die Teilnehmer, wie Example Mapping und OpenSpec konkret ineinandergreifen.
Was du sagen kannst:
• Jetzt kommt alles zusammen: Ihr gebt OpenSpec eure digitalisierten Maps — das example-map.md — und, falls ihr eins habt, ein Story-File dazu.
• Damit ruft ihr /opsx:propose auf. OpenSpec erzeugt daraus den Change-Ordner: proposal, Delta-Spec, design, tasks.
• Der schöne Effekt: die grünen Karten landen als Scenarios in der Delta-Spec, die roten als Open Questions im Proposal — genau die Zuordnung, die wir vorhin von Hand gemacht haben, jetzt automatisch aus eurem Material.
• Stopp, sobald die Planung steht. Wir implementieren nicht — der Wert liegt darin, den durchgängigen Weg einmal gegangen zu sein: vom gemeinsamen Mapping bis zur generierten OpenSpec-Planung.
-->

---
layout: cc
variant: center
---

<p class="huge">Synthese &amp; Review</p>

<!--
Abschluss-/Übergangsfolie nach dem Team-Hands-on — bewusst reduziert auf zwei Wörter.
Ziel: Klarer Schnitt in die gemeinsame Reflexion. Keine Inhalte, nur die Überschrift.
Was du sagen kannst: „Lasst uns gemeinsam zurückblicken — was habt ihr erlebt, was nehmt ihr mit?"
-->
