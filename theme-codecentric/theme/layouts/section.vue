<script setup lang="ts">
import { computed } from 'vue'
// Kapitel-Trenner / Section-Divider. Großer zentrierter Titel (split-title),
// optional die Section-Nummer. Ersetzt das bisher inline kopierte
// variant: center + <p class="split-title">.
// Mehrzeilige Titel: \n im headline-Frontmatter wird zu <br>.
// Hinweis: NICHT `title` als Prop verwenden — reserviertes Slidev-Feld.
const props = defineProps<{
  secno?: string
  headline?: string
  nologo?: boolean
}>()
const titleHtml = computed(() => (props.headline ?? '').replace(/\n/g, '<br>'))
// :src statt src — Theme-public-Assets liegen zur Laufzeit unter /theme/.
const logoSrc = '/theme/img/logo-black.svg'
</script>

<template>
  <div class="slidev-layout cc center-text">
    <span v-if="secno" class="secno">{{ secno }}</span>
    <p class="split-title" v-html="titleHtml"></p>
    <slot />
    <div v-if="!nologo" class="footer-logo">
      <img :src="logoSrc" alt="codecentric">
    </div>
  </div>
</template>
