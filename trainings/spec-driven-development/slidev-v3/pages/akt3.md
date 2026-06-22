---
layout: section
secno: "03"
headline: "OpenSpec entlang\nseines Lebenszyklus"
nologo: true
---

<p class="lead">propose → apply → verify → sync → archive — Schritt für Schritt</p>

<!--
Titelfolie zu Akt 3 (~20 min) — der inhaltliche Anker des Workshops.
Ziel: Ankündigen, dass wir OpenSpec NICHT abstrakt, sondern entlang seines Lebenszyklus durchgehen — Schritt für Schritt, an einem durchgehenden Beispiel. So wird greifbar, welche Dokumente wann entstehen und was passiert.
Sagen kannst du: „Wir lernen OpenSpec jetzt so kennen, wie man damit arbeitet: entlang seines Lebenszyklus. Fünf Schritte — propose, apply, verify, sync, archive. Pro Schritt schauen wir: Was passiert da, welche Dokumente entstehen, was ist das Ergebnis — und das alles an EINEM durchgehenden Beispiel, das ich euch gleich vorstelle. Davor nur kurz: wie OpenSpec seinen Ordner aufbaut."
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Unser Beispiel: Rinder-Tinder 🐮</h2>
<div class="two-col" style="margin-top:0.2em;align-items:center">
  <div style="flex:0.8">
    <div class="tinder-card" style="font-size:0.82em">
      <div class="tinder-photo">🐮</div>
      <div class="tinder-info"><strong>Rosalinde, 7</strong><br><span>liebt frisches Gras &amp; saftige Weiden</span></div>
      <div class="tinder-actions"><span class="ta-no">✕</span><span class="ta-yes">♥</span></div>
    </div>
  </div>
  <div style="flex:1.2">
    <p class="body">Stellt euch ein <strong>Tinder für Rinder</strong> vor — swipen, matchen, Stall-Dates. Das ist unser bestehendes Produkt (Brownfield).</p>
    <div class="card g" style="margin-top:0.6em">
      <h3>🎯 Das neue Feature</h3>
      <p class="lead">Im Profil ein <strong>GenAI-Avatar</strong>: Nutzer beschreiben per <strong>Prompt</strong> ein Wunsch-Profilbild — die KI generiert es.</p>
    </div>
  </div>
</div>
<p class="note">An genau diesem Feature spielen wir gleich den ganzen OpenSpec-Lebenszyklus durch.</p>

