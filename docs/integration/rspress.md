# Get Started with Rspress

There are two ways you can integrate Documate with [Rspress](https://rspress.dev). Both are convinient and can be done in a few minutes.

- [Create a new Rspress site using CLI](#quickstart-for-new-project)
- [Add to an existing Rspress site](#mannually-add-to-existing-project)

## Quickstart for New Project

To create a new Rspress site with Documate, use the following command:

:::tabs key:pm

== npm
```bash
npm create documate@latest --template rspress
```

== yarn
```bash
yarn create documate --template rspress
```

== pnpm
```bash
pnpm create documate --template rspress
```

:::

Then follow the prompts.

After the project is created, please follow [the instructions to connect it to a backend](#connect-to-backend).

## Mannually Add to Existing Project

If you already have a Rspress site, you can add Documate to it by following these steps:

### 1. Initialize Documate

<!--@include: ../_partials/_initialize-react.md-->

### 2. Add Documate UI to Your Project

Rspress allows you to customize the project by [extending the default theme](https://rspress.dev/guide/advanced/custom-theme.html#extensions-based-on-the-default-theme). In the `theme/index.tsx` file (You need to create one if it doesn't exist), add the following code:

```js
// theme/index.tsx
import Theme from 'rspress/theme'
import { NoSSR } from 'rspress/runtime'
import { Documate } from '@documate/react'
import '@documate/react/dist/style.css'

const Layout = () => (
  <Theme.Layout
    afterNavTitle={
      <NoSSR>
        <Documate endpoint="" />
      </NoSSR>
    }
  />
)

export default {
  ...Theme,
  Layout,
}

export * from 'rspress/theme'
```

## Connect to Backend

<!--@include: ../_partials/_connect-backend.md-->

Then you can pass the `endpoint` prop to the `Documate` component.

```js
<Documate endpoint="YOUR_DOMAIN/ask" />
```

## Run the Project

Now you're all set with Documate. Run the following command to upload your content to backend and generate the knowledge base:

:::tabs key:pm

== npm
```bash
npm run documate:upload
```

== yarn
```bash
yarn documate:upload
```

== pnpm
```bash
pnpm documate:upload
```

:::

After the command finishes, you can start the dev server and find the **Ask AI** button in the top left corner.

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
