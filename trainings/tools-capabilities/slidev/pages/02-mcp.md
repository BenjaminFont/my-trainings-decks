---
layout: topic
headline: "Extension: Model Context Protocol"
image: /img/mcp-art.jpg
---

<!--
Original-PDF 4 — Section-Divider zur zweiten Schicht „Extension".
Ziel: Den Übergang von „was Claude eh kann" zu „wie wir es erweitern" markieren.
Was du sagen kannst: „Die erste Schicht ist Foundation — die ist gesetzt. Jetzt zur Extension: Wie geben wir Claude Zugriff auf Dinge, die es von Haus aus nicht kennt? Die Antwort heißt MCP."
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Model Context Protocol</h2>

<MCPRadial />

<!--
Original-PDF 5 — MCP als universeller Adapter.
Ziel: Das Bild vermitteln: MCP ist ein offenes Protokoll, über das ein Modell mit beliebigen externen Fähigkeiten spricht — egal ob Auth, Web, Tools, Shops o. Ä.
Was du sagen kannst: „MCP ist so etwas wie USB-C für KI-Tools: ein einheitlicher Stecker. Das Modell in der Mitte kann über dieselbe Schnittstelle ganz unterschiedliche Fähigkeiten ansprechen — statt für jede Integration ein eigenes Rad zu erfinden."
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Model Context Protocol — Components</h2>

<div class="iconcards">
  <div class="iconcard">
    <div class="sq y">
      <svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <ellipse cx="12" cy="6.5" rx="6.5" ry="2.4" /><path d="M5.5 6.5v5a6.5 2.4 0 0 0 13 0v-5" /><path d="M5.5 11.5v5a6.5 2.4 0 0 0 13 0v-5" /><circle cx="15.5" cy="9" r="0.4" /><circle cx="15.5" cy="14" r="0.4" />
      </svg>
    </div>
    <div class="clabel">Server</div>
  </div>
  <div class="iconcard">
    <div class="sq g">
      <svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="3.4" /><path d="M5.5 19c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      </svg>
    </div>
    <div class="clabel">Client</div>
  </div>
  <div class="iconcard">
    <div class="sq b">
      <svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 11 L12 4 L20 11" /><path d="M6 10v9h12v-9" /><path d="M10 19v-5h4v5" />
      </svg>
    </div>
    <div class="clabel">Host</div>
  </div>
</div>

<!--
Original-PDF 6 — Die drei Rollen im MCP.
Ziel: Vokabular klären, bevor das Wiring-Bild kommt.
Was du sagen kannst:
• Server: stellt eine Fähigkeit bereit (Tools, Ressourcen, Prompts) — z. B. ein Jira-, DB- oder Browser-Server.
• Client: spricht genau einen Server an und übersetzt zwischen Modell und Server.
• Host: die Anwendung, die das Ganze beherbergt und die Clients verwaltet — bei uns Claude Code.
Merksatz: Ein Host, viele Clients, viele Server.
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Model Context Protocol — Components</h2>

<MCPComponents />

<!--
Original-PDF 7 — Die Rollen im Zusammenspiel.
Ziel: Zeigen, wie Host, Clients und Server konkret verdrahtet sind — und dass Server auch nach außen ins Internet reichen.
Was du sagen kannst: „Claude Code ist der Host. Für jeden Server gibt es genau einen Client — hier drei: Confluence, eine SQL-Datenbank, eine API. Der Server kapselt die eigentliche Anbindung; manche laufen lokal, andere sprechen über das Internet mit einem Dienst dahinter, etwa Slack. Wichtig: Der Server ist die Vertrauensgrenze."
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">Frontend Design</h2>

<div class="usecase-prompt">
  <svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v14M6 12l6 6 6-6"/></svg>
  <div>„Build Component X for me and set the ticket in Jira to <em class="u">In Progress</em>."</div>
</div>

<UseCaseFlow variant="frontend" />

