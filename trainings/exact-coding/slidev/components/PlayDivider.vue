<script setup lang="ts">
// Sektions-Trenner aus den EXACT-PDFs: ein farbiges, abgerundetes
// Play-Dreieck (schwarz umrandet) links neben einem großen, fetten Titel.
// Farbe markiert das Kapitel: yellow = Vibe Coding, blue = Example Mapping,
// green = AI TDD.
defineProps<{
  color?: 'yellow' | 'blue' | 'green'
  title?: string
}>()
const fills: Record<string, string> = {
  yellow: '#F7EA2D',
  blue: '#00C9EC',
  green: '#22F4AE',
}
</script>

<template>
  <div class="play-divider">
    <svg class="tri" viewBox="0 0 100 100" aria-hidden="true">
      <path d="M18 12 Q14 8 18 5 L88 47 Q92 50 88 53 L18 95 Q14 92 18 88 Z"
            :fill="fills[color || 'yellow']" stroke="#000" stroke-width="4"
            stroke-linejoin="round" />
    </svg>
    <div class="ptitle" v-html="title" />
  </div>
</template>

<style scoped>
.play-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7em;
  width: 100%;
}
.play-divider .tri {
  flex: none;
  width: 4.6em;
  height: 4.6em;
}
.play-divider .ptitle {
  font-size: 3.4em;
  font-weight: 900;
  line-height: 0.98;
  letter-spacing: -0.02em;
  color: #000;
}
</style>
