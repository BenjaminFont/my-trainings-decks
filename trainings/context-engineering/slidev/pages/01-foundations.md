---
layout: imagecard
image: /img/prompt-vs-context.jpg
imageAlt: Prompt engineering vs. Context engineering for agents
maxHeight: 78%
nologo: true
---

<!--
Slide 2 (Original-PDF 2) — Einstiegsbild von Anthropic: „Prompt engineering for single turn queries" vs. „Context engineering for agents".
Ziel: Den Begriffswechsel motivieren. Beim klassischen Prompt-Engineering ging es um System-Prompt + User-Message für eine einzelne Antwort. Bei Agenten kuratieren wir laufend, WAS überhaupt ins Kontextfenster kommt — Docs, Tools, Memory-Files, Message-History — und schneiden ab, was nicht gebraucht wird (die Schere).
Sagen kann man: Context Engineering ist die Disziplin, das knappe Gut „Kontextfenster" über viele Schritte hinweg bewusst zu befüllen und zu beschneiden. Curation ist das Schlüsselwort.
Quelle: Anthropic — „Effective context engineering for AI agents".
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Context Size</h2>
<div class="two-col" style="margin-top:1.2em; align-items:center">
  <div>
    <ul class="dots" style="font-size:1.05em">
      <li class="g">Claude 4.8 Opus: <strong>1M</strong></li>
      <li class="b">GPT 5.4-Codex: <strong>1M</strong></li>
      <li class="p">Gemini 3.1 Pro: <strong>1M</strong></li>
    </ul>
  </div>
  <div>
    <p style="font-weight:700; font-size:0.9em">Using o200k_base in tiktokenizer:</p>
    <ul class="dots compact" style="margin-top:0.4em">
      <li class="y">War and Peace: ~770k</li>
      <li class="b">Moby Dick: ~310k</li>
      <li class="g">The King in Yellow: ~103k</li>
      <li class="p">Alice in Wonderland: ~41k</li>
    </ul>
  </div>
</div>
<p class="big red" style="text-align:center; margin-top:1.1em">More does not mean better</p>

<!--
Slide 3 (Original-PDF 3) — Kontextgrößen heutiger Modelle vs. bekannte Bücher.
Ziel: Ein Gefühl für die schiere Größe von 1M Tokens geben — und sofort relativieren. Selbst „Krieg und Frieden" (~770k Tokens) passt rein. Trotzdem gilt: Mehr Kontext heißt nicht bessere Ergebnisse.
Sagen kann man: Die Fenster sind riesig — alle drei großen Modelle liegen bei rund 1 Million Tokens. Aber genau das verleitet dazu, alles reinzukippen. Die nächsten Folien zeigen, warum das schadet (Needle in the Haystack, Lost in the Middle).
Hinweis: Die Token-Zahlen sind mit dem o200k_base-Tokenizer (tiktokenizer) gemessen und dienen der Veranschaulichung.
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Needle in the haystack</h2>
<img src="/img/needle-haystack.jpg" class="imgcard" style="max-height:66%; width:auto; margin-top:0.6em" alt="Needle-in-the-haystack Benchmark, contextarena.ai">
<div class="src-link">https://contextarena.ai/</div>

<!--
Slide 4 (Original-PDF 4) — „Needle in the Haystack"-Benchmark (contextarena.ai).
Ziel: Empirisch zeigen, dass die Trefferquote (Average Score) mit wachsender Kontextlänge bei ALLEN Modellen abfällt — teils dramatisch. Die „Nadel" ist eine eingestreute Information, die das Modell im langen „Heuhaufen" wiederfinden soll.
Sagen kann man: Schaut auf die Kurven — links (kurzer Kontext) liegen fast alle bei ~100%, rechts (Richtung 1M) brechen sie ein. Das ist der harte Beleg dafür, dass ein volles Kontextfenster die Qualität senkt, nicht hebt.
Interaktiv: Die Live-Version unter contextarena.ai lässt sich im Workshop kurz zeigen.
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Lost in the middle</h2>
<div class="lim">
  <div class="lim-chart">
    <div class="lim-y">Recall</div>
    <svg class="lim-svg" viewBox="0 0 1000 380" preserveAspectRatio="none">
      <!-- Glockenkurve, in drei farbige Zonen geteilt -->
      <defs>
        <clipPath id="bell">
          <path d="M0,380 C220,380 300,40 500,40 C700,40 780,380 1000,380 Z" />
        </clipPath>
      </defs>
      <g clip-path="url(#bell)">
        <rect x="0"   y="0" width="340" height="380" fill="var(--pc-green)" />
        <rect x="340" y="0" width="320" height="380" fill="var(--pc-pink)" />
        <rect x="660" y="0" width="340" height="380" fill="var(--pc-blue)" />
      </g>
      <!-- Achsen -->
      <line x1="0" y1="380" x2="1000" y2="380" stroke="#111" stroke-width="3" />
      <line x1="2" y1="0" x2="2" y2="380" stroke="#111" stroke-width="3" />
    </svg>
    <div class="lim-labels">
      <span class="primacy">Primacy<br>Effect</span>
      <span class="weak">Weak<br>Recall</span>
      <span class="recency">Recency<br>Effect</span>
    </div>
  </div>
  <div class="lim-x"><span>Start</span><span>Middle</span><span>End</span></div>
</div>

