<script setup lang="ts">
// Phasen-/Schritt-Pipeline: eine horizontale Kette beschrifteter Knoten,
// verbunden durch grüne Pfeile — markenkonform zum Theme-.flow (dessen Pfeile
// bereits grün sind). Ersetzt die schlichten grauen .step-Pills auf den
// Folien, die einen klaren Ablauf zeigen (Spec→Plan→Tasks→Implement;
// Grüne Karten→Gherkin→binden→grün→Drift).
//   numbered    — kleine grüne Zähler-Chips (1·2·3·4) an jedem Knoten
//   accentLast  — letzten Knoten grün füllen (Zielzustand)
//   active      — Index (0-basiert) des aktuellen Schritts: dieser wird grün
//                 hervorgehoben, bereits erledigte Schritte werden gedimmt.
//                 Für den „Lebenszyklus Schritt-für-Schritt"-Durchgang.
defineProps<{
  steps: string[]
  numbered?: boolean
  accentLast?: boolean
  active?: number
}>()
</script>

<template>
  <div class="pipeline">
    <template v-for="(step, i) in steps" :key="i">
      <div
        class="pnode"
        :class="{
          accent: (accentLast && i === steps.length - 1) || i === active,
          done: active !== undefined && i < active,
        }"
      >
        <span v-if="numbered" class="pnum">{{ i + 1 }}</span>
        <span class="plabel" v-html="step" />
      </div>
      <span v-if="i < steps.length - 1" class="parrow">→</span>
    </template>
  </div>
</template>

<style scoped>
.pipeline {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.55em;
  margin-top: 0.9em;
  font-weight: 500;
}
.pnode {
  display: flex;
  align-items: center;
  gap: 0.5em;
  background: #f4f4f5;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 0.55em 0.9em;
  font-size: 0.92em;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.06);
}
.pnode.accent {
  background: #22f4ae;
  border-color: #22f4ae;
}
.pnode.accent .plabel { color: #000; }
.pnode.done { opacity: 0.4; }
.pnum {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  flex: none;
  border-radius: 50%;
  background: #22f4ae;
  color: #000;
  font-weight: 700;
  font-size: 0.8em;
}
.pnode.accent .pnum {
  background: #000;
  color: #22f4ae;
}
.plabel { line-height: 1.15; }
.parrow {
  color: #22f4ae;
  font-weight: 800;
  font-size: 1.1em;
}
</style>
