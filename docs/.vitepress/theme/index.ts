import { h, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useRouter } from 'vitepress'
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'
import mixpanel from 'mixpanel-browser'

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
        predefinedQuestions: [
          'What is Documate?',
          'How to integrate Documate with VitePress?',
          'How to integrate Documate with Docsify?',
        ],
      }),
    })
  },
  setup() {
    onMounted(() => {
      mixpanel.init(
        '71137b4efb8f425b8ce4addea9900216',
        {
          debug: import.meta.env.DEV,
          persistence: 'localStorage',
        },
      )
      mixpanel.register({
        'Broswer Language': navigator.language,
        'Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
      })
      mixpanel.track_pageview()
    })

    useRouter().onAfterRouteChanged = () => {
      mixpanel.track_pageview()
    }
  },
}