<style scoped>
.lim { width: 84%; margin: 1.4em auto 0; }
.lim-chart { position: relative; height: 330px; padding-left: 2em; }
.lim-y { position: absolute; left: -0.4em; top: 50%; transform: translateY(-50%) rotate(-90deg); font-size:0.62em; font-weight:600; }
.lim-svg { width: 100%; height: 100%; display:block; }
.lim-labels { position:absolute; inset: 0 0 0 2em; display:flex; align-items:center; }
.lim-labels span { flex:1; text-align:center; font-weight:700; font-size:0.78em; line-height:1.15; }
.lim-x { display:flex; justify-content:space-between; font-weight:700; font-size:0.68em; margin-top:0.3em; padding-left: 2em; }
</style>

<!--
Slide 5 (Original-PDF 5) — „Lost in the Middle".
Ziel: Den zweiten Effekt erklären: Modelle erinnern sich gut an den ANFANG (Primacy Effect) und das ENDE (Recency Effect) des Kontexts, aber schlecht an die MITTE (Weak Recall). Wie bei Menschen.
Sagen kann man: Es ist nicht nur die Menge — auch die Position zählt. Was in der Mitte eines langen Kontexts steht, geht unter. Konsequenz fürs Arbeiten: Das Wichtigste an den Anfang oder ans Ende setzen, nicht in der Mitte vergraben.
Die Glockenkurve illustriert: hohe „Recall"-Wahrscheinlichkeit außen, Delle in der Mitte.
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Working in the smart zone</h2>
<div class="ctxbar" style="margin-top:1.6em">
  <div class="seg green" style="flex:2.4">System Prompt</div>
  <div class="seg blue" style="flex:1.2">AGENTS.md</div>
  <div class="seg iris" style="flex:1">1st Prompt</div>
  <div class="seg yellow" style="flex:1.1">Grep/Read/<br>Write/Bash/…</div>
  <div class="seg yellow" style="flex:1.1">Grep/Read/<br>Write/Bash/…</div>
  <div class="seg yellow" style="flex:1.1">Grep/Read/<br>Write/Bash/…</div>
  <div class="seg iris" style="flex:1">1st Answer</div>
  <div class="seg iris" style="flex:1">2nd Prompt</div>
  <div class="seg dumb" style="flex:8">&nbsp;</div>
</div>
<div class="ctxbar-axis"><span>0</span><span style="margin-left:auto; margin-right:48%">100K</span><span>200k</span></div>
<div class="smartzones">
  <span class="sz-smart">↑ Smart Zone</span>
  <span class="sz-dumb">↑ Dumb Zone</span>
</div>

<style scoped>
.smartzones { position: relative; margin-top: 0.6em; font-weight:600; font-size:0.7em; color: var(--cc-grey); }
.sz-smart { position:absolute; left: 18%; }
.sz-dumb  { position:absolute; left: 70%; }
</style>

<!--
Slide 6 (Original-PDF 6) — „Working in the smart zone".
Ziel: Die praktische Konsequenz aus den beiden vorigen Effekten. Bis ca. 100K Tokens arbeitet das Modell in der „Smart Zone" — gefüllt mit System Prompt, AGENTS.md, den Prompts, Tool-Aufrufen (Grep/Read/Write/Bash) und Antworten. Darüber hinaus (Richtung 200K) beginnt die „Dumb Zone": Qualität fällt ab.
Sagen kann man: Ziel des ganzen Tages ist, in der Smart Zone zu bleiben. Jeder Tool-Call und jede Antwort frisst Platz. Deshalb müssen wir Kontext aktiv managen — schreiben, auswählen, komprimieren, delegieren. Genau das kommt jetzt.
Hinweis: Die 100K-Grenze ist eine Daumenregel, kein hartes Limit — modell- und aufgabenabhängig.
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Context Management Strategies</h2>
<ol class="strategies">
  <li>
    <span class="st-head">Write Context — Save it externally</span>
    <ul><li>Dedicated tool/prompt to write a file</li></ul>
  </li>
  <li>
    <span class="st-head">Select Context — Retrieve what's needed</span>
    <ul><li>Claude's „Rules", GitHub's „applyTo", Nested Instructions, …</li></ul>
  </li>
  <li>
    <span class="st-head">Compress Context — Tokens reduzieren</span>
    <ul><li>a.k.a. (auto) compaction</li><li>Automatic context editing, e.g., in Claude</li></ul>
  </li>
  <li>
    <span class="st-head">Delegate Context — Separate concerns</span>
    <ul><li>Split via sub-agents (e.g., Planner → Executor)</li><li>Example: claude-code's „Explore" Agent</li><li>Always Execute/Review in a separate Session</li></ul>
  </li>
</ol>

<!--
Slide 7 (Original-PDF 7) — Die vier Context-Management-Strategien. Das ist die Gliederung für den Rest des Tages.
Ziel: Das mentale Modell setzen. Es gibt vier Hebel, um in der Smart Zone zu bleiben:
1. Write — Kontext nach außen schreiben (Dateien), statt ihn im Fenster zu halten.
2. Select — nur das Nötige hereinholen (Rules, applyTo, verschachtelte Instructions).
3. Compress — Tokens reduzieren (Compaction / automatisches Context-Editing).
4. Delegate — Aufgaben trennen und an Subagents auslagern (Planner→Executor; Explore-Agent; Ausführung/Review in eigener Session).
Sagen kann man: Merkt euch diese vier Verben. Der Vormittag (Write/Select) dreht sich um Kontext-Dateien, der Nachmittag (Delegate) um Subagents und Agent-Teams. Compress läuft meist automatisch im Hintergrund.
-->
