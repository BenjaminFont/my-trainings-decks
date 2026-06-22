<template>
  <div class="dom-slide">
    <div class="cc-dashed dom-box">
      <span class="cc-tag">consumable domain</span>
      <div class="md-files">
        <div class="cc-pill mdf" style="grid-area: p;">processes.md</div>
        <div class="cc-pill mdf" style="grid-area: g;">glossar.md</div>
        <div class="cc-pill mdf" style="grid-area: u;">user.md</div>
      </div>
    </div>

    <div class="agents">
      <div class="agent-row">
        <span class="ar">→</span>
        <div class="cc-box agent">
          <div class="a-title">Domain Expert Agent</div>
          <div class="a-sub">Clarifies domain questions</div>
        </div>
      </div>
      <div class="agent-row">
        <span class="ar">→</span>
        <div class="cc-box agent">
          <div class="a-title">Example Mapping Agent</div>
          <div class="a-sub">Formats requirements with</div>
        </div>
      </div>
      <div class="agent-row">
        <span class="ar">→</span>
        <div class="cc-box agent">
          <div class="a-title">more agents</div>
          <div class="a-sub">User, Review,…</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dom-slide { display: grid; grid-template-columns: 1.1fr 1fr; gap: 3rem; align-items: center; height: 100%; padding: 1.5rem 1rem; }
.dom-box { position: relative; padding: 2.5rem 2rem; min-height: 320px; }
.cc-tag { position: absolute; top: -16px; left: 18px; font-size: 1.1rem; padding: 0.25em 0.7em; }
.md-files {
  display: grid; gap: 1.2rem 1rem; margin-top: 1.5rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ". p" "g u";
}
.mdf { background: var(--cc-red-soft); }
.agents { display: flex; flex-direction: column; gap: 1.2rem; }
.agent-row { display: flex; align-items: center; gap: 1rem; }
.ar { font-size: 1.8rem; font-weight: 700; }
.agent { background: var(--cc-mint-soft); flex: 1; padding: 0.8em 1em; }
.a-title { font-size: 1.3rem; }
.a-sub { font-size: 0.95rem; font-weight: 400; margin-top: 0.2rem; }
</style>
