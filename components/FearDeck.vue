<script setup>
import { earnedFear } from '~~/composables/card'
defineEmits(['deckClick'])
</script>

<template>
  <div h-full cursor-pointer relative>
    <img @click="$emit('deckClick')" block h-full src="/img/card-back/fear.webp" alt="Deck fear">
    <div z="10" text="3xl gray-400" font="bold" op="60" absolute-center>
      {{ earnedFear }}
    </div>
  </div>
</template>
