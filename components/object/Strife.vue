<script lang="ts" setup>
defineProps({
  count: {
    type: Number,
    default: 2,
  },
})
</script>

<template>
  <div absolute w-8 h-8 p1 bg="blue-400" rounded-full obj-shadow>
    <IconStrife w-6 absolute-center fill="stone-900" />
    <div v-if="count > 1" absolute-center text="white 2xl" font="bold" select-none>
      {{ count }}
    </div>
  </div>
</template>
