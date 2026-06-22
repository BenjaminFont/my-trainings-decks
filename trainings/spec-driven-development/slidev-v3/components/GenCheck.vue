<script setup lang="ts">
// Die tragende Architektur des Tages: ein nicht-deterministischer Generator
// (KI-Agent, gestrichelte Box = Unsicherheit) gegen einen deterministischen
// Prüfer (Contract, solide Box) — verbunden durch den gestrichelten ▶-Connector
// (Idiom aus context-engineering/Agent.vue). Das Urteil rechts ist grün/rot.
// Macht die Synthese „Generator vs. Prüfer" auf einer Folie sichtbar.
//   verdict — optional 'green' | 'red' | 'none' (Default: zeigt beide Zustände)
withDefaults(defineProps<{
  verdict?: 'green' | 'red' | 'none'
}>(), { verdict: 'none' })
</script>

<template>
  <div class="gencheck">
    <div class="gc-box dashed">
      <div class="gc-role">Generator</div>
      <div class="gc-name">KI-Agent</div>
      <div class="gc-sub">nicht-deterministisch</div>
    </div>

    <div class="gc-conn"></div>

    <div class="gc-box solid">
      <div class="gc-role">Prüfer</div>
      <div class="gc-name">Contract</div>
      <div class="gc-sub">deterministisch</div>
    </div>

    <div class="gc-conn"></div>

    <div class="gc-verdict">
      <template v-if="verdict === 'green'">
        <span class="gc-pill green">✓ grün</span>
      </template>
      <template v-else-if="verdict === 'red'">
        <span class="gc-pill red">✗ rot</span>
      </template>
      <template v-else>
        <span class="gc-pill green">✓ grün</span>
        <span class="gc-pill red">✗ rot</span>
      </template>
    </div>
  </div>
</template>

<style scoped>
.gencheck {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  margin-top: 1.2em;
}
.gc-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 14px;
  padding: 0.8em 1.1em;
  min-width: 8.5em;
  background: #fff;
}
.gc-box.dashed { border: 2.5px dashed #111; background: #fdeef3; }
.gc-box.solid { border: 2.5px solid #111; background: #e9fbf2; }
.gc-role {
  font-size: 0.6em;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6b7280;
}
.gc-name { font-size: 1.05em; font-weight: 800; margin: 0.1em 0; }
.gc-sub { font-size: 0.62em; color: #6b7280; font-weight: 500; }
.gc-conn {
  flex: 0 0 3em;
  height: 0;
  border-top: 2.5px dashed #111;
  position: relative;
}
.gc-conn::after {
  content: "▶";
  position: absolute;
  right: -2px;
  top: -0.62em;
  font-size: 0.62em;
  color: #111;
}
.gc-verdict {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
}
.gc-pill {
  padding: 0.3em 0.8em;
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.78em;
  white-space: nowrap;
}
.gc-pill.green { background: #a6fade; color: #0a4934; }
.gc-pill.red { background: #ffcdcf; color: #b23e42; }
</style>
