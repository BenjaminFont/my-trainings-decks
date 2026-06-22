---
theme: ../../../theme-codecentric/theme
title: Tools for developing
titleTemplate: '%s'
canvasWidth: 1280
aspectRatio: 16/9
fonts:
  sans: Rubik
  local: Rubik
  provider: none
layout: cover
secno: "00"
nologo: true
class: ''
mdc: true
transition: slide-left
---

<h1>Tools for developing</h1>

<!--
Cover des Decks „Tools for developing" (Original-PDF 1). Internes Training, 13.06.
Wir gehen die wichtigsten Werkzeug-Kategorien für die KI-gestützte Entwicklung durch:
Diktier-Tools, Sandboxing und Coding-Tools.
Navigation: Pfeiltasten · F Vollbild · O Übersicht · Presenter-Modus für die Notes.
-->

---
layout: topic
secno: "01"
headline: Dictation Tools
image: /img/anime-dictation.png
imageAlt: Entwickler diktiert am Schreibtisch
imagePosition: center 62%
---

<!--
Kapitel-Header 1 — Dictation Tools (Original-PDF 2).
Ziel: Überleitung zu Sprache-zu-Text-Werkzeugen, mit denen man dem Agenten diktiert statt tippt.
Sagen kann man: Diktieren ist oft schneller als Tippen — gerade für längere Prompts. Schauen wir uns die Optionen an.
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Dictation Tools</h2>

<div class="two-col" style="margin-top:0.8em">
  <div>
    <p class="cat pink">Local:</p>
    <ul class="links">
      <li><a href="https://goodsnooze.gumroad.com/l/macwhisper">https://goodsnooze.gumroad.com/l/macwhisper</a></li>
      <li><a href="https://github.com/openai/whisper">https://github.com/openai/whisper</a></li>
      <li><a href="https://whisperflow.org/">https://whisperflow.org/</a></li>
      <li><a href="https://starwhisper.ai/">https://starwhisper.ai/</a></li>
      <li><a href="https://tryvoiceink.com/">https://tryvoiceink.com/</a></li>
      <li><a href="https://voxtype.io/">https://voxtype.io/</a></li>
      <li><a href="https://vocalinux.com/">https://vocalinux.com/</a></li>
      <li><a href="https://spokenly.app/">https://spokenly.app/</a></li>
    </ul>
  </div>
  <div>
    <p class="cat blue">Other:</p>
    <ul class="links">
      <li><a href="https://wisprflow.ai/">https://wisprflow.ai/</a></li>
      <li><a href="https://aquavoice.com/">https://aquavoice.com/</a></li>
    </ul>
  </div>
</div>

<!--
Dictation Tools im Detail (Original-PDF 3).
Local: laufen lokal auf dem Rechner — die Daten bleiben auf der Maschine. MacWhisper, OpenAI Whisper, WhisperFlow, StarWhisper.
Other: Cloud-/Hybrid-Dienste — Wispr Flow und Aqua Voice.
Sagen kann man: Wer Datenschutz braucht, nimmt eine lokale Lösung. Die Cloud-Dienste sind dafür oft komfortabler und genauer.
-->

---
layout: cc
---

<span class="secno">01</span>
<h2 class="slash">Dictation Tools – Vergleich</h2>

