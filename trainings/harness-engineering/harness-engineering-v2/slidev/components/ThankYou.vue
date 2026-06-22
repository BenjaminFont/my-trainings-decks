<template>
  <div class="ty-slide">
    <div class="ty-top">
      <img class="ty-hands" src="/img/hands.png" alt="" />
      <div class="ty-name">
        <span class="bracket br-tl"></span>
        <span class="bracket br-br"></span>
        <h2>Benjamin Font Pera</h2>
        <p class="role"><span class="cc-slashes">//</span> GenAI Consultant / AI - Trainer / Speaker</p>
        <img class="ty-logo" :src="logoSrc" alt="codecentric" />
      </div>
    </div>
    <img class="ty-pic" src="/img/benjamin.png" alt="Benjamin Font Pera" />

    <div class="ty-bottom">
      <div class="ty-left">
        <div class="cc-heading ty-th">
          <span class="cc-slashes big">//</span>
          <h1>{{ title }}</h1>
        </div>
        <div class="contact">
          <p class="ct-h">Kontakt</p>
          <p>email/benjamin.font-pera@codecentric.de</p>
          <p>linkedin.com/@Benjamin Font Pera</p>
        </div>
      </div>
      <img class="ty-qr" src="/img/qr.png" alt="QR Code" />
      <img class="ty-logo-2" :src="logoSrc" alt="codecentric" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Thank You!' },
})
// :src — Theme-public-Assets liegen zur Laufzeit unter /theme/.
const logoSrc = '/theme/img/logo-black.svg'
</script>

<style scoped>
.ty-slide { position: absolute; inset: 0; display: grid; grid-template-rows: minmax(0, 0.85fr) minmax(0, 1.15fr); background: #fff; overflow: hidden; }
.ty-top { position: relative; display: grid; grid-template-columns: 1fr 1.4fr; grid-template-rows: minmax(0, 1fr); background: #f1f1f1; min-height: 0; overflow: hidden; }
.ty-hands { width: 100%; height: 100%; object-fit: cover; display: block; min-height: 0; }
.ty-name { position: relative; padding: 2.5rem 3rem; }
.ty-name h2 { font-size: 3rem; font-weight: 900; }
.role { font-size: 1.4rem; font-weight: 700; margin-top: 0.3rem; }
.role .cc-slashes { font-size: 1.4rem; }
.ty-logo { position: absolute; right: 3rem; bottom: 1.5rem; height: 22px; }
.ty-pic { position: absolute; right: 4rem; top: 240px; width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 4px solid #fff; z-index: 5; }
.bracket { position: absolute; width: 40px; height: 40px; }
.br-tl { top: 1rem; left: 0.5rem; border-top: 5px solid var(--cc-green); border-left: 5px solid var(--cc-green); }
.br-br { right: 1rem; top: 3rem; width: 60px; height: 60px; border-bottom: 5px solid var(--cc-green); border-right: 5px solid var(--cc-green); }
.ty-bottom { position: relative; padding: 3rem 3rem; border-top: 3px solid var(--cc-green); }
.ty-th { align-items: flex-start; }
.ty-left h1 { font-size: 4.5rem; }
.cc-slashes.big { font-size: 4rem; }
.contact { margin-top: 2rem; font-size: 1.4rem; line-height: 1.9; }
.ct-h { font-weight: 700; }
.ty-qr { position: absolute; right: 6.5rem; top: 50%; transform: translateY(-50%); width: 155px; height: 155px; }
.ty-logo-2 { position: absolute; right: 3rem; bottom: 1.5rem; height: 24px; }
</style>
