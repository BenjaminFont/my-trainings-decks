---
# codecentric Pitch-Starter — überzeugendes Deck (Angebot/Vertrieb).
# Theme liegt im selben Repo unter ../../theme.
theme: ../../theme
title: Pitch-Starter
titleTemplate: '%s'
canvasWidth: 1280
aspectRatio: 16/9
fonts:
  sans: Rubik
  local: Rubik
  provider: none
layout: pitch-cover
mdc: true
---

<div class="cc-cover-page">
  <div class="cc-cover-left">
    <h1>Angebots&shy;titel</h1>
    <p class="cc-cover-sub">Kurze Wertversprechen-Zeile als <strong>Untertitel</strong>.</p>
  </div>
  <div class="cc-cover-right">
    <div class="cc-cover-bubble">
      <span class="cc-slashes">//</span> Kunde &times; codecentric
    </div>
  </div>
</div>

<style>
.cc-cover-page {
  position: absolute; inset: 0;
  display: grid; grid-template-columns: 1.15fr 0.85fr;
  align-items: center; padding: 0 4.2rem;
}
.cc-cover-left h1 { font-size: 4.8rem; line-height: 0.98; font-weight: 900; letter-spacing: -0.02em; }
.cc-cover-sub { font-size: 1.5rem; margin-top: 1.6rem; max-width: 24ch; line-height: 1.22; }
.cc-cover-bubble {
  background: #fff; border-radius: 28px 28px 4px 28px;
  padding: 1.6rem 1.7rem; font-size: 1.3rem; font-weight: 500; line-height: 1.35;
}
</style>

<!--
Pitch-Cover (layout: pitch-cover, Default-Variante grün). Großer Titel links,
Sprechblase mit den Beteiligten rechts. Pitches sind kurz — der Inhalt steht
inline in dieser Datei statt in pages/.
-->

---
layout: pitch
foot: Ausgangslage
---

<h2 class="cc-h-slash">Was wir verstanden haben</h2>
<hr class="cc-divider" />

<div class="cc-grid cols-2" style="margin-top: 1.6rem; gap: 1.6rem; align-items: stretch;">

<div class="cc-phase p1">
<span class="num">Situation</span>
<h3>Heutiger Stand</h3>
<ul class="cc-dotlist" style="margin-top: 0.7rem; gap: 0.55rem;">
<li>Erste Beobachtung zur Ausgangslage.</li>
<li>Zweite Beobachtung, die den Bedarf zeigt.</li>
</ul>
</div>

<div class="cc-phase p2">
<span class="num">Bedarf</span>
<h3>Worum es geht</h3>
<ul class="cc-dotlist" style="margin-top: 0.7rem; gap: 0.55rem;">
<li>Was der Kunde erreichen will.</li>
<li>Welche Hürde im Weg steht.</li>
</ul>
</div>

</div>

<div class="cc-cross" style="margin-top: 1.6rem;">
  <span class="lab">Kern</span>
  <span class="txt">In <strong>einem Satz</strong>: das Problem, das wir lösen.</span>
</div>

<!--
Standard-Pitch-Inhaltsfolie (layout: pitch). // Headline + Divider, dann
Phasen-Karten (.cc-phase p1/p2/p3) und ein farbiges Hinweis-Band (.cc-cross).
foot-Label unten links benennt den Abschnitt.
-->

---
layout: pitch
foot: Unser Vorschlag
---

<h2 class="cc-h-slash">Unser Vorgehen</h2>
<hr class="cc-divider" />

<div class="cc-timeline" style="margin-top: 2rem;">
  <div class="step">
    <div class="wk">Phase 1</div>
    <h3>Verstehen</h3>
    <p>Discovery, Ist-Aufnahme, gemeinsame Zieldefinition.</p>
  </div>
  <div class="step">
    <div class="wk">Phase 2</div>
    <h3>Umsetzen</h3>
    <p>Iterativ liefern, früh Feedback, sichtbare Ergebnisse.</p>
  </div>
  <div class="step">
    <div class="wk">Phase 3</div>
    <h3>Verankern</h3>
    <p>Befähigen, übergeben, nachhaltig wirksam machen.</p>
  </div>
