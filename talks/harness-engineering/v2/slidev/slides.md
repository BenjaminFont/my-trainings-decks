---
theme: ../../../../theme-codecentric/theme
title: Harness Engineering
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

<h1 class="cover-title">Coding<br/>is dead.</h1>

<style scoped>
:deep(.cc.title-slide) { justify-content: center; padding-bottom: 0; }
:deep(h1.cover-title) {
  font-size: 7.5rem;
  line-height: 0.92;
  font-weight: 900;
  letter-spacing: -0.03em;
}
</style>

<!--
Folie 1 (Original-PDF 1) — Cover. Provokante These: „Coding is dead."
Ziel: Einstieg, Aufmerksamkeit. Nicht das Programmieren ist tot, sondern die Rolle verschiebt sich — das lösen wir auf.
-->

---
layout: statement
nologo: false
---

<div class="quotes">
  <div class="q q-a">
    <p class="q-text">“1 Mio lines of code (LOC) in wenigen Monaten.”</p>
    <p class="q-src">— OpenAI Engineering Team</p>
  </div>
  <div class="q q-b">
    <p class="q-text">“3000 LOC in wenigen Stunden”</p>
    <p class="q-src">— Codecentric Kunde</p>
  </div>
  <div class="q q-c">
    <p class="q-text">“4500 LOC & 10000 LOTC in ein paar Tagen”</p>
    <p class="q-src">— Mein Projekt</p>
  </div>
  <div class="q q-d">
    <p class="q-text">“Vorher 300 PT nachher mit AI 100 PT”</p>
    <p class="q-src">— Mein Projekt</p>
  </div>
</div>

<style scoped>
.quotes { height: 100%; width: 100%; position: relative; }
.q-text { font-style: italic; font-size: 1.7rem; font-weight: 400; }
.q-src  { color: var(--cc-blue); font-weight: 700; font-size: 1.15rem; margin-top: 0.3rem; padding-left: 1.5rem; }
.q { position: absolute; }
.q-a { top: 8%; left: 2%; }
.q-b { top: 33%; left: 40%; }
.q-c { top: 56%; left: 2%; }
.q-d { top: 76%; left: 38%; }
</style>

<!--
Folie 2 (Original-PDF 2) — Vier Zitate / LOC-Zahlen aus der Praxis.
Ziel: Belegen, dass Code-Generierung explodiert. Generierung ist kein Engpass mehr — wo liegt der neue Engpass?
-->

---
layout: statement
---

<div class="big-statement">
  <p>Ich analysiere.</p>
  <p>Ich entwerfe.</p>
  <p>Ich schreibe Code.</p>
</div>

<style scoped>
.big-statement { width: 100%; }
.big-statement p { font-size: 5.2rem; font-weight: 900; line-height: 1.12; letter-spacing: -0.02em; margin: 0; }
</style>

<!--
Folie 3 (Original-PDF 3) — Klassisches Selbstbild des Software Engineers.
Ziel: Die gewohnte Tätigkeitskette etablieren, bevor sie durchgestrichen wird.
-->

---
layout: statement
---

<div class="big-statement">
  <p class="struck">Ich analysiere.</p>
  <p class="struck">Ich entwerfe.</p>
  <p class="struck">Ich schreibe Code.</p>
  <p class="caption">— Software Engineering bis 2025</p>
</div>

<style scoped>
.big-statement { width: 100%; }
.big-statement p.struck { font-size: 5rem; font-weight: 900; line-height: 1.16; letter-spacing: -0.02em; margin: 0; text-decoration: line-through; text-decoration-thickness: 3px; }
.big-statement p.caption { font-size: 1.9rem; font-weight: 700; margin-top: 1.3rem; line-height: 1.2; }
</style>

<!--
Folie 4 (Original-PDF 4) — Selbstbild durchgestrichen: „Software Engineering bis 2025".
Ziel: Den Bruch markieren — die AI übernimmt Analyse, Entwurf, Code.
-->

---
layout: statement
---

<div class="big-statement">
  <p class="struck">Ich analysiere.</p>
  <p class="struck">Ich entwerfe.</p>
  <p class="struck">Ich schreibe Code.</p>
  <p class="review">Ich reviewe.</p>
  <p class="caption">— Software Engineering ab 2025</p>
</div>

<style scoped>
.big-statement { width: 100%; }
.big-statement p { font-size: 4.6rem; font-weight: 900; line-height: 1.16; letter-spacing: -0.02em; margin: 0; }
.big-statement p.struck { text-decoration: line-through; text-decoration-thickness: 3px; }
.big-statement p.review { color: var(--cc-red); }
.big-statement p.caption { font-size: 1.9rem; font-weight: 700; margin-top: 1.1rem; line-height: 1.2; color: var(--cc-black); }
</style>

<!--
Folie 5 (Original-PDF 5) — Was bleibt: „Ich reviewe." — „Software Engineering ab 2025".
Ziel: Die neue Kernaufgabe benennen: prüfen, lenken, absichern wird zentral.
-->

---
layout: none
class: no-logo
---

<div class="road-slide">
  <img src="/img/road.png" alt="Straße in eine offene Landschaft — der Weg vor uns" />
</div>

<style scoped>
.road-slide { width: 100%; height: 100%; }
.road-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
</style>

<!--
Folie 6 (Original-PDF 6) — Übergangs-Bildfolie (Straße, schwarz-weiß).
Ziel: Szenenwechsel, kurzes Innehalten vor dem „Wie".
-->

---
layout: statement
---

<div class="adapt">
  <p class="line1"><b>2 mögliche Adaptationen</b></p>
  <p class="line2"><i>Product Engineering</i></p>
  <p class="line3"><i>& Harness Engineering</i></p>
</div>

