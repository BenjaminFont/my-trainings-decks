---
layout: section
headline: "Write / Select:\nContext Files"
nologo: true
---

<!--
Slide 8 (Original-PDF 8) — Abschnitts-Trenner. Wir starten mit den ersten beiden Strategien: Write und Select. Beide drehen sich um Kontext-Dateien — also Wissen, das wir aus dem flüchtigen Chat-Verlauf in dauerhafte Dateien auslagern und gezielt wieder hereinholen.
Sagen kann man: Jetzt wird es praktisch. Statt dem Agenten alles in den Chat zu tippen, legen wir Kontext in Dateien ab, die er bei Bedarf liest.
-->

---
layout: topic
secno: "02"
headline: Context File Categories
image: /img/cover-categories.jpg
---

<!--
Slide 9 (Original-PDF 9) — Kapitel-Header „Context File Categories" mit Markenbild (farbige Papierflächen).
Ziel: Überleitung. Wir systematisieren jetzt, welche Arten von Kontext-Dateien es gibt.
Sagen kann man: Kontext-Dateien sind nicht alle gleich. Schauen wir uns die Kategorien an.
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Context File Categories</h2>
<div class="circle-row" style="gap:18px; margin-top:1.8em">
  <div class="pcircle y">Plans</div>
  <div class="pcircle p">AGENT.md</div>
  <div class="pcircle b">Docu</div>
  <div class="pcircle g">Rules</div>
  <div class="pcircle pu">Workflows</div>
</div>

<!--
Slide 10 (Original-PDF 10) — Die fünf Kategorien von Kontext-Dateien als Reihe.
Ziel: Den Überblick geben. Es gibt im Wesentlichen fünf Arten:
• Plans — geplante Vorhaben / Arbeitsschritte, die der Agent abarbeitet.
• AGENT.md (bzw. CLAUDE.md) — die zentrale „Über-mich/Über-das-Projekt"-Datei.
• Docu — Projekt-/Domänen-Dokumentation.
• Rules — themenspezifische Regeln.
• Workflows — wiederkehrende Abläufe.
Sagen kann man: AGENT.md und Plans sind eher „immer aktiv", Docu/Rules/Workflows werden gezielt bei Bedarf gezogen. Das vertiefen wir gleich.
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Context File Categories</h2>
<div class="venn">
  <div class="vc top"><span>Docu</span></div>
  <div class="vc left"><span>Rules</span></div>
  <div class="vc right"><span>Workflows</span></div>
</div>

<!--
Slide 11 (Original-PDF 11) — Dieselben Kategorien, jetzt als Venn-Diagramm für Docu / Rules / Workflows.
Ziel: Zeigen, dass diese drei sich überlappen und ineinandergreifen — eine Regel verweist auf Doku, ein Workflow nutzt Regeln, Doku beschreibt Workflows. Die Grenzen sind fließend.
Sagen kann man: In der Praxis vermischen sich Docu, Rules und Workflows. Wichtig ist nicht die saubere Schublade, sondern dass der Kontext modular und bei Bedarf abrufbar ist.
-->

---
layout: topic
secno: "03"
headline: CLAUDE.md
image: /img/cover-claudemd.jpg
---

<!--
Slide 12 (Original-PDF 12) — Kapitel-Header „CLAUDE.md".
Ziel: Übergang zur wichtigsten einzelnen Kontext-Datei. CLAUDE.md (bzw. AGENTS.md) ist die Datei, die ein Agent automatisch lädt.
Sagen kann man: Wenn ihr nur eine Datei pflegt, dann diese. Schauen wir uns Ebenen und Befehle an.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">CLAUDE.md</h2>
<div class="two-col claudemd" style="margin-top:1em">
  <div>
    <div class="dot-head y">Levels</div>
    <ul class="dot-list">
      <li><strong>Enterprise Level</strong><br><span class="lead">/Library/Application Support/ClaudeCode/CLAUDE.md</span></li>
      <li><strong>Project Level</strong><br><span class="lead">./CLAUDE.md oder ./.claude/CLAUDE.md</span></li>
      <li><strong>User Level</strong><br><span class="lead">~/.claude/CLAUDE.md</span></li>
    </ul>
  </div>
  <div>
    <div class="dot-head b">Commands</div>
    <ul class="dot-list">
      <li><code class="inline">/init</code> → Creates a CLAUDE.md file</li>
      <li><code class="inline">/memory</code> → View memory</li>
      <li>add to memory → Expand memory</li>
      <li><code class="inline">@path/to/import</code> → Import context</li>
      <li>Auto memory → <span class="lead">/.claude/projects/{project}/memory</span></li>
    </ul>
  </div>
