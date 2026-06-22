<script setup lang="ts">
// Ampel aus den TDD-PDFs: schwarzes, abgerundetes Gehäuse mit drei Kreisen –
// RED (gedämpft), GREEN, REFACTOR (blau). Labels stehen weiß im Kreis.
</script>

<template>
  <div class="traffic-light">
    <div class="tl-circle red">RED</div>
    <div class="tl-circle green">GREEN</div>
    <div class="tl-circle refactor">REFACTOR</div>
  </div>
</template>

<style scoped>
.traffic-light {
  background: #000;
  border-radius: 1.4em;
  padding: 1em 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7em;
  width: fit-content;
}
.tl-circle {
  width: 3.6em;
  height: 3.6em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 500;
  font-size: 0.7em;
  letter-spacing: 0.02em;
}
.tl-circle.red { background: #6e2b3a; }
.tl-circle.green { background: #2bb673; }
.tl-circle.refactor { background: #1c9cf0; font-size: 0.62em; }
</style>
