---
layout: section
headline: Agent Teams
nologo: true
---

<!--
Slide 37 (Original-PDF 37) — Unterabschnitt „Agent Teams".
Ziel: Übergang von Subagents zur mächtigeren, autonomeren Form: Agent-Teams. Mehrere gleichberechtigte Agenten arbeiten zusammen, statt nur dem Hauptagenten zuzuarbeiten.
Sagen kann man: Subagents berichten an den Chef. Agent-Teams sind eher ein Team von Kolleg:innen, die untereinander reden und sich Aufgaben aus einer gemeinsamen Liste ziehen.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">What are agent teams</h2>
<div class="agent-row" style="gap:30px; margin-top:2em">
  <Agent color="b" label="Review Agent" />
  <Agent color="y" label="Research Agent" />
  <Agent color="g" label="Bug Agent" />
  <Agent color="p" label="Design Review<br>Agent" />
  <Agent color="pu" label="Security<br>Reviewer" />
</div>

<!--
Slide 38 (Original-PDF 38) — „What are agent teams": Beispiel-Rollen in einem Team.
Ziel: Konkret machen, woraus ein Team bestehen kann: Review-, Research-, Bug-, Design-Review- und Security-Reviewer-Agent. Jeder ist eine eigenständige Claude-Instanz mit eigenem Kontext.
Sagen kann man: Wie ein interdisziplinäres Team — verschiedene Spezialist:innen, die parallel an einem Vorhaben arbeiten und sich abstimmen.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Agent Teams Features</h2>
<TeamStar :members="[
  { label: 'Agent 1', color: 'p' },
  { label: 'Agent 2', color: 'g' },
  { label: 'Agent 3', color: 'b' },
]" />

<!--
Slide 39 (Original-PDF 39) — Agent-Teams-Features: die Grundstruktur.
Ziel: Die Topologie zeigen. Ein Lead koordiniert, ist aber mit allen Agenten verbunden — und die Agenten sind auch untereinander verbunden (beidseitige, gestrichelte Pfeile = Kommunikation in beide Richtungen).
Sagen kann man: Anders als bei Subagents (Stern mit Reporting nach oben) reden hier alle miteinander. Der Lead verteilt und sammelt, aber die Mitglieder koordinieren sich auch direkt.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Agent Teams Features</h2>
<div class="two-col" style="align-items:center; margin-top:0.5em">
  <div>
    <ul class="bullets-lg">
      <li><strong>Less context load</strong> on main agents</li>
      <li><strong>More complex, longer work</strong> intervals become possible</li>
      <li>Workflows can emerge that <strong>enable parallel work</strong></li>
      <li>You can <strong>join any session</strong> and follow what is happening</li>
    </ul>
  </div>
  <div>
    <TeamStar :members="[
      { label: 'UXUI', color: 'p' },
      { label: 'Backend', color: 'g' },
      { label: 'Frontend', color: 'b' },
    ]" />
  </div>
</div>

<!--
Slide 40 (Original-PDF 40) — Agent-Teams-Features: die Vorteile, am Beispiel UXUI/Backend/Frontend.
Ziel: Die Stärken benennen:
• Less context load — wie bei Subagents bleibt der Hauptagent schlank.
• More complex, longer work — komplexere, längere Vorhaben werden möglich, weil die Last verteilt ist.
• Parallel work — echte Parallelarbeit der Mitglieder.
• Join any session — Transparenz: Man kann sich in jede Agenten-Session einklinken und live mitverfolgen.
Sagen kann man: Der letzte Punkt ist wichtig — anders als bei der Subagent-Blackbox kann man hier zuschauen und eingreifen. Das macht Teams für größere, länger laufende Aufgaben attraktiv.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Agent Teams Features</h2>
<TeamStar :members="[
  { label: 'Develop',  color: 'p',  tags: ['Develop Rules', 'Jira MCP'],  tagColor: 'p' },
  { label: 'Tests',    color: 'g',  tags: ['Testing Rules', 'Jira MCP'],  tagColor: 'g' },
  { label: 'Security', color: 'b',  tags: ['Security Rules', 'Jira MCP'], tagColor: 'b' },
]" />

<!--
Slide 41 (Original-PDF 41) — Agent-Teams + Kontext-Dateien/MCPs, Beispiel Develop/Tests/Security.
Ziel: Den Bogen zum Vormittag schließen. Jedes Team-Mitglied bekommt seine eigenen Rules und MCP-Anbindungen: Develop → Develop Rules + Jira MCP, Tests → Testing Rules + Jira MCP, Security → Security Rules + Jira MCP.
Sagen kann man: Hier greift alles ineinander — jeder Agent hat genau den Kontext (Regeln) und die Tools (MCP), die seine Rolle braucht. Context Engineering pro Rolle, nicht für einen überladenen Allrounder.
-->

---
layout: cc
---

