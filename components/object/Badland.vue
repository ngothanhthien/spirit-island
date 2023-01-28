<script lang="ts" setup>
defineProps({
  count: {
    type: Number,
    default: 1,
  },
})
</script>

<template>
  <div absolute w-8 h-8 p1 bg="orange-600" rounded-full obj-shadow>
    <IconBadland w-full fill="stone-900" />
    <div v-if="count > 1" absolute-center text="white" select-none>x{{ count }}</div>
  </div>
</template>
