<script setup lang="ts">
// Kapitel-Header mit Bild (photo-head): Nummer + // Titel oben,
// darunter ein randloses Vollbreite-Bild. Ersetzt das bisher inline
// kopierte <div class="head">…</div> + <div class="banner"><img></div>.
// image = Pfad im DECK-public (z. B. /img/anime-dictation.png).
// imagePosition steuert object-position (Default: center).
// Hinweis: NICHT `title` als Prop verwenden — reserviertes Slidev-Feld.
const props = defineProps<{
  secno?: string
  headline?: string
  image?: string
  imageAlt?: string
  imagePosition?: string
  nologo?: boolean
}>()
// :src statt src — Theme-public-Assets liegen zur Laufzeit unter /theme/.
const logoSrc = '/theme/img/logo-black.svg'
</script>

<template>
  <div class="slidev-layout cc photo-head">
    <div class="head">
      <span v-if="secno" class="secno-inline">{{ secno }}</span>
      <h2 class="slash" v-html="headline"></h2>
    </div>
    <div class="banner">
      <img
        :src="image"
        :alt="imageAlt"
        :style="imagePosition ? { objectPosition: imagePosition } : undefined"
      >
    </div>
    <slot />
    <div v-if="!nologo" class="footer-logo">
      <img :src="logoSrc" alt="codecentric">
    </div>
  </div>
</template>
