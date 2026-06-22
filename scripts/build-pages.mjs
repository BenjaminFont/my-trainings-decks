// Build all Slidev decks into dist/<slug> with the correct GitHub Pages base
// path, then emit a dist/index.html landing page linking every deck.
//
// Usage:  node scripts/build-pages.mjs            (base = /my-trainings/)
//         BASE_PATH=/ node scripts/build-pages.mjs  (local root build)
//
// Each deck is an independent Slidev project (own package.json + node_modules).
// We run `slidev build` per deck with --base so asset URLs resolve under the
// Pages sub-path, and --out into a shared dist/ tree.

import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, rmSync, writeFileSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const DIST = resolve(ROOT, 'dist')

// Repo name → Pages serves at https://<user>.github.io/<REPO>/
// In CI, derive from GITHUB_REPOSITORY ("owner/repo") so the same script works
// in whichever repo it runs (this one builds nothing public; the synced copy in
// my-trainings-decks does the actual Pages deploy).
const REPO = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'my-trainings-decks'
// Allow overriding for local root builds (BASE_PATH=/).
const BASE_ROOT = process.env.BASE_PATH ?? `/${REPO}/`

// Registry: every deck to publish. slug = URL segment under the base.
// group/title drive the landing page.
const DECKS = [
  { slug: 'context-engineering',        title: 'Context Engineering',                                   group: 'Trainings', dir: 'trainings/context-engineering/slidev' },
  { slug: 'exact-coding',               title: 'EXACT — Example-guided AI-Collaborative TDD',           group: 'Trainings', dir: 'trainings/exact-coding/slidev' },
  { slug: 'harness-engineering',        title: 'Harness Engineering (v1)',                              group: 'Trainings', dir: 'trainings/harness-engineering/slidev' },
  { slug: 'harness-engineering-v2',     title: 'Harness Engineering (v2)',                              group: 'Trainings', dir: 'trainings/harness-engineering/harness-engineering-v2/slidev' },
  { slug: 'spec-driven-development',    title: 'Spec Driven Development & BMAD',                        group: 'Trainings', dir: 'trainings/spec-driven-development/slidev' },
  { slug: 'spec-driven-development-v2', title: 'Spec Driven Development & BMAD (v2)',                   group: 'Trainings', dir: 'trainings/spec-driven-development/slidev-v2' },
  { slug: 'spec-driven-development-v3', title: 'Spec Driven Development — OpenSpec & Example Mapping',  group: 'Trainings', dir: 'trainings/spec-driven-development/slidev-v3' },
  { slug: 'tools-capabilities',         title: 'Tools & Skills',                                        group: 'Trainings', dir: 'trainings/tools-capabilities/slidev' },
  { slug: 'tools-developing',           title: 'Tools for Developing',                                  group: 'Trainings', dir: 'trainings/tools-developing/slidev' },
  { slug: 'talk-harness-engineering',     title: 'Harness Engineering (Talk)',     group: 'Talks', dir: 'talks/harness-engineering/slidev' },
  { slug: 'talk-harness-engineering-v2',  title: 'Harness Engineering (Talk, v2)', group: 'Talks', dir: 'talks/harness-engineering/v2/slidev' },
]

function run(cmd, cwd) {
  execSync(cmd, { cwd, stdio: 'inherit' })
}

function install(deck) {
  const dir = resolve(ROOT, deck.dir)
  if (existsSync(resolve(dir, 'node_modules'))) return
  console.log(`\n=== npm install: ${deck.slug} ===`)
  // Lockfile-tolerant install for CI; falls back to install if no lockfile.
  const cmd = existsSync(resolve(dir, 'package-lock.json')) ? 'npm ci || npm install' : 'npm install'
  run(cmd, dir)
}

function build(deck) {
  const dir = resolve(ROOT, deck.dir)
  const base = `${BASE_ROOT}${deck.slug}/`
  const out = resolve(DIST, deck.slug)
  console.log(`\n=== build: ${deck.slug}  (base ${base}) ===`)
  run(`npx slidev build --base ${base} --out ${out}`, dir)
  fixThemePaths(deck, base)
}