<!--
NEU (vom Nutzer gewünscht): Das durchgehende Beispiel für Akt 3 — „Rinder-Tinder" als bestehendes Produkt, plus das neue Feature „GenAI-Avatar fürs Profil per Prompt". Bewusst verspielt, damit es im Kopf bleibt.
Ziel: Ein konkretes, einprägsames Beispiel etablieren, an dem der gesamte Lebenszyklus (propose→archive) durchgespielt wird. Die Tinder-Karte links macht das Produkt sofort verständlich; das grüne Feld rechts ist das Feature, das wir bauen.
Was du sagen kannst:
• Stellt euch ein Tinder für Rinder vor — ihr wisst, wie Tinder aussieht: eine Karte mit Foto, nach rechts wischen für „gefällt mir", nach links für „nein". Hier eben mit Rindern — Rosalinde, 7, liebt frisches Gras und saftige Weiden.
• Das ist unser bestehendes Produkt — also ein Brownfield-Fall, genau OpenSpecs Stärke.
• Jetzt wollen wir ein neues Feature bauen: Im eigenen Profil soll man sich über ein GenAI-Feature ein Avatar-Profilbild erstellen lassen — man tippt einen Prompt („ein majestätisches Rind im Sonnenuntergang") und die KI generiert das Bild.
• An genau diesem Feature gehen wir jetzt den kompletten OpenSpec-Lebenszyklus durch: propose, apply, verify, sync, archive. Es bleibt bewusst grob — es geht um den Ablauf, nicht um Implementierungsdetails.
• Wir dürfen das auch gemeinsam ausgestalten — ruft gern dazu, welche Regeln so ein Avatar-Feature braucht (dazu später beim Example Mapping mehr).
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Zwei Verzeichnisse</h2>
<div class="two-col" style="margin-top:0.2em;align-items:center">
  <div style="flex:1.05">
    <pre style="margin:0;font-size:0.62em"><code class="language-text">openspec/&#10;├── specs/        ← lebende Wahrheit&#10;│   ├── profile/spec.md  "wie das System&#10;│   ├── matching/spec.md  HEUTE ist"&#10;│   └── chat/spec.md&#10;└── changes/      ← Vorschläge&#10;    ├── add-ai-avatar/  "was sich&#10;    │   ├── proposal.md  ÄNDERN soll"&#10;    │   ├── design.md&#10;    │   ├── tasks.md&#10;    │   └── specs/profile/spec.md  ← Delta&#10;    └── archive/        fertige Changes</code></pre>
  </div>
  <div style="flex:1">
    <ul class="dots compact">
      <li class="g"><strong>specs/</strong> — die lebende Source of Truth pro <strong>Domäne</strong></li>
      <li class="b"><strong>changes/</strong> — jeder Vorschlag in eigenem Ordner</li>
      <li class="y"><code class="inline">specs/</code> wird beim Entwickeln <strong>nie direkt</strong> angefasst</li>
      <li class="p">Erst beim <strong>Archivieren</strong> wird das Delta hineingemerged</li>
    </ul>
  </div>
</div>
<p class="note" style="margin-top:0.5em">Der Trick: Mergen ist der <em class="u">einzige</em> Weg, einen Change abzuschließen → die lebende Spec bleibt zwingend aktuell.</p>

<!--
Das Zwei-Verzeichnis-Modell — das mechanische Herzstück von OpenSpec, jetzt am Rinder-Tinder-Beispiel.
Ziel: Klarmachen, WIE OpenSpec die Spec lebend hält: durch strikte Trennung von „wie es heute ist" (specs/) und „was sich ändern soll" (changes/), mit Merge nur beim Abschluss.
Was du sagen kannst:
• specs/ ist die lebende Wahrheit — eine Datei pro Domäne. Bei Rinder-Tinder z.B. profile, matching, chat — jede beschreibt, wie das System HEUTE ist.
• changes/ enthält Vorschläge — unser neues Feature liegt in changes/add-ai-avatar/ mit proposal, design, tasks und einer Delta-Spec für die profile-Domäne.
• Der entscheidende Kniff: specs/ wird beim Entwickeln NIE direkt angefasst. Man arbeitet immer im changes/-Ordner. Erst beim Archivieren wird das Delta in specs/profile/spec.md hineingemerged.
• Konsequenz: Weil Mergen der einzige Weg ist, einen Change abzuschließen, bleibt die lebende Spec zwingend aktuell. Das ist die Prozessdisziplin, die OpenSpec von den anderen abhebt.
• Den changes/add-ai-avatar/-Ordner merken — genau den bauen wir gleich Schritt für Schritt auf.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Granularität — drei Ebenen</h2>
<div class="flow compact" style="margin-top:0.5em">
  <span class="step"><strong>Domäne</strong><br>= eine Datei</span><span class="arrow">→</span>
  <span class="step"><strong>Requirement</strong><br>kleinste Einheit</span><span class="arrow">→</span>
  <span class="step"><strong>Scenario</strong><br>Given/When/Then</span>
</div>
<pre style="margin:0.8em 0 0"><code class="language-markdown">## Requirements&#10;### Requirement: Avatar aus Prompt erzeugen&#10;The system SHALL aus einem Text-Prompt ein Profilbild generieren.&#10;#### Scenario: gültiger Prompt&#10;- GIVEN ein Nutzer im Profil-Editor&#10;- WHEN er "Rind im Sonnenuntergang" absendet&#10;- THEN wird ein Avatar generiert und angezeigt</code></pre>
<p class="note">Ein Feature ist <strong>kein</strong> eigenes Spec — es sind neue <strong>Requirements in einer bestehenden Domänen-Spec</strong> (hier <code class="inline">profile</code>). Deshalb wuchert <code class="inline">specs/</code> nicht.</p>

<!--
Die Granularität: Domäne → Requirement → Scenario, am Avatar-Beispiel.
Ziel: Verstehen, dass ein Feature nicht zu einer neuen Datei führt, sondern zu neuen Requirements innerhalb einer bestehenden Domänen-Spec (profile) — deshalb bleibt specs/ übersichtlich.
Was du sagen kannst:
• Drei Ebenen: Die Domäne ist die Datei (hier profile/spec.md). Darin liegen Requirements — die kleinste add/modify/remove-Einheit. Jedes Requirement hat Scenarios im Given/When/Then-Format — konkret und testbar.
• Beispiel: „Avatar aus Prompt erzeugen" ist ein Requirement; das Scenario beschreibt den gültigen Prompt-Fall (Nutzer tippt „Rind im Sonnenuntergang" → Avatar wird generiert).
• Wichtig: Das Avatar-Feature wird NICHT zu einer eigenen Spec-Datei. Es entsteht als neue Requirements innerhalb der profile-Domäne. Das Feature lebt im changes-Ordner und wandert ins Archiv; die Domänen-Spec ist permanent.
• Folge: specs/ wächst pro Domäne, nicht pro Feature — es wuchert nicht.
• Merkt euch das Scenario-Format (Given/When/Then) — genau das ist die Brücke zu Example Mapping gleich.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Der Lebenszyklus — fünf Schritte</h2>
<Pipeline :steps="['propose','apply','verify','sync','archive']" />
<div class="cards" style="margin-top:1em">
  <div class="card y"><h3>🐮 Unser Feature</h3><p class="lead"><strong>GenAI-Avatar fürs Profil</strong> — Nutzer beschreibt per Prompt ein Profilbild, die KI generiert es.</p></div>
  <div class="card b"><h3>So gehen wir vor</h3><p class="lead">Pro Schritt: <strong>Was passiert? · Welche Dokumente? · Ergebnis</strong> — und dann zum nächsten.</p></div>
