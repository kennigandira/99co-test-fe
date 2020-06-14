module.exports = {
  "env": {
      "browser": true,
      "node": true,
      "es6": true,
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jsdoc/recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "jsdoc",
      "prettier"
  ],
  "rules": {
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
      "quotes": ["error",  "single"],
      "semi": ["error", "always"],
      "jsdoc/require-description": 1,
      "prettier/prettier": ["error", {"singleQuote": true}],
  }
};