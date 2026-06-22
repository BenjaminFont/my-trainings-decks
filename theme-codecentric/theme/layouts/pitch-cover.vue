<script setup lang="ts">
// Pitch-Cover: vollflächiges Cover (grün oder weiß), Inhalt frei per Slot.
// variant: 'green' (Default, grüne Fläche) | 'white'.
// Brand-Typografie aktiviert die .pitch-Klasse; das Logo kommt aus dem Theme.
// :src statt src — Theme-public-Assets liegen zur Laufzeit unter /theme/.
const props = defineProps<{
  variant?: string
  nologo?: boolean
}>()
const logoSrc = '/theme/img/logo-black.svg'
</script>

<template>
  <div class="slidev-layout pitch cc-cover" :class="`cc-cover--${variant || 'green'}`">
    <div class="cc-cover__inner">
      <slot />
    </div>
    <img
      v-if="!nologo"
      class="cc-logo cc-logo--cover"
      :src="logoSrc"
      alt="codecentric"
    >
  </div>
</template>

<style scoped>
.cc-cover { display: flex; align-items: center; position: relative; }
.cc-cover--green { background: var(--cc-green); }
.cc-cover--white { background: var(--cc-white); }
.cc-cover__inner { width: 100%; }
</style>