</div>

<!--
Lebenszyklus-Übersicht — der rote Faden für die nächsten fünf Folien, mit dem Avatar-Feature als durchgehendem Beispiel.
Ziel: Den Ablauf als Landkarte setzen und das Beispiel (GenAI-Avatar im Rinder-Tinder) als roten Faden bestätigen.
Was du sagen kannst:
• OpenSpec hat einen klaren Lebenszyklus mit fünf Schritten: propose, apply, verify, sync, archive. Die schauen wir uns jetzt einzeln an.
• Unser durchgehendes Feature: der GenAI-Avatar fürs Profil im Rinder-Tinder — Nutzer tippt einen Prompt, die KI erzeugt das Profilbild.
• Pro Schritt stelle ich euch dieselben drei Fragen: Was passiert da? Welche Dokumente entstehen oder ändern sich? Und was ist das Ergebnis, mit dem wir zum nächsten Schritt gehen?
• Wichtig — kein starrer Wasserfall: OpenSpec nennt das „actions, not phases". Die Reihenfolge ist eine Hilfe, kein Zwang; man darf Schritte überspringen oder iterieren. Wir gehen sie hier der Klarheit halber einmal sauber von vorne nach hinten durch.
-->

---
layout: cc
---

<span class="secno">03</span>
<Pipeline :steps="['propose','apply','verify','sync','archive']" :active="0" />
<h2 class="slash" style="margin-top:0.6em">1 · propose <span class="lead">— <code class="inline">/opsx:propose add-ai-avatar</code></span></h2>
<div class="two-col" style="margin-top:0.3em;align-items:flex-start">
  <div style="flex:1">
    <p class="note" style="margin:0 0 0.3em">Was passiert &amp; was entsteht:</p>
    <ul class="dots compact">
      <li class="b">Ein neuer Ordner <code class="inline">changes/add-ai-avatar/</code></li>
      <li class="g"><code class="inline">proposal.md</code> — Warum &amp; Scope</li>
      <li class="g"><code class="inline">specs/profile/spec.md</code> — Delta (neue Requirements)</li>
      <li class="p"><code class="inline">design.md</code> · <code class="inline">tasks.md</code></li>
    </ul>
  </div>
  <div style="flex:1">
    <p class="note" style="margin:0 0 0.3em">Beispiel — <code class="inline">proposal.md</code>:</p>
    <pre style="margin:0;font-size:0.54em"><code class="language-markdown">## Why&#10;Nutzer wollen ein einzigartiges&#10;Profilbild ohne eigenes Foto.&#10;&#10;## What changes&#10;- ADDED: Avatar per KI-Prompt&#10;&#10;## Open questions&#10;- Was bei unpassenden Prompts?</code></pre>
  </div>
</div>

