<template>
  <div class="dm-wrap">
    <div class="cc-heading dm-head">
      <span class="cc-slashes">//</span>
      <h2>Domain Modelling</h2>
    </div>

    <!-- 1. Analyse -->
    <div class="dm-phase">
      <div class="phase-label">1. Analyse</div>
      <div class="track">
        <div class="track-line"></div>
        <div class="stations stations-4">
          <div class="station" v-for="s in analyse" :key="s.label">
            <div class="stack">
              <div class="cc-pill bb">{{ s.tool }}</div>
              <div class="cc-pill bb">{{ s.model }}</div>
            </div>
            <div class="tick"></div>
            <div class="st-label" v-html="s.label"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Zwischen-Boxen: md-Files (2×2) + Fachexperten-Loop -->
    <div class="dm-mid">
      <div class="mid-down">
        <span class="seg-h"></span><span class="seg-v"></span><span class="seg-arrow">↓</span>
      </div>
      <div class="mid-files">
        <div class="cc-pill rb">p1.md</div>
        <div class="cc-pill rb">Fachexperte</div>
        <div class="cc-pill rb">p2.md</div>
        <div class="cc-pill rb">p_spec_1.md</div>
      </div>
      <div class="mid-in">
        <span>←</span>
        <span>←</span>
      </div>
    </div>

    <!-- 2. Development -->
    <div class="dm-phase">
      <div class="phase-label">2. Development</div>
      <div class="track">
        <div class="track-line"></div>
        <div class="stations stations-4">
          <div class="station" v-for="s in development" :key="s.label">
            <div class="st-label top" v-html="s.label"></div>
            <div class="tick"></div>
            <div class="stack" v-if="s.tool">
              <div class="cc-pill bb">{{ s.tool }}</div>
              <div class="cc-pill bb">{{ s.model }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const analyse = [
  { tool: 'Claude Code', model: 'Opus, Sonnet', label: 'Native Code-<br/>Analyse durch KI' },
  { tool: 'Claude Code', model: 'Opus, Sonnet', label: 'Fragen zum<br/>Prozesswissen' },
  { tool: 'Gemini',      model: '',             label: 'Transkription<br/>Nutzerinterviews' },
  { tool: 'Claude Code', model: 'Opus, Sonnet', label: 'Synthese' },
]
const development = [
  { tool: 'Claude Code', model: 'Opus, Sonnet', label: 'Planning' },
  { tool: 'Claude Code', model: 'Opus, Sonnet', label: 'Solutioning' },
  { tool: 'Claude Code', model: 'Opus, Sonnet', label: 'Implementing' },
  { tool: '',            model: '',             label: 'Validierung durch<br/>echte Fachexperten' },
]
</script>

<style scoped>
.dm-wrap { height: 100%; padding: 0.4rem 0.5rem; font-size: 0.85rem; display: flex; flex-direction: column; }
.dm-head { margin-bottom: 0.6rem; }
.dm-head h2 { font-size: 2rem; }
.cc-slashes { font-size: 2rem; }

.dm-phase { display: grid; grid-template-columns: 0.6fr 4fr; align-items: center; gap: 0.5rem; }
.phase-label { font-size: 1.5rem; font-weight: 800; }

.track { position: relative; }
.track-line { position: absolute; left: 0; right: 0; top: 50%; height: 2px; background: var(--cc-line); }
.stations { display: grid; position: relative; }
.stations-4 { grid-template-columns: repeat(4, 1fr); }
.station { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; }
.stack { display: flex; flex-direction: column; gap: 0.4rem; align-items: center; }
.bb { background: var(--cc-blue-soft); font-size: 0.8rem; padding: 0.3em 0.7em; border-width: 2px; }
.rb { background: var(--cc-red-soft); font-size: 0.85rem; padding: 0.3em 0.7em; border-width: 2px; }
.tick { width: 2px; height: 14px; background: var(--cc-line); }
.st-label { text-align: center; font-weight: 600; font-size: 0.82rem; line-height: 1.2; }
.st-label.top { margin-bottom: 0; }

.dm-mid { display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: 0.5rem 1rem; margin: 0.6rem 0; padding: 0 1rem; }
.mid-down { grid-column: 1; justify-self: end; display: flex; align-items: center; color: var(--cc-black); font-size: 1.6rem; line-height: 1; }
.mid-down .seg-h { width: 60px; height: 2px; background: var(--cc-black); }
.mid-down .seg-v { display: none; }
.mid-down .seg-arrow { margin-left: -0.2rem; }
.mid-files { grid-column: 2; display: grid; grid-template-columns: 1fr 1fr; gap: 0.6rem; justify-items: stretch; }
.mid-files .rb { width: 100%; text-align: center; }
.mid-in { grid-column: 3; display: flex; flex-direction: column; gap: 1.4rem; font-size: 1.6rem; line-height: 1; }
</style>
