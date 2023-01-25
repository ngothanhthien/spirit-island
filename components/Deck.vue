<script setup>
defineProps({
  deck: {
    type: String,
    required: true,
  },
})
defineEmits(['deckClick'])
</script>

<template>
  <div h-full :title="deck" cursor-pointer>
    <img @click="$emit('deckClick')" block h-full :src="`./img/card-back/${deck}.webp`" :alt="`Deck ${deck}`">
  </div>
</template>
