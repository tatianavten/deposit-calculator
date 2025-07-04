# DepositCalculator

Simple deposit calculator app.

✨Created using [Nx workspace](https://nx.dev) ✨

✨[Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) ✨.

## How to run tasks

To run the dev server for the deposit calculator app, use:

```sh
npx nx serve calculator-ui
```

To run unit tests:

```sh
npx nx run @deposit-calculator/calculator-ui:test
```

To create a production bundle:

```sh
npx nx build calculator-ui
```

To see all available targets to run for a project, run:

```sh
npx nx show project calculator-ui
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

### e2e tests

Currently there is only basic set-up done for the e2e, you can run it by:

```sh
npx nx run @deposit-calculator/calculator-ui-e2e:e2e
```

## Calculation library

The calculation library has the calculation method and helpes.

Please refer to [Calculation library README ](libs/calculators/README.md) for building or running tests commands on the calculation method.