</div>

<style scoped>
.claudemd { font-size: 0.8em; }
.claudemd .dot-head { font-size: 1.3em; }
.claudemd .lead { font-size: 0.78em; }
</style>

<!--
Slide 13 (Original-PDF 13) — CLAUDE.md: Ebenen (Levels) und Befehle (Commands).
Ziel: Die Hierarchie und die wichtigsten Befehle erklären.
Levels (von global zu lokal): Enterprise (systemweit, vom Unternehmen), Project (im Repo, geteilt mit dem Team), User (pro Entwickler:in, ~/.claude). Alle werden zusammengeführt — spezifischer schlägt allgemeiner.
Commands: /init legt eine CLAUDE.md an; /memory zeigt den Speicher; „add to memory" erweitert ihn; @pfad importiert weitere Dateien als Kontext; Auto-Memory landet projektbezogen unter /.claude/projects/{project}/memory.
Sagen kann man: Wichtig ist die Trennung Projekt- vs. User-Ebene — Team-Regeln gehören ins Repo, persönliche Vorlieben in eure User-Datei. Mit @-Importen haltet ihr die Hauptdatei schlank und zieht Details nur bei Bedarf nach.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Structure and Stack</h2>

```md
### Package Structure
com.teamfinder.backend/
├── controller/           # REST endpoints
├── service/              # Business logic
├── domain/
│ ├── model/              # JPA entities
│ ├── dto/                # Data transfer objects
│ └── repository/         # Spring Data repositories
├── security/             # Authentication & authorization
└── config/               # Configuration classes

## Technology Stack
- **Framework**: Spring Boot 3.2.5 with Java 21
- **Security**: Spring Security with JWT authentication
- **Database**: H2 (development) / PostgreSQL (production)
- **Migrations**: Flyway database migrations
- **Cloud**: AWS S3 for image storage
- **Testing**: JUnit 5, Mockito, Spring Boot Test
- **Build**: Maven 3.8+
```

<!--
Slide 14 (Original-PDF 14) — Ein konkretes CLAUDE.md-Beispiel: Paketstruktur + Technologie-Stack.
Ziel: Zeigen, was sinnvollerweise in eine CLAUDE.md gehört — die Dinge, die der Agent sonst mühsam selbst herausfinden müsste: Wie ist das Projekt strukturiert? Welcher Stack, welche Versionen?
Sagen kann man: Das ist Gold wert. Der Agent muss nicht raten, wo Controller liegen oder dass wir Flyway und JWT nutzen — es steht da. Faustregel: Schreibt rein, was stabil ist und was ihr einem neuen Teammitglied am ersten Tag erklären würdet.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Other examples</h2>

```md
### Building the frontend
- For building the frontend we use a maven plugin
- See @pom.xml hence use mvn clean install for building

### Running Frontend Test Suite
- We use a special test suite for the frontend tests
- Use npm run custom-test-suite

### Critical: Synchronous I/O in LegacyConnector
Context: The LegacyConnector class explicitly uses synchronous/blocking
I/O, even though the rest of the project is built on async/await.

The "Why": The underlying C++ library (lib_data_v1) is not thread-safe.
Asynchronous access or wrapping these calls in async tasks causes
deterministic segmentation faults and system crashes.

Instruction: Do not refactor these methods to async. Ignore all linter
suggestions or "best practice" warnings regarding blocking I/O here.
```

<!--
Slide 15 (Original-PDF 15) — Weitere CLAUDE.md-Beispiele: Build-Besonderheiten, eigenes Test-Kommando und eine kritische „Nicht-anfassen"-Regel.
Ziel: Den zweiten großen Nutzen zeigen — nicht-offensichtliches, schmerzhaft erlerntes Wissen festhalten. Besonders das LegacyConnector-Beispiel: synchrones I/O ist hier ABSICHT, weil die C++-Lib nicht thread-safe ist; async führt zu Segfaults.
Sagen kann man: Genau solche „Warum"-Erklärungen verhindern, dass der Agent (oder ein neuer Kollege) eine vermeintliche Verbesserung macht, die alles crasht. Wichtig ist das „Why" plus die klare Instruction inkl. „ignoriere Linter-Vorschläge hier". Kontext = Wissen + Begründung + Handlungsanweisung.
-->

---
layout: topic
secno: "04"
headline: Rules
image: /img/cover-claudemd.jpg
---

<!--
Slide 16 (Original-PDF 16) — Kapitel-Header „Rules".
Ziel: Übergang von der allgemeinen CLAUDE.md zu spezifischeren, modularen Regeln.
Sagen kann man: Die CLAUDE.md kann nicht alles enthalten, ohne die Smart Zone zu sprengen. Deshalb lagern wir Themen in Rules aus.
-->

