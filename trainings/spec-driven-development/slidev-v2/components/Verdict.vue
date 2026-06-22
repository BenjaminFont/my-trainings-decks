<script setup lang="ts">
// Binäres CI-Urteil: grün (Konformität, Lauf bestanden) oder rot (Abweichung,
// roter Lauf). Bewusst NICHT TrafficLight (RED/GREEN/REFACTOR) — die SDD-Domäne
// kennt nur zwei deterministische Zustände. Größer und plakativer als das
// inline .pill, für die „Hero"-Momente (Drift-Moment, strict, Die Brücke).
//   state — 'green' | 'red'
//   label — optionaler Kontext links vom Urteil (z. B. „strict", „CI")
defineProps<{
  state: 'green' | 'red'
  label?: string
}>()
</script>

<template>
  <span class="verdict" :class="state">
    <span v-if="label" class="vlabel">{{ label }}</span>
    <span class="vbadge">
      <span class="vmark">{{ state === 'green' ? '✓' : '✗' }}</span>
      <span class="vtext">{{ state === 'green' ? 'grün' : 'rot' }}</span>
    </span>
  </span>
</template>

<style scoped>
.verdict {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  vertical-align: middle;
}
.vlabel {
  font-weight: 700;
  font-size: 0.8em;
  color: #6b7280;
}
.vbadge {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.3em 0.85em;
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.9em;
  letter-spacing: 0.01em;
}
.verdict.green .vbadge { background: #a6fade; color: #0a4934; }
.verdict.red .vbadge { background: #ffcdcf; color: #b23e42; }
.vmark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.35em;
  height: 1.35em;
  border-radius: 50%;
  font-size: 0.85em;
}
.verdict.green .vmark { background: #22f4ae; color: #000; }
.verdict.red .vmark { background: #ff5a5f; color: #fff; }
</style>
