<script setup lang="ts">
import { cityStats } from '~~/composables/game'
import { useObjectInteractive } from '~~/composables/object'
const city = ref<HTMLElement>()
const count = ref(2)
const damage = ref(0)
const { health } = toRefs(cityStats)
const { style } = useObjectInteractive(city, count, damage, health)
const rotate = computed(() => damage.value * 90)
</script>

<template>
  <div :style="style" ref="city" v-if="count > 0" absolute p1.5 invader-bg obj-shadow>
    <IconCity :style="`transform: rotate(${rotate}deg)`" w-8 fill="white" />
    <div v-if="count > 1" text="2xl" font="bold" absolute-center obj-text-count select-none>x{{ count }}</div>
  </div>
</template>
