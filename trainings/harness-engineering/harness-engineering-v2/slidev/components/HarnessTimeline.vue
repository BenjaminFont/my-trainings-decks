<template>
  <div class="tl-slide">
    <div class="tl-head">
      <div class="tl-arrow left">Feedforward</div>
      <div></div>
      <div class="tl-arrow right">Feedback</div>
    </div>

    <div class="tl-body">
      <div class="tl-col time-col"><span class="time-label">Time ↓</span></div>

      <div class="tl-col ff-col">
        <div class="grp">
          <div class="cc-pill cb sm">LSP</div>
          <div class="cc-pill rb sm">MCP: Knowledge graph</div>
          <div class="cc-pill rb sm">Agents.md</div>
          <div class="cc-pill rb sm">/how-to-test</div>
          <div class="cc-pill rb sm">/xyz-api-docs</div>
          <div class="cc-pill rb sm">Architecture.md</div>
        </div>
      </div>

      <div class="tl-col agent-col">
        <div class="cc-dashed agent-rail">
          <div class="col-head">Coding Agent</div>
          <div class="li"><carbon-continue /></div>
          <div class="li"><carbon-continue /></div>
          <div class="li"><carbon-continue /></div>
          <div class="cc-pill integ">Integration</div>
        </div>
      </div>

      <div class="tl-col fb-col">
        <div class="phase">Initial generation</div>
        <div class="phase">
          <div class="ph-row">
            <div class="cc-pill rb sm">/code-review</div>
            <div class="cc-pill cb sm">nps eslint</div>
            <div class="cc-pill cb sm">npm run arch</div>
            <div class="cc-pill cb sm">npm run coverage</div>
            <div class="cc-pill cb sm">npm run dep-cruiser</div>
          </div>
          <div class="ph-name">Self-Correction-Loop</div>
        </div>
        <div class="phase">Human review</div>
        <div class="phase">
          <div class="ph-row">
            <div class="cc-pill rb sm">/code-review</div>
            <div class="cc-pill cb sm">nps eslint</div>
            <div class="cc-pill cb sm">sonar</div>
            <div class="cc-pill cb sm">npm run coverage</div>
            <div class="cc-pill cb sm">npm run dep-cruiser</div>
            <div class="cc-pill rb sm">/architecute-review</div>
            <div class="cc-pill rb sm">/detailed-review</div>
            <div class="cc-pill cb sm">Mutation testing</div>
          </div>
          <div class="ph-name">Pipeline</div>
        </div>
      </div>
    </div>

    <div class="tl-legend">
      <span class="lg"><i class="sw rb"></i> Inferential</span>
      <span class="lg"><i class="sw cb"></i> Computational</span>
    </div>
  </div>
</template>

<style scoped>
.tl-slide { height: 100%; padding: 0.5rem; font-size: 0.85rem; }
.tl-head { display: grid; grid-template-columns: 1fr 0.5fr 1.4fr; margin-bottom: 0.6rem; }
.tl-arrow { background: #cfcfcf; font-weight: 700; padding: 0.3em 1em; font-size: 1.2rem; }
.tl-arrow.left { clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%); }
.tl-arrow.right { clip-path: polygon(5% 0, 100% 0, 100% 100%, 5% 100%, 0 50%); text-align: right; }
.tl-body { display: grid; grid-template-columns: 0.25fr 1fr 0.6fr 1.4fr; gap: 0.6rem; }
.time-col { display: flex; align-items: center; }
.time-label { writing-mode: vertical-rl; font-weight: 700; font-size: 1.1rem; }
.grp { background: #efefef; border-radius: 8px; padding: 0.8rem; display: flex; flex-wrap: wrap; gap: 0.5rem; align-content: flex-start; }
.cb { background: var(--cc-blue-soft); }
.rb { background: var(--cc-red-soft); }
.sm { font-size: 0.8rem; padding: 0.3em 0.6em; border-width: 2px; }
.agent-rail { display: flex; flex-direction: column; align-items: center; gap: 0.9rem; padding: 0.8rem 0.5rem; height: 100%; }
.col-head { font-weight: 700; font-size: 0.95rem; }
.li { font-size: 1.8rem; }
.integ { background: var(--cc-green); margin-top: auto; }
.fb-col { display: flex; flex-direction: column; gap: 0.5rem; }
.phase { background: #efefef; border-radius: 8px; padding: 0.5rem 0.7rem; font-weight: 700; }
.ph-row { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.3rem; }
.ph-name { text-align: right; font-size: 0.95rem; }
.tl-legend { display: flex; gap: 1.5rem; margin-top: 0.8rem; padding-left: 2rem; }
.lg { display: flex; align-items: center; gap: 0.4rem; font-weight: 700; }
.sw { width: 22px; height: 14px; border-radius: 4px; border: 2px solid var(--cc-line); display: inline-block; }
</style>
