// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'
import './custom.css'

export default {
  ...DefaultTheme,
  Layout: h(DefaultTheme.Layout, null, {
    'nav-bar-content-before': () => h(
      Documate,
      {
        endpoint: '',
      },
    )
  })
}