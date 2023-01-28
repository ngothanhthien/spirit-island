<script setup lang="ts">
defineProps({
  count: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div absolute p1.5 bg="amber-500" rounded-full obj-shadow>
    <IconDahan w6 fill="amber-900" />
    <div v-if="count > 1" absolute-center text="white" select-none>x{{ count }}</div>
  </div>
</template>
