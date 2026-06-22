<script setup lang="ts">
// Review-Fan (Muster „mehrere Reviews parallel"):
// links Claude Code → fächert gestrichelt zu drei Review-Agenten in der Mitte
// → laufen rechts wieder zu Claude Code zusammen.
// Absolut positionierte Boxen + exakt deckungsgleiches SVG → pixelgenaue Linien.
</script>

<template>
  <div class="rfan">
    <svg class="rfan-lines" viewBox="0 0 900 440" preserveAspectRatio="none">
      <!-- links: Claude Code (rechter Rand ~200,220) → Reviews (linker Rand ~405) -->
      <line x1="200" y1="220" x2="405" y2="70"  class="rspoke" />
      <line x1="200" y1="220" x2="405" y2="220" class="rspoke" />
      <line x1="200" y1="220" x2="405" y2="370" class="rspoke" />
      <!-- rechts: Reviews (rechter Rand ~495) → Claude Code (linker Rand ~700,220) -->
      <line x1="495" y1="70"  x2="700" y2="220" class="rspoke" />
      <line x1="495" y1="220" x2="700" y2="220" class="rspoke" />
      <line x1="495" y1="370" x2="700" y2="220" class="rspoke" />
    </svg>

    <div class="box left"><Agent color="y" label="Claude Code" solid /></div>
    <div class="box mid top"><Agent color="p" label="Review" /></div>
    <div class="box mid center"><Agent color="p" label="Review" /></div>
    <div class="box mid bottom"><Agent color="p" label="Review" /></div>
    <div class="box right"><Agent color="y" label="Claude Code" solid /></div>
  </div>
</template>

<style scoped>
/* Koordinatensystem 900x440; Boxen mittig auf den SVG-Endpunkten verankert. */
.rfan { position: relative; width: 900px; height: 440px; margin: 0.6em auto 0; }
.rfan-lines { position: absolute; inset: 0; width: 100%; height: 100%; }
.rspoke { stroke: #111; stroke-width: 1.2; stroke-dasharray: 5 5; }
.box { position: absolute; transform: translate(-50%, -50%); }
.box.left   { left: 16.7%; top: 50%; }   /* 150/900, 220/440 */
.box.right  { left: 83.3%; top: 50%; }   /* 750/900 */
.box.mid    { left: 50%; }               /* 450/900 */
.box.mid.top    { top: 15.9%; }          /* 70/440 */
.box.mid.center { top: 50%; }            /* 220/440 */
.box.mid.bottom { top: 84.1%; }          /* 370/440 */
</style>

