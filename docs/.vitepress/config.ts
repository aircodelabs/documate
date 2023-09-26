import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Documate',
  description:
    'Seamlessly embed AI chat into your doc site. Documate is fully open-source, controllable, and customizable.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'meta',
      {
        name: 'robots',
        content:
          'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'og:image', content: '/og-image-0916.png' }],
    ['meta', { name: 'twitter:image', content: '/og-image-0916.png' }],
  ],
  cleanUrls: true,
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFeature\.vue$/,
          replacement: fileURLToPath(
            new URL('./theme/components/DocuFeature.vue', import.meta.url)
          ),
        },
      ],
    },
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/site-logo-light.svg',
      dark: '/site-logo-dark.svg',
      height: 24,
    },

    siteTitle: false,

    outline: {
      level: [2, 3],
    },

    nav: [
      { text: 'Quickstart', link: '/getting-started/' },
      { text: 'Reference', link: '/reference/documate-config' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Quickstart', link: '/getting-started/' },
          { text: 'Build the Backend', link: '/getting-started/backend' },
          { text: 'Start with VitePress', link: '/integration/vitepress' },
          { text: 'Start with Docusaurus', link: '/integration/docusaurus' },
          { text: 'Start with Docsify', link: '/integration/docsify' },
          { text: 'Start with Rspress', link: '/integration/rspress' },
          { text: 'General Vue Project', link: '/getting-started/general-vue' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'documate.json', link: '/reference/documate-config' },
          { text: 'CLI', link: '/reference/cli' },
          { text: '@documate/vue', link: '/reference/documate-vue' },
          // { text: 'Backend APIs', link: '/reference/backend-apis' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aircodelabs/documate' },
      { icon: 'discord', link: 'https://discord.gg/YhypQrZBu5' },
    ],

    footer: {
      message:
        'Made with ❤️ by <a href="https://aircode.io" target="_blank">AirCode</a>',
      copyright: '© 2023 AirCode, Inc. All rights reserved.',
    },
  },
})
