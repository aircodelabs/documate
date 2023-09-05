import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'

import './tailwind.postcss'
import './custom.css'
import HeroPattern from './components/HeroPattern.vue'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HeroPattern),
    })
  }
}