// The shared theme references its public assets with an absolute /theme/...
// path (e.g. @font-face url(/theme/fonts/Rubik-Bold.ttf)). Slidev copies the
// theme's public/ into <out>/theme/ but does NOT rewrite that absolute URL for
// the --base sub-path, so on GitHub Pages the fonts 404. Rewrite /theme/ to the
// base-prefixed path in the emitted CSS/JS.
function fixThemePaths(deck, base) {
  const assetsDir = resolve(DIST, deck.slug, 'assets')
  if (!existsSync(assetsDir)) return
  const prefix = `${base}theme/`
  let patched = 0
  const walk = (d) => {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      const p = resolve(d, entry.name)
      if (entry.isDirectory()) walk(p)
      else if (/\.(css|js)$/.test(entry.name)) {
        const src = readFileSync(p, 'utf8')
        // Rewrite only bare-absolute theme asset paths (fonts/img). Use a
        // regex with a negative lookbehind-ish guard: match (^|["'(]) /theme/.
        const out = src.replace(/(^|["'(=\s])\/theme\/(fonts|img)\//g, `$1${prefix}$2/`)
        if (out !== src) { writeFileSync(p, out); patched++ }
      }
    }
  }
  walk(assetsDir)
  if (patched) console.log(`   patched ${patched} file(s): /theme/ -> ${prefix}`)
}

function landingPage() {
  const groups = [...new Set(DECKS.map((d) => d.group))]
  const sections = groups
    .map((g) => {
      const cards = DECKS.filter((d) => d.group === g)
        .map(
          (d) => `      <a class="card" href="${BASE_ROOT}${d.slug}/">
        <span class="card-title">${d.title}</span>
        <span class="card-go">Open &rarr;</span>
      </a>`,
        )
        .join('\n')
      return `    <section>
      <h2>${g}</h2>
      <div class="grid">
${cards}
      </div>
    </section>`
    })
    .join('\n')

  const html = `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>codecentric — Talks &amp; Trainings</title>
  <style>
    :root { --green:#22F4AE; --blue:#00C9EC; --ink:#000; }
    * { box-sizing: border-box; }
    body { margin:0; font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
           color: var(--ink); background:#fff; -webkit-font-smoothing:antialiased; }
    header { padding: 4rem 2rem 1rem; max-width: 1100px; margin: 0 auto; }
    .slashes { color: var(--green); font-weight: 900; font-style: italic; letter-spacing:-0.05em; }
    h1 { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900; letter-spacing:-0.03em; margin:.2em 0 0; }
    .sub { font-size: 1.1rem; color:#444; margin-top:.6rem; }
    main { max-width: 1100px; margin: 0 auto; padding: 1rem 2rem 5rem; }
    section { margin-top: 2.5rem; }
    h2 { font-size: 1.3rem; font-weight: 800; border-left: 6px solid var(--green); padding-left:.6rem; }
    .grid { display:grid; grid-template-columns: repeat(auto-fill, minmax(280px,1fr)); gap:1rem; margin-top:1rem; }
    .card { display:flex; flex-direction:column; justify-content:space-between; gap:1.2rem;
            border:2px solid var(--ink); border-radius:14px; padding:1.2rem 1.3rem; text-decoration:none;
            color:var(--ink); background:#fafafa; transition: transform .08s ease, box-shadow .08s ease; }
    .card:hover { transform: translateY(-2px); box-shadow: 6px 6px 0 var(--green); }
    .card-title { font-size:1.15rem; font-weight:700; line-height:1.25; }
    .card-go { font-size:.9rem; font-weight:700; color: var(--blue); }
    footer { max-width:1100px; margin:0 auto; padding: 0 2rem 4rem; color:#888; font-size:.85rem; }
  </style>
</head>
<body>
  <header>
    <div><span class="slashes">//</span> codecentric</div>
    <h1>Talks &amp; Trainings</h1>
    <p class="sub">Slidev-Decks rund um AI-native Engineering.</p>
  </header>
  <main>
${sections}
  </main>
  <footer>Gebaut mit Slidev · codecentric</footer>
</body>
</html>
`
  writeFileSync(resolve(DIST, 'index.html'), html)
  // .nojekyll so GitHub Pages serves _-prefixed Slidev asset dirs.
  writeFileSync(resolve(DIST, '.nojekyll'), '')
  console.log('\n=== landing page + .nojekyll written ===')
}

// --- main ---
rmSync(DIST, { recursive: true, force: true })
mkdirSync(DIST, { recursive: true })

const only = process.argv[2] // optional: build a single slug
const decks = only ? DECKS.filter((d) => d.slug === only) : DECKS
if (only && decks.length === 0) {
  console.error(`Unknown deck slug: ${only}`)
  process.exit(1)
}

for (const deck of decks) {
  install(deck)
  build(deck)
}
landingPage()
console.log(`\nDone. Built ${decks.length} deck(s) into dist/`)