<!--
Schritt 1 — propose. Hier ENTSTEHEN die Planning-Dokumente, am Avatar-Feature.
Ziel: Greifbar machen, dass propose den Change-Ordner mit allen vier Dokumenten erzeugt — und dass am Ende ein abnickbarer Vorschlag steht, noch ohne Code.
Was du sagen kannst:
• Was passiert: Man ruft propose mit der Feature-Idee auf. OpenSpec legt einen neuen Ordner changes/add-ai-avatar/ an.
• Welche Dokumente entstehen: proposal.md (das WARUM und der Scope), die Delta-Spec unter specs/profile/spec.md (die neuen Requirements für die profile-Domäne), sowie design.md und tasks.md.
• Das Beispiel rechts: Im proposal.md steht das Why (Nutzer wollen ein einzigartiges Profilbild ohne eigenes Foto), das What changes (ADDED: Avatar per KI-Prompt) und Open Questions (z.B. was passiert bei unpassenden/anstößigen Prompts?). Genau die offenen Fragen sind später der Andockpunkt für Example Mapping.
• Ergebnis: Ein durchdachter Vorschlag liegt vor — noch kein Code. Erst Einigkeit über das WAS, dann bauen. Das Team (PM/PO) kann den Vorschlag jetzt lesen und freigeben.
• Auf der nächsten Folie schauen wir die anderen beiden propose-Dokumente an — spec.md und design.md — damit ihr die Inhalte unterscheiden könnt.
-->

---
layout: cc
---

<span class="secno">03</span>
<Pipeline :steps="['propose','apply','verify','sync','archive']" :active="0" />
<h2 class="slash" style="margin-top:0.5em">1 · propose <span class="lead">— <code class="inline">/opsx:propose</code> · drei Dokumente</span></h2>
<div class="two-col" style="margin-top:0.3em;align-items:flex-start">
  <div style="flex:1">
    <p class="note" style="margin:0 0 0.3em"><code class="inline">specs/profile/spec.md</code> — das <strong>WAS</strong> (Delta):</p>
    <pre style="margin:0;font-size:0.5em"><code class="language-markdown">## ADDED Requirements&#10;### Requirement: Avatar aus Prompt&#10;The system SHALL aus einem Prompt&#10;ein Profilbild generieren.&#10;#### Scenario: gültiger Prompt&#10;- GIVEN ein Nutzer im Editor&#10;- WHEN er einen Prompt absendet&#10;- THEN wird ein Avatar erzeugt</code></pre>
  </div>
  <div style="flex:1">
    <p class="note" style="margin:0 0 0.3em"><code class="inline">design.md</code> — das <strong>WIE</strong> (technisch):</p>
    <pre style="margin:0;font-size:0.5em"><code class="language-markdown">## Approach&#10;- Bild-Gen über externen API-Dienst&#10;- Prompt → Moderationsfilter → API&#10;- Ergebnis in Object-Storage&#10;&#10;## Decisions&#10;- Timeout 10s, sonst Fallback&#10;- Kosten-Limit pro Nutzer/Tag</code></pre>
  </div>
</div>

<!--
Schritt 1, Teil 2 — die anderen zwei propose-Dokumente (spec.md Delta + design.md) beispielhaft, zum Unterscheiden der Inhalte. Vom Nutzer gewünscht: nach dem proposal.md-Beispiel auch spec.md und design.md im gleichen Aufbau zeigen.
Ziel: Sichtbar machen, dass die drei Dokumente desselben Change unterschiedliche Inhalte tragen — WARUM (proposal), WAS/Verhalten (spec-Delta), WIE/technisch (design). Knüpft an die WAS/WIE-Trennung aus Akt 1 an.
Was du sagen kannst:
• Wir bleiben im propose-Schritt — gerade haben wir das proposal.md gesehen (das WARUM). Jetzt die anderen beiden Dokumente desselben Change, damit ihr die Inhalte auseinanderhalten könnt.
• Links specs/profile/spec.md — das ist das Delta, das WAS: konkrete Requirements mit Given/When/Then-Scenarios. ADDED Requirements heißt: das kommt zur profile-Domäne hinzu. Hier lebt das Verhalten, gegen das abgenommen wird (QA/PO).
• Rechts design.md — das WIE: der technische Ansatz und die Entscheidungen. Bild-Generierung über einen externen Dienst, Prompt läuft erst durch einen Moderationsfilter, Ergebnis landet im Object-Storage; dazu Entscheidungen wie Timeout und Kosten-Limit. Das ist Dev/Architect-Land.
• Merksatz, der hängenbleiben soll: proposal = warum, spec = welches Verhalten, design = wie gebaut. Drei Dokumente, drei Fragen — exakt die WAS/WIE-Trennung von vorhin, jetzt in Dateien gegossen.
• Damit ist der Vorschlag vollständig — weiter zu Schritt 2, apply.
-->

