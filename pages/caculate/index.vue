<script setup>
const { x: rawX, y: rawY } = useMouse()
const SCREEN_HEIGHT = ref(null)
const SCREEN_WIDTH = ref(null)
const capture = reactive({
  x: 0,
  y: 0,
})
const capture2 = reactive({
  x: 0,
  y: 0,
})
const capture3 = reactive({
  x: 0,
  y: 0,
})
onKeyStroke('ArrowDown', (e) => {
  e.preventDefault()
})
const current = ref(0)
const test = ref(null)
onMounted(() => {
  SCREEN_WIDTH.value = test.value.offsetWidth
  SCREEN_HEIGHT.value = test.value.offsetHeight
})
const y = computed(() => SCREEN_HEIGHT.value === null ? 0 : rawY.value * 100 / SCREEN_HEIGHT.value)
const x = computed(() => SCREEN_WIDTH.value === null ? 0 : rawX.value * 100 / SCREEN_WIDTH.value)
function captureF() {
  if (current.value % 3 === 0) {
    capture.x = x.value.toFixed(2)
    capture.y = y.value.toFixed(2)
  }
  else if (current.value % 3 === 1) {
    capture2.x = x.value.toFixed(2)
    capture2.y = y.value.toFixed(2)
  }
  else {
    capture3.x = x.value.toFixed(2)
    capture3.y = y.value.toFixed(2)
  }
  current.value++
}
</script>

<template>
  <div class="h-screen" @click="captureF">
    <div ref="test" h-full relative>
      <img h-full src="/img/map/A.webp" alt="Island A">
      <ObjectTown :style="`top: ${capture.y}%; left: ${capture.x}%`" translate="x--1/2 y--1/2" />
      <ObjectCity :style="`top: ${capture2.y}%; left: ${capture2.x}%`" translate="x--1/2 y--1/2" />
      <ObjectExplorer :style="`top: ${capture3.y}%; left: ${capture3.x}%`" translate="x--1/2 y--1/2" />
      <ObjectDahan style="top: 17.8%; left: 48.8%;" translate="x--1/2 y--1/2" />
      <MarkerDefend style="top: 25.8%; left: 48.8%;" translate="x--1/2 y--1/2" />
      <div absolute left-0 top-0>
        <div>x:{{ x }}%</div>
        <div>y:{{ y }}%</div>
        <div>Captured: x: {{ capture.x }}% y: {{ capture.y }}%</div>
      </div>
    </div>
  </div>
</template>
