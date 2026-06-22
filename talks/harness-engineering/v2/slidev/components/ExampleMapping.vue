<template>
  <div class="em-wrap">
    <div class="cc-heading em-head">
      <span class="cc-slashes">//</span>
      <h2>Example Mapping</h2>
      <div class="em-becomes">
        <div class="eb-t">What it becomes</div>
        <div class="eb-s">Story Kontext + Ausführbare Tests</div>
      </div>
    </div>

    <div class="em-grid">
      <div class="em-left">
        <div class="em-sub"><b>Example Mapping</b><br/><span>Entsteht gemeinsam im Team</span></div>
        <div class="card story">Story: Customer books a meeting</div>
        <div class="rules2">
          <div class="card rule">Rule 1<br/>only Mo-Fr 8-18</div>
          <div class="card rule">Rule 2<br/>min. 24h Lead time</div>
        </div>
        <div class="ex3">
          <div class="card ex">Example<br/>Mi 14:00 ✔</div>
          <div class="card ex">Example<br/>Sa 10:00 ✗</div>
          <div class="card ex">Example<br/>in 2h ✗</div>
        </div>
        <div class="card question">? Closed on the holiday too ?</div>
      </div>

      <div class="em-arrows">
        <span class="em-arrow a1">→</span>
        <span class="em-arrow a2">→</span>
        <span class="em-arrow a3">→</span>
      </div>

      <div class="em-right">
        <div class="card story-desc">
          <div class="cd-h">Story Description:</div>
          <div class="cd-l">## Feature: Book Meeting</div>
          <div class="cd-l">As a customer, I want to schedule an appointment.</div>
          <div class="cd-h">Rules:</div>
          <div class="rules2">
            <div class="card rule sm">Rule 1<br/>only Mo-Fr 8-18</div>
            <div class="card rule sm">Rule 2<br/>min. 24h Lead…</div>
          </div>
        </div>
        <div class="card gherkin">
          <div class="cd-l">Edge Case Tests (Gherkin)</div>
          <div class="card rule scenario">
            Scenario: Sa rejected [Rule 1]<br/>
            When I select Sa 10:00<br/>
            Then it is rejected<br/>
            And message: "Weekdays only"
          </div>
          <div class="card rule scenario">
            Scenario: rejected in 2h [Rule 2]<br/>
            When start in 2 hours<br/>
            Then it is rejected<br/>
            And message: "Lead time 24h"
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.em-wrap { padding: 1.5rem 1rem; }
.em-head { margin-bottom: 1rem; position: relative; align-items: baseline; }
.em-head h2 { font-size: 2rem; }
.cc-slashes { font-size: 2rem; }
.em-becomes { margin-left: auto; text-align: center; }
.eb-t { font-weight: 700; font-size: 1.2rem; }
.eb-s { font-size: 1rem; }
.em-grid { display: grid; grid-template-columns: 1fr auto 1.1fr; gap: 1rem; font-size: 0.8rem; align-items: stretch; }
.em-sub { margin-bottom: 0.6rem; font-size: 1rem; }
.em-sub span { font-weight: 400; }
.em-arrows { display: flex; flex-direction: column; justify-content: center; gap: 3.5rem; font-size: 1.8rem; font-weight: 700; padding-top: 2rem; }
.em-arrow { line-height: 1; }
.card { border: 2px solid var(--cc-line); border-radius: 8px; padding: 0.8em 0.9em; font-weight: 600; margin-bottom: 0.6rem; }
.story { background: var(--cc-yellow-soft); }
.rule { background: #8fe9b8; }
.ex { background: var(--cc-blue-soft); }
.question { background: var(--cc-red-soft); }
.rules2, .ex3 { display: flex; gap: 0.5rem; }
.rules2 .card, .ex3 .card { flex: 1; text-align: center; }
.story-desc { background: var(--cc-yellow-soft); }
.cd-h { font-weight: 700; margin: 0.3rem 0; }
.cd-l { font-weight: 400; margin: 0.2rem 0; }
.rule.sm { font-size: 0.7rem; }
.gherkin { background: var(--cc-blue-soft); }
.scenario { background: #8fe9b8; font-weight: 400; text-align: left; }
</style>