---
layout: cc
---

<span class="secno">03</span>
<Pipeline :steps="['propose','apply','verify','sync','archive']" :active="1" />
<h2 class="slash" style="margin-top:0.6em">2 · apply <span class="lead">— <code class="inline">/opsx:apply</code></span></h2>
<div class="two-col" style="margin-top:0.3em;align-items:flex-start">
  <div style="flex:1">
    <p class="note" style="margin:0 0 0.3em">Was passiert:</p>
    <ul class="dots compact">
      <li class="b">Der Agent baut den Code <strong>gegen <code class="inline">tasks.md</code></strong></li>
      <li class="g">Jede erledigte Aufgabe wird <strong>abgehakt</strong></li>
      <li class="y">Die Delta-Spec bleibt die <strong>Vorgabe</strong></li>
    </ul>
  </div>
  <div style="flex:1">
    <p class="note" style="margin:0 0 0.3em">Beispiel — <code class="inline">tasks.md</code>:</p>
    <pre style="margin:0;font-size:0.62em"><code class="language-markdown">- [x] Prompt-Eingabe im Profil-Editor&#10;- [x] Aufruf des Bild-Generators&#10;- [x] Avatar speichern &amp; anzeigen&#10;- [ ] Moderation unpassender Prompts</code></pre>
  </div>
</div>

<!--
Schritt 2 — apply. Hier entsteht der Code, am Avatar-Feature.
Ziel: Zeigen, dass apply den Code gegen die tasks.md baut und die Delta-Spec die Vorgabe bleibt — die lebende specs/ aber noch nicht angefasst wird.
Was du sagen kannst:
• Was passiert: Der Coding-Agent (oder der Entwickler) setzt die Aufgaben aus tasks.md um. Die Delta-Spec mit ihren Requirements/Scenarios ist dabei die verbindliche Vorgabe.
• Das Beispiel rechts: Die tasks.md ist eine Checkliste — Prompt-Eingabe im Profil-Editor, Aufruf des Bild-Generators, Avatar speichern und anzeigen, Moderation unpassender Prompts. Erledigtes wird abgehakt; man sieht den Fortschritt.
• Ergebnis: Lauffähiger Code, der die Delta-Spec erfüllt. Wichtig — die lebende specs/profile/spec.md ist noch UNBERÜHRT. Wir arbeiten weiter nur im changes-Ordner.
• Als Nächstes wird geprüft, ob der Code wirklich zur Spec passt — Schritt 3, verify.
-->

---
layout: cc
---

<span class="secno">03</span>
<Pipeline :steps="['propose','apply','verify','sync','archive']" :active="2" />
<h2 class="slash" style="margin-top:0.6em">3 · verify <span class="lead">— <code class="inline">/opsx:verify</code></span></h2>
<div class="two-col" style="margin-top:0.3em;align-items:flex-start">
  <div style="flex:1">
    <p class="note" style="margin:0 0 0.3em">Der LLM prüft drei Dimensionen:</p>
    <ul class="dots compact">
      <li class="g"><strong>Completeness</strong> — jedes Requirement im Code?</li>
      <li class="b"><strong>Correctness</strong> — entspricht es dem Intent?</li>
      <li class="y"><strong>Coherence</strong> — passt es zum Rest?</li>
    </ul>
  </div>
  <div style="flex:1">
    <p class="note" style="margin:0 0 0.3em">Beispiel — Report:</p>
    <div class="em-card em-story" style="font-size:0.72em">✓ Avatar-Requirement abgedeckt</div>
    <div class="em-card em-q" style="font-size:0.72em">⚠ Moderation noch nicht umgesetzt</div>
  </div>
</div>

