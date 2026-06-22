<template>
  <div class="diamonds-row">
    <div class="cc-diamond" :style="{ background: 'var(--cc-green-soft)', width: size, height: size }">
      <span>{{ labels[0] }}</span>
    </div>
    <div class="cc-diamond" :style="{ background: 'var(--cc-blue-soft)', width: size, height: size }">
      <span>{{ labels[1] }}</span>
    </div>
    <div class="cc-diamond" :style="{ background: 'var(--cc-yellow-soft)', width: size, height: size }">
      <span>{{ labels[2] }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  size: { type: String, default: '200px' },
  labels: { type: Array, default: () => ['Problem', 'Lösung', 'Umsetzung'] },
})
</script>

<style scoped>
.diamonds-row {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 0 2rem;
}
</style>
