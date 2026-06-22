// Slidev lädt styles/index.ts des Themes automatisch und merged es global.
// Drei Schichten:
//   base.css      – geteilter Brand-Kern (Tokens, Rubik, weißer Hintergrund)
//   training.css  – Bausteine der Training-Variante (alles unter .cc)
//   pitch.css     – Bausteine der Pitch-Variante (.pitch / .cc-*)
// Beide Varianten sind gescoped und koexistieren konfliktfrei; ein Deck
// nutzt in der Praxis nur eine davon. Deck-spezifische Ergänzungen liegen
// im jeweiligen Deck (styles/extra.css).
import './base.css'
import './training.css'
import './pitch.css'