<!--
Schritt 3 — verify. Die agentische Prüfung, am Avatar-Feature.
Ziel: verify ehrlich einordnen — es prüft Code gegen die Artefakte über drei Dimensionen, ist aber LLM-basiert und nicht-blockierend.
Was du sagen kannst:
• Was passiert: verify lässt einen LLM den Code gegen die Change-Artefakte prüfen — über drei Dimensionen: Completeness (ist jedes Requirement im Code umgesetzt, jedes Scenario abgedeckt?), Correctness (entspricht die Umsetzung dem Intent, sind Edge Cases bedacht?), Coherence (spiegeln sich die Design-Entscheidungen wider?).
• Das Beispiel rechts: Der Report sagt z.B. „Avatar-Requirement ist abgedeckt", warnt aber „die Moderation unpassender Prompts ist noch nicht umgesetzt" — passend zur offenen Task aus Schritt 2.
• Ehrlich bleiben (wichtig!): Das ist eine agentische, prosaische Prüfung auf Zuruf — KEIN deterministisches Gate. Sie meldet Probleme, blockiert aber den Abschluss nicht. Genau deshalb: OpenSpec macht die Spec gepflegt, nicht maschinell erzwungen.
• Ist der Stand gut genug, geht es zu Schritt 4 — sync, dem Moment, in dem die lebende Spec aktualisiert wird.
-->

---
layout: cc
---

<span class="secno">03</span>
<Pipeline :steps="['propose','apply','verify','sync','archive']" :active="3" />
<h2 class="slash" style="margin-top:0.5em">4 · sync <span class="lead">— <code class="inline">/opsx:sync</code></span></h2>
<div class="three-merge" style="margin-top:0.3em">
  <div class="merge-col">
    <p class="note" style="margin:0 0 0.3em">Im Change (Delta)</p>
    <div class="em-card em-ex" style="font-size:0.68em">➕ <strong>ADDED</strong> Avatar-Erzeugung</div>
    <div class="em-card em-rule" style="font-size:0.68em">✏️ <strong>MODIFIED</strong> Profilbild-Quelle</div>
    <div class="em-card em-q" style="font-size:0.68em">🗑️ <strong>REMOVED</strong> Standard-Avatar</div>
  </div>
  <div class="merge-mid">
    <div class="merge-arrow">→</div>
    <div class="merge-llm">🤖 LLM merged<br><span>prüft Widersprüche</span></div>
    <div class="merge-arrow">→</div>
  </div>
  <div class="merge-col">
    <p class="note" style="margin:0 0 0.3em">In <code class="inline">specs/profile/spec.md</code></p>
    <div class="em-card em-story" style="font-size:0.68em">angehängt ✓</div>
    <div class="em-card em-story" style="font-size:0.68em">gleichnamiges ersetzt ✓</div>
    <div class="em-card em-story" style="font-size:0.68em">gelöscht ✓</div>
  </div>
</div>
<p class="note" style="margin-top:0.5em"><strong>Ergebnis:</strong> Die lebende Spec ist aktuell. Match-Schlüssel = <strong>Requirement-Name</strong>; der LLM meldet Widersprüche — <em class="u">mahnt</em>, blockiert nicht.</p>

<!--
Schritt 4 — sync. Der Merge des Deltas in die lebende Spec — der Moment, in dem die Spec „lebend" bleibt.
Ziel: Den Merge-Mechanismus greifbar machen — die drei Delta-Operationen, der Match per Requirement-Name, die LLM-Konfliktprüfung.
Was du sagen kannst:
• Was passiert: Das Delta aus dem Change wird in die lebende Domänen-Spec gemerged. Drei Sorten Operationen: ADDED (neues Requirement wird angehängt), MODIFIED (gleichnamiges wird ersetzt), REMOVED (wird gelöscht). Gematcht wird über den NAMEN des Requirements.
• Die LLM-Rolle in der Mitte: Beim Mergen prüft ein LLM, ob das Delta zur bestehenden Spec passt — ob es Widersprüche gibt, z.B. zwei Requirements, die sich beißen. Solche Konflikte meldet es.
• Wieder ehrlich: Diese Prüfung mahnt, sie blockiert nicht. Agentisch, kein hartes Gate.
• Schöner Nebeneffekt: Zwei parallele Changes kollidieren nicht, solange sie verschiedene Requirements anfassen.
• Ergebnis: Nach dem sync ist specs/profile/spec.md wieder die aktuelle Wahrheit. Was bleibt, ist das Aufräumen — Schritt 5, archive.
-->

---
layout: cc
---

