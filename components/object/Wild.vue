<script lang="ts" setup>
defineProps({
  count: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div absolute w-8 h-8 p1 bg="green-200" rounded-full obj-shadow>
    <IconWild absolute-center w-6 fill="stone-900" />
    <div v-if="count > 1" absolute-center text="white" font="bold" select-none>x{{ count }}</div>
  </div>
</template>