<!--
Original-PDF 8 — Use-Case 1: Frontend mit Jira-Anbindung.
Ziel: MCP an einem realistischen Beispiel greifbar machen.
Was du sagen kannst: „Ein einziger Prompt, zwei Server: Claude baut über den Figma-Server die Komponente und setzt über den Jira-Server das Ticket auf ‚In Progress'. Für mich als Entwickler ist es ein Satz — im Hintergrund orchestriert Claude beide MCP-Server."
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">E2E Browser Testing</h2>

<div class="usecase-prompt">
  <svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v14M6 12l6 6 6-6"/></svg>
  <div>„Use the Playwright MCP server to test feature XY, create an <em class="u">E2E test</em>."</div>
</div>

<UseCaseFlow variant="e2e" />

<!--
Original-PDF 9 — Use-Case 2: E2E-Browser-Test.
Ziel: Zweites Beispiel, gleiches Muster — diesmal mit dem Playwright-Server, der einen echten Browser steuert.
Was du sagen kannst: „Gleiches Prinzip: Der Playwright-Server gibt Claude einen echten Chromium-Browser an die Hand. Claude klickt den Userflow durch und schreibt daraus einen E2E-Test — und kann das Ergebnis wieder zurück nach Jira melden."
-->

---
layout: cc
---

<span class="secno">02</span>
<h2 class="slash">MCP-Empfehlungen für den Kunden</h2>

<div class="kunden-table">

| Tier | MCP-Server | Nutzen für den Kunden | Track |
|---|---|---|---|
| 1 | **Atlassian Rovo** ⭐ | Jira & Confluence — an echten Tickets arbeiten, User Stories & Release Notes | Alle |
| 1 | **Context7** ⭐ | Versions-aktuelle Doku für Java-21- & Hibernate-Migration | Dev |
| 1 | **Playwright** | E2E-Tests & Accessibility-Snapshots (CLI spart ~4× Token) | QA |
| 2 | **Datenbank-MCP** | Schema inspizieren, Migrations-Scripts gegen reale Strukturen prüfen | Dev |
| 2 | **Chrome DevTools** | Live-DOM, Netzwerk & Console für JSF-Frontends debuggen | QA |
| 2 | **Versionskontrolle** (GitLab / Bitbucket / GitHub) | MRs/PRs, Issues & CI/CD-Pipelines — je nach eingesetztem System | Alle / Dev |

</div>

<p class="src">Minimal-Set zum Start: <strong>Atlassian Rovo</strong> · offizielle Server laufen über OAuth &amp; respektieren bestehende Berechtigungen</p>

<!--
Folie für den Kunden (AI Enablement Sprint, Kickoff 15./16.06., Review 03.07.2026).
Quelle: kunden/mcp-empfehlungen.md.
Ziel: Konkrete MCP-Server an den Kunden-Stack andocken — von der generischen MCP-Theorie zum „was richten WIR ein".
Was du sagen kannst:
• Tier 1 ist der höchste Hebel und liegt direkt am Stack: Rovo (Jira/Confluence — alle arbeiten in „Gira"), Context7 (gegen veraltetes Modellwissen bei der Java-21-Migration) und Playwright (QA nutzt es schon).
• Tier 2 ist rollenspezifisch: DB-MCP (welches DB-System? noch offen), Chrome DevTools (JSF-Frontends), Versionskontrolle (GitLab/Bitbucket/GitHub — je nach eingesetztem System, für MRs/PRs, Issues und CI/CD-Pipelines).
• Minimal-Set für den Start: Rovo — damit ist „echte Tickets" abgedeckt, genau das Sprint-Versprechen.
⚠️ Hinweis: Der alte Atlassian-Endpoint mcp.atlassian.com/v1/sse wird nach dem 30.06.2026 abgeschaltet — direkt den neuen Rovo-Endpoint einrichten (Sprint läuft bis 03.07.).
-->

