<script setup lang="ts">
// Vollbild-Statement: große zentrierte Aussage. Die Nummer kann gesetzt
// werden; der eigentliche Text kommt als Slot, damit Inline-Markup
// (<br>, <span class="accent">, <em class="u">, <p class="huge">/.big/.lead)
// frei bleibt. Ersetzt das wiederkehrende variant: center + <p class="huge">.
const props = defineProps<{
  secno?: string
  nologo?: boolean
}>()
// :src statt src — Theme-public-Assets liegen zur Laufzeit unter /theme/.
const logoSrc = '/theme/img/logo-black.svg'
</script>

<template>
  <div class="slidev-layout cc center-text">
    <span v-if="secno" class="secno">{{ secno }}</span>
    <slot />
    <div v-if="!nologo" class="footer-logo">
      <img :src="logoSrc" alt="codecentric">
    </div>
  </div>
</template>
