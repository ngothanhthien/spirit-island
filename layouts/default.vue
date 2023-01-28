<script setup lang="ts">
const preventContextMenu = (e: Event) => {
  e.preventDefault()
}
</script>

<template>
  <div font-mono text="stone-700" @contextmenu="preventContextMenu">
    <slot />
  </div>
</template>
