<script setup>
defineProps({
  text: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div bg="neutral-400/20" relative rounded p="y2">
    <div style="-webkit-transform-origin: 50%  51%;" text="xs"
      class="-rotate-90 translate-z-0 absolute top-1/2 -translate-y-1/2 uppercase" :class="align">
      {{ text }}
    </div>
    <div space-y-1 m="l2">
      <slot />
    </div>
  </div>
</template>
