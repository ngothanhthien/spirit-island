<script setup lang="ts">
import { color } from '~~/composables/player'
// fill-player-yellow
</script>

<template>
  <div absolute>
    <IconIsolate w32 op="80" :class="`fill-player-${color}`" />
  </div>
</template>
