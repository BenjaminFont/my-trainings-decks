<script setup lang="ts">
// Agent-Team-Diagramm: ein zentraler „Lead" links, verbunden mit drei
// Team-Mitgliedern rechts (gestrichelte, beidseitige Pfeile). Optional je
// Mitglied rechts ein/zwei Tag-Pills (MCP/Rules). Die Mitglieder sind über
// gestrichelte Linien auch untereinander verbunden.
defineProps<{
  members: { label: string, color: 'y'|'p'|'b'|'g'|'pu', tags?: string[], tagColor?: 'p'|'g'|'b' }[]
}>()
</script>

<template>
  <div class="team">
    <div class="team-lead">
      <Agent color="y" label="Lead" solid />
    </div>
    <div class="team-spokes">
      <svg class="spokes-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="2" y1="50" x2="62" y2="8"  class="spoke" />
        <line x1="2" y1="50" x2="62" y2="50" class="spoke" />
        <line x1="2" y1="50" x2="62" y2="92" class="spoke" />
      </svg>
    </div>
    <div class="team-members">
      <div v-for="(m, i) in members" :key="i" class="team-member">
        <Agent :color="m.color" :label="m.label" />
        <div v-if="m.tags" class="member-tags">
          <span v-for="(t, j) in m.tags" :key="j" class="tag-pill" :class="m.tagColor || m.color">{{ t }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.team { display: grid; grid-template-columns: 160px 120px 1fr; align-items: center; margin-top: 0.8em; }
.team-lead { display: flex; justify-content: center; }
.team-spokes { height: 320px; position: relative; }
.spokes-svg { width: 100%; height: 100%; }
.spoke { stroke: #111; stroke-width: 0.7; stroke-dasharray: 3 3; vector-effect: non-scaling-stroke; }
.team-members { display: flex; flex-direction: column; gap: 30px; }
.team-member { display: flex; align-items: center; gap: 24px; }
.member-tags { display: flex; flex-direction: column; gap: 10px; }
</style>
