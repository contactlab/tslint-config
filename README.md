:warning: **This project was superseeded by [eslint-config-contactlab](https://github.com/contactlab/eslint-config-contactlab) v4.x**

---

# @contactlab/tslint-config

Contactlab TSLint extensible and sharable configuration.

## Usage

Install the configuration as a npm package:

```sh
$ npm install --save-dev @contactlab/tslint-config

# --- OR ---

$ yarn add --dev @contactlab/tslint-config
```

and then add it as extension in your `tslint.json` file:

```json
{
  "extends": ["@contactlab/tslint-config"]
}
```

See the [TSlint config docs](https://palantir.github.io/tslint/usage/configuration/) for more information.

## Rules

The configuration already extends the default `tslint:recommended` and `tslint-eslint-rules` ([ref](https://github.com/buzinas/tslint-eslint-rules)) rules.

Package specific rules can be found in `./rules.json` file.