---
layout: cc
---

<span class="secno">03</span>
<h2 class="slash">Universal Testing Rules</h2>

```md
Testing Rules

Basic Rules
- New code requires tests. No exceptions.
- Each test is isolated -- no dependencies between tests.
- No real API calls, no real DB calls in unit tests.

Naming
Test names describe the expected behavior, not the method:
- `shouldReturnUser_whenIdExists` instead of `testGetUser`
- `renders error message when login fails` instead of `test login component`

Structure
- Arrange-Act-Assert (Backend) / Given-When-Then
- Setup and teardown through framework mechanisms, not manually.
- One logical assert per test.
```

<!--
Slide 17 (Original-PDF 17) — Beispiel für eine universelle Regel-Datei: Testing Rules.
Ziel: Zeigen, wie eine gut formulierte Regel aussieht — knapp, eindeutig, mit Beispielen. Basic Rules (immer Tests, isoliert, keine echten API-/DB-Calls), Naming (Verhalten statt Methodenname, mit Gegenbeispielen) und Structure (AAA/GWT, Framework-Setup, ein Assert).
Sagen kann man: Das sind allgemeine Regeln, die für das ganze Projekt gelten. Gleich sehen wir, wie man Regeln NUR dann lädt, wenn sie relevant sind — das ist der Trick mit den Smart-Zone-Tokens.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Rules</h2>
<div style="margin-top:1.2em">
  <div class="dot-head y">Topic-specific rules</div>
  <div class="dot-head b">Will be treated like CLAUDE.md / AGENTS.md</div>
  <div class="dot-head g">Conditional Rules</div>
  <div class="dot-head r"><span>.claude/rules → <strong>Project Level</strong> &nbsp;·&nbsp; ~/.claude/rules/ → <strong>User Level</strong></span></div>
</div>

<!--
Slide 18 (Original-PDF 18) — Rules: die Eigenschaften.
Ziel: Vier Kernaussagen zu Regeln:
• Topic-specific — Regeln sind themenbezogen (Testing, Security, Frontend …).
• Sie werden behandelt wie CLAUDE.md/AGENTS.md — also als vollwertiger Kontext.
• Es gibt Conditional Rules — Regeln, die nur unter Bedingungen greifen (nächste Folie).
• Ablageorte: .claude/rules (Project Level) und ~/.claude/rules/ (User Level) — analog zur CLAUDE.md-Hierarchie.
Sagen kann man: Regeln sind im Grunde modularisierte CLAUDE.md-Bausteine. Der eigentliche Hebel kommt jetzt: Regeln nur bei Bedarf laden.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Conditional Java Backend Testing Rules</h2>

```md
---
paths:
  - "src/test/**/*.java"
---

# Backend Testing Rules

## Stack
JUnit 5, Mockito, Spring Boot Test, H2 (Test-DB), Flyway

## Test Types by Layer
| Layer       | Test Type      | Annotation                                    |
|-------------|----------------|-----------------------------------------------|
| Controller  | @WebMvcTest    | MockMvc, mock Security context                |
| Service     | Unit Test      | @ExtendWith(MockitoExtension.class), no Spring|
| Repository  | @DataJpaTest   | H2 In-Memory, Flyway migrations run           |
| Integration | @SpringBootTest| Full context, use sparingly                   |
```

<!--
Slide 19 (Original-PDF 19) — Conditional Rule, ausführlich. Entscheidend ist der Frontmatter-Block oben: `paths: src/test/**/*.java`.
Ziel: Den Mechanismus zeigen. Diese Regel wird NUR aktiv, wenn an Test-Dateien (src/test/**/*.java) gearbeitet wird. Dann bekommt der Agent Stack-Infos und eine Tabelle „welcher Test-Typ pro Layer".
Sagen kann man: Das `paths`-Frontmatter ist der Schalter. Solange niemand an Tests arbeitet, kostet diese Regel keine Tokens im Kontextfenster. Sobald eine passende Datei berührt wird, klappt der Kontext auf.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Conditional Java Backend Testing Rules</h2>

```md
---
paths:
  - "src/test/**/*.java"
---

# Backend Testing Rules

## Stack
JUnit 5, Mockito, Spring Boot Test, H2 (Test-DB), Flyway
```

<ul class="dots compact" style="margin-top:1em">
  <li class="g">Context is <strong>outsourced</strong></li>
  <li class="b">Context is expanded <strong>based on conditions</strong></li>
  <li class="y">Rules are <strong>modularly applicable</strong></li>
