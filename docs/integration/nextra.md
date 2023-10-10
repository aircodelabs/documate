# Get Started with Nextra

There are two ways you can integrate Documate with Nextra. Both are convinient and can be done in a few minutes.

- [Create a new Nextra site using CLI](#quickstart-for-new-project)
- [Add to an existing Nextra site](#mannually-add-to-existing-project)

## Quickstart for New Project

To create a new Nextra site with Documate, use the following command:

:::tabs key:pm
== npm
```bash
npm create documate@latest --template nextra
```
== yarn
```bash
yarn create documate@latest --template nextra
```
== pnpm
```bash
pnpm create documate@latest --template nextra
```
:::

Then follow the prompts.

After the project is created, please follow [the instructions to connect it to a backend](#connect-to-backend).

## Mannually Add to Existing Project

If you already have a Nextra site, you can add Documate to it by following these steps:

### 1. Initialize Documate

<!--@include: ../_partials/_initialize-react.md-->

### 2. Add Documate UI to Your Project

Nextra allows you to customize the theme by editing the `theme.config.tsx` file. Add the following code to the `theme.config.tsx` file:

```tsx{1-2,6-8}
import { Documate } from '@documate/react'
import '@documate/react/dist/style.css'

const config: DocsThemeConfig = {
  ...
  navbar: {
    extraContent: <Documate endpoint="" />,
  },
  ...
}

export default config
```

## Connect to Backend

<!--@include: ../_partials/_connect-backend.md-->

Modify the `theme.config.tsx` file to pass the endpoint to the `Documate` component as props.

```tsx{8}
import { Documate } from '@documate/react'
import '@documate/react/dist/style.css'

const config: DocsThemeConfig = {
  ...
  navbar: {
    // Replace the URL with your own one
    extraContent: <Documate endpoint="https://test123.us.aircode.run/ask" />,
  },
  ...
}

export default config
```

## Run the Project

<!--@include: ../_partials/_run-project-upload.md-->

After the command finishes, you can start the dev server and find the __Ask AI__ button at the top right corner.

:::tabs key:pm
== npm
```bash
npm run dev
```
== yarn
```bash
yarn dev
```
== pnpm
```bash
pnpm dev
```
:::
