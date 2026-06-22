<script setup lang="ts">
// MCP-Radial: zentraler „Model"-Hub (gestricheltes grünes Quadrat) mit sechs
// Fähigkeits-Icons im Kranz, verbunden über Elbow-Linien mit Pfeilspitzen.
// Nachbau von Original-PDF 5. Komplett als SVG → scharf & editierbar.
</script>

<template>
  <div class="mcp-radial">
    <svg viewBox="0 0 760 380" fill="none" stroke="#111" stroke-width="2.2"
         stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#111" stroke="none" />
        </marker>
      </defs>

      <!-- Verbindungslinien: gerade vom Hub direkt auf jedes Icon zeigend -->
      <path d="M335 150 L254 85" marker-end="url(#ah)" />   <!-- → Fingerprint (oben links) -->
      <path d="M425 150 L506 85" marker-end="url(#ah)" />   <!-- → Puzzle (oben rechts) -->
      <path d="M330 190 L189 190" marker-end="url(#ah)" />  <!-- → Globe (links) -->
      <path d="M430 190 L571 190" marker-end="url(#ah)" />  <!-- → Gear (rechts) -->
      <path d="M335 230 L254 295" marker-end="url(#ah)" />  <!-- → Puzzle (unten links) -->
      <path d="M425 230 L506 295" marker-end="url(#ah)" />  <!-- → Cart (unten rechts) -->

      <!-- zentraler Hub -->
      <rect x="330" y="142" width="100" height="96" rx="16" fill="#a6fade" stroke="#111" stroke-width="2.5" stroke-dasharray="7 6" />
      <!-- Claude-Logo -->
      <image href="/img/logos/claude.svg" x="358" y="168" width="44" height="44" />

      <!-- Icon: Fingerprint (oben links) -->
      <g transform="translate(235 70) scale(1.7)" stroke-width="1.4">
        <path d="M-8 4 a8 8 0 0 1 16 0 v3" />
        <path d="M-4 4 a4 4 0 0 1 8 0 v6" />
        <path d="M-12 6 v-2 a12 12 0 0 1 24 0 v2" />
        <path d="M0 4 v9" />
      </g>
      <!-- Icon: Puzzle (oben rechts) -->
      <g transform="translate(525 70) scale(1.7)" stroke-width="1.4">
        <path d="M-10 -8 h6 a3 3 0 1 1 6 0 h6 v6 a3 3 0 1 1 0 6 v6 h-6 a3 3 0 1 0 -6 0 h-6 v-6 a3 3 0 1 0 0 -6 z" />
      </g>
      <!-- Icon: Globe (links) -->
      <g transform="translate(165 190) scale(1.7)" stroke-width="1.4">
        <circle cx="0" cy="0" r="11" />
        <path d="M-11 0 h22 M0 -11 v22 M-7 -7 a16 10 0 0 0 14 0 M-7 7 a16 10 0 0 1 14 0" />
      </g>
      <!-- Icon: Gear (rechts) -->
      <g transform="translate(595 190) scale(1.7)" stroke-width="1.4">
        <circle cx="0" cy="0" r="5" />
        <path d="M0 -12 v4 M0 12 v-4 M-12 0 h4 M12 0 h-4 M-8.5 -8.5 l3 3 M8.5 8.5 l-3 -3 M-8.5 8.5 l3 -3 M8.5 -8.5 l-3 3" />
      </g>
      <!-- Icon: Puzzle (unten links) -->
      <g transform="translate(235 310) scale(1.7)" stroke-width="1.4">
        <path d="M-10 -8 h6 a3 3 0 1 1 6 0 h6 v6 a3 3 0 1 1 0 6 v6 h-6 a3 3 0 1 0 -6 0 h-6 v-6 a3 3 0 1 0 0 -6 z" />
      </g>
      <!-- Icon: Cart (unten rechts) -->
      <g transform="translate(525 310) scale(1.7)" stroke-width="1.4">
        <path d="M-12 -8 h3 l2 14 h13 l2 -10 h-17" />
        <circle cx="-4" cy="10" r="1.8" />
        <circle cx="9" cy="10" r="1.8" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.mcp-radial { width: 100%; margin-top: 0.6em; }
.mcp-radial svg { width: 100%; height: auto; max-height: 64vh; display: block; }
</style>
