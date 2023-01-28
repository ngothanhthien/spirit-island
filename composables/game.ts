const currentTurn = ref(0)
const currentPhase = ref(0)
const earnedFear = ref(0)
const maxFear = ref(0)
const terrorLevel = ref(1)
const cityStats = reactive({
  health: 3,
  damage: 3,
})
const townStats = reactive({
  health: 2,
  damage: 2,
})
const dahanStats = reactive({
  health: 2,
  damage: 2,
})
const explorerStats = reactive({
  health: 1,
  damage: 1,
})
function addFear() {
  earnedFear.value++
}
function removeFear() {
  earnedFear.value--
}
function increaseMaxFear() {
  maxFear.value++
}
function decreaseMaxFear() {
  maxFear.value--
}
export {
  currentTurn,
  currentPhase,
  earnedFear,
  maxFear,
  terrorLevel,
  cityStats,
  townStats,
  dahanStats,
  explorerStats,
  addFear,
  removeFear,
  increaseMaxFear,
  decreaseMaxFear,
}
