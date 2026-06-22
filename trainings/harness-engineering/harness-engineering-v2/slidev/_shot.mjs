// Capture each Slidev slide at exact 1280x720.
// Usage (from inside a deck dir so node resolves playwright-chromium): node _shot.mjs <baseUrl> <count> <outDir>
import { chromium } from 'playwright-chromium'
import { mkdirSync } from 'node:fs'

const [baseUrl, countStr, outDir] = process.argv.slice(2)
const count = parseInt(countStr, 10)
mkdirSync(outDir, { recursive: true })

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 })

for (let i = 1; i <= count; i++) {
  await page.goto(`${baseUrl}/${i}`, { waitUntil: 'networkidle' })
  await page.waitForTimeout(500)
  const n = String(i).padStart(2, '0')
  await page.screenshot({ path: `${outDir}/s-${n}.png`, clip: { x: 0, y: 0, width: 1280, height: 720 } })
  process.stdout.write(`${i} `)
}
console.log('done')
await browser.close()