<span class="secno">03</span>
<Pipeline :steps="['propose','apply','verify','sync','archive']" :active="4" />
<h2 class="slash" style="margin-top:0.4em">5 · archive <span class="lead">— <code class="inline">/opsx:archive</code></span></h2>
<div class="two-col" style="margin-top:0.2em;align-items:flex-start">
  <div style="flex:1.05">
    <p class="note" style="margin:0 0 0.3em">Was passiert: Change wandert ins Archiv …</p>
    <pre style="margin:0;font-size:0.56em"><code class="language-text">changes/&#10;└── archive/&#10;    └── 2026-06-14-add-ai-avatar/&#10;        ├── proposal.md&#10;        ├── tasks.md  …</code></pre>
    <p class="note" style="margin:0.4em 0 0.3em">… die gepflegte <code class="inline">specs/profile/spec.md</code>:</p>
    <pre style="margin:0;font-size:0.56em"><code class="language-markdown">### Requirement: Profilbild hochladen&#10;The system SHALL ein Foto als Profilbild zulassen.&#10;#### Scenario: gültiges Foto …&#10;&#10;### Requirement: Avatar aus Prompt erzeugen&#10;The system SHALL aus einem Prompt ein Bild generieren.</code></pre>
  </div>
  <div style="flex:1">
    <ul class="dots compact">
      <li class="b">Change → <code class="inline">archive/</code> <strong>mit Datum</strong></li>
      <li class="g"><code class="inline">specs/</code> ist die <strong>Source of Truth</strong></li>
      <li class="y">Das Feature lebt jetzt als <strong>Requirement</strong> in der Domäne</li>
      <li class="p">Historie bleibt nachvollziehbar</li>
    </ul>
  </div>
</div>
<p class="note" style="margin-top:0.4em"><strong>Ergebnis:</strong> Der Kreis schließt sich — die Domänen-Spec ist gewachsen, der Change ist Geschichte.</p>

<!--
Schritt 5 — archive. Der Abschluss; der Kreis schließt sich.
Ziel: Zeigen, dass der Change ins Archiv wandert (mit Datum, als Historie) und das Feature jetzt dauerhaft als Requirement in der lebenden Domänen-Spec lebt.
Was du sagen kannst:
• Was passiert: Der abgeschlossene Change-Ordner wird nach changes/archive/ verschoben — mit Datum im Namen, z.B. 2026-06-14-add-ai-avatar. Damit ist die Historie nachvollziehbar: Man kann später sehen, wann und warum etwas dazukam.
• Das Beispiel: Oben der archivierte Ordner. Darunter die gepflegte specs/profile/spec.md — sie enthält jetzt sowohl das alte „Profilbild hochladen"-Requirement als auch das frisch gemergte „Avatar aus Prompt erzeugen"-Requirement.
• Rechts der Kern: specs/ ist jetzt die Source of Truth. Das Feature ist nicht „verschwunden", es lebt als Requirement in seiner Domäne weiter. Der Change selbst ist vergänglich — er ist Geschichte.
• Ergebnis und Pointe des ganzen Lebenszyklus: Der Kreis schließt sich. Die Domänen-Spec ist um ein Requirement gewachsen, bleibt aber eine lesbare Datei pro Domäne. So bleibt die Spec dauerhaft lebend — genau das, was kein anderes Framework mechanisch leistet.
• Lest die gepflegte Spec ruhig kurz gemeinsam: Welcher Teil ist das WAS (Requirement), welcher die Abnahme (Scenario)?
-->

---
layout: cc
class: dense
---

<span class="secno">03</span>
<h2 class="slash">Dokument → Rolle</h2>
<table class="tight">
  <thead><tr><th>Dokument</th><th>Primär für</th><th>Warum</th></tr></thead>
  <tbody>
    <tr><td><code class="inline">proposal.md</code></td><td><span class="pill blue">PM · PO</span></td><td>Wert, Scope, Priorisierung, offene Fragen</td></tr>
    <tr><td><code class="inline">spec.md</code> — Scenarios</td><td><span class="pill green">QA + PO</span></td><td><strong>Akzeptanzkriterien</strong> — woran abgenommen wird</td></tr>
    <tr><td><code class="inline">design.md</code></td><td><span class="pill blue">Dev · Architect</span></td><td>technische Entscheidungen, Trade-offs</td></tr>
    <tr><td><code class="inline">tasks.md</code></td><td><span class="pill blue">Dev</span></td><td>konkrete Umsetzungsschritte</td></tr>
  </tbody>
</table>

