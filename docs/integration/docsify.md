# Integration to Docsify

It's very easy to integrate Documate into Docsify. You just need to follow the [Native JavaScript Startup](/getting-started/vanilla-js) guide to import js and provide a button with the ID `ask-ai` in your doc's `index.html` page.

```html
<button id="ask-ai" data-endpoint="https://xxxxxxxx.us.aircode.run/ask"></button>
...
<script src="https://unpkg.com/@documate/ui"></script>
```

You can place the button anywhere you like, but the most convenient way is to [enable the NavBar](https://docsify.js.org/#/configuration?id=loadnavbar) and then place the button on the NavBar.

There is an [online Example](https://spritejs.vercel.app/#/).

<img src="https://aircode-yvo.b-cdn.net/resource/14-y607yzcv44.jpg" width="400">

<img src="https://aircode-yvo.b-cdn.net/resource/1695090094690-cbh1nh85p3.jpg" width="400">
