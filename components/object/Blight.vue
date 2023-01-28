<script setup lang="ts">
const count = ref(1)
</script>

<template>
  <div absolute>
    <IconBlight w9 fill="zinc-800" />
    <div v-if="count > 1" absolute-center text="white" select-none>x{{ count }}</div>
  </div>
</template>
