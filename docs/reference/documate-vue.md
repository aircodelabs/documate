# `@documate/vue`

`@documate/vue` is a Vue component for integrating Documate into your Vue project. It provides a button to open the chat model and display the answers from your AI backend.

## Installation

::: code-group

```bash [npm]
npm i @documate/vue
```

```bash [yarn]
yarn add @documate/vue
```

```bash [pnpm]
pnpm i @documate/vue
```

:::

## Usage

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

## Component Props

### endpoint

- __Required__
- Type: `string`

The URL of your `ask.js` function in your backend. Check [Build the Backend Guide](/getting-started/backend) for more details.

### buttonLabel

- Type: `string`
- Default: `'Ask AI'`

The label of the button to open the chat model.

### placeholder

- Type: `string`
- Default: `'Ask your docs a question...'`

The placeholder of the input field.

### predefinedQuestions

- Type: `string[]`
- Default: `[]`

A list of predefined questions to show in the chat model.
