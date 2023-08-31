import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import HeroPattern from './components/HeroPattern.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HeroPattern),
    })
  }
}
