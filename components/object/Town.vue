<script setup lang="ts">
defineProps({
  count: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div absolute p1.5 invader-bg obj-shadow>
    <IconTown w-6.5 fill="white" />
    <div v-if="count > 1" absolute-center obj-text-count select-none>x{{ count }}</div>
  </div>
</template>
