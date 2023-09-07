# Documate CLI Reference

## `create-documate`

`create-documate` can let you create a new Documate project without installing CLI.

### Usage

::: code-group

```bash [npm]
npm create documate@latest
```

```bash [yarn]
yarn create documate
```

```bash [pnpm]
pnpm create documate
```

:::

### Options

__--template__

Specify the template to use. For eaxample, to scaffold a VitePress project:

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

## Installing `@documate/documate`

The `@documate/documate` package will add a `documate` command for you. You can either install it globally or per project.

### Install Globally

A global install of `@documate/documate` will allow you to run the `documate` command in any project.

::: code-group

```bash [npm]
npm install @documate/documate --global
```

```bash [yarn]
yarn global add @documate/documate
```

```bash [pnpm]
pnpm install @documate/documate --global
```

:::

### Install Per Project

You can pin the version of `@documate/documate` to your project by installing it as a dev dependency. This is useful if you are collaborating with other developers.

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

## `documate init`

Initialize your project with Documate. This command will add the neccessary packages and scripts to your project.

### Usage

```bash
documate init
```

### Options

__--framework__

Specify the framework of your project. Can be either `vue` or `react`.

```bash
documate init --framework vue
```

## `documate upload`

Upload your content to backend and generate the knowledge base.

### Usage

```bash
documate upload
``` 

### Options

The `documate upload` command will read the `documate.json` file in your project root. You can override any of the options in the file by passing the options as command line arguments.

```bash
documate upload --exclude "**/README.md"
```

See [`documate.json`](/reference/documate-config.md) for full list of options.
