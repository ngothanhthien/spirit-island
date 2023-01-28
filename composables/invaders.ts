import { ADVERSARY } from '~~/enum'
import { adversary as adversaryOption, level as levelOption } from '~~/composables/option'
import { takeRandoms } from '~~/composables/helpers'
import { INVADER_CARD_STAGE_1, INVADER_CARD_STAGE_2, INVADER_CARD_STAGE_3 } from '~~/data'
const invaders = reactive({
  explore: [],
  build: [],
  ravage: [],
  extraBuild: [],
  discard: [],
  draw: [] as Array<String>,
})
function setupInvaderDeck() {
  switch (adversaryOption.value) {
    case ADVERSARY.england.id:
      defaultSetup()
      break
    case ADVERSARY.sweden.id:
      // code block
      break
    case ADVERSARY.prussia.id:
      // code block
      break
    case ADVERSARY.russia.id:
      // code block
      break
    case ADVERSARY.france.id:
      defaultSetup()
      break
    case ADVERSARY.habsburg.id:
      defaultSetup(2)
      break
    case ADVERSARY.scotland.id:
      // code block
      break
    default:
      console.warn('Cannot find adversary')
  }
}
function defaultSetup(n1 = 3, n2 = 4, n3 = 5) {
  const stage1Deck = takeRandoms(INVADER_CARD_STAGE_1, n1)
  const stage2Deck = takeRandoms(INVADER_CARD_STAGE_2, n2)
  const stage3Deck = takeRandoms(INVADER_CARD_STAGE_3, n3)
  invaders.draw = stage1Deck.concat(stage2Deck, stage3Deck) as Array<string>
}
export {
  invaders,
  setupInvaderDeck,
}
