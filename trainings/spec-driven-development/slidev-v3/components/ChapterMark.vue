<script setup lang="ts">
// Optionaler Akzent für Kapitel-Trenner (layout: section): das grüne
// Akzentquadrat mit der Akt-Nummer plus optionalem Tag (z. B. „Hands-on 🛠").
// Wird in den section-Slot gelegt — komplementär zum split-title, nicht
// konkurrierend. Sparsam einsetzen (Hands-on-Akte 4–6).
//   secno — Akt-Nummer im Quadrat (z. B. „05")
//   tag   — optionaler Text rechts (z. B. „Hands-on 🛠")
defineProps<{
  secno: string
  tag?: string
}>()
</script>

<template>
  <div class="chapter-mark">
    <span class="num-square">{{ secno }}</span>
    <span v-if="tag" class="cm-tag" v-html="tag" />
  </div>
</template>

<style scoped>
.chapter-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  margin-top: 0.9em;
}
.cm-tag {
  font-weight: 700;
  font-size: 0.9em;
  color: #6b7280;
}
</style>
