# Config Documate with `documate.json`

The `documate.json` file is where you can define the settings of Documate for your project. It contains the following fields:

[[toc]]

## root

- Type: `String`
- Default: `"."`

The root directory of your content files. By default, it's the current working directory.

## include

- Type: `Array` of pattern `String`
- Default: `[ "**/*.md" ]`

A [glob pattern](https://github.com/isaacs/node-glob#glob-primer) to match files that should be uploaded to the backend. By default, all markdown files in the project will be uploaded.

## exclude

- Type: `Array` of pattern `String`

A [glob pattern](https://github.com/isaacs/node-glob#glob-primer) to match files that should be excluded from the upload.

```json
{
  "exclude": [ "node_modules/**/*", "**/README.md", "**/TODO.md" ]
}
```

## backend

- Type: `String`

The endpoint of the upload API. This should be the URL of `upload.js` function in your AirCode App.
