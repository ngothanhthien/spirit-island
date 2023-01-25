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
  <div h="1/6" py1>
    <div h-full relative b="l-20 t-0 b-0 r-0 solid neutral-400/20">
      <div
        style="-webkit-transform-origin: 50%  51%;" text="xs"
        class="-rotate-90 translate-z-0 absolute top-1/2 -translate-y-1/2 uppercase" :class="align"
      >
        {{ text }}
      </div>
      <div h="full" rounded overflow-hidden>
        <slot />
      </div>
    </div>
  </div>
</template>
