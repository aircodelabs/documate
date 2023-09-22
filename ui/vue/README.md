<h3 align="center">
  @documate/vue
</h3>

<p align="center">
  A fully accessible AI Search component for Vue 3, designed to integrate
  beautifully with Documate.
</p>

## Usage

```sh
npm install @documate/vue
```

```vue
<script setup>
import Documate from '@documate/vue'
import '@documate/vue/dist/style.css'
</script>

<template>
  <div>
    <!-- Replace the URL with your own one -->
    <Documate endpoint="https://test123.us.aircode.run/ask" />
  </div>
</template>
```

Other Props check here [component-props](https://documate.site/reference/documate-vue#component-props)

## Custom Button

```vue
<script setup>
import {Dialog} from '@documate/vue'
import '@documate/vue/dist/style.css'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
<button type="button" @click="isOpen = true">Click me to Ask AI</button>
<Dialog  endpoint="https://xqtb17uycg.us.aircode.run/ask",
  :predefinedQuestions=[
    'What is Documate?',
  ],
  :open = "isOpen"
  @close="isOpen = false"></Dialog>
</template>
```

## Documentation

For full documentation, visit [documate-vue](https://documate.site/reference/documate-vue.html).

## Community

For help, voice ideas, or discussion about best practices:

[Discuss Documate on GitHub Discussions](https://github/aircodelabs/documate/discussions)

To chat with other community members:

[Join the Documate Discord](https://discord.gg/YhypQrZBu5)
