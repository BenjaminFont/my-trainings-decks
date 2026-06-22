<script setup lang="ts">
// Pitch-Standard-Inhaltsfolie: weißer Hintergrund, viel Weißraum, Logo unten
// rechts, optionales Foot-Label unten links. Inhalt frei per Slot — typische
// Bausteine: <h2 class="cc-h-slash">, <hr class="cc-divider">, .cc-grid,
// .cc-phase, .cc-timeline, .cc-table, .lead-card …
// Hinweis: NICHT `title` als Prop verwenden — reserviertes Slidev-Feld;
// das Foot-Label heißt deshalb `foot`.
const props = defineProps<{
  foot?: string
  nologo?: boolean
}>()
const logoSrc = '/theme/img/logo-black.svg'
</script>

<template>
  <div class="slidev-layout pitch cc-default">
    <slot />
    <div v-if="foot" class="cc-foot">{{ foot }}</div>
    <img v-if="!nologo" class="cc-logo" :src="logoSrc" alt="codecentric">
  </div>
</template>

<style scoped>
.cc-default { display: flex; flex-direction: column; position: relative; }
</style>
