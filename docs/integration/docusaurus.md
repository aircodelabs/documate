# Get Started with Docusaurus

There are two ways you can integrate Documate with Docusaurus. Both are convinient and can be done in a few minutes.

- [Create a new Docusaurus site using CLI](#quickstart-for-new-project)
- [Add to an existing Docusaurus site](#mannually-add-to-existing-project)

## Quickstart for New Project

To create a new Docusaurus site with Documate, use the following command:

:::tabs key:pm
== npm
```bash
npm create documate@latest --template docusaurus
```
== yarn
```bash
yarn create documate@latest --template docusaurus
```
== pnpm
```bash
pnpm create documate@latest --template docusaurus
```
:::

Then follow the prompts.

After the project is created, please follow [the instructions to connect it to a backend](#connect-to-backend).

## Mannually Add to Existing Project

If you already have a Docusaurus site, you can add Documate to it by following these steps:

### 1. Initialize Documate

<!--@include: ../_partials/_initialize-react.md-->

### 2. Add Documate UI to Your Project

Docusaurus allows you to customize the project by [swizzling](https://docusaurus.io/docs/swizzling). Run the following command to add Documate UI to the navbar:

:::tabs key:pm

== npm
```bash
npm run swizzle @docusaurus/theme-classic NavbarItem/ComponentTypes -- --eject
```
== yarn
```bash
yarn run swizzle @docusaurus/theme-classic NavbarItem/ComponentTypes --eject
```
== pnpm
```bash
pnpm run swizzle @docusaurus/theme-classic NavbarItem/ComponentTypes -- --eject
```
:::

This guide assumes that you are using the classic theme. If you are using other themes, you should replace `@docusaurus/theme-classic` with the theme name of yours.

The command will create a `src/theme/NavbarItem/ComponentTypes.js` file. Open it and add the following code:

```js{1-2,14}
import { Documate } from '@documate/react';
import '@documate/react/dist/style.css';

const ComponentTypes = {
  default: DefaultNavbarItem,
  localeDropdown: LocaleDropdownNavbarItem,
  search: SearchNavbarItem,
  dropdown: DropdownNavbarItem,
  html: HtmlNavbarItem,
  doc: DocNavbarItem,
  docSidebar: DocSidebarNavbarItem,
  docsVersion: DocsVersionNavbarItem,
  docsVersionDropdown: DocsVersionDropdownNavbarItem,
  'custom-documate': Documate,
};
```

Then go to the `docusaurus.config.js` file and add Documate UI in the `navbar.items` section:

```js{7-11}
const config = {
  ...
  themeConfig: {
    navbar: {
      items: [
        ...
        {
          type: 'custom-documate',
          position: 'right',
          endpoint: '',
        },
      ],
    },
  },
}
```

## Connect to Backend

<!--@include: ../_partials/_connect-backend.md-->

Modify the `docusaurus.config.js` file to pass the endpoint to the `Documate` component as props.

```js{10-11}
const config = {
  ...
  themeConfig: {
    navbar: {
      items: [
        ...
        {
          type: 'custom-documate',
          position: 'right',
          // Replace the URL with your own one
          endpoint: 'https://test123.us.aircode.run/ask',
        },
      ],
    },
  },
}
```

## Run the Project

<!--@include: ../_partials/_run-project-upload.md-->

After the command finishes, you can start the dev server and find the __Ask AI__ button at the top right corner.

:::tabs key:pm
== npm
```bash
npm start
```
== yarn
```bash
yarn start
```
== pnpm
```bash
pnpm start
```
:::