</div>

<!--
Vorgehens-Folie mit 3-Schritt-Timeline (.cc-timeline > .step). Die Farbe je
Schritt (grün/blau/mint) kommt automatisch.
-->

---
layout: pitch
foot: Das Team
---

<h2 class="cc-h-slash">Wer liefert</h2>
<hr class="cc-divider" />

<div class="cc-grid cols-2" style="margin-top: 2rem; gap: 2rem; align-items: stretch;">

<div class="lead-card green">
<span class="who">Name 1</span>
<span class="role">Rolle · Schwerpunkt</span>
<h3>Verantwortungsbereich</h3>
<p class="cp">Kurzbeschreibung des Beitrags.</p>
</div>

<div class="lead-card blue">
<span class="who">Name 2</span>
<span class="role">Rolle · Schwerpunkt</span>
<h3>Verantwortungsbereich</h3>
<p class="cp">Kurzbeschreibung des Beitrags.</p>
</div>

</div>

<div class="om-note" style="margin-top: 1.8rem;">
Optionaler Hinweis darunter — z. B. wie das Team zusammenarbeitet.
</div>

<!--
Team-Folie mit Lead-Cards (.lead-card green|blue). Für Pitches mit zwei
zentralen Personen / Verantwortungsbereichen.
-->

---
layout: pitch
foot: Konditionen
---

<h2 class="cc-h-slash">Investition</h2>
<hr class="cc-divider" />

<table class="cc-table" style="margin-top: 1.6rem;">
  <thead>
    <tr><th>Leistung</th><th>Umfang</th><th>Preis</th></tr>
  </thead>
  <tbody>
    <tr><td>Phase 1 — Verstehen</td><td>2 Wochen</td><td>€ XX.XXX</td></tr>
    <tr><td>Phase 2 — Umsetzen</td><td>6 Wochen</td><td>€ XX.XXX</td></tr>
    <tr><td>Phase 3 — Verankern</td><td>2 Wochen</td><td>€ XX.XXX</td></tr>
    <tr class="total"><td>Gesamt</td><td>10 Wochen</td><td>€ XXX.XXX</td></tr>
  </tbody>
</table>

<p class="cc-note" style="margin-top: 1.2rem;">Alle Preise netto zzgl. USt. Reisekosten nach Aufwand.</p>

<!--
Konditionen-Folie mit schlichter KPI-/Pricing-Tabelle (.cc-table, .total für
die Summenzeile). Platzhalter-Zahlen ersetzen.
-->

---
layout: pitch-section
---

<div class="cc-statement">
  <p>Wir glauben, dass <span class="cc-mark">das hier funktioniert</span> — und liefern den Beweis.</p>
</div>

<!--
Statement-/Sektions-Folie (layout: pitch-section). Große Aussage mit grünem
Marker-Highlight (.cc-mark, auch .blue / .yellow). Starker Abschluss vor dem
Kontakt.
-->

---
layout: pitch-cover
variant: white
---

<div class="cc-close">
  <div>
    <h2 class="cc-h-slash" style="font-size: 2.6rem;">Sprechen wir darüber.</h2>
  </div>
  <div class="cc-close-card">
    <p style="font-weight: 700; font-size: 1.2rem;">Name 1</p>
    <p class="cc-note" style="font-size: 0.85rem;">Rolle · E-Mail</p>
    <p style="font-weight: 700; font-size: 1.2rem; margin-top: 0.9rem;">Name 2</p>
    <p class="cc-note" style="font-size: 0.85rem;">Rolle · E-Mail</p>
  </div>
</div>

<!--
Abschluss-/Kontakt-Folie (layout: pitch-cover, variant: white). Call-to-Action
links, Kontakt-Karte (.cc-close-card) rechts.
-->
