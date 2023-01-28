import type { Ref } from 'vue'
import { useSound } from './sounds'
const MOUSE_ENUM = {
  LEFT_CLICK: 0,
  RIGHT_CLICK: 2,
  MIDDLE_CLICK: 1,
}
function mouseEvent(event: MouseEvent, damage: Ref<number>) {
  if (event.button === MOUSE_ENUM.LEFT_CLICK) {
    addDamage(damage)
    return MOUSE_ENUM.LEFT_CLICK
  }
  if (event.button === MOUSE_ENUM.RIGHT_CLICK) {
    removeDamage(damage)
    return MOUSE_ENUM.RIGHT_CLICK
  }
}
function addDamage(damage: Ref<number>) {
  damage.value++
}

function removeDamage(damage: Ref<number>) {
  damage.value = damage.value === 0 ? 0 : damage.value - 1
}
function useObjectInteractive(target: Ref<HTMLElement | undefined>, count: Ref<number>, damage: Ref<number> | undefined, health: Ref<number> | undefined) {
  onMounted(() => {
    target.value?.addEventListener('mousedown', mouseEventHandler)
  })
  onUnmounted(() => {
    target.value?.removeEventListener('mousedown', mouseEventHandler)
  })
  if (damage) {
    const { playPopSound } = useSound()
    watch(damage, (nDmg) => {
      if (nDmg === health?.value) {
        playPopSound()
        count.value--
        damage.value = 0
      }
    })
  }
  function mouseEventHandler(e: MouseEvent) {
    if (damage && e.ctrlKey)
      mouseEvent(e, damage)
  }
  const { style } = useDraggable(target)
  return {
    style,
  }
}
export {
  useObjectInteractive,
}
