const game = reactive({
  currentTurn: 0,
  currentPhase: 0,
  earnedFear: 0,
  maxFear: 0,
  terrorLevel: 1,
})
function addFear() {
  game.earnedFear++
}
function removeFear() {
  game.earnedFear--
}
function increaseMaxFear() {
  game.maxFear++
}
function decreaseMaxFear() {
  game.maxFear--
}
export {
  game,
  addFear,
  removeFear,
  increaseMaxFear,
  decreaseMaxFear,
}