<table class="dict-compare">
  <thead>
    <tr>
      <th>Tool</th>
      <th>Kosten / Freemium</th>
      <th>Lokal</th>
      <th>Cloud</th>
      <th>Eig.&nbsp;Vokabular</th>
      <th>Systemweit (Shortcut)</th>
      <th>OS</th>
      <th>Modelle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MacWhisper</td>
      <td>Free · 59&nbsp;€ einmalig</td>
      <td class="y">✓</td><td class="y">✓</td><td class="y">✓</td><td class="y">✓</td>
      <td>macOS, iOS</td>
      <td>Whisper, Parakeet</td>
    </tr>
    <tr>
      <td>OpenAI Whisper</td>
      <td>Open Source</td>
      <td class="y">✓</td><td class="y">✓ API</td><td class="m">~ Prompt</td><td class="n">✗</td>
      <td>macOS, Win, Linux</td>
      <td>Whisper tiny–large</td>
    </tr>
    <tr>
      <td>WhisperFlow</td>
      <td>Free · 12&nbsp;$/Mo</td>
      <td class="y">✓</td><td class="y">✓</td><td class="y">✓</td><td class="m">~</td>
      <td>macOS, iOS, Android</td>
      <td>k.&nbsp;A.</td>
    </tr>
    <tr>
      <td>StarWhisper</td>
      <td>Free · 10&nbsp;$/Mo</td>
      <td class="y">✓</td><td class="y">✓</td><td class="y">✓</td><td class="y">✓</td>
      <td>Windows</td>
      <td>Whisper tiny–large</td>
    </tr>
    <tr>
      <td>Wispr Flow</td>
      <td>Free · 15&nbsp;$/Mo</td>
      <td class="n">✗</td><td class="y">✓</td><td class="y">✓</td><td class="y">✓</td>
      <td>macOS, Win, iOS, Android</td>
      <td>proprietär</td>
    </tr>
    <tr>
      <td>Aqua Voice</td>
      <td>Free · 8&nbsp;$/Mo</td>
      <td class="n">✗</td><td class="y">✓</td><td class="y">✓</td><td class="y">✓</td>
      <td>macOS, Win, iOS</td>
      <td>proprietär (Avalon)</td>
    </tr>
    <tr>
      <td>VoiceInk</td>
      <td>Free · 25&nbsp;$ einmalig</td>
      <td class="y">✓</td><td class="y">✓ BYOK</td><td class="y">✓</td><td class="y">✓</td>
      <td>macOS</td>
      <td>Whisper, Parakeet</td>
    </tr>
    <tr>
      <td>VoxType</td>
      <td>Open Source</td>
      <td class="y">✓</td><td class="m">~ self</td><td class="y">✓</td><td class="y">✓</td>
      <td>Linux, macOS</td>
      <td>Whisper, Parakeet …</td>
    </tr>
    <tr>
      <td>VocaLinux</td>
      <td>Open Source</td>
      <td class="y">✓</td><td class="m">~ self</td><td class="n">✗</td><td class="y">✓</td>
      <td>Linux</td>
      <td>Whisper, Vosk</td>
    </tr>
    <tr>
      <td>Spokenly</td>
      <td>Free · 8&nbsp;$/Mo</td>
      <td class="y">✓</td><td class="y">✓</td><td class="y">✓</td><td class="y">✓</td>
      <td>macOS, iOS, Win</td>
      <td>Whisper, Parakeet …</td>
    </tr>
  </tbody>
</table>

<p class="dict-legend">✓ = ja&nbsp;&nbsp;·&nbsp;&nbsp;✗ = nein&nbsp;&nbsp;·&nbsp;&nbsp;~ = optional / eingeschränkt&nbsp;&nbsp;·&nbsp;&nbsp;BYOK = eigener API-Key&nbsp;&nbsp;·&nbsp;&nbsp;self = nur selbst-gehosteter Server</p>

<!--
Vergleich der Dictation Tools (recherchiert pro Tool, Stand 06/2026).
Kernaussagen:
- Lokal + Open Source: OpenAI Whisper, VoxType, VocaLinux (Linux), VoiceInk (macOS).
- Komfort-Cloud (kein lokal): Wispr Flow, Aqua Voice — proprietäre Modelle, dafür sehr genau.
- Hybrid (lokal UND Cloud) mit Vokabular + systemweitem Shortcut: MacWhisper, StarWhisper, VoiceInk, Spokenly.
- Eigenes Vokabular bieten fast alle; OpenAI Whisper nur via initial_prompt, VocaLinux gar nicht.
- Systemweites Diktat per Shortcut (ohne App-Plugin): alle außer reinem OpenAI Whisper (CLI).
- OS entscheidet oft: StarWhisper = nur Windows, VocaLinux/VoxType = Linux-Fokus, VoiceInk = nur macOS.
Sagen kann man: Die Wahl hängt an drei Fragen — Datenschutz (lokal?), Betriebssystem, und ob man Fachvokabular braucht.
-->

---
layout: topic
secno: "02"
headline: Sandboxing
image: /img/anime-sandboxing.png
imageAlt: Entwickler beim Coden am Schreibtisch
imagePosition: center 62%
---

