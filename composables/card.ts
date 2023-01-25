import { shuffleArray, takeRandoms } from './helpers'
import type { CardDeck, FearCard, PowerCard } from '~~/types'
import { FearCards, MajorCards, MinorCards } from '~~/data'
const minors = reactive({
  draw: [] as Array<PowerCard>,
  discard: [] as Array<PowerCard>,
  current: [] as Array<PowerCard>,
})
const majors = reactive({
  draw: [] as Array<PowerCard>,
  discard: [] as Array<PowerCard>,
  current: [] as Array<PowerCard>,
})
const fears = reactive({
  draw: [] as Array<FearCard>,
  discard: [] as Array<FearCard>,
  current: [] as Array<FearCard>,
})
const earnedFear = computed(() => fears.current.length)
function shuffle(deck: CardDeck) {
  shuffleArray(deck.draw)
}
function setupMinor() {
  minors.draw = [...MinorCards]
  shuffle(minors)
}
function setupMajor() {
  majors.draw = [...MajorCards]
  shuffle(majors)
}
function setupFear(n: number) {
  fears.draw = takeRandoms(FearCards, n) as Array<FearCard>
}
function drawCard(n: number, deck: CardDeck) {
  if (deck.current.length > 0) {
    console.warn('someone haven\'t pick power yet')
    return
  }

  for (let i = 0; i < n; i++) {
    deck.current.push(deck.draw[i])
    deck.draw.shift()
  }
}

function drawMinor(n = 4) {
  drawCard(n, minors)
}

function drawMajor(n = 4) {
  drawCard(n, majors)
}

export {
  minors,
  majors,
  fears,
  earnedFear,
  shuffle,
  setupMinor,
  setupMajor,
  drawMinor,
  drawMajor,
  setupFear,
}
