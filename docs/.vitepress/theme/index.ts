import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'

import './tailwind.postcss'
import './custom.css'
import HeroPattern from './components/HeroPattern.vue'
import HeroVideo from './components/HeroVideo.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HeroPattern),
      'home-hero-image': () => h(HeroVideo),
      'nav-bar-content-before': () => h(Documate, {
        endpoint: 'https://xqtb17uycg.us.aircode.run/ask',
      }),
    })
  }
}