<!--
DIE Mission-Folie: welches Dokument für welche Rolle gemacht ist.
Ziel: Das zentrale Outcome des Workshops setzen — Planung ist arbeitsteilig, jede Rolle hat „ihr" Dokument. Besonders: die Scenarios in der Spec sind die Naht zwischen QA und Dev.
Was du sagen kannst:
• Wir haben gerade alle vier Dokumente im Lebenszyklus gesehen — jetzt die Frage: Wer braucht welches?
• proposal.md → PM/PO/PEM: Hier steht Wert, Scope, Priorisierung und was noch offen ist. Das ist die Produkt-/Steuerungssicht.
• Die Scenarios in der spec.md → QA + PO: Das sind die Akzeptanzkriterien — woran am Ende abgenommen wird. QA lebt hier, der PO stimmt zu.
• design.md → Dev/Architect: die technischen Entscheidungen und Trade-offs.
• tasks.md → Dev: die konkrete To-do-Liste.
• Der wichtigste Satz: Die Scenarios sind die gemeinsame Naht zwischen QA und Dev — QA formuliert das erwartete Verhalten, Dev baut dagegen. Und genau an dieser Naht setzt Example Mapping an: Es ist die Methode, mit der PEM, QA und Dev GEMEINSAM die richtigen Scenarios herausarbeiten, bevor sie in die Spec wandern.
• Das ist die Brücke in Akt 4.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Wann im Team? Der Einstieg in den Zyklus</h2>
<div class="flow" style="margin-top:0.5em">
  <span class="step" style="border:2px dashed #6cc3ec"><strong>explore</strong> <span class="gl">optional</span></span><span class="arrow">→</span>
  <span class="step"><strong>refining</strong> <span class="gl">Story/Idee</span></span><span class="arrow">→</span>
  <Pipeline :steps="['propose','apply','verify','sync','archive']" />
</div>
<div class="two-col" style="margin-top:0.9em">
  <div class="card b">
    <h3>🔍 explore — wenn noch unklar</h3>
    <p class="lead">Idee erst <strong>gemeinsam mit dem Agenten durchdenken</strong> (z. B. <strong>PM</strong> oder <strong>Requirements Engineer</strong>) — bevor irgendetwas festgelegt wird.</p>
  </div>
  <div class="card g">
    <h3>🎯 propose — beim Refining</h3>
    <p class="lead">Sobald die Story/das Feature <strong>klar genug</strong> ist: beim <strong>Refining</strong> mit <code class="inline">/opsx:propose</code> in den Lebenszyklus einsteigen.</p>
  </div>
</div>

<!--
NEU (vom Nutzer gewünscht): Einordnung, WANN ein (agiles) Team den OpenSpec-Lebenszyklus durchläuft — mit vorgelagertem optionalen Explore-Schritt. Platziert ans Ende von Akt 3, nach „Dokument → Rolle", vor Akt 4.
Ziel: Den Teilnehmern eine praktische Einordnung geben, ab wann sich der Zyklus lohnt und wie er in den agilen Ablauf (Refining) eingebettet wird. Knüpft an die Use-Cases-Folie aus Akt 2 an.
Was du sagen kannst:
• Die Frage, die jetzt offen ist: Wann im Teamalltag startet man diesen Zyklus überhaupt?
• Der Normalfall: beim Refining einer Story, einer Idee oder eines Features. Sobald klar genug ist, WAS gebaut werden soll, steigt man mit /opsx:propose in den Lebenszyklus ein — propose, apply, verify, sync, archive, wie gerade gesehen.
• Davor optional ein explore-Schritt: Wenn man sich noch nicht sicher ist oder eine Idee erst durchdenken will, kann man sie zuerst gemeinsam mit dem Agenten explorieren — ergebnisoffen, ohne schon etwas festzulegen. Das macht typischerweise jemand mit Produktsicht — ein Product Manager oder ein Requirements Engineer.
• Faustregel: Ist die Sache noch unklar → erst explore. Ist sie klar genug → propose. Wichtig: Der Zyklus beginnt nicht abstrakt am Reißbrett, sondern an einem konkreten Backlog-Item.
• Das verbindet sich mit den Use Cases aus Akt 2: nicht jedes Item braucht den vollen Zyklus — aber für echte Features mit Geschäftsregeln ist Refining genau der richtige Einstiegspunkt.
• Brücke zu Akt 4: Und damit beim Refining die RICHTIGEN Scenarios entstehen, brauchen wir eine Methode — Example Mapping.
-->
