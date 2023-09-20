# Get started with Docsify

Documate can work with Docsify out of the box. 

## Initialize Documate

To prepare your project for Documate, run the following command:

::: code-group

```bash [npm]
npm install @documate/documate --save-dev
```

```bash [yarn]
yarn add @documate/documate --dev
```

```bash [pnpm]
pnpm install @documate/documate --save-dev
```

:::

Ceate a `documate.json` file:

```json
{
  "root": ".",
  "include": [ "**/*.md" ],
  "backend": ""
}
```

The `root` should be the directory where your markdown files are located.

Then add a script in your `package.json` file:

```json{4}
{
  "scripts": {
    ...
    "documate:upload": "documate upload"
  }
}
```

## Add Documate UI to Your Project

Documate offers a vanilla JS component `@documate/vanilla` that you can seamlessly integrate into your Docsify project.

### Import from CDN

```html
<script src="https://unpkg.com/@documate/vanilla"></script>
```

### Import from Package Manager

::: code-group

```bash [npm]
npm install @documate/vanilla
```

```bash [yarn]
yarn add @documate/vanilla
```

```bash [pnpm]
pnpm install @documate/vanilla
```

:::

Then import it in your `index.js` file:

```js
import '@documate/vanilla'
```

### Add the Component

`@documate/vanilla` will automatically search for DOM elements with the ID ask-ai on the page, so you don't need to perform any manual initialization. The only thing you need to do is provide a button with the ID ask-ai on the page.

```html
<button id="ask-ai" data-endpoint=""></button>
```

## Connect to Backend

<!--@include: ../_partials/_connect-backend.md-->

Modify the Documate UI you added before to pass the endpoint to the `data-endpoint` attribute.

```html
<!-- Replace the URL with your own one -->
<button id="ask-ai" data-endpoint="https://test123.us.aircode.run/ask">Ask AI</button>
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

After the command finishes, you can run the local server and find an __Ask AI__ button in the top nav.

```bash
docsify serve docs
```
