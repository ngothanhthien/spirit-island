<script setup>
defineProps({
  current: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div h-full>
    <img :src="`/img/invaders/${current}.webp`" h-full w-full alt="Invader card">
  </div>
</template>