</ul>

<!--
Slide 20 (Original-PDF 20) — Dieselbe Conditional Rule, verdichtet auf die drei Lehren.
Ziel: Die Quintessenz festhalten:
• Context is outsourced — Kontext liegt außerhalb des Hauptfensters (in der Regel-Datei).
• Context is expanded based on conditions — er wird nur bedingungsabhängig hereingeholt.
• Rules are modularly applicable — modular, je nach Aufgabe kombinierbar.
Sagen kann man: Das ist Context Engineering in Reinform — Write (auslagern) + Select (bedingt laden). So bleibt die Smart Zone frei für das, was gerade zählt.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Progressive disclosure</h2>
<p class="lead" style="text-align:center; font-weight:700; font-size:1.05em; margin:0.2em 0 0.6em">Bundling additional content</p>
<div class="two-col" style="gap:1em; font-size:0.78em">
  <div>
    <p style="font-weight:700; color:var(--cc-grey); margin-bottom:0.2em">pdf/SKILL.md</p>

```md
---
name: PDF Processing
description: Toolkit for extracting
  text/tables, merging & splitting
  documents, filling-out forms.
---

## Overview
For advanced features see
@/reference.md. To fill out a PDF
form, read @/forms.md and follow it.

## Quick Start
reader = PdfReader("document.pdf")
print(reader.pages[0].extract_text())
```

  </div>
  <div>
    <p style="font-weight:700; color:var(--cc-grey); margin-bottom:0.2em">pdf/reference.md · pdf/forms.md</p>

```md
# PDF Processing — Advanced
Advanced processing features,
detailed examples and additional
libraries not covered in SKILL.md.

### pypdfium2 (Apache/BSD License)
Python binding for PDFium — fast
rendering, image generation, …

# Fillable form fields
python scripts/fill_fields.py
  <file.pdf>
```

  </div>
</div>

<!--
Slide 21 (Original-PDF 21) — „Progressive disclosure": Zusatzinhalte bündeln und schrittweise offenlegen. Beispiel: eine schlanke SKILL.md, die per @-Verweis auf reference.md und forms.md zeigt.
Ziel: Das Prinzip erweitern — nicht nur Regeln, sondern beliebige Skills/Doku werden in eine schlanke Einstiegsdatei plus verlinkte Detaildateien aufgeteilt. Der Agent liest erst die Übersicht (SKILL.md) und holt Details (reference.md/forms.md) nur, wenn er sie braucht.
Sagen kann man: Wie bei einer guten README — oben das Wesentliche, Details hinter Verweisen. So lädt der Agent Tiefe erst on demand. Gleiche Idee wie Conditional Rules, nur für Skills und Doku.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Progressive disclosure</h2>

```md
# Backend Testing Rules

## Stack
JUnit 5, Mockito, Spring Boot Test, H2 (Test-DB), Flyway

## More Information
*ARDs for Testing*       -> docs/ard/Testing
*Testing Strategy for apis* -> docs/Testing/apis
*API Contracts*          -> docs/specs/*.yml
```

<ul class="dots compact" style="margin-top:1em">
  <li class="g">Context is <strong>only consumed when needed</strong></li>
  <li class="b">Topic based <strong>context extension</strong></li>
  <li class="y">Applicable for <strong>any topic</strong> regarding agents</li>
</ul>

<!--
Slide 22 (Original-PDF 22) — Progressive disclosure, konkret: Die Regel-Datei nennt unter „More Information" nur Verweise (ADRs, Testing-Strategie, API-Contracts) statt deren Inhalt.
Ziel: Den Mechanismus festnageln und verallgemeinern:
• Context is only consumed when needed — Inhalte werden erst beim Folgen des Verweises geladen.
• Topic based context extension — themenbezogene Erweiterung.
• Applicable for any topic — funktioniert für jedes Agenten-Thema.
Sagen kann man: Die Datei bleibt winzig, aber der Weg zu jedem Detail ist hinterlegt. Der Agent „blättert" nur dann nach, wenn die Aufgabe es verlangt. Das ist die skalierbare Art, großes Projektwissen verfügbar zu machen, ohne die Smart Zone zu fluten.
-->

---
layout: topic
headline: Working Slot — Write / Select
image: /img/working-slot.jpg
---

