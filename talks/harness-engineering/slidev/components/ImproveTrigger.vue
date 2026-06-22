<template>
  <div class="impr-slide">
    <div class="col">
      <div class="col-head">Improve</div>
      <div class="cc-dashed col-box">
        <span class="cc-tag">Harness</span>
        <div class="ff-grid">
          <div class="cc-pill yb">Specs</div>
          <div class="cc-pill yb">How tos</div>
          <div class="cc-pill yb">API Contract</div>
          <div class="cc-pill yb">LSP</div>
        </div>
        <div class="fb-grid">
          <div class="cc-pill rb wide">Review Agents</div>
          <div class="cc-pill rb">Logs</div>
          <div class="cc-pill rb">Browser</div>
        </div>
      </div>
    </div>

    <div class="col center-col">
      <div class="person"><carbon-user-avatar /></div>
      <div class="col-head">Product Engineer</div>
      <div class="mid-rows">
        <div class="mid-row"><div class="cc-pill yb">Feedforward</div><span class="ar">→</span></div>
        <div class="mid-row"><div class="cc-pill rb">Feedback</div><span class="ar">→</span></div>
      </div>
    </div>

    <div class="col">
      <div class="col-head">Trigger</div>
      <div class="cc-dashed col-box agent-box">
        <span class="cc-tag" style="background: var(--cc-gray-soft);">Coding Agent</span>
        <div class="loop-icon"><carbon-loop /></div>
        <div class="loop-cap">Generation</div>
        <div class="loop-icon"><carbon-loop /></div>
        <div class="loop-cap">Correction</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.impr-slide { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 1.5rem; height: 100%; padding: 1rem 0.5rem; align-items: start; }
.col-head { text-align: center; font-size: 1.6rem; font-weight: 700; margin-bottom: 1rem; }
.col-box { position: relative; padding: 2rem 1.2rem 1.5rem; }
.cc-tag { position: absolute; top: -16px; left: 16px; }
.ff-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem; margin-bottom: 1.2rem; }
.fb-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem; }
.fb-grid .wide { grid-column: 1 / 3; }
.col-box :deep(.cc-pill) { font-size: 1rem; font-weight: 500; padding: 0.45em 0.8em; }
.yb { background: var(--cc-yellow-soft); }
.rb { background: var(--cc-red-soft); }
.center-col { text-align: center; }
.person { font-size: 3rem; display: flex; justify-content: center; }
.mid-rows { margin-top: 3rem; display: flex; flex-direction: column; gap: 2.4rem; align-items: flex-start; }
.mid-row { display: flex; align-items: center; gap: 0.8rem; width: 100%; }
.mid-row :deep(.cc-pill) { width: 62%; flex: none; font-size: 1.05rem; font-weight: 500; padding: 0.5em 0.9em; }
.ar { font-size: 1.6rem; font-weight: 700; }
.agent-box { display: flex; flex-direction: column; align-items: center; gap: 0.4rem; }
.loop-icon { font-size: 2.4rem; }
.loop-cap { font-size: 1.1rem; }
</style>
