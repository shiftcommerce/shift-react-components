[ ![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
# Shift Style Guide
## React

Our eslint extends [JS Standard style](https://standardjs.com/). 

## Table of Contents

  1. [Variable Names](#variable-names)
  1. [File Names](#file-names)
  1. [Code Indentation](#code-indentation)
  1. [Curly Spacing](#curly-spacing)
  1. [Eslint config](#eslint-config)
  1. [SCSS](#scss)

### Variable Names

We use camelCase for identifier names (variables and functions).

```jsx
const firstName = "John"
```

### File Names

We use snake case for file names

```example-file.js```

### Code Indentation

We always use 2 spaces for indentation.


### Curly Spacing

We enforce consistent spacing inside curly braces.

```jsx
// object
const obj = { foo: "bar" }

// nested object
const obj = { foo: { zoo: "bar" } }

// destructuring
const { x, y } = y

// import/export declarations
import { foo } from "bar"
export { foo }
```

### Eslint config

```jsx
{
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": true
  },
  "env": {
    "jest": true
  },
  "globals": {
    "shallow": true,
    "render": true,
    "mount": true,
    "page": true,
    "browser": true,
    "context": true,
    "jestPuppeteer": true
  },
  "plugins": ["react"],
  "extends": "standard",
  "rules": {
    "camelcase": [
      "error", {
        "properties": "never",
        "ignoreDestructuring": true
    }],
    "react/jsx-curly-spacing": ["error", {
      "when": "always",
      "attributes": false,
      "children": {
        "when": "always"
      }
    }],
    "object-curly-spacing": ["error", "always"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "padded-blocks": ["error",
      {
        "blocks": "never",
        "classes": "never",
        "switches": "never"
      }
    ]
  }
}
```

## SCSS

### String Concatenation for Classes
[CSS Wizardry | Code smells in css](https://csswizardry.com/2017/02/code-smells-in-css-revisited/)

We follow this approach to make it easier for the front-end devs to search for a selector in the codebase.

```jsx

.foo {
  color: red;
}

.foo-bar {
  font-weight: bold;
}

```

We still indent if it is a child of a selector e.g:

```jsx
.foo {
  color: red;
}

  .foo-bar {
    font-weight: bold;
  }
```

