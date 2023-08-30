# Get Started with VitePress

There are two ways you can integrate Documate with VitePress. Both are convinient and can be done in a few minutes.

- [Create a new VitePress site using CLI](#quickstart-for-new-project)
- [Add to an existing VitePress site](#mannually-add-to-existing-project)

## Quickstart for new project

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

## Mannually add to existing project

If you already have a VitePress site, you can add Documate to it by following these steps:

### 1. Initialize Documate

In the root of your VitePress project, run the following command:

::: code-group

```bash [npm]
npx -p=@documate/cli documate init
```

```bash [yarn]
yarn add @documate/cli @documate/vue
```

```bash [pnpm]
pnpm add @documate/cli @documate/vue
```

:::

This command does the following:

- Install `@documate/cli` and `@documate/vue` packages to your project
- Create a `documate.json`

```json
{
  "include": [ "./**/*.md" ],
  "backend": ""
}
```

- Add a script to your `package.json`

```json
{
  "scripts": {
    ...
    "documate:upload": "documate upload"
  }
}
```

### 2. Add Documate UI to your site

VitePress allows you to customize the project by [extending the default theme](https://vitepress.dev/guide/extending-default-theme). For adding Documate UI, follow the steps below:

#### 2.1. Add `@documate/vue` to the Layout

In the `.vitepress/theme/index.js` file (You need to create one if it doesn't exist), add the following code:

```js{4,8-10}
// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Documate from '@documate/vue'

export default {
  ...DefaultTheme,
  Layout: h(DefaultTheme.Layout, null, {
    'nav-bar-content-before': () => h(Documate)
  })
}
```

#### 2.2. Customize CSS to match your style

The default style of Documate UI can be customized by overriding the CSS variables.

In VitePress, this can be done by creating a `custom.css` file in the `.vitepress/theme` folder, and import it in the `index.js` file:

```js{5}
// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Documate from '@documate/vue'
import './custom.css'

...
```

```css
/* .vitepress/theme/custom.css */
:root {
  --dm-color-brand: var(--vp-c-brand-1);
}
```

See [default CSS variables](/) for the full list.

## Connect to Backend

Now you are all set with the frontend. The last step is to connect it to the backend.

::: tip Prerequisite
Before continue, please make sure you have built and deployed the backend. Follow [Build the Backend](/getting-started/backend) guide if you haven't done so. It only takes 5 minutes.
:::

### 1. Add the backend URL to `documate.json`

Enter your backend App in the [AirCode dashboard](https://aircode.io/dashboard), and find the backend URL. It's located under any function's name.

![Get backend url](./screenshot-for-get-backend-url.png)

Then add it to the `documate.json` file:

```json{3}
{
  "include": [ "./**/*.md" ],
  "backend": "https://test123.us.aircode.run"
}
```

Remember to replace `https://test123.us.aircode.run` with your own one. And you should only keep the domain without path. Documate will automatically find the corresponding function to invoke.

### 2. Add the ask endpoint to component

Find the `ask` endpoint (Which is the URL for `ask.js`), and click to copy it.

![Copy ask endpoint](./screenshot-for-copy-ask-endpoint.png)

Modify the `.vitepress/theme/index.js` file pass the endpoint to the `Documate` component as props.

```js{11-14}
// .vitepress/theme/index.js
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Documate from '@documate/vue'

export default {
  ...DefaultTheme,
  Layout: h(DefaultTheme.Layout, null, {
    'nav-bar-content-before': () => h(
      Documate,
      {
        // Replace the URL with your own one
        endpoint: 'https://test123.us.aircode.run/ask',
      },
    ),
  }),
}
```

## Run the project

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
