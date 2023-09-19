# Get Started with Native JavaScript

Documate supports native JavaScript pages through the `@documate/ui` package.

## Initialize Documate

`@documate/ui` will automatically search for DOM elements with the ID `ask-ai` on the page, so you don't need to perform any manual initialization. The only thing you need to do is provide a button with the ID `ask-ai` on the page.

### Import from CDN:

```html
<button id="ask-ai" data-endpoint="https://xxxxxxxx.us.aircode.run/ask"></button>
...
<script src="https://unpkg.com/@documate/ui"></script>
```

### Import from Node:

```bash
npm install @documate/ui
```

```js
import 'documate-ui';
```

## Prepare Data

To prepare your data you can manually install `@documate/documate` in your project's directory.

```bash
npm i @documate/documate
```

Create a `documate.json` file:

```json
{
  "root": "docs",
  "include": [ "**/*.md" ],
  "backend": "https://xxxxxxxx.us.aircode.run/upload"
}
```

Add npm scripts in your `package.json` file:

```json

  "scripts": {
    ...
    "documate:upload": "documate upload",
    ...
  },
```

And run `npm run documate:upload` to post your data to the backend endpoint.