<h3 align="center">
  @documate/react
</h3>

<p align="center">
  A fully accessible AI Search component for React, designed to integrate
  beautifully with Documate.
</p>

## Usage

```sh
npm install @documate/react
```

```jsx
import '@documate/react/dist/style.css'
import { Documate } from '@documate/react'

export default () => {
   return (<Documate endpoint='https://8c7b1be9gi.us.aircode.run/ask' predefinedQuestions={[
      'What is SpriteJS?',
      'How can I use SpriteJS to draw a circle?',
      'Can SpriteJS render 3D Objects?'
   ]}/>)
}
```

## Custom Button

```jsx
import React, { useState } from 'react'
import { Dialog } from '../src/components/Documate'
import '@documate/react/dist/style.css'

export const Documate = ({
  ...props
}) => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      <button {...props} onClick={() => setOpen(true)}>Click me to Ask</button>
      <Dialog open={isOpen} endpoint='https://8c7b1be9gi.us.aircode.run/ask' onClose={() => setOpen(false)}/>
    </>
  );
}
```

## Development

```bash
npm run dev
```

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
