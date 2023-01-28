<script setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div p="x3 y2" rounded-lg bg="warmgray-300" space-y-1>
    <div font="bold" text="xs">{{ title }}</div>
    <slot />
  </div>
</template>
