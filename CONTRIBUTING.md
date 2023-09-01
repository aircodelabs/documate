# Contributing to Documate

Thanks for your interest in contributing to Documate! Please take a moment to review this document __before submitting a pull request__.

- [Code of Conduct](https://github.com/AirCodeLabs/aircode/blob/main/CODE_OF_CONDUCT.md)
- [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)

## Pull Requests

Before starting work on any significant new features, please create [an issue](https://github/aircodelabs/documate/issues) to first discuss it. If you are making changes to the UI components, make sure to update both the Vue and React versions so that we can ensure feature parity.

- Checkout a topic branch from the relevant branch, and merge back against that branch.
- If adding a new feature, please link to a corresponding issue in the PR description.
- If fixing a bug, please provide a detailed description of the bug in the PR description. Live demo preferred.

## Development Setup

We use [pnpm](https://pnpm.io/) as the package manager. You need to install it before proceeding.

### Installation

After cloning the repo, cd into the corresponding directory and run `pnpm install` to install the dependencies.

```bash
pnpm install
```

### Running Dev Server

You can start the dev server by running the following command:

```bash
pnpm run dev
```