<!--
Kapitel-Header 2 — Sandboxing (Original-PDF 4).
Ziel: Überleitung zur sicheren, isolierten Ausführung von Agenten.
Sagen kann man: Agenten, die selbstständig Befehle ausführen, gehören in eine Sandbox — entweder eine eigene VM/Container oder die eingebauten Mechanismen der Tools.
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Sandboxing</h2>

<div class="two-col" style="margin-top:0.8em">
  <div>
    <p class="cat pink">VMs, Container &amp; co:</p>
    <ul class="links">
      <li><a href="https://github.com/fletchgqc/agentbox">https://github.com/fletchgqc/agentbox</a></li>
      <li><a href="https://docs.docker.com/ai/sandboxes/">https://docs.docker.com/ai/sandboxes/</a></li>
      <li><a href="https://alexdav.id/projects/jail-nix/">https://alexdav.id/projects/jail-nix/</a></li>
      <li><a href="https://github.com/lima-vm/lima">https://github.com/lima-vm/lima</a></li>
      <li><a href="https://github.com/denniseffing/ai-vm-sandbox">https://github.com/denniseffing/ai-vm-sandbox</a></li>
    </ul>
  </div>
  <div>
    <p class="cat blue">Built in:</p>
    <ul class="links">
      <li><a href="https://code.claude.com/docs/en/sandboxing">https://code.claude.com/docs/en/sandboxing</a></li>
      <li><a href="https://geminicli.com/docs/cli/sandbox/">https://geminicli.com/docs/cli/sandbox/</a></li>
      <li><a href="https://cursor.com/docs/agent/terminal#sandbox">https://cursor.com/docs/agent/terminal#sandbox</a></li>
      <li><a href="https://antigravity.google/docs/sandbox-mode">https://antigravity.google/docs/sandbox-mode</a></li>
    </ul>
  </div>
</div>

<!--
Sandboxing im Detail (Original-PDF 5).
VMs, Container & co: externe Isolations-Lösungen — agentbox, Docker Sandboxes, jail-nix, Lima, ai-vm-sandbox.
Built in: die Coding-Tools bringen ihre eigenen Sandboxes mit — Claude Code, Gemini CLI, Cursor, Antigravity.
Sagen kann man: Für den Einstieg reichen oft die eingebauten Sandboxes. Wer mehr Isolation braucht, greift zu VM/Container.
-->

---
layout: topic
secno: "03"
headline: Coding Tools
image: /img/anime-coding.png
imageAlt: Entwickler beim Coden mit mehreren Monitoren
imagePosition: center 58%
---

<!--
Kapitel-Header 3 — Coding Tools (Original-PDF 6).
Ziel: Übergang zum Kern des Trainings — die KI-Coding-Werkzeuge selbst.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Tools – Wie Sand am Meer</h2>
<div class="img-wall">
  <img src="/img/tools-wall.png" alt="Claude Code, GitHub Copilot, Windsurf, JetBrains AI, Gemini, Codex, OpenCode, Kilo, tabnine, Cursor, aider">
</div>

<!--
„Wie Sand am Meer" (Original-PDF 7) — es gibt unzählige Coding-Tools.
Claude Code, GitHub Copilot, Windsurf, JetBrains AI, Gemini, Codex, OpenCode, Kilo, tabnine, Cursor, aider und viele mehr.
Sagen kann man: Die eigentliche Frage ist nicht „welches Tool", sondern „welche Features brauche ich". Das schauen wir uns als Nächstes an.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Tools – Good features stand out</h2>

<div class="two-col feats" style="margin-top:0.6em">
  <div>
    <p class="feat-h">Codebase Understanding</p>
    <ul class="links">
      <li>Semantic Indexing &amp; Search (@codebase)</li>
      <li>LSP Integration / Advanced Search</li>
    </ul>
    <p class="feat-h">Code-Editing</p>
    <ul class="links">
      <li>Appropriate Code Edits (Replace Block)</li>
      <li>Multi-File Edits</li>
      <li>Diff View &amp; Review</li>
    </ul>
    <p class="feat-h">Context Configuration</p>
    <ul class="links">
      <li>Context config files (Claude.md, .clinerules)</li>
      <li>Complex structures possible</li>
    </ul>
  </div>
  <div>
    <p class="feat-h">Agentic</p>
    <ul class="links">
      <li>Multi-step autonomous tasks</li>
      <li>Plan-Act pattern</li>
      <li>Dedicated agents and skills</li>
      <li>Background agents</li>
    </ul>
    <p class="feat-h">Integrations</p>
    <ul class="links">
      <li>MCP-Server</li>
    </ul>
  </div>
