<script lang="ts" setup>
defineProps({
  count: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div absolute p1 bg="red-600" rounded-full obj-shadow>
    <IconBeast w6 fill="stone-900" />
    <div v-if="count > 1" absolute-center text="white" select-none>x{{ count }}</div>
  </div>
</template>