<style scoped>
.adapt { width: 100%; }
.adapt p { font-size: 3.6rem; line-height: 1.25; margin: 0; }
.adapt .line1 { font-weight: 800; }
.adapt .line2, .adapt .line3 { font-weight: 400; }
</style>

<!--
Folie 7 (Original-PDF 7) — Zwei mögliche Adaptationen: Product Engineering & Harness Engineering.
Ziel: Die zwei großen Antworten auf die neue Lage benennen — das sind die Leitthemen des Talks.
-->

---
layout: cc
class: 'center-text'
---

<div class="dd-slide">
  <Diamonds size="170px" />
  <div class="roles">
    <div class="cc-pill role-pill" style="grid-column: 1 / 4;">PO / PM / BA</div>
    <div class="cc-pill role-pill" style="grid-column: 5 / 10;">Software Engineer</div>
    <div class="cc-pill role-pill" style="grid-column: 1 / 10;">AI</div>
  </div>
</div>

<style scoped>
.dd-slide { width: 100%; padding: 0 1rem; }
.roles { display: grid; grid-template-columns: repeat(9, 1fr); gap: 0.9rem 0.6rem; margin-top: 2.8rem; }
.role-pill { background: var(--cc-gray-soft); }
.role-pill:last-child { background: var(--cc-red-soft); }
</style>

<!--
Folie 8 (Original-PDF 8) — Double Diamond: Rollen-Spannweite, unterste Leiste „AI".
Ziel: Zeigen, dass AI über den gesamten Raum (Problem · Lösung · Umsetzung) wirken kann. PO/PM/BA im Problemraum, Software Engineer in Lösung/Umsetzung.
-->

---
layout: cc
class: 'center-text'
---

<div class="dd-slide">
  <Diamonds size="170px" />
  <div class="roles2">
    <div class="cc-pill role-pill" style="grid-column: 1 / 4; background: var(--cc-gray-soft);">PO / PM / BA</div>
    <div class="cc-pill role-pill" style="grid-column: 4 / 10; background: var(--cc-red-soft);">AI</div>
  </div>
</div>

<style scoped>
.dd-slide { width: 100%; padding: 0 1rem; }
.roles2 { display: grid; grid-template-columns: repeat(9, 1fr); gap: 0.9rem; margin-top: 2.8rem; }
</style>

<!--
Folie 9 (Original-PDF 9) — Double Diamond: PO/PM/BA (Problem) + AI (Lösung/Umsetzung).
Ziel: Erste Adaption — die menschliche Rolle bleibt im Problemraum, die AI übernimmt Lösung und Umsetzung.
-->

---
layout: cc
class: 'center-text'
---

<div class="dd-slide">
  <Diamonds size="170px" />
  <div class="roles3">
    <div class="cc-pill role-pill" style="grid-column: 1 / 5; background: var(--cc-gray-soft);">PO / PM / BA</div>
    <div class="ai-col" style="grid-column: 5 / 10;">
      <div class="harness-top"></div>
      <div class="cc-pill role-pill" style="background: var(--cc-red-soft);">AI</div>
      <div class="harness-bot"></div>
      <div class="harness-label">Harness Engineering</div>
    </div>
  </div>
</div>

<style scoped>
.dd-slide { width: 100%; padding: 0 1rem; }
.roles3 { display: grid; grid-template-columns: repeat(9, 1fr); gap: 0.9rem; margin-top: 2.6rem; align-items: start; }
.ai-col { display: flex; flex-direction: column; align-items: stretch; }
.harness-top, .harness-bot { height: 3px; background: var(--cc-red); margin: 0.45rem 0; }
.harness-label { color: var(--cc-red); font-weight: 600; text-align: center; margin-top: 0.4rem; font-size: 1.3rem; }
</style>

<!--
Folie 10 (Original-PDF 10) — Double Diamond mit Harness-Klammer um „AI".
Ziel: Zweite Adaption — Harness Engineering als System aus Leitplanken rund um die AI-Umsetzung. Überleitung zur Schichten-Darstellung.
-->

---
layout: cc
---

<div class="rings-slide">
  <div class="labels">
    <div class="lbl l-user">User Harness</div>
    <div class="lbl l-model">Model</div>
    <div class="lbl l-tool">Tool Harness<br/>e.g. Claude Code</div>
  </div>
  <div class="rings">
    <div class="ring r1">
      <div class="ring r2">
        <div class="ring r3"></div>
      </div>
    </div>
  </div>
</div>

