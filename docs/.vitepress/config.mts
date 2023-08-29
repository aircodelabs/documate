import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documate",
  description: "Elevate your documatation site with AI chat capabilities.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: {
      level: [ 2, 3 ],
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quickstart', link: '/getting-started/' },
          { text: 'Start with VitePress', link: '/getting-started/vitepress' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
