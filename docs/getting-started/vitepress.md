# Get Started with VitePress

There are two ways you can integrate Documate with VitePress.

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

## Mannually add to existing project

If you already have a VitePress site, you can add Documate to it by following these steps:

### 1. Install Documate

::: code-group

```bash [npm]
npm install @documate/cli @documate/vue
```

```bash [yarn]
yarn add @documate/cli @documate/vue
```

```bash [pnpm]
pnpm add @documate/cli @documate/vue
```

The `@documate/cli` package will add a `documate` command to your project. The `@documate/vue` package contains a Vue component that renders the chat UI.

:::

### 2. Create `documate.json`

In the root of your VitePress project (Which is the parent directory of `.vitepress`), create a `documate.json` file with the following content:

```json
{
  "extends": "vitepress"
}
```

### 3. Add script

In your `package.json`, add the following script:

```json
{
  "scripts": {
    ...
    "docs:upload": "documate upload"
  }
}
```

This `documate upload` command will upload all your markdown files to the backend
