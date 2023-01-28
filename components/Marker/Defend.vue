<script setup lang="ts">
import { color } from '~~/composables/player'
defineProps({
  defend: {
    type: Number,
    default: 21,
  },
})
// fill-player-yellow
</script>

<template>
  <div absolute>
    <IconDefend w14 op="80" :class="`fill-player-${color}`" />
    <div absolute-center text="white 2xl" font="bold" select-none>
      {{ defend }}
    </div>
  </div>
</template>
