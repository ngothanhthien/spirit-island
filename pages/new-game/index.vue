<script setup>
import { adversary, level } from '~~/composables/option'
adversary.value = null
level.value = 6
const game_difficulty = computed(() => {
  if (adversary.value === null)
    return 0
  return adversary.value.difficulty[level.value]
})
</script>

<template>
  <div class="flex">
    <div bg-warmgray-200 w-fit h-screen shadow-2xl p="x4 y2" space-y-2>
      <div font="bold">Setup new game</div>
      <LeftBarItemSetupWrap title="Number of board">
        <div font="bold" flex space-x-2 ml-1>
          <div bg="warmgray-600/30" hover="bg-warmgray-600/40" w-7 h-7 relative cursor-pointer v-for="i in 2" :key="i">
            <div absolute-center>{{ i }}</div>
          </div>
        </div>
      </LeftBarItemSetupWrap>
      <LeftBarItemSetupWrap title="Adversary" cursor-pointer>
        <div v-if="adversary !== null" relative>
          <img rounded h10 m="x-auto" :src="`/img/adversary-flag/${adversary}.webp`"
            :alt="`Adversary flag ${adversary}`">
          <div text="xs zinc-300" font="bold" absolute-center>Level {{ level }}</div>
        </div>
        <div v-else>
          <div relative h10 w16 bg="warmgray-600/30" rounded mx-auto>
            <div absolute-center text="xs" font="bold">None</div>
          </div>
        </div>
      </LeftBarItemSetupWrap>
      <LeftBarItemSetupWrap title="Randomize" cursor-pointer>
        <div flex space-x-3>
          <div hover="op90">
            <IconDice w10 h10 mx-auto fill="stone-600" />
            <div text="xs center" font="bold">Boards</div>
          </div>
          <div hover="op90">
            <IconDice mx-auto w10 h10 fill="stone-600" />
            <div text="xs center" font="bold">Spirits</div>
          </div>
          <div hover="op90">
            <IconDice mx-auto w10 h10 fill="stone-600" />
            <div text="xs center" font="bold">Adversary</div>
          </div>
          <div hover="op90">
            <IconDice mx-auto w10 h10 fill="stone-600" />
            <div text="xs center" font="bold">All</div>
          </div>
        </div>
      </LeftBarItemSetupWrap>
      <div text="xs center">Difficulty {{ game_difficulty }}</div>
    </div>
    <div h-screen w-full overflow-y-auto relative>
      <div style="left: 15%; top: 1%;" absolute h="1/2">
        <img h-full src="/img/map/A.webp" alt="Island A">
      </div>
      <div style="top: 38%; left: 2.5%;" h="1/2" rotate-180 absolute>
        <img h-full src="/img/map/B.webp" alt="Island B">
      </div>
    </div>
  </div>
</template>
