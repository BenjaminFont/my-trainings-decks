import { defineConfig } from 'unocss'

// Unsere Folien nutzen kurze Modifier-Klassen (y/b/g/p/r/pu) für Pastellfarben.
// UnoCSS würde manche davon als Utilities interpretieren — insbesondere `b`
// als `border` (→ ungewollte Rahmen). Diese Tokens hier blocken, damit nur
// unsere eigenen CSS-Regeln aus styles/main.css greifen.
export default defineConfig({
  blocklist: ['b', 'p', 'y', 'g', 'r', 'pu', 'pc'],
})
