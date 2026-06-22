---
layout: topic
headline: Working Slot
image: /img/working-slot.jpg
imageAlt: Zwei Personen vor einer Glaswand voller Beispiel-Mapping-Karten / Story-Map
nologo: true
---

<!--
PDF-Seite 19 — Abschluss / „Working Slot". Foto: zwei Personen vor einer Glaswand voller Story-Map-Karten (Q1–Q4, Sticky Notes).
Ziel: Übergang in die praktische Übung — jetzt selbst Example Mapping / EXACT anwenden.
Sagen kann man: „Genug Theorie — jetzt der Working Slot. Nehmt euch eine Story, macht Example Mapping, und lasst die KI im TDD-Loop bauen. Wir gehen herum und helfen."
-->

---
layout: cc
---

<span class="secno"></span>
<h2 class="slash">Working Slot — Vorgehen</h2>
<div class="ws two-col" style="margin-top:0.5em">
<div>
<div class="ws-phase"><span class="pill green">Phase 1</span> Setup</div>
<ul class="dot-list compact">
<li>Ein eigenes Repo auswählen</li>
<li>Branch anlegen: <code class="inline">test-driven-development</code></li>
<li>Aus dem vorgegebenen Repo <strong>test-driven-development-files</strong> den <code class="inline">.claude</code>-Ordner ins eigene Repo kopieren</li>
</ul>
</div>
<div>
<div class="ws-phase"><span class="pill blue">Phase 2 · Plenum</span> Feature wählen</div>
<ul class="dot-list compact">
<li>Ein <strong>kleines</strong> Feature überlegen — nicht trivial (keine Umbenennung, keine Tests ergänzen), aber auch nicht ultra-komplex</li>
<li>Groß genug, um das Vorgehen mit dem Agenten einmal durchzuspielen</li>
<li>Idealerweise mit Frontend- &amp; Backend-Anteil (kein Muss)</li>
<li>Vorhaben notieren → im <strong>Plenum</strong> besprechen</li>
</ul>
<div class="ws-phase" style="margin-top:0.6em"><span class="pill green">Phase 3</span> Implementieren</div>
<ul class="dot-list compact">
<li>Das Feature nach <strong>Test-Driven Development</strong> umsetzen</li>
<li>Red → Green → Refactor mit dem Agenten</li>
</ul>
</div>
</div>

<style scoped>
.ws { font-size: 0.72em; gap: 2.4em; align-items: flex-start; }
.ws-phase { font-weight: 700; font-size: 1.05em; margin-bottom: 0.3em; display: flex; align-items: center; gap: 0.4em; }
.ws .dot-list { margin-top: 0.15em; }
.ws .dot-list.compact li { font-size: 0.9em; margin: 0.22em 0; display: block; padding-left: 0.9em; text-indent: -0.9em; }
.ws .dot-list.compact li::before { content: "•"; display: inline; margin-right: 0.3em; color: var(--cc-green); }
.ws .pill { font-size: 0.7em; }
</style>

<!--
Working Slot „EXACT" — Vorgehen (analog zur Vorgehen-Folie im Context-Engineering-Deck). Drei Phasen:

Phase 1 — Setup:
• Ein eigenes Repo auswählen.
• Darin einen Branch „test-driven-development" anlegen.
• Aus dem vorgegebenen Repo „test-driven-development-files" den .claude-Ordner ins eigene Repo kopieren.

Phase 2 — Feature wählen (Plenum):
• Ein kleines Feature überlegen — bewusst nicht trivial (keine Variablen-Umbenennung, kein bloßes Tests-Ergänzen), aber auch nicht ultra-komplex/langwierig.
• Es soll groß genug sein, um das Vorgehen mit dem Agenten einmal komplett durchzumachen.
• Im besten Fall hat es Frontend- UND Backend-Anteile — ist aber kein Muss.
• Vorhaben notieren und kurz im Plenum besprechen.

Phase 3 — Implementieren:
• Das Feature umsetzen und dabei konsequent nach Test-Driven Development arbeiten (Red → Green → Refactor) — gemeinsam mit dem Agenten.

Moderation: Phase 1 als kurzes Setup, Phase 2 als Überlegung + Plenumsrunde, Phase 3 als Hands-on mit Zeitbox.
-->
