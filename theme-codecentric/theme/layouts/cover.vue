<script setup lang="ts">
// Cover-/Titelfolie. Ersetzt das bisher inline kopierte
// <span class="secno"> + <h1> + <div class="subtitle">.
// Body-Slot optional (z. B. zusätzliche Zeile unter dem Untertitel).
// Hinweis: NICHT `title` als Prop verwenden — `title` ist ein reserviertes
// Slidev-Frontmatter-Feld (Navigation/TOC) und erreicht das Layout nicht.
const props = defineProps<{
  secno?: string
  headline?: string
  subtitle?: string
  nologo?: boolean
}>()
// :src statt src — Theme-public-Assets liegen zur Laufzeit unter /theme/.
const logoSrc = '/theme/img/logo-black.svg'
</script>

<template>
  <div class="slidev-layout cc title-slide">
    <span v-if="secno" class="secno">{{ secno }}</span>
    <h1 v-if="headline" v-html="headline"></h1>
    <div v-if="subtitle" class="subtitle" v-html="subtitle"></div>
    <slot />
    <div v-if="!nologo" class="footer-logo">
      <img :src="logoSrc" alt="codecentric">
    </div>
  </div>
</template>
