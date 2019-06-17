module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "sourceType": "module",
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "prettier",
    "@typescript-eslint",
  ],
  globals: {},
  rules: {
    // prettier
    "prettier/prettier": ["error"],
    // TypeScript
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    // React
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/prop-types": ["off", {}],

  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
      },
    },
    "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"],
  },
};