</div>

<!--
Good features stand out (Original-PDF 8).
Gute Tools heben sich durch diese Feature-Gruppen ab:
Codebase Understanding (semantische Suche, LSP), Code-Editing (Replace-Block, Multi-File, Diff-Review),
Agentic (autonome Multi-Step-Tasks, Plan-Act, dedizierte Agents/Skills, Background-Agents),
Context Configuration (Claude.md, .clinerules) und Integrationen (MCP-Server).
Sagen kann man: An diesen Features erkennt man, ob ein Tool wirklich produktiv ist.
-->

---
layout: cc
variant: center
---

<span class="secno">03</span>
<h2 class="slash" style="text-align:left; width:100%">Tools – Show Case Claude Code</h2>
<div class="img-wall showcase">
  <img src="/img/claude-code-ascii.png" alt="Claude Code">
</div>

<!--
Show Case (Original-PDF 9) — Live-Demo von Claude Code.
Sagen kann man: [Hier ins Terminal wechseln und Claude Code live an einem Beispiel zeigen.]
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Tools – Welches Modell ?!</h2>
<div class="img-wall narrow">
  <img src="/img/models-wall.png" alt="OpenAI, Anthropic, Google Gemini, Qwen3, Mistral AI">
</div>

<!--
Welches Modell?! (Original-PDF 10) — es gibt viele Anbieter:
OpenAI, Anthropic, Google Gemini, Qwen3, Mistral AI.
Sagen kann man: Modellwahl ist eine eigene Entscheidung — die Faustregel kommt auf der nächsten Folie.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Tools – Welches Modell ?!</h2>

<table class="models">
  <thead>
    <tr>
      <th>Modell</th>
      <th>Nutzung für</th>
      <th>Kosten</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Opus</td>
      <td>
        <ul class="links">
          <li>Komplexe Architektur- oder Designentscheidungen</li>
          <li>Mehrstufiges Reasoning (lange Ableitungsketten)</li>
          <li>Wenn ein Fehler teuer ist und Geschwindigkeit egal ist</li>
        </ul>
      </td>
      <td>Hoch</td>
    </tr>
    <tr>
      <td>Sonnet</td>
      <td>
        <ul class="links">
          <li>Feature-Implementierung</li>
          <li>Bugfixing</li>
          <li>Refactoring</li>
          <li>Tests schreiben</li>
          <li>Code-Reviews</li>
        </ul>
      </td>
      <td>Mittel</td>
    </tr>
    <tr>
      <td>Haiku</td>
      <td>
        <ul class="links">
          <li>Autovervollständigung, kleine Snippets</li>
          <li>Einfache Boilerplate generieren</li>
          <li>Code-Kommentare / Docstrings</li>
        </ul>
      </td>
      <td>Billig</td>
    </tr>
  </tbody>
</table>

<!--
Faustregel zur Modellwahl (Original-PDF 11).
Opus: komplexe Architektur/Design, mehrstufiges Reasoning, teure Fehler bei egaler Geschwindigkeit — hohe Kosten.
Sonnet: das Arbeitstier — Feature-Implementierung, Bugfixing, Refactoring, Tests, Code-Reviews — mittlere Kosten.
Haiku: Autovervollständigung, Boilerplate, Kommentare/Docstrings — günstig.
Sagen kann man: Nicht immer das teuerste Modell nehmen — die Aufgabe entscheidet.
-->

---
layout: statement
secno: "03"
---

<p class="huge"><span class="accent">//</span> Vielen Dank!</p>
<p class="lead" style="margin-top:0.7em">Fragen?</p>

<!--
Abschluss. Danke und Raum für Fragen.
-->
