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
const fearsRemain = reactive({
  level1: [] as Array<FearCard>,
  level2: [] as Array<FearCard>,
  level3: [] as Array<FearCard>,
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
const fearLevel1Remain = computed(() => fearsRemain.level1.length)
const fearLevel2Remain = computed(() => fearsRemain.level2.length)
const fearLevel3Remain = computed(() => fearsRemain.level3.length)

export {
  minors,
  majors,
  fears,
  earnedFear,
  fearsRemain,
  fearLevel1Remain,
  fearLevel2Remain,
  fearLevel3Remain,
  shuffle,
  setupMinor,
  setupMajor,
  drawMinor,
  drawMajor,
  setupFear,
}
