<script setup lang="ts">
// Vollbild-Bildkarte: ein zentriertes Bild (Foto, fremder Chart, Screenshot)
// auf weißer Fläche, optional mit dunklem Hintergrund (dark) für Bilder mit
// transparentem Rand. Ersetzt das wiederkehrende variant: center + <img class="imgcard">.
// image = Pfad im DECK-public (z. B. /img/needle-haystack.jpg).
const props = defineProps<{
  secno?: string
  image?: string
  imageAlt?: string
  maxHeight?: string
  dark?: boolean
  nologo?: boolean
}>()
// :src statt src — Theme-public-Assets liegen zur Laufzeit unter /theme/.
const logoSrc = '/theme/img/logo-black.svg'
</script>

<template>
  <div class="slidev-layout cc center-text">
    <span v-if="secno" class="secno">{{ secno }}</span>
    <img
      :src="image"
      :alt="imageAlt"
      class="imgcard"
      :class="{ dark }"
      :style="{ maxHeight: maxHeight || '78%', width: 'auto' }"
    >
    <slot />
    <div v-if="!nologo" class="footer-logo">
      <img :src="logoSrc" alt="codecentric">
    </div>
  </div>
</template>
