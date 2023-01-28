<script setup>
import { game } from '~~/composables/game'
import {
  fearLevel1Remain,
  fearLevel2Remain,
  fearLevel3Remain,
} from '~~/composables/card'
const { terrorLevel, earnedFear, maxFear } = toRefs(game)
const terrorLevelText = computed(() => {
  if (terrorLevel.value === 1)
    return 'I'
  if (terrorLevel.value === 2)
    return 'II'
  if (terrorLevel.value === 3)
    return 'III'
})
earnedFear.value = 12
maxFear.value = 12
</script>

<template>
  <div space-y-1>
    <div relative w-fit mx-auto>
      <IconFear w7 h7 fill="zinc-600" />
      <div absolute left="1/2" top="1/3" translate="x--1/2" text="xs" font="bold">{{ terrorLevelText }}</div>
    </div>
    <div flex justify-center space-x-2 ml2>
      <div v-if="terrorLevel < 2" relative>
        <IconExplorer h6 />
        <IconXMark absolute-center fill-red-600 w7 />
      </div>
      <div v-if="terrorLevel < 3" relative>
        <IconTown h6 />
        <IconXMark absolute-center fill-red-600 w7 />
      </div>
      <div relative>
        <IconCity h6 />
        <IconXMark absolute-center fill-red-600 w7 />
      </div>
    </div>
    <div relative cursor-pointer>
      <img h24 mx-auto src="/img/fears/icon.webp" alt="Fear Icon">
      <div absolute left="1/2" top="1/2" translate="x--1/2" text="xs" font="bold">
        {{ earnedFear }}/{{ maxFear }}
      </div>
    </div>
    <div>
      <div flex justify-center>
        <template v-for="index in fearLevel1Remain" :key="`fear1-${index}`">
          <FearCardRemain w5 />
        </template>
      </div>
      <div flex justify-center translate="y--1/3">
        <template v-for="index in fearLevel2Remain" :key="`fear1-${index}`">
          <FearCardRemain w5 />
        </template>
      </div>
      <div flex justify-center translate="y--2/3">
        <template v-for="index in fearLevel3Remain" :key="`fear1-${index}`">
          <FearCardRemain w5 />
        </template>
      </div>
    </div>
  </div>
</template>
