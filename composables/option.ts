import type { Adversary, IslandLetter } from '~~/types'
const adversary = ref<null | Adversary>(null)
const level = ref(0)
const boards = ref<Array<IslandLetter>>([])
const spirits = ref<Array<unknown>>([])
export {
  adversary,
  boards,
  level,
  spirits,
}
