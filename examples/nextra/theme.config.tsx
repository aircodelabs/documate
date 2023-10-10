import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Documate } from '@documate/react'
import '@documate/react/dist/style.css'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/aircodelabs/documate',
  },
  chat: {
    link: 'https://discord.gg/YhypQrZBu5',
  },
  navbar: {
    extraContent: <Documate endpoint="" />,
  },
  docsRepositoryBase: 'https://github.com/AirCodeLabs/documate/tree/main/examples/nextra',
  footer: {
    text: 'Documate Nextra Starter',
  },
}

export default config
