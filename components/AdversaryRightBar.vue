<script setup>
import { options } from '~~/composables/option'
const { adversary, level } = toRefs(options)
adversary.value = 'england'
level.value = 6
</script>

<template>
  <div v-if="adversary !== null && level !== null" ml-5 h-24 p="x4 t4 b8">
    <div relative>
      <img h-full :src="`/img/adversary-flag/${adversary}.webp`" :alt="`Adversary flag ${adversary}`">
      <div absolute top="1/2" translate="y--1/2" w-full text="sm center zinc-400" font="bold">Level {{ level }}</div>
    </div>
    <slot />
  </div>
</template>
