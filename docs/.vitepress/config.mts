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
          { text: 'Build the Backend', link: '/getting-started/backend' },
          { text: 'Start with VitePress', link: '/getting-started/vitepress' },
          { text: 'General Vue Project', link: '/getting-started/general-vue' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aircodelabs/documate' }
    ]
  }
})
