<script setup lang="ts">
// Pitch-Sektions-Trenner: weiße Fläche, zentriertes // Statement (Slot),
// Logo unten rechts. Inhalt typischerweise als <div class="cc-section">
// mit .eyebrow + <h1> + .sub, oder <div class="cc-statement"> mit großer
// Aussage und <span class="cc-mark">.
const props = defineProps<{
  nologo?: boolean
}>()
const logoSrc = '/theme/img/logo-black.svg'
</script>

<template>
  <div class="slidev-layout pitch cc-sectionwrap">
    <slot />
    <img v-if="!nologo" class="cc-logo" :src="logoSrc" alt="codecentric">
  </div>
</template>

<style scoped>
.cc-sectionwrap { padding: 0; position: relative; }
</style>
