<script setup lang="ts">
// Use-Case-Wiring (Original-PDF 8 & 9): Claude Code branched über zwei
// MCP-Clients auf zwei Server, die nach außen an Cloud-Services andocken.
// variant steuert die echten Brand-Logos (Figma/Jira bzw. Playwright/Chromium/Jira).
// SVG-<text> nutzt inline `font`-Shorthand (sonst überschreibt die geerbte
// .cc-font-size die Präsentations-Attribute).
// Marker-ID pro Variante eindeutig: die Komponente wird auf zwei BENACHBARTEN
// Folien (Frontend/E2E) gerendert. Slidev hält die Nachbarfolie als
// display:none im DOM — bei gleicher Marker-ID greift url(#…) auf den
// versteckten Marker, den Chrome nicht rendert → Pfeilspitzen verschwinden.
const props = defineProps<{ variant: 'frontend' | 'e2e' }>()
const mid = `ucah-${props.variant}`
const ah = `url(#${mid})`
</script>

<template>
  <div class="uc">
    <svg viewBox="0 0 780 320" fill="none" stroke="#111" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <defs>
        <marker :id="mid" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#111" stroke="none" />
        </marker>
      </defs>

      <!-- Claude-Code-Container -->
      <rect x="20" y="40" width="480" height="262" rx="14" stroke-width="2.5" stroke-dasharray="8 7" />
      <rect x="34" y="26" width="150" height="34" rx="9" fill="#99e9f7" stroke="none" />
      <image href="/img/logos/claude.svg" x="42" y="33" width="20" height="20" />
      <text x="68" y="49" style="font:700 16px 'Rubik',sans-serif" stroke="none" fill="#111">Claude Code</text>

      <!-- zentrales Claude-Logo -->
      <image href="/img/logos/claude.svg" x="58" y="149" width="44" height="44" />

      <!-- Branch-Linien Sparkle → MCP Clients -->
      <path d="M106 160 C150 130 172 118 198 112" :marker-end="ah" />
      <path d="M106 182 C150 210 172 222 198 228" :marker-end="ah" />

      <!-- MCP Clients -->
      <rect x="200" y="92" width="120" height="40" rx="9" fill="#a6fade" />
      <text x="260" y="117" style="font:700 15px 'Rubik',sans-serif" stroke="none" fill="#111" text-anchor="middle">MCP Client</text>
      <rect x="200" y="208" width="120" height="40" rx="9" fill="#a6fade" />
      <text x="260" y="233" style="font:700 15px 'Rubik',sans-serif" stroke="none" fill="#111" text-anchor="middle">MCP Client</text>

      <!-- Client ↔ Server -->
      <path d="M324 112 L352 112" :marker-end="ah" :marker-start="ah" />
      <path d="M324 228 L352 228" :marker-end="ah" :marker-start="ah" />

      <!-- Server-Karten (Header „</> Server" + großes Logo) -->
      <g v-for="(row, i) in [70, 186]" :key="i" :transform="`translate(356 ${row})`">
        <rect x="0" y="0" width="128" height="84" rx="11" fill="#fbf6ab" stroke="#e3d24a" stroke-width="2" />
        <g transform="translate(14 16)" stroke-width="1.7">
          <path d="M5 -4 L1 0 L5 4 M13 -4 L17 0 L13 4" />
        </g>
        <text x="36" y="21" style="font:700 14px 'Rubik',sans-serif" stroke="none" fill="#111">Server</text>
      </g>

      <!-- Server ↔ Cloud -->
      <path d="M484 112 L620 112" :marker-end="ah" :marker-start="ah" />
      <path d="M484 228 L620 228" :marker-end="ah" :marker-start="ah" />

      <!-- ===== Variante: Frontend (Figma oben, Jira unten) ===== -->
      <template v-if="variant === 'frontend'">
        <!-- Logo im Server-Kasten: tiefer, zentriert zwischen „Server" und Kastenunterkante -->
        <image href="/img/logos/figma.svg" x="404" y="108" width="32" height="32" style="filter:grayscale(1)" />
        <image href="/img/logos/jira.svg" x="404" y="224" width="32" height="32" style="filter:grayscale(1)" />
        <!-- Clouds (2× so groß, Logo skaliert mit) -->
        <g transform="translate(700 112) scale(1.8) translate(-652 -110)">
          <g fill="#cfeefb" stroke="none">
            <circle cx="632" cy="116" r="17" /><circle cx="652" cy="103" r="22" /><circle cx="673" cy="114" r="15" /><ellipse cx="652" cy="121" rx="28" ry="13" />
          </g>
          <image href="/img/logos/figma.svg" x="634" y="93" width="38" height="38" style="filter:grayscale(1)" />
        </g>
        <g transform="translate(700 228) scale(1.8) translate(-652 -226)">
          <g fill="#cfeefb" stroke="none">
            <circle cx="632" cy="232" r="17" /><circle cx="652" cy="219" r="22" /><circle cx="673" cy="230" r="15" /><ellipse cx="652" cy="237" rx="28" ry="13" />
          </g>
          <image href="/img/logos/jira.svg" x="634" y="209" width="38" height="38" style="filter:grayscale(1)" />
        </g>
      </template>

      <!-- ===== Variante: E2E (Playwright oben, Jira unten) ===== -->
      <template v-else>
        <image href="/img/logos/playwright.svg" x="404" y="108" width="32" height="32" style="filter:grayscale(1)" />
        <image href="/img/logos/jira.svg" x="404" y="224" width="32" height="32" style="filter:grayscale(1)" />
        <!-- Clouds (2× so groß, Logo skaliert mit) -->
        <g transform="translate(700 112) scale(1.8) translate(-652 -110)">
          <g fill="#cfeefb" stroke="none">
            <circle cx="632" cy="116" r="17" /><circle cx="652" cy="103" r="22" /><circle cx="673" cy="114" r="15" /><ellipse cx="652" cy="121" rx="28" ry="13" />
          </g>
          <image href="/img/logos/chrome.svg" x="634" y="93" width="38" height="38" style="filter:grayscale(1)" />
        </g>
        <g transform="translate(700 228) scale(1.8) translate(-652 -226)">
          <g fill="#cfeefb" stroke="none">
            <circle cx="632" cy="232" r="17" /><circle cx="652" cy="219" r="22" /><circle cx="673" cy="230" r="15" /><ellipse cx="652" cy="237" rx="28" ry="13" />
          </g>
          <image href="/img/logos/jira.svg" x="634" y="209" width="38" height="38" style="filter:grayscale(1)" />
        </g>
      </template>
    </svg>
  </div>
</template>

<style scoped>
.uc { width: 100%; margin-top: 0.6em; }
.uc svg { width: 100%; height: auto; max-height: 56vh; display: block; }
</style>
