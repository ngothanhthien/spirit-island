<script setup>
import { drawMinor, minor, setupMinor } from '~~/composables/card'
setupMinor()
</script>

<template>
  <div>
    <Deck deck="minor" @deck-click="drawMinor" />
  </div>
</template>
