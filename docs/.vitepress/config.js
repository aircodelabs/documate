import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Documate',
  description: 'Elevate your documatation site with AI chat capabilities.',
  head: [
    [ 'link', { rel: 'icon', href: '/favicon.png' } ],
    [ 'meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' } ],
    [ 'meta', { name: 'twitter:card', content: 'summary_large_image' } ],
    [ 'meta', { name: 'og:image', content: '/og-image-0901.png' } ],
    [ 'meta', { name: 'twitter:image', content: '/og-image-0901.png' } ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { 
      light: '/site-logo-light.svg',
      dark: '/site-logo-dark.svg',
      height: 24,
    },

    siteTitle: false,

    outline: {
      level: [ 2, 3 ],
    },

    nav: [
      { text: 'Quickstart', link: '/getting-started/' },
      { text: 'Reference', link: '/reference/documate-config' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quickstart', link: '/getting-started/' },
          { text: 'Build the Backend', link: '/getting-started/backend' },
          { text: 'Start with VitePress', link: '/getting-started/vitepress' },
          { text: 'General Vue Project', link: '/getting-started/general-vue' }
        ]
      },
      {
        text: 'Reference',
        items: [
          { text: 'documate.json', link: '/reference/documate-config' },
          { text: 'CLI', link: '/reference/cli' },
          { text: '@documate/vue', link: '/reference/documate-vue' },
          // { text: 'Backend APIs', link: '/reference/backend-apis' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aircodelabs/documate' }
    ]
  }
})
