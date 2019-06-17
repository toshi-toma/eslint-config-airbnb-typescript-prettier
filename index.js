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
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
  },
  settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    "import/resolver": {
      node: {
        extensions: [".mjs", ".js", ".ts", ".json"],
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"],
  },
};