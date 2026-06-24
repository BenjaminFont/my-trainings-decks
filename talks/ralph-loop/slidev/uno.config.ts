import { defineConfig } from 'unocss'

// Kurze Modifier-Klassen (y/b/g/p/r/pu) für Pastelltöne kollidieren mit
// UnoCSS-Utilities (z. B. `b` → border). Hier blocken, damit nur unsere
// eigenen CSS-Regeln greifen.
export default defineConfig({
  blocklist: ['b', 'p', 'y', 'g', 'r', 'pu', 'pc'],
})