<span class="secno">04</span>
<h2 class="slash">Agent Teams Features</h2>
<TeamStar :members="[
  { label: 'UXUI',          color: 'p',  tags: ['Figma MCP', 'Playwright MCP'], tagColor: 'p' },
  { label: 'Component Lib', color: 'g',  tags: ['Storybook', 'Jira MCP'],       tagColor: 'g' },
  { label: 'Develop',       color: 'b',  tags: ['Storybook', 'Dev Rules'],      tagColor: 'b' },
]" />

<!--
Slide 42 (Original-PDF 42) — Zweites Team-Beispiel: ein Frontend-/Design-Team.
Ziel: Ein weiteres realistisches Setup zeigen: UXUI → Figma MCP + Playwright MCP, Component Lib → Storybook + Jira MCP, Develop → Storybook + Dev Rules.
Sagen kann man: Je nach Vorhaben stellt man das Team anders zusammen. Für eine UI-Aufgabe braucht man Figma/Playwright/Storybook; für Backend andere Tools. Das Muster bleibt: rollenbezogene Rules + MCPs pro Mitglied.
-->

---
layout: imagecard
secno: "04"
image: /img/subagent-vs-team-arch.jpg
imageAlt: Subagents (Main Agent → Subagents → Result) vs. Agent Teams (Team Lead → Shared Task List → Teammates)
maxHeight: 74%
dark: true
---

<!--
Slide 43 (Original-PDF 43) — Architektur-Vergleich Subagents vs. Agent Teams (Originaldiagramm).
Ziel: Beide Topologien direkt gegenüberstellen.
• Links (Subagents): Main Agent spawnt Subagents, jeder macht „Work" und liefert ein „Result"; alles fließt als „Report" zum Main Agent zurück. Stern mit Reporting nach oben.
• Rechts (Agent Teams): Main Agent (Team Lead) erzeugt das Team und legt eine „Shared Task List" an; die Teammates kommunizieren, ziehen sich Tasks und reden auch untereinander („Communicate"). Dezentral und autonom.
Sagen kann man: Der Kernunterschied — zentrale Steuerung mit Reporting (Subagents) vs. gemeinsame Task-Liste mit Peer-Kommunikation (Teams).
-->

---
layout: cc
nologo: true
---

<span class="secno">04</span>
<h2 class="slash">Subagents vs Agent Teams</h2>

<div class="cmp-table" style="margin-top:0.4em">

| Property | Subagents | Agent Teams |
|---|---|---|
| Context | Own context window with report to the main agent | Own context window and fully autonomous |
| Communication | Reporting to the main agent | Communication among each other |
| Coordination | The main agent manages the work | Each team member with their own task |
| Best for | Tasks where only the result matters to me | More complex workflows that require interaction and cooperation |
| Token costs | Lower: result is processed by the main agent | Higher: each team mate is its own Claude instance |

</div>

<style scoped>
.cmp-table table { font-size: 0.66em; }
.cmp-table td { padding: 0.5em 0.8em; }
</style>

<!--
Slide 44 (Original-PDF 44) — Entscheidungstabelle Subagents vs. Agent Teams.
Ziel: Die saubere Gegenüberstellung als Entscheidungshilfe:
• Context: beide haben ein eigenes Fenster; Teams sind voll autonom, Subagents berichten zurück.
• Communication: Subagents → Reporting an den Hauptagenten; Teams → untereinander.
• Coordination: Subagents → Hauptagent steuert; Teams → jedes Mitglied mit eigener Task.
• Best for: Subagents → wenn nur das Ergebnis zählt; Teams → komplexe Workflows mit Interaktion/Kooperation.
• Token costs: Subagents günstiger (Hauptagent verarbeitet das Ergebnis); Teams teurer (jeder Teammate ist eine eigene Claude-Instanz).
Sagen kann man: Faustregel — nur-Ergebnis und Budget knapp? Subagent. Komplex, interaktiv, länger laufend und Transparenz gewünscht? Team, aber teurer.
-->

---
layout: topic
headline: Working Slot
image: /img/working-slot.jpg
---

<!--
Slide 45 (Original-PDF 45) — Abschließender „Working Slot": Praxis zu Subagents & Agent-Teams.
Ziel: Hands-on. Die Teilnehmer bauen einen eigenen Subagent (Agent-Datei) und/oder stellen ein kleines Agent-Team zusammen und lassen es eine Aufgabe bearbeiten.
Moderation: Zeitbox setzen, Beispielaufgabe bereithalten (z. B. „Review-Agent auf einen kleinen Diff ansetzen" oder „Develop/Tests/Security-Team an einem Feature"). Danach Erfahrungen sammeln: Was lief gut, wo war die Blackbox spürbar, wie war der Token-Verbrauch? Damit schließt sich der Bogen zum Tagesziel: in der Smart Zone bleiben.
-->
