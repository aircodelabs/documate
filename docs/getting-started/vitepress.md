# Get Started with VitePress

There are two ways you can integrate Documate with VitePress. Both are convinient and can be done in a few minutes.

- [Create a new VitePress site using CLI](#quickstart-for-new-project)
- [Add to an existing VitePress site](#mannually-add-to-existing-project)

## Quickstart for New Project

To create a new VitePress site with Documate, use the following command:

::: code-group

```bash [npm]
npm create documate@latest --template vitepress
```

```bash [yarn]
yarn create documate --template vitepress
```

```bash [pnpm]
pnpm create documate --template vitepress
```

:::

Then follow the prompts.

After the project is created, please follow [the instructions to connect it to a backend](#connect-to-backend).

## Mannually Add to Existing Project

If you already have a VitePress site, you can add Documate to it by following these steps:

### 1. Initialize Documate

<!--@include: ./_partials/_initialize-vue.md-->

### 2. Add Documate UI to Your Project

VitePress allows you to customize the project by [extending the default theme](https://vitepress.dev/guide/extending-default-theme). In the `.vitepress/theme/index.js` file (You need to create one if it doesn't exist), add the following code:

```js
// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'

export default {
  ...DefaultTheme,
  Layout: h(DefaultTheme.Layout, null, {
    'nav-bar-content-before': () => h(Documate, {
      endpoint: '',
    }),
  }),
}
```

## Connect to Backend

<!--@include: ./_partials/_connect-backend.md-->

Modify the `.vitepress/theme/index.js` file to pass the endpoint to the `Documate` component as props.

```js{11-12}
// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'

export default {
  ...DefaultTheme,
  Layout: h(DefaultTheme.Layout, null, {
    'nav-bar-content-before': () => h(Documate, {
        // Replace the URL with your own one
        endpoint: 'https://test123.us.aircode.run/ask',
      },
    ),
  }),
}
```

## Run the Project

Now you're all set with Documate. Run the following command to upload your content to backend and generate the knowledge base:

::: code-group

```bash [npm]
npm run documate:upload
```

```bash [yarn]
yarn documate:upload
```

```bash [pnpm]
pnpm documate:upload
```

:::

After the command finishes, you can start the dev server and find the __Ask AI__ button in the top left corner.

::: code-group

```bash [npm]
npm run docs:dev
```

```bash [yarn]
yarn docs:dev
```

```bash [pnpm]
pnpm docs:dev
```

:::
