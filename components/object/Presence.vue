<script setup lang="ts">
import { color } from '~~/composables/player'
// bg-player-yellow
defineProps({
  count: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div absolute>
    <div w10 h10 rounded-full obj-shadow :class="`bg-player-${color}`"></div>
    <div v-if="count > 1" absolute-center text="stone-900" font="bold" select-none>x{{ count }}</div>
  </div>
</template>
