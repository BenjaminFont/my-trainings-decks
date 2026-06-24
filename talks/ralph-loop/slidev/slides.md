---
theme: ../../../theme-codecentric/theme
title: Der Ralph Wiggum Loop
titleTemplate: '%s'
canvasWidth: 1280
aspectRatio: 16/9
fonts:
  sans: Rubik
  local: Rubik
  provider: none
layout: cover
nologo: true
class: ''
mdc: true
---

<h1 class="cover-title">Der Ralph<br/>Wiggum Loop</h1>
<div class="cover-sub">Ein dummer Bash-Loop, ein schlaues LLM — und warum genau diese Trennung trägt</div>

<style scoped>
:deep(.cc.title-slide) { justify-content: center; padding-bottom: 0; }
:deep(h1.cover-title) {
  font-size: 6.2rem;
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -0.03em;
  border-left: 0.12em solid var(--cc-green);
  padding-left: 0.28em;
}
.cover-sub {
  margin-top: 1.4rem;
  padding-left: 0.32em;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--cc-grey);
  max-width: 40rem;
}
</style>

<!--
Folie 1 — Cover.
Ziel: Den Bogen aufmachen. Der Name klingt nach Spielzeug, die Technik ist ernst. Kernspannung schon im Untertitel: dumm außen, schlau innen.
Sagen kann man: Ralph Wiggum ist die Simpsons-Figur, die fröhlich mit dem Kopf gegen den Türrahmen rennt und ruft „I'm helping!". Genau diese stur-einfache Wiederholung ist die ganze Idee.
-->

---
layout: cc
class: 'stmt'
nologo: false
---

<div class="stmt-text" style="font-size: 2.6rem; line-height: 1.22">
  <p>„Ralph is a Bash loop."</p>
  <p class="grey" style="font-size: 1.5rem; margin-top: 0.5rem">— Geoffrey Huntley, Erfinder (Feb 2024)</p>
</div>

```bash
while :; do cat PROMPT.md | claude-code ; done
```

<div class="stmt-text" style="font-size: 1.35rem; margin-top: 1.4rem; line-height: 1.35">
  <p class="it">Dieselbe Aufgabe, immer wieder — bis erledigt. Die Intelligenz steckt
  im LLM, die <span class="accent">Kontrolle</span> im Skript.</p>
</div>

<style scoped>
:deep(.cc.stmt pre) { max-width: 46rem; margin: 1.4rem 0 0; }
</style>

