<script setup lang="ts">
// SKILL-Diversity (Original-PDF 20): Claude-Code-Container mit drei SKILL-
// Knoten, die über verschiedene Transportwege (MCP / CLI / NODE) an je einen
// gelben Backend-Knoten andocken — Skills können alles ansprechen.
// SVG-<text> nutzt inline `font`-Shorthand (sonst überschreibt die geerbte
// .cc-font-size die Präsentations-Attribute).
</script>

<template>
  <div class="skd">
    <svg viewBox="0 0 760 360" fill="none" stroke="#111" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <marker id="skdah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#111" stroke="none" />
        </marker>
      </defs>

      <!-- Container -->
      <rect x="20" y="40" width="720" height="300" rx="14" stroke-width="2.5" stroke-dasharray="8 7" />
      <rect x="34" y="26" width="170" height="36" rx="9" fill="#99e9f7" stroke="none" />
      <image href="/img/logos/claude.svg" x="44" y="34" width="20" height="20" />
      <text x="72" y="50" style="font:700 17px 'Rubik',sans-serif" stroke="none" fill="#111">Claude Code</text>

      <g v-for="(t, i) in ['MCP','CLI','NODE']" :key="i" :transform="`translate(0 ${110 + i*80})`">
        <!-- SKILL-Knoten -->
        <rect x="60" y="-24" width="130" height="48" rx="11" fill="#a6fade" />
        <text x="125" y="6" style="font:700 17px 'Rubik',sans-serif" stroke="none" fill="#111" text-anchor="middle">SKILL</text>
        <!-- Transport-Linie (bidirektional) -->
        <path d="M200 0 L560 0" marker-end="url(#skdah)" />
        <path d="M560 0 L200 0" marker-end="url(#skdah)" />
        <text x="380" y="-10" style="font:700 15px 'Rubik',sans-serif" stroke="none" fill="#111" text-anchor="middle">{{ t }}</text>
      </g>

      <!-- Backend-Knoten -->
      <!-- Confluence Server (Reihe 1) -->
      <rect x="565" y="86" width="135" height="48" rx="10" fill="#fbf6ab" stroke="#e3d24a" stroke-width="2" />
      <image href="/img/logos/confluence.svg" x="582" y="97" width="26" height="26" style="filter:grayscale(1)" />
      <text x="618" y="116" style="font:700 16px 'Rubik',sans-serif" stroke="none" fill="#111">Server</text>
      <!-- SQL-Server (Reihe 2) -->
      <rect x="565" y="166" width="56" height="56" rx="12" fill="#fbf6ab" stroke="#e3d24a" stroke-width="2" />
      <image href="/img/logos/mssql.svg" x="578" y="181" width="30" height="30" style="filter:grayscale(1)" />
      <!-- API (Reihe 3) -->
      <rect x="565" y="246" width="56" height="56" rx="12" fill="#fbf6ab" stroke="#e3d24a" stroke-width="2" />
      <g transform="translate(593 274)" stroke-width="1.5">
        <circle cx="0" cy="0" r="11" /><text x="0" y="4" style="font:700 9px 'Rubik',sans-serif" stroke="none" fill="#111" text-anchor="middle">API</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.skd { width: 100%; margin-top: 0.4em; }
.skd svg { width: 100%; height: auto; max-height: 54vh; display: block; }
</style>
