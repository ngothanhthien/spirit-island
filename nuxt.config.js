export default {
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
  ],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: {
      'absolute-center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      'bg-sidebar': 'bg-warmgray-500',
      'obj-text-count': 'font-bold text-orange-800 text-lg',
      'invader-bg': 'rounded bg-zinc-800',
      'obj-shadow': 'shadow-md shadow-stone-900 drop-shadow-lg',
      'bg-player-yellow': 'bg-amber-500',
      'fill-player-yellow': 'fill-amber-500',
    },
    rules: [
    ],
  },
}
