<script lang="ts" setup>
import { useSound } from '~~/composables/sounds'
const { playPopSound } = useSound()
</script>

<template>
  <button @click="playPopSound">
    Play a sound
  </button>
  <div>
    <ObjectCity />
  </div>
</template>
