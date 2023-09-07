In the root of your project, run the following command:

::: code-group

```bash [npm]
npx -p=@documate/documate init --framework vue
```

```bash [yarn]
yarn dlx -p @documate/documate init --framework vue
```

```bash [pnpm]
pnpm --package=@documate/documate dlx documate init --framework vue
```

:::

This command does the following:

- Install `@documate/documate` and `@documate/vue` packages to your project
- Create a `documate.json`

```json
{
  "root": ".",
  "include": [ "**/*.md" ],
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