<!--
Folie 2 — Was ist Ralph + Name + der berühmte One-Liner.
Ziel: Die Technik in einem Satz und einer Codezeile fassen. Name kommt aus der Community (Ralph Wiggum, „I'm helping!"): die brutal einfache Technik, ein LLM in einer Schleife mit fast demselben Auftrag laufen zu lassen, bis die Arbeit erledigt ist.
Sagen kann man: Der Reiz ist die Schlichtheit. Kein Framework, kein Orchestrator — eine bash-Schleife, die einen Prompt füttert. Unser Referenz-Skript heißt ralph-wiggum-loopo.sh.
-->

---
layout: cc
---

<h2 class="slash">Determinismus außen, Kreativität innen</h2>

<table>
  <thead>
    <tr><th>Im LLM — kreativ, unzuverlässig</th><th>Im Bash — deterministisch, verlässlich</th></tr>
  </thead>
  <tbody>
    <tr><td>Story-File erstellen</td><td>Reihenfolge der Stories</td></tr>
    <tr><td>Code implementieren</td><td>Schleife / Iteration / Resume</td></tr>
    <tr><td>Code-Review</td><td>Commit + Push</td></tr>
    <tr><td>Findings umsetzen</td><td>Spotless / Formatierung</td></tr>
  </tbody>
</table>

<p class="note" style="font-size: 0.85rem; margin-top: 1.1rem">
Das LLM <strong>committet und pusht nie selbst.</strong> Git-Operationen sind zu
folgenreich für einen nicht-deterministischen Agenten → das macht reines Bash.
</p>

<style scoped>
.cc h2.slash { font-size: 2.0rem; margin-bottom: 1.4rem; }
:deep(table th) { width: 50%; }
</style>

<!--
Folie 3 — Das Kernprinzip.
Ziel: Die Leitlinie verankern, nach der alles aufgeteilt wird. Kreativ und unzuverlässig ins Modell, deterministisch und verlässlich ins Skript.
Sagen kann man: Die wichtigste Zeile steht unten. Das LLM fasst Git nie an. Wer einem nicht-deterministischen Agenten commit + push überlässt, gibt die Kontrolle über das Folgenreichste aus der Hand.
-->

---
layout: cc
---

<h2 class="slash">Feste Arbeitsliste, eine äußere Schleife</h2>

<div class="two-col" style="gap: 1.6rem; align-items: flex-start;">

<div>
<p class="col-cap">Stories hardcodiert — in bewusster fachlicher Reihenfolge</p>

```bash
STORIES=(
  "AUTH.9"  # Rückbau BasicAuthFilter
  "AUTH.1"  # Login, SecurityConfig
  "AUTH.6"  # Initialer Passwortwechsel
  # ... 9 Stories
)
```
</div>

<div>
<p class="col-cap">Eine <code class="inline">for</code>-Schleife. Jede Story = eine Iteration</p>

```bash
for (( i=start; i<total; i++ )); do
  story="${STORIES[$i]}"
  echo "$i" > "$ITERATION_FILE"   # resume

  step1_dev_story    "$story"  # Opus
  step2_review       "$story"  # Opus
  step3_fix_findings "$story"  # Sonnet
  step4_commit_push  "$story"  # Bash
done
```
</div>

</div>

<style scoped>
.cc h2.slash { font-size: 2.0rem; margin-bottom: 1.0rem; }
.col-cap { font-size: 0.95rem; font-weight: 600; margin-bottom: 0.4rem; }
:deep(.cc pre) { font-size: 0.62em; }
</style>

<!--
Folie 4 — Arbeitsliste + äußere Schleife.
Ziel: Den deterministischen Rahmen zeigen. Links die feste Liste (AUTH.9 zuerst, damit eine saubere Basis vor Spring Security steht), rechts die simple for-Schleife.
Sagen kann man: Reihenfolge ist fachlich begründet, nicht zufällig. Der aktuelle Index wandert in eine Datei — daher ist der Loop resume-fähig. Vier Schritte pro Iteration, das ist die nächste Folie.
-->

---
layout: cc
---

<h2 class="slash">Vier Stationen pro Iteration</h2>

<div class="ralph-pipe">
  <div class="station">
    <div class="st-no">1</div>
    <div class="st-body">
      <div class="st-cmd"><code>/dev-next-story</code> — Story-File + Implementierung</div>
      <div class="st-desc">ATDD: erst Red-Test, dann Code</div>
    </div>
    <div class="st-model m-opus">Opus</div>
  </div>
  <div class="pipe-arrow">▼</div>
  <div class="station">
    <div class="st-no">2</div>
    <div class="st-body">
      <div class="st-cmd"><code>/bmad-party-mode</code> — Review durch 4 Personas</div>
      <div class="st-desc">Architekt, Fachexperte, UX, QA → Findings ins Story-File</div>
    </div>
    <div class="st-model m-opus">Opus</div>
  </div>
  <div class="pipe-arrow">▼</div>
  <div class="station">
    <div class="st-no">3</div>
    <div class="st-body">
      <div class="st-cmd"><code>/bmad-dev-story</code> — Findings umsetzen</div>
      <div class="st-desc">wieder ATDD pro Fix — günstigeres Modell reicht</div>
    </div>
    <div class="st-model m-sonnet">Sonnet</div>
  </div>
  <div class="pipe-arrow">▼</div>
  <div class="station s4">
    <div class="st-no">4</div>
    <div class="st-body">
      <div class="st-cmd">git commit + push</div>
      <div class="st-desc">reines Bash, kein LLM — Spotless läuft davor</div>
    </div>
    <div class="st-model m-bash">Bash</div>
  </div>
</div>

<style scoped>
.cc h2.slash { font-size: 1.8rem; margin-bottom: 0.5rem; }
:deep(.slidev-layout.cc) { padding-top: 3.5%; padding-bottom: 3.5%; }
.ralph-pipe { gap: 0.22em; max-width: 49rem; }
.ralph-pipe .station { padding: 0.42em 0.8em; grid-template-columns: 1.8em 1fr auto; gap: 0.75em; }
.ralph-pipe .st-no { width: 1.8em; height: 1.8em; font-size: 0.8em; }
.ralph-pipe .st-cmd { font-size: 0.84em; line-height: 1.15; }
.ralph-pipe .st-desc { font-size: 0.62em; line-height: 1.2; }
.ralph-pipe .st-model { font-size: 0.62em; padding: 0.2em 0.7em; }
.ralph-pipe .pipe-arrow { font-size: 0.7em; }
</style>

<!--
Folie 5 — Die vier Stationen + Modell-Zuordnung.
Ziel: Die Pipeline pro Story zeigen — generieren, prüfen, korrigieren, festschreiben. Und: teuer/schlau wo nötig (Opus für Implementierung + Review), günstig wo möglich (Sonnet für gezielte Fixes), deterministisch wo folgenreich (Bash für Commit).
Sagen kann man: Schritt 2 ist das Besondere — vier Personas (Architekt, Fachexperte, UX, QA) reviewen aus vier Blickwinkeln, ihre Findings landen wieder im Story-File und werden in Schritt 3 abgearbeitet. Modellwahl ist Kostensteuerung.
-->

---
layout: cc
class: 'stmt'
nologo: false
---

<div class="stmt-text" style="font-size: 1.7rem; line-height: 1.25; margin-bottom: 1.0rem">
  <p>Die harte Grenze im Prompt</p>
</div>

<div class="promptbox"><span class="pc-com">## KRITISCH: GENAU EINE STORY — DANN STOPPEN</span><br/>Du implementierst <span class="pc-hi">EXAKT</span> Story ${story_id} — NICHT MEHR.<br/>Sobald fertig: <span class="pc-hi">SOFORT AUFHÖREN.</span> Keine weitere Story anfangen.<br/>Ein externer Loop (dieses Skript) steuert die Iteration.</div>

<div class="stmt-text" style="font-size: 1.3rem; margin-top: 1.3rem; line-height: 1.35">
  <p class="it">Ohne diese Grenze läuft der Agent eigenmächtig weiter. Die Schleifen-Kontrolle
  gehört dem <span class="accent">Skript</span>, nicht dem Modell. Plus: jede Iteration
  startet mit <span class="accent">frischem Kontext</span> — kein Volllaufen, keine Drift.</p>
</div>

<style scoped>
.promptbox {
  background: #1f2430;
  color: #e6e6e6;
  border-radius: 12px;
  padding: 1.1em 1.4em;
  font-family: 'Fira Code', 'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace;
  font-size: 1.0rem;
  line-height: 1.55;
  white-space: pre-wrap;
  max-width: 52rem;
  box-shadow: 0 6px 20px rgba(0,0,0,.10);
}
.promptbox .pc-com { color: #7f8aa0; }
.promptbox .pc-hi  { color: var(--cc-green); font-weight: 700; }
</style>

<!--
Folie 6 — Die harte Grenze im Prompt + fresh context.
Ziel: Den entscheidenden Trick zeigen, der „LLM im Loop" beherrschbar macht. Der Prompt zwingt das Modell, nach genau einer Story zu stoppen. Der Loop — nicht das Modell — entscheidet, was als Nächstes kommt.
Sagen kann man: Zwei Effekte. Erstens Kontrolle: die Iteration liegt im Bash. Zweitens Qualität: weil jede Iteration frisch startet, läuft das Kontextfenster nie voll — LLMs werden mit vollem Kontext messbar schlechter. Genau das ist der Grund, warum Ralph trotz seiner Dummheit funktioniert.
-->

---
layout: cc
---

<h2 class="slash">Was das Skript drumherum erledigt</h2>

<ul class="dots">
  <li><strong>Resume:</strong> aktueller Index liegt in einer Datei. Nach Abbruch setzt <code class="inline">--resume</code> bei der nächsten offenen Story fort.</li>
  <li><strong>Fail-Strategie:</strong> Fehler in Schritt 1 (Implementierung) → harter Abbruch. Schritte 2–4 (Review, Fix, Commit) → nur Warnung, Loop läuft weiter.</li>
  <li><strong>Git-Hooks aus:</strong> vorm Lauf <code class="inline">core.hooksPath</code> entfernen, damit kein interaktiver Hook blockt (<code class="inline">--no-verify</code> als Safety-Net).</li>
  <li><strong>Spotless</strong> läuft automatisch vor jedem Commit.</li>
  <li><strong>Logging:</strong> jede Iteration + jeder Schritt schreibt ein eigenes Log nach <code class="inline">.ralph-wiggum-logs/</code>.</li>
</ul>

<style scoped>
.cc h2.slash { font-size: 2.0rem; margin-bottom: 1.2rem; }
.cc ul.dots { font-size: 0.86em; }
.cc ul.dots li { margin: 0.5em 0; }
</style>

<!--
Folie 7 — Robustheit drumherum.
Ziel: Zeigen, dass die Verlässlichkeit aus dem deterministischen Mantel kommt, nicht aus dem Modell. Resume macht lange Läufe abbruchsicher; die Fail-Strategie unterscheidet kritisch (Implementierung) von tolerierbar (Review/Fix/Commit); Hooks-aus und Spotless halten die Automatik am Laufen; Logs machen jeden Schritt nachvollziehbar.
Sagen kann man: Das ist der unspektakuläre, aber entscheidende Teil. Alles Folgenreiche und alles Wiederanlaufbare lebt im Bash.
-->

---
layout: cc
class: 'center-text'
---

<div class="pattern">
  <div class="pbox">Liste fester Arbeitseinheiten</div>
  <div class="parrow">↓</div>
  <div class="pbox loop">äußere Schleife (Bash)<span class="sub">merkt Fortschritt · resume-fähig</span></div>
  <div class="parrow">↓ pro Einheit</div>
  <div class="pbox llm">generieren → prüfen → korrigieren<span class="sub">LLM · austauschbare Modelle</span></div>
  <div class="parrow">↓</div>
  <div class="pbox det">festschreiben (commit / push)<span class="sub">deterministisch · Bash</span></div>
</div>

<p class="kernsatz">Der Loop ist <strong>dumm</strong>, das LLM ist <strong>schlau</strong> —
und genau diese Trennung macht das Verfahren <span class="underline-green">beherrschbar</span>.</p>

<style scoped>
.pattern { margin-top: 0.5rem; }
.kernsatz { font-size: 1.25rem; font-weight: 500; line-height: 1.4; margin-top: 1.6rem; max-width: 44rem; }
</style>

<!--
Folie 8 — Das übertragbare Muster + Kernbotschaft.
Ziel: Vom konkreten Auth-Beispiel abstrahieren auf das wiederverwendbare Schema: feste Arbeitsliste → äußere Bash-Schleife (resume-fähig) → pro Einheit generieren/prüfen/korrigieren im LLM → festschreiben deterministisch im Bash.
Sagen kann man: Das Muster ist nicht an Stories oder Java gebunden. Überall, wo es eine abzählbare Liste von Einheiten gibt, lässt sich Ralph anwenden. Kernbotschaft zum Mitnehmen: Reihenfolge, Wiederanlauf und alle folgenreichen Aktionen liegen deterministisch im Skript; die offene, kreative Arbeit liegt im Modell — eingehegt durch klar abgegrenzte Prompts.
-->

---
layout: cc
---

<h2 class="slash">Ralph Loop vs. Claude Code <code class="inline">/loop</code></h2>

<table class="cmp">
  <thead>
    <tr><th></th><th>Ralph Wiggum Loop</th><th>Claude Code <code class="inline">/loop</code></th></tr>
  </thead>
  <tbody>
    <tr><td>Schleifen-Kontrolle</td><td>extern — Bash-Skript</td><td>in der Session — Claude Code</td></tr>
    <tr><td>Kontext pro Iteration</td><td><strong>frisch</strong> — Reset; Speicher = Dateien + Git</td><td><strong>persistent</strong> — eine Session, History wächst</td></tr>
    <tr><td>Commit / Push</td><td>deterministisch im Bash</td><td>modellgesteuert — Claude entscheidet</td></tr>
    <tr><td>Stopp-Bedingung</td><td>Liste abgearbeitet / Skript-Logik</td><td>Esc · Modell-Urteil · 7-Tage-Auto-Expiry</td></tr>
    <tr><td>Headless / unbeaufsichtigt</td><td><strong>ja</strong> — reiner Loop, CI-tauglich</td><td>nein — aktive Session nötig</td></tr>
    <tr><td>Typischer Zweck</td><td>ganzes Epic autonom durchbauen</td><td>Polling · Babysitting · wiederkehrende Tasks</td></tr>
  </tbody>
</table>

<p class="note" style="font-size: 0.85rem; margin-top: 1.0rem">
Gleiche Idee „LLM in Schleife", andere Bauart: Ralph trennt <strong>Kontrolle (Bash)</strong> hart
von Kreativität und setzt auf frischen Kontext; <code class="inline">/loop</code> bleibt <strong>im Modell</strong>
mit durchlaufendem Kontext.
</p>

<style scoped>
.cc h2.slash { font-size: 1.9rem; margin-bottom: 1.1rem; }
.cc table.cmp { font-size: 0.78rem; }
.cc table.cmp th:first-child, .cc table.cmp td:first-child { width: 22%; }
.cc table.cmp th { font-size: 0.9em; }
</style>

<!--
Folie 9 — Vergleich Ralph Loop ↔ Claude Code /loop.
Ziel: Den Bezug zum Tool herstellen, das viele aus Claude Code kennen, und die echten Architektur-Unterschiede sauber abgrenzen.
Quelle: Claude-Code-Doku (scheduled-tasks). /loop läuft IN der Session (ein durchlaufender Kontext, History wächst), pausiert/terminiert per Esc, Modell-Urteil oder 7-Tage-Expiry, braucht eine aktive Session (nicht headless), und Commits/Push entscheidet das Modell.
Sagen kann man: Beide sind „LLM in einer Schleife", aber die Philosophie ist verschieden. Ralph zieht die Kontrolle bewusst aus dem Modell heraus ins deterministische Bash und nutzt frischen Kontext gegen Drift/Volllaufen — ideal für unbeaufsichtigtes Durchbauen ganzer Epics. /loop bleibt im Modell mit durchlaufendem Kontext — ideal fürs überwachte Polling und wiederkehrende Aufgaben in einer laufenden Session. Kein „besser/schlechter", sondern unterschiedliche Werkzeuge für unterschiedliche Jobs.
-->
