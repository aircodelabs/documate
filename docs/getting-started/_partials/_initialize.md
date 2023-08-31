In the root of your project, run the following command:

::: code-group

```bash [npm]
npx -p=@documate/cli documate init
```

```bash [yarn]
yarn dlx -p @documate/cli documate init
```

```bash [pnpm]
pnpm --package=@documate/cli documate init
```

:::

This command does the following:

- Install `@documate/cli` and `@documate/vue` packages to your project
- Create a `documate.json`

```json
{
  "include": [ "./**/*.md" ],
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