<style scoped>
.rings-slide { display: grid; grid-template-columns: 1fr 1fr; height: 100%; align-items: center; padding: 1rem 2rem; }
.labels { position: relative; height: 100%; }
.lbl { position: absolute; font-size: 1.9rem; right: 1rem; text-align: right; line-height: 1.2; }
.l-user  { top: 22%; }
.l-model { top: 50%; transform: translateY(-50%); }
.l-tool  { top: 70%; }
.rings { display: flex; align-items: center; justify-content: center; position: relative; }
.ring { border: 2px solid var(--cc-line); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.r1 { width: 380px; height: 380px; background: var(--cc-green-soft); }
.r2 { width: 250px; height: 250px; background: var(--cc-green); }
.r3 { width: 110px; height: 110px; background: var(--cc-gray-soft); }
</style>

<!--
Folie 11 (Original-PDF 11) — Konzentrische Kreise: User Harness · Model · Tool Harness.
Ziel: Das Harness in Schichten zerlegen — Modell im Kern, Tool-Harness (Claude Code) darum, User-Harness außen (das, was wir bauen).
-->

---
layout: section
headline: "Guides\n& Sensors"
---

<div class="sec-sub">Feedforward & Feedback</div>

<style scoped>
.sec-sub { font-size: 1.8rem; font-weight: 500; margin-top: 0.8rem; }
</style>

<!--
Folie 12 (Original-PDF 12) — Kapitel-Trenner: Guides & Sensors (Feedforward & Feedback).
Ziel: Begrifflichen Rahmen setzen — Guides nach vorn, Sensors als Rückmeldung.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Guides (feedforward)</h2>
</div>

<table class="cc-table compact">
  <thead>
    <tr><th>Example</th><th>Computational</th><th>Inferential</th><th>Example Implementation</th></tr>
  </thead>
  <tbody>
    <tr><td>Coding Conventions</td><td></td><td class="x">X</td><td>Rule file</td></tr>
    <tr><td>Codemods</td><td class="x">X</td><td></td><td>OpenRewrite recipes</td></tr>
    <tr><td>Bootstrap Templates</td><td class="x">X</td><td></td><td>Scripts to bootstrap a project</td></tr>
    <tr><td>Language Server as Tools</td><td class="x">X</td><td></td><td>Claude Code Plugins</td></tr>
    <tr><td>Gerkin Akzeptanztests</td><td class="x">X</td><td></td><td>Cucumber</td></tr>
    <tr><td>SDD Specs & Plans</td><td></td><td class="x">X</td><td>spec / plan markdowns</td></tr>
    <tr><td>MCP Server</td><td></td><td class="x">X</td><td>context7</td></tr>
  </tbody>
</table>

<style scoped>
.head-row { margin-bottom: 1.4rem; }
.head-row h2 { font-size: 2.1rem; }
.cc-slashes { font-size: 2.1rem; }
</style>

<!--
Folie 13 (Original-PDF 13) — Tabelle „Guides (feedforward)".
Ziel: Guides katalogisieren, eingeordnet in computational / inferential, mit Beispiel-Implementierungen. Computational = berechenbar/deterministisch; inferential = vom Modell interpretiert.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Sensors (feedbacks)</h2>
</div>

<table class="cc-table compact">
  <thead>
    <tr><th>Example</th><th>Computational</th><th>Inferential</th><th>Example Implementation</th></tr>
  </thead>
  <tbody>
    <tr><td>Structure Tests</td><td class="x">X</td><td></td><td>Arch Unit Tests</td></tr>
    <tr><td>Instructions how to review</td><td></td><td class="x">X</td><td>review-rules.md</td></tr>
    <tr><td>Review Agents (LLM as a judge)</td><td></td><td class="x">X</td><td>code-review.md<br/>domain-knowledge.md</td></tr>
    <tr><td>Linters</td><td class="x">X</td><td></td><td>npx eslint</td></tr>
    <tr><td>Static Code Analysis</td><td class="x">X</td><td></td><td>Sonar</td></tr>
    <tr><td>MCP Server</td><td></td><td class="x">X</td><td>Kibana, Playwright</td></tr>
  </tbody>
</table>

<style scoped>
.head-row { margin-bottom: 1.4rem; }
.head-row h2 { font-size: 2.1rem; }
.cc-slashes { font-size: 2.1rem; }
</style>

<!--
Folie 14 (Original-PDF 14) — Tabelle „Sensors (feedbacks)".
Ziel: Sensoren katalogisieren — Struktur-Tests (ArchUnit), Review-Agenten (LLM as a judge), Linter, Static Analysis (Sonar), MCP-Server.
-->

---
layout: cc
class: 'tl-page'
---

<ImproveTrigger />

<style scoped>
:deep(.slidev-layout.cc.tl-page) { padding-top: 3%; }
</style>

<!--
Folie 15 (Original-PDF 15) — Improve · Engineer · Trigger.
Ziel: Die Rolle des Engineers im Loop zeigen — Harness (Specs, How-tos, API Contract, LSP; Review-Agents, Logs, Browser), Feedforward/Feedback, Coding-Agent mit Generation/Correction.
-->

---
layout: section
headline: "Unser Harness"
---

<div class="sec-sub">Was bei uns funktioniert</div>

<style scoped>
.sec-sub { font-size: 1.8rem; font-weight: 500; margin-top: 0.8rem; }
</style>

<!--
Folie 16 (Original-PDF 16) — Kapitel-Trenner: Unser Harness — Was bei uns funktioniert.
Ziel: Vom Konzept zur Praxis. Jetzt kommen konkrete Bausteine aus echten Projekten.
-->

---
layout: statement
---

<div class="code-title">
  <p class="ct-h"><b>ArchUnits Test</b></p>
  <p class="ct-s"><i>(Sensor - computational)</i></p>
</div>

<style scoped>
.code-title { width: 100%; }
.code-title .ct-h { font-size: 3.6rem; font-weight: 800; margin: 0; }
.code-title .ct-s { font-size: 2.6rem; font-weight: 400; margin: 0.4rem 0 0; }
</style>

<!--
Folie 17 (Original-PDF 17) — Titel: ArchUnits Test (Sensor - computational).
Ziel: Den ersten konkreten Sensor einführen — ArchUnit als berechenbarer Struktur-Test.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>ArchUnit Tests</h2>
</div>

```java
@Test
void calculationDatenflussUnidirektional() {

    // ① REGEL: gilt für alle Klassen in calculation
    ArchRule rule = classes().that().resideInAPackage("..calculation..")
         .should(new ArchCondition<JavaClass>("nur shared + contract referenzieren") {

             // ② PRÜFUNG: Verstoss erkennen + Notification ausloesen
             @Override public void check(JavaClass c, ConditionEvents events) {
                  c.getDirectDependenciesFromSelf().forEach(dep -> {
                    String ziel = extractModule(dep.getTargetClass().getPackageName());

                    if (verboten.contains(ziel)) {                  // ← Regel VERLETZT
                         events.add(SimpleConditionEvent.violated(   // ← loest Notification aus
                            c, agentHinweis(c, ziel)));
                    }
                  });
             }
         });

    rule.check(allClasses);
}

// ③ NOTIFICATION: was der Agent liest
private static String agentHinweis(JavaClass quelle, String ziel) {
    return String.format(
         "[ARCH-VIOLATION calculation->%s] %s greift auf '%s' zu.%n"
       + "URSACHE: Datenfluss muss unidirektional sein.%n"
       + "FIX: Daten via DTO/Interface in 'contract' uebergeben.",
         ziel, quelle.getFullName(), ziel);
}
```

<style scoped>
.head-row { margin-bottom: 0.6rem; }
.head-row h2 { font-size: 1.9rem; }
.cc-slashes { font-size: 1.9rem; }
:deep(pre) { font-size: 0.5rem !important; }
</style>

<!--
Folie 18 (Original-PDF 18) — ArchUnit-Test (Code): Datenfluss unidirektional.
Ziel: Konkret zeigen, wie ein Struktur-Test als Sensor wirkt. Drei Teile: ① Regel (calculation darf nur shared + contract referenzieren), ② Prüfung (Verstoss erkennen), ③ Notification — eine Klartext-Meldung, die der Agent liest und zum Fixen nutzt.
Sagen kann man: Der Clou ist die agentHinweis-Notification — der Test liefert nicht nur „failed", sondern eine handlungsleitende Anweisung für den Agenten.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>ArchUnit Tests</h2>
</div>

```java
@Test
void keineGleitkommaFelder() {

    // ① REGEL: gilt für alle Klassen in den Berechnungs-Packages
    ArchRule rule = classes()
         .that().resideInAnyPackage("..calculation..", "..shared..", "..contract..")
         .should(new ArchCondition<JavaClass>("keine float/double-Felder haben") {

             // ② PRÜFUNG: Verstoss erkennen + Notification ausloesen
             @Override public void check(JavaClass c, ConditionEvents events) {
                  for (JavaField f : c.getFields()) {
                       if (FLOAT_TYPEN.contains(f.getRawType().getName())) {   // ← Regel VERLETZT
                            events.add(SimpleConditionEvent.violated(          // ← loest Notification aus
                               c, agentHinweis(f)));
                       }
                  }
             }
         });

    rule.check(allClasses);
}

// ③ NOTIFICATION: was der Agent bei Verstoss liest
private static String agentHinweis(JavaField feld) {
    return String.format(
         "[ARCH-VIOLATION money] Feld '%s' ist '%s'.%n"
       + "URSACHE: float/double erzeugt Cent-Rundungsfehler (NFR4).%n"
       + "FIX: Typ auf 'de.example.rv.shared.Money' aendern (Scale=2, HALF_UP).",
         feld.getName(), feld.getRawType().getName());
}
```

<style scoped>
.head-row { margin-bottom: 0.6rem; }
.head-row h2 { font-size: 1.9rem; }
.cc-slashes { font-size: 1.9rem; }
:deep(pre) { font-size: 0.5rem !important; }
</style>

<!--
Folie 19 (Original-PDF 19) — ArchUnit-Test (Code): keine Gleitkomma-Felder in Geld-Berechnungen.
Ziel: Zweites Beispiel. Regel: float/double in calculation/shared/contract verboten (Cent-Rundungsfehler, NFR4). Notification weist den Agenten an, auf den Money-Typ (Scale=2, HALF_UP) umzustellen.
-->

---
layout: statement
---

<div class="code-title">
  <p class="ct-h"><b>Spec Driven Development</b></p>
  <p class="ct-s"><i>(Guide - computational)</i></p>
</div>

<style scoped>
.code-title { width: 100%; }
.code-title .ct-h { font-size: 3.6rem; font-weight: 800; margin: 0; }
.code-title .ct-s { font-size: 2.6rem; font-weight: 400; margin: 0.4rem 0 0; }
</style>

<!--
Folie 20 (Original-PDF 20) — Titel: Spec Driven Development (Guide - computational).
Ziel: Den nächsten Baustein einführen — SDD als berechenbarer Guide (ausführbare Specs).
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Spec Driven Development</h2>
</div>

<ul class="dots" style="font-size: 1.15em; margin-top: 1.5em">
  <li class="y">Behaviour Driven Development</li>
  <li class="b">Acceptance Test Driven Development</li>
  <li class="g">Example Mapping um Szenarien und Akzeptanz Tests anzureichern</li>
  <li class="g">Cucumber um Szenarien zu ausführbaren Tests zu machen</li>
</ul>

<style scoped>
.head-row { margin-bottom: 1rem; }
.head-row h2 { font-size: 2.1rem; }
.cc-slashes { font-size: 2.1rem; }
</style>

<!--
Folie 21 (Original-PDF 21) — Spec Driven Development: die Bausteine.
Ziel: SDD als Synthese aus BDD, ATDD, Example Mapping und Cucumber. Example Mapping reichert Szenarien an, Cucumber macht sie ausführbar.
-->

---
layout: cc
class: 'em-page'
---

<ExampleMapping />

<style scoped>
:deep(.slidev-layout.cc.em-page) { padding-top: 2.5%; }
</style>

<!--
Folie 22 (Original-PDF 22) — Example Mapping wird zu Story-Kontext + ausführbaren Tests.
Ziel: Zeigen, wie aus Example Mapping im Team (Story, Rules, Examples, offene Fragen) eine Story-Description plus Gherkin-Edge-Case-Tests entsteht.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Spec Driven Development</h2>
</div>

```gherkin
Funktionalität: Terminbuchung (Feature: Book Meeting)
  Als Kunde möchte ich einen Termin vereinbaren,
  damit ich ein Meeting buchen kann.

  Szenario: Buchung am Samstag wird abgelehnt (Regel 1)
    Gegeben sei, ein Kunde möchte einen Termin für "Samstag 10:00 Uhr" buchen
    Wenn die Buchung angefragt wird
    Dann sollte die Buchung abgelehnt werden
    Und die Nachricht sollte "Nur an Wochentagen möglich" lauten

  Szenario: Buchung mit zu kurzer Vorlaufzeit wird abgelehnt (Regel 2)
    Gegeben sei, die aktuelle Zeit ist Donnerstag um 12:00 Uhr
    Wenn der Kunde einen Termin für "Donnerstag 14:00 Uhr" anfragt
    Dann sollte die Buchung abgelehnt werden
    Und die Nachricht sollte "Vorlaufzeit von mindestens 24 Stunden erforderlich" lauten
```

<style scoped>
.head-row { margin-bottom: 0.7rem; }
.head-row h2 { font-size: 1.9rem; }
.cc-slashes { font-size: 1.9rem; }
:deep(pre) { font-size: 0.62rem !important; }
</style>

<!--
Folie 23 (Original-PDF 23) — Spec Driven Development (Gherkin-Feature): Terminbuchung.
Ziel: Die ausführbare Spec zeigen. Zwei Szenarien (Samstag abgelehnt, zu kurze Vorlaufzeit abgelehnt) als Gherkin — lesbar für Fachexperten UND ausführbar.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Spec Driven Development</h2>
</div>

```javascript
// --- STEP DEFINITIONS FÜR SZENARIO 1 & 2 ---

Given('ein Kunde möchte einen Termin für {string} buchen', function (terminString) {
       // Speichert den Wunschtermin (z.B. "Samstag 10:00 Uhr")
       aktuellerTerminwunsch = terminString;
});

Given('die aktuelle Zeit ist Donnerstag um 12:00 Uhr', function () {
       // Simuliert die Systemzeit für den Vorlaufzeit-Test (Mocking)
       systemZeit = new Date("2026-06-11T12:00:00");
});

When('der Kunde einen Termin für {string} anfragt', function (terminString) {
       aktuellerTerminwunsch = terminString;
       // Führt die eigentliche Buchungslogik des Systems aus
       buchungsergebnis = Terminservice.bucheTermin(aktuellerTerminwunsch, systemZeit);
});

When('die Buchung angefragt wird', function () {
       // Führt die Buchungslogik für das erste Szenario aus (ohne spezielle Systemzeit)
       buchungsergebnis = Terminservice.bucheTermin(aktuellerTerminwunsch);
});

Then('sollte die Buchung abgelehnt werden', function () {
       // Prüft, ob das System die Buchung erfolgreich blockiert hat
       assert.strictEqual(buchungsergebnis.erfolgreich, false);
});

Then('die Nachricht sollte {string} lauten', function (erwarteteNachricht) {
       // Überprüft, ob dem Kunden die korrekte Fehlermeldung angezeigt wird
       assert.strictEqual(buchungsergebnis.meldung, erwarteteNachricht);
});
```

<style scoped>
.head-row { margin-bottom: 0.5rem; }
.head-row h2 { font-size: 1.9rem; }
.cc-slashes { font-size: 1.9rem; }
:deep(pre) { font-size: 0.5rem !important; }
</style>

<!--
Folie 24 (Original-PDF 24) — Spec Driven Development (Cucumber Step Definitions, JS).
Ziel: Die Brücke von der Gherkin-Spec zum Code zeigen — Step-Definitions binden Given/When/Then an die Buchungslogik. So wird die Spec wirklich ausführbar.
-->

---
layout: statement
---

<div class="code-title">
  <p class="ct-h"><b>Bau einer konsumierbaren Domäne</b></p>
  <p class="ct-s"><i>(Sensor & Guide - inferential)</i></p>
</div>

<style scoped>
.code-title { width: 100%; }
.code-title .ct-h { font-size: 3.4rem; font-weight: 800; margin: 0; line-height: 1.15; }
.code-title .ct-s { font-size: 2.4rem; font-weight: 400; margin: 0.6rem 0 0; }
</style>

<!--
Folie 25 (Original-PDF 25) — Titel: Bau einer konsumierbaren Domäne (Sensor & Guide - inferential).
Ziel: Den nächsten Baustein einführen — die konsumierbare Domäne wirkt als Guide UND Sensor und ist inferential (modellgetrieben).
-->

---
layout: cc
class: 'dm-page'
---

<DomainModelling />

<style scoped>
:deep(.slidev-layout.cc.dm-page) { padding-top: 3%; }
</style>

<!--
Folie 26 (Original-PDF 26) — Domain Modelling: zweistufiger Prozess Analyse → Development.
Ziel: Workflow zeigen. 1. Analyse (Code-Analyse, Prozessfragen, Interview-Transkription, Synthese) → md-Dateien, validiert durch Fachexperten. 2. Development (Planning, Solutioning, Implementing) mit Claude Code.
-->

---
layout: cc
---

<DomainConsumable />

<!--
Folie 27 (Original-PDF 27) — Die konsumierbare Domäne speist spezialisierte Agenten.
Ziel: Zeigen, wie processes.md, glossar.md, user.md als Kontext dienen: Fachexperte-Agent (klärt fachliche Fragen), Example-Mapping-Agent (formt Anforderungen), weitere Agents.
-->

---
layout: section
headline: "Harness Evals"
---

<div class="sec-sub">Was funktioniert wirklich</div>

<style scoped>
.sec-sub { font-size: 1.8rem; font-weight: 500; margin-top: 0.8rem; }
</style>

<!--
Folie 28 (Original-PDF 28) — Kapitel-Trenner: Harness Evals — Was funktioniert wirklich.
Ziel: Überleitung zur Messung. Wie evaluieren wir, ob das Harness tatsächlich hilft?
-->

---
layout: statement
---

<div class="code-title">
  <p class="ct-h"><b>/insights</b></p>
  <p class="ct-s"><i>(Claude Code)</i></p>
</div>

<style scoped>
.code-title { width: 100%; }
.code-title .ct-h { font-size: 3.6rem; font-weight: 800; margin: 0; }
.code-title .ct-s { font-size: 2.6rem; font-weight: 400; margin: 0.4rem 0 0; }
</style>

<!--
Folie 29 (Original-PDF 29) — Titel: /insights (Claude Code).
Ziel: Das erste Eval-Werkzeug einführen — der /insights-Befehl von Claude Code.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>/insights</h2>
</div>

<ul class="dots" style="font-size: 1.05em; margin-top: 1.2em">
  <li class="y">ls -t ~/.claude/projects/-Users-{user}-{your-project}/*.jsonl</li>
  <li class="b">file_reads, input_token, output_token, tool_use, tool_result, messaging, subagent, skills</li>
  <li class="g">30 Tage → cleanupPeriodDays → ~/.claude/settings.json</li>
  <li class="p">Es gilt immer letzten Änderungsdatum</li>
</ul>

<style scoped>
.head-row { margin-bottom: 1rem; }
.head-row h2 { font-size: 2.1rem; }
.cc-slashes { font-size: 2.1rem; }
</style>

<!--
Folie 30 (Original-PDF 30) — /insights: wo die Daten liegen und was drinsteckt.
Ziel: Erklären, dass Claude Code pro Projekt JSONL-Logs schreibt (file_reads, Token, Tool-Use, Subagents, Skills …), 30 Tage aufbewahrt (cleanupPeriodDays in settings.json). Maßgeblich ist das letzte Änderungsdatum.
-->

---
layout: imagecard
image: /img/insights.png
imageAlt: Claude Code Insights — At a Glance Report
maxHeight: 88%
---

<!--
Folie 31 (Original-PDF 31) — Screenshot: Claude Code Insights „At a Glance".
Ziel: Den realen Report zeigen — was funktioniert, was hakt, Quick Wins, Ambitious Workflows. Eine automatisch generierte Selbsteinschätzung der eigenen Arbeitsweise.
-->

---
layout: statement
---

<div class="code-title">
  <p class="ct-h"><b>Build your own</b></p>
  <p class="ct-s"><i>(TDD - Example)</i></p>
</div>

<style scoped>
.code-title { width: 100%; }
.code-title .ct-h { font-size: 3.6rem; font-weight: 800; margin: 0; }
.code-title .ct-s { font-size: 2.6rem; font-weight: 400; margin: 0.4rem 0 0; }
</style>

<!--
Folie 32 (Original-PDF 32) — Titel: Build your own (TDD - Example).
Ziel: Überleitung zum eigenen Eval-Experiment — ein kontrolliertes TDD-Labor.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Build your own (TDD - Example)</h2>
</div>

<ul class="dots" style="font-size: 1.05em; margin-top: 1.2em">
  <li class="y">Ein kontrolliertes Labor: Die gleichen Coding-Katas, immer wieder aufgebaut, wobei jeweils nur eine Sache variiert wurde</li>
  <li class="b">Runs 659 total</li>
  <li class="g">Claude Code CLI, headless, no human in the loop</li>
  <li class="p">Anthropic only (Opus 4.6/4.7, Sonnet 4.6, Haiku 4.5)</li>
</ul>

<style scoped>
.head-row { margin-bottom: 1rem; }
.head-row h2 { font-size: 2.1rem; }
.cc-slashes { font-size: 2.1rem; }
</style>

<!--
Folie 33 (Original-PDF 33) — Build your own: das Setup.
Ziel: Das Experiment erklären — gleiche Coding-Katas, je eine Variable verändert, 659 Runs, headless via Claude Code CLI, ausschließlich Anthropic-Modelle (Opus 4.6/4.7, Sonnet 4.6, Haiku 4.5).
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Build your own (TDD - Example)</h2>
</div>

<div class="cards3">
  <div class="cc-card c-y">
    <div class="cc-card-h">Workflow</div>
    <div class="cc-card-sub">6 GENERATIONS · V1 → V8</div>
    <ul>
      <li><b>Vibe-coding</b> baselines (v1/v2) — just "implement X", no tests</li>
      <li><b>Strict TDD</b> with Red / Green / Refactor (v4–v6)</li>
      <li><b>Hybrid</b> & isolated refactor subagents (v6/v7)</li>
      <li><b>Delayed refactor</b> after vibe-coding (v8)</li>
    </ul>
  </div>
  <div class="cc-card c-b">
    <div class="cc-card-h">Prompt style</div>
    <div class="cc-card-sub">3 VARIANTS</div>
    <ul>
      <li><b>Prose</b> — rules described in words, no examples</li>
      <li><b>User-story</b> — "As a… I want…", no examples</li>
      <li><b>Example-Mapping</b> — rules + concrete I/O examples</li>
    </ul>
  </div>
  <div class="cc-card c-g">
    <div class="cc-card-h">Kata × Model</div>
    <div class="cc-card-sub">5 KATAS · THINKING ON/OFF</div>
    <ul>
      <li><b>Known</b> tasks (game-of-life) the model saw in training</li>
      <li><b>Novel</b> domain (claim-office) — an unseen insurance spec</li>
      <li>Each model run with <b>thinking on and off</b></li>
    </ul>
  </div>
</div>

<style scoped>
.head-row { margin-bottom: 1.2rem; }
.head-row h2 { font-size: 2.1rem; }
.cc-slashes { font-size: 2.1rem; }
.cards3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
.cc-card { border-radius: 14px; padding: 1.1rem 1.2rem; background: #fafafa; border-top: 5px solid var(--cc-line); }
.cc-card.c-y { border-top-color: var(--cc-yellow); }
.cc-card.c-b { border-top-color: var(--cc-blue); }
.cc-card.c-g { border-top-color: var(--cc-green); }
.cc-card-h { font-size: 1.4rem; font-weight: 800; }
.cc-card-sub { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.04em; color: var(--cc-grey); margin: 0.2rem 0 0.7rem; }
.cc-card ul { list-style: none; padding: 0; margin: 0; }
.cc-card li { font-size: 0.85rem; line-height: 1.3; margin: 0.5rem 0; padding-left: 0.9em; position: relative; font-weight: 400; }
.cc-card li::before { content: "•"; position: absolute; left: 0; color: var(--cc-grey); }
</style>

<!--
Folie 34 (Original-PDF 34) — Build your own: die drei Variations-Achsen.
Ziel: Den Versuchsaufbau im Detail. Workflow (6 Generationen v1→v8, von Vibe-Coding zu striktem TDD und Hybrid), Prompt-Stil (Prosa, User-Story, Example-Mapping), Kata × Modell (bekannte vs. neue Domäne, Thinking on/off).
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Build your own (TDD - Example)</h2>
</div>

<div class="metrics3">
  <div class="m-col">
    <div class="m-h">Correctness</div>
    <div class="m-item"><code class="inline">tests_passing</code><span class="m-d">Inner check: do the agent's own Vitest tests go green? A failing run means no usable code as a solution.</span></div>
    <div class="m-item"><code class="inline">verification_pct</code> <span class="badge">KEY</span><span class="m-d">Outer check: share of an external acceptance suite the agent never saw that passes (0–1). The honest correctness signal.</span></div>
    <div class="m-h">Efficiency / cost</div>
    <div class="m-item"><code class="inline">total_tokens</code><span class="m-d">All tokens across the run incl. subagents — the price of the result.</span></div>
    <div class="m-item"><code class="inline">duration_seconds</code><span class="m-d">Wall-clock time to end to end.</span></div>
  </div>
  <div class="m-col">
    <div class="m-h">Code quality & complexity</div>
    <div class="m-item"><code class="inline">cognitive_max</code> <span class="badge">MAIN</span><span class="m-d">SonarSource Cognitive Complexity of the worst function — weights nesting like a human reader. <b>The study's headline metric.</b></span></div>
    <div class="m-item"><code class="inline">mccabe_max</code> · <code class="inline">cc_longest_function</code><span class="m-d">Classic cyclomatic complexity & longest function — the worst spot in the code.</span></div>
    <div class="m-item"><code class="inline">smell_total</code><span class="m-d">All ESLint + SonarJS rule violations: magic numbers, duplication, collapsible logic …</span></div>
    <div class="m-item"><code class="inline">code_mass</code> · <code class="inline">cc_loc</code><span class="m-d">Weighed size of production constructs & lines — how much code the feature really costs.</span></div>
  </div>
  <div class="m-col">
    <div class="m-h">Test strength & discipline</div>
    <div class="m-item"><code class="inline">mutation_score</code> <span class="badge">BOSS</span><span class="m-d">Stryker mutates the code — do the agent's tests catch it? Never earned in any prompt, so it can't be gamed (Goodhart-resistant).</span></div>
    <div class="m-sub">Coverage</div>
    <div class="m-item"><code class="inline">coverage_statements_pct</code> · <code class="inline">branches_pct</code><span class="m-d">how much the tests exercise.</span></div>
    <div class="m-sub">TDD discipline</div>
    <div class="m-item"><code class="inline">cycle_count</code> · <code class="inline">refactorings_applied</code><span class="m-d">red-phase failure predictions — was the process actually followed?</span></div>
  </div>
</div>

<div class="m-foot"><b>Direction:</b> complexity, smells & cost → <b>lower is better</b>. Correctness, coverage, mutation score & coverage → <b>higher is better</b>.</div>

<style scoped>
.head-row { margin-bottom: 0.7rem; }
.head-row h2 { font-size: 1.9rem; }
.cc-slashes { font-size: 1.9rem; }
.metrics3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
.m-h { font-weight: 800; font-size: 0.92rem; margin: 0.6rem 0 0.3rem; }
.m-h:first-child { margin-top: 0; }
.m-sub { font-weight: 700; font-size: 0.72rem; color: var(--cc-grey); margin: 0.4rem 0 0.2rem; }
.m-item { font-size: 0.72rem; margin: 0.35rem 0; line-height: 1.25; }
.m-item code.inline { font-weight: 700; font-size: 0.72rem; }
.m-d { display: block; font-weight: 400; color: #333; font-size: 0.68rem; margin-top: 0.05rem; }
.badge { background: var(--cc-green); border-radius: 4px; font-size: 0.55rem; font-weight: 800; padding: 0.05em 0.4em; vertical-align: middle; }
.m-foot { font-size: 0.78rem; margin-top: 0.8rem; font-weight: 400; }
</style>

<!--
Folie 35 (Original-PDF 35) — Build your own: die Metriken.
Ziel: Erklären, woran „gut" gemessen wird. Correctness (tests_passing, verification_pct als ehrlichstes Signal), Code-Qualität & Komplexität (cognitive_max als Headline-Metrik, Smells, Code-Mass), Test-Stärke (mutation_score als Goodhart-resistenter „Boss", Coverage, TDD-Disziplin). Richtung: Komplexität/Kosten niedriger besser, Correctness/Coverage höher besser.
-->

---
layout: cc
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Build your own (TDD - Example)</h2>
</div>

<div class="cards3">
  <div class="cc-card c-y">
    <div class="cc-card-h">Workflow</div>
    <div class="cc-card-sub">6 GENERATIONS · V1 → V8</div>
    <ul>
      <li><b>Vibe-coding</b> baselines (v1/v2) — just "implement X"</li>
      <li><b>Strict TDD</b> with Red / Green / Refactor (v4–v6)</li>
      <li><b>Hybrid</b> & isolated refactor subagents (v6/v7)</li>
      <li><b>Delayed refactor</b> after vibe-coding (v8)</li>
    </ul>
  </div>
  <div class="cc-card c-b">
    <div class="cc-card-h">Prompt style</div>
    <div class="cc-card-sub">3 VARIANTS</div>
    <ul>
      <li><b>Prose</b> — rules described in words, no examples</li>
      <li><b>User-story</b> — "As a… I want…", no examples</li>
      <li><b>Example-Mapping</b> — rules + concrete I/O examples</li>
    </ul>
  </div>
  <div class="cc-card c-g">
    <div class="cc-card-h">Kata × Model</div>
    <div class="cc-card-sub">5 KATAS · THINKING ON/OFF</div>
    <ul>
      <li><b>Known</b> tasks (game-of-life) the model saw in training</li>
      <li><b>Novel</b> domain (claim-office) — an unseen insurance spec</li>
      <li>Each model run with <b>thinking on and off</b></li>
    </ul>
  </div>
</div>

<div class="combo">
  <div class="combo-cell">
    <div class="combo-k">WORKFLOW</div>
    <div class="combo-v">v6.1-hybrid</div>
    <div class="combo-s">strict TDD · inline Red/Green + isolated Refactor agent</div>
  </div>
  <div class="combo-x">×</div>
  <div class="combo-cell">
    <div class="combo-k">MODEL</div>
    <div class="combo-v">Opus 4.7</div>
    <div class="combo-s">thinking off (no-thinking)</div>
  </div>
  <div class="combo-x">×</div>
  <div class="combo-cell">
    <div class="combo-k">PROMPT STYLE</div>
    <div class="combo-v">Example-Mapping</div>
    <div class="combo-s">rules + concrete I/O examples</div>
  </div>
</div>

<style scoped>
.head-row { margin-bottom: 0.9rem; }
.head-row h2 { font-size: 1.9rem; }
.cc-slashes { font-size: 1.9rem; }
.cards3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem; }
.cc-card { border-radius: 14px; padding: 0.9rem 1.1rem; background: #fafafa; border-top: 5px solid var(--cc-line); }
.cc-card.c-y { border-top-color: var(--cc-yellow); }
.cc-card.c-b { border-top-color: var(--cc-blue); }
.cc-card.c-g { border-top-color: var(--cc-green); }
.cc-card-h { font-size: 1.3rem; font-weight: 800; }
.cc-card-sub { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.04em; color: var(--cc-grey); margin: 0.2rem 0 0.6rem; }
.cc-card ul { list-style: none; padding: 0; margin: 0; }
.cc-card li { font-size: 0.78rem; line-height: 1.28; margin: 0.42rem 0; padding-left: 0.9em; position: relative; font-weight: 400; }
.cc-card li::before { content: "•"; position: absolute; left: 0; color: var(--cc-grey); }
.combo { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: center; gap: 0.8rem; margin-top: 1.4rem; }
.combo-cell { background: #f1f1f1; border-radius: 12px; padding: 0.9rem 1.1rem; }
.combo-k { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.05em; color: var(--cc-grey); }
.combo-v { font-size: 1.7rem; font-weight: 800; margin: 0.1rem 0; }
.combo-s { font-size: 0.78rem; font-weight: 400; }
.combo-x { font-size: 1.6rem; color: var(--cc-grey); }
</style>

<!--
Folie 36 (Original-PDF 36) — Build your own: die Gewinner-Kombination.
Ziel: Das Ergebnis zuspitzen. Die beste Kombination aus den drei Achsen: Workflow v6.1-hybrid (strict TDD, inline Red/Green + isolierter Refactor-Agent) × Modell Opus 4.7 (thinking off) × Prompt-Stil Example-Mapping.
-->

---
layout: cc
class: 'center-text'
---

<div class="cc-heading head-row">
  <span class="cc-slashes">//</span>
  <h2>Take Aways</h2>
</div>

<div class="takeaways">
  <div class="ta">
    <div class="cc-dashed ta-icon"><svg class="cap" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"><path d="M16 5 2 11l14 6 14-6z"/><path d="M7 13.5V20c0 1.7 4 3.5 9 3.5s9-1.8 9-3.5v-6.5"/><path d="M30 11v7"/></svg></div>
    <div class="ta-label">Adaption</div>
  </div>
  <div class="ta">
    <div class="cc-dashed ta-icon"><carbon-view /></div>
    <div class="ta-label">Guides & Sensors</div>
  </div>
  <div class="ta">
    <div class="cc-dashed ta-icon"><carbon-cube /></div>
    <div class="ta-label">Harness Evals</div>
  </div>
</div>

<style scoped>
.head-row { margin-bottom: 3.5rem; align-self: flex-start; position: absolute; top: 10%; left: 7%; }
.head-row h2 { font-size: 2.4rem; }
.cc-slashes { font-size: 2.4rem; }
.takeaways { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; padding: 0 2rem; width: 100%; }
.ta { display: flex; flex-direction: column; align-items: center; gap: 1.6rem; }
.ta-icon { width: 130px; height: 130px; display: flex; align-items: center; justify-content: center; background: #f4f4f1; font-size: 4rem; }
.ta-icon .cap { width: 4rem; height: 4rem; }
.ta-label { font-size: 1.7rem; font-weight: 700; }
</style>

<!--
Folie 37 (Original-PDF 37) — Take Aways: Adaption · Guides & Sensors · Harness Evals.
Ziel: Die drei Kernbotschaften verankern — Rolle adaptieren, mit Guides & Sensors arbeiten, das Harness messbar machen (Evals).
-->

---
layout: cc
nologo: true
class: 'ty-page'
---

<ThankYou title="Danke!" />

<style scoped>
:deep(.slidev-layout.cc.ty-page) { padding: 0; }
</style>

<!--
Folie 38 (Original-PDF 38) — Danke! / Kontakt + QR.
Ziel: Abschluss, Kontaktdaten, QR-Code zur Vernetzung.
-->
