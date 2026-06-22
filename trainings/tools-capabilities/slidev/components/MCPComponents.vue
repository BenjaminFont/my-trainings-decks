<script setup lang="ts">
// MCP-Components-Wiring (Original-PDF 7): Claude-Code-Container mit drei
// Client→Server-Paaren (Confluence / SQL / API), rechts daneben „Internet"
// mit Server→Service-Cloud und Slack als externer Dienst.
// Hinweis: SVG-<text> nutzt inline `font`-Shorthand, da die geerbte
// .cc-font-size/-weight sonst die Präsentations-Attribute überschreibt.
</script>

<template>
  <div class="mcw">
    <svg viewBox="0 0 880 380" fill="none" stroke="#111" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <marker id="mcwah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#111" stroke="none" />
        </marker>
      </defs>

      <!-- Claude-Code-Container -->
      <rect x="20" y="40" width="540" height="320" rx="14" stroke-width="2.5" stroke-dasharray="8 7" />
      <rect x="34" y="26" width="170" height="36" rx="9" fill="#99e9f7" stroke="none" />
      <image href="/img/logos/claude.svg" x="44" y="34" width="20" height="20" />
      <text x="72" y="50" style="font:700 17px 'Rubik',sans-serif" stroke="none" fill="#111">Claude Code</text>

      <!-- 3 Reihen: Client — MCP — Server -->
      <g v-for="(row, i) in [0,1,2]" :key="i" :transform="`translate(0 ${110 + i*85})`">
        <!-- Client -->
        <rect x="55" y="-22" width="120" height="44" rx="10" fill="#a6fade" />
        <text x="115" y="5" style="font:700 16px 'Rubik',sans-serif" stroke="none" fill="#111" text-anchor="middle">Client</text>
        <!-- MCP-Linie (bidirektional) -->
        <path d="M185 0 L385 0" marker-end="url(#mcwah)" />
        <path d="M385 0 L185 0" marker-end="url(#mcwah)" />
        <text x="285" y="-9" style="font:700 14px 'Rubik',sans-serif" stroke="none" fill="#111" text-anchor="middle">MCP</text>
        <!-- Server -->
        <rect x="390" y="-24" width="140" height="48" rx="10" fill="#fbf6ab" stroke="#e3d24a" stroke-width="2" />
        <text x="477" y="5" style="font:700 16px 'Rubik',sans-serif" stroke="none" fill="#111" text-anchor="middle">Server</text>
      </g>

      <!-- Server-Icons (Logo + „Server" gemeinsam im gelben Kasten zentriert, Mitte x=460) -->
      <!-- Confluence (Reihe 1) -->
      <image href="/img/logos/confluence.svg" x="415" y="93" width="26" height="26" style="filter:grayscale(1)" />
      <!-- SQL-Server (Reihe 2) -->
      <image href="/img/logos/mssql.svg" x="415" y="178" width="26" height="26" style="filter:grayscale(1)" />
      <!-- API-Gear (Reihe 3) -->
      <g transform="translate(428 280)" stroke-width="1.5">
        <circle cx="0" cy="0" r="11" /><text x="0" y="3.5" style="font:700 9px 'Rubik',sans-serif" stroke="none" fill="#111" text-anchor="middle">API</text>
      </g>

      <!-- Internet-Bereich rechts -->
      <text x="600" y="76" style="font:600 18px 'Rubik',sans-serif" stroke="none" fill="#111">Internet</text>
      <!-- Cloud -->
      <path d="M712 96 a18 18 0 0 1 5 -34 a22 22 0 0 1 40 6 a15 15 0 0 1 3 28 z" fill="#7fd8ef" stroke="#111" stroke-width="2" />
      <!-- Server/Service-Box -->
      <rect x="600" y="92" width="150" height="72" rx="10" fill="#fff" stroke="#5fd9a0" stroke-width="2.5" />
      <rect x="600" y="92" width="92" height="30" rx="8" fill="#fbf6ab" stroke="none" />
      <text x="614" y="113" style="font:700 16px 'Rubik',sans-serif" stroke="none" fill="#111">Server</text>
      <text x="640" y="148" style="font:700 16px 'Rubik',sans-serif" stroke="none" fill="#111">Service</text>

      <!-- Server (Reihe 3) → Slack -->
      <path d="M560 280 L632 280" marker-end="url(#mcwah)" />
      <!-- Slack-Logo (vier Lozenges, vereinfacht) + Wortmarke -->
      <g transform="translate(650 268)" fill="#111" stroke="none">
        <rect x="6" y="0" width="6" height="14" rx="3" /><rect x="0" y="14" width="14" height="6" rx="3" />
        <rect x="14" y="8" width="6" height="14" rx="3" /><rect x="6" y="22" width="14" height="6" rx="3" />
      </g>
      <text x="680" y="290" style="font:800 26px 'Rubik',sans-serif" stroke="none" fill="#111">slack</text>
    </svg>
  </div>
</template>

<style scoped>
.mcw { width: 100%; margin-top: 0.4em; }
.mcw svg { width: 100%; height: auto; max-height: 60vh; display: block; }
</style>
