export function useSound() {
  const popSound = ref<HTMLAudioElement>()
  onMounted(() => {
    popSound.value = new Audio('/sounds/pop.mp3')
  })
  function playPopSound() {
    const sound = popSound.value?.cloneNode(true) as HTMLAudioElement
    void sound.play()
  }
  return {
    playPopSound,
  }
}