<!--
Slide 23 (Original-PDF 23) — „Working Slot": Übungs-/Praxisblock.
Ziel: Hands-on-Pause. Hier probieren die Teilnehmer das Gelernte aus — eigene CLAUDE.md schreiben, eine (Conditional) Rule anlegen, Progressive Disclosure einrichten.
Moderation: Aufgabe klar umreißen, Zeitbox setzen (z. B. 20–30 min), danach kurz Ergebnisse sammeln. Das Whiteboard-Bild signalisiert: Jetzt selbst machen.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Working Slot: Write / Select — Vorgehen</h2>
<div class="ws two-col" style="margin-top:0.5em">
<div>
<div class="ws-phase"><span class="pill green">Phase 1</span> Erkunden &amp; Planen</div>
<ol class="steps">
<li>Ein <strong>Repo aussuchen</strong></li>
<li>In Claude Code <code class="inline">/init</code> ausführen — warten, bis die <code class="inline">CLAUDE.md</code> generiert ist</li>
<li>Generierte <code class="inline">CLAUDE.md</code> <strong>studieren</strong>: Welche interessanten Infos übers Repo fehlen oder sollten ergänzt werden?</li>
<li>Was lässt sich aus der <code class="inline">CLAUDE.md</code> in ein <strong>Rule File</strong> auslagern?</li>
<li>Mindestens <strong>ein sinnvolles Rule File</strong> fürs Repo überlegen</li>
</ol>
</div>
<div>
<div class="ws-phase"><span class="pill blue">Austausch · 10 min</span></div>
<ul class="dot-list compact">
<li>Wie war die erste generierte <code class="inline">CLAUDE.md</code>?</li>
<li>Was geändert / erweitert?</li>
<li>Was schon in ein Rule File verschoben?</li>
<li>Für welches Rule File entschieden — und warum?</li>
</ul>
<div class="ws-phase" style="margin-top:0.6em"><span class="pill green">Phase 2</span> Umsetzen &amp; Validieren</div>
<ul class="dot-list compact">
<li>Mindestens <strong>ein Rule File implementieren</strong> und validieren</li>
<li>Bei Zeit: gerne weitere umsetzen</li>
</ul>
<div class="ws-phase" style="margin-top:0.6em"><span class="pill">Review</span></div>
<ul class="dot-list compact">
<li>Gemeinsame Review-Runde mit allen Teams</li>
</ul>
</div>
</div>

<style scoped>
.ws { font-size: 0.72em; gap: 2.4em; align-items: flex-start; }
.ws-phase { font-weight: 700; font-size: 1.05em; margin-bottom: 0.3em; display: flex; align-items: center; gap: 0.4em; }
.ws .steps li { font-size: 0.92em; margin: 0.4em 0; }
.ws .dot-list { margin-top: 0.15em; }
.ws .dot-list.compact li { font-size: 0.9em; margin: 0.22em 0; display: block; padding-left: 0.9em; text-indent: -0.9em; }
.ws .dot-list.compact li::before { display: inline; margin-right: 0.3em; }
.ws .pill { font-size: 0.7em; }
.ws .ws-phase .pill:not(.green):not(.blue):not(.red) { background: var(--cc-light); color: var(--cc-black); }
</style>

<!--
Working Slot — Vorgehen (neue Folie, direkt nach dem ersten Working Slot nach „Context Files / Rules").
Ziel: Den Ablauf der ersten Hands-on-Aufgabe klar strukturieren — von der Repo-Auswahl über die generierte CLAUDE.md bis zur Umsetzung eines eigenen Rule Files.

Ablauf im Detail, den du moderieren kannst:

Phase 1 — Erkunden & Planen:
• Jede:r / jedes Team sucht sich ein eigenes Repo aus.
• In Claude Code „/init" ausführen und warten, bis die CLAUDE.md generiert ist.
• Die generierte CLAUDE.md gemeinsam studieren: Welche interessanten Inhalte über das Repo sind NICHT enthalten und sollten ergänzt werden?
• Überlegen: Welche Dinge aus der CLAUDE.md könnte man sinnvoll in ein Rule File auslagern?
• Mindestens ein Rule File überlegen, das im ausgewählten Repo Sinn macht und das man platzieren würde.

Austausch (10 min Unterbrechung): Jedes Team berichtet kurz:
• Wie war die erste, automatisch generierte CLAUDE.md?
• Was wurde daran geändert oder erweitert?
• Was wurde ggf. schon in ein Rule File verschoben?
• Für welches Rule File hat sich das Team entschieden und würde es fürs spezifische Repo umsetzen?

Phase 2 — Umsetzen & Validieren:
• Das Geplante implementieren und validieren — mindestens ein Rule File.
• Wer in der Zeit fertig ist und weitere Ideen hatte, darf gerne weitere Rule Files umsetzen.

Review-Phase zum Abschluss: Noch einmal gemeinsam mit den Teams sprechen — Ergebnisse, Erkenntnisse, offene Fragen.
-->
