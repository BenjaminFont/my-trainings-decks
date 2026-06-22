<script setup lang="ts">
// Eine Agenten-Karte: gestricheltes (oder solides) Pastell-Quadrat mit
// Personen-Icon plus Label darunter — wie in den Original-PDFs.
defineProps<{
  color?: 'y' | 'p' | 'b' | 'g' | 'pu'
  label?: string
  solid?: boolean
}>()
</script>

<template>
  <div class="agent" :class="{ solid }">
    <div class="sq" :class="color || 'b'">
      <svg viewBox="0 0 24 24" fill="none" stroke="#111" stroke-width="1.6"
           stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 19c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
      </svg>
    </div>
    <div v-if="label" class="alabel" v-html="label" />
  </div>
</template>
