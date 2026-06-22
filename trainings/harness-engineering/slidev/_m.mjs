import { chromium } from 'playwright-chromium'
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1280,height:720}})
// slide 12 = DomainModelling, slide 23 = HarnessTimeline
for (const [n,sel] of [[12,'.dm-wrap'],[23,'.tl-slide'],[8,'.dd-slide']]) {
  await p.goto(`http://localhost:3040/${n}`,{waitUntil:'networkidle'}); await p.waitForTimeout(400)
  const r = await p.evaluate((s)=>{
    const lay=document.querySelector('.slidev-layout'); const el=document.querySelector(s)
    const f=(e)=>e?`${Math.round(e.getBoundingClientRect().width)}x${Math.round(e.getBoundingClientRect().height)}@(${Math.round(e.getBoundingClientRect().left)},${Math.round(e.getBoundingClientRect().top)})`:'NONE'
    const cs = lay?getComputedStyle(lay):null
    return `layout=${f(lay)} pad=${cs?cs.padding:'?'} justify=${cs?cs.justifyContent:'?'}\n  ${s}=${f(el)}`
  }, sel)
  console.log(`slide ${n}:`, r)
}
await b.close()
