<script setup lang="ts">
// codecentric-Slide-Basis-Layout. Die Variante steuert das vertikale Layout,
// analog zu den reveal-Klassen (center-text, title-slide).
// Das Footer-Logo wird hier global gerendert — per `nologo` Prop abschaltbar.
// Kanonische Quelle für alle Trainings-Decks (geteiltes Theme).
const props = defineProps<{ variant?: string, nologo?: boolean }>()
const variantClass = props.variant === 'center'
  ? 'center-text'
  : props.variant === 'title'
    ? 'title-slide'
    : ''
// Logo-Pfad als gebundener String: Vite analysiert nur literale src-Attribute
// zur Build-Zeit. Theme-public-Assets liegen zur Laufzeit unter /theme/ —
// daher :src statt src, sonst schlägt `slidev build` fehl.
const logoSrc = '/theme/img/logo-black.svg'
</script>

<template>
  <div class="slidev-layout cc" :class="variantClass">
    <slot />
    <div v-if="!nologo" class="footer-logo">
      <img :src="logoSrc" alt="codecentric">
    </div>
  </div>
</template>
