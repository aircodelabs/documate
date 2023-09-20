# Documate Vanilla

Build [Documate](https://github.com/aircodelabs/documate) UI using native JavaScript without any framework dependencies.

`@documate/vanilla` will automatically search for DOM elements with the ID `ask-ai` on the page, so you don't need to perform any manual initialization. The only thing you need to do is provide a button with the ID `ask-ai` on the page.


## Usage

### Import from CDN:

```html
<button id="ask-ai" data-endpoint="https://xxxxxxxx.us.aircode.run/ask"></button>
...
<script src="https://unpkg.com/@documate/vanilla"></script>
```

### Import from Node:

```bash
npm install @documate/vanilla
```

```js
import 'documate-vanilla';
```