# eslint-config-airbnb-typescript-prettier

[![npm version][npm-image]][npm-url]
[![build status][circleci-image]][circleci-url]
![License][license]

Airbnb's ESLint config with TypeScript and Prettier support.

# How to use
Install `eslint` and `prettier`, `eslint-config-airbnb-typescript-prettier` and put it into your `.eslintrc.js`.

```bash
$ npm install eslint@^6.8.0 prettier@^1.18.2 eslint-config-airbnb-typescript-prettier --save-dev
```

`.eslintrc.js`

```js
module.exports = {
  extends: "airbnb-typescript-prettier"
};
```

## License

Open source [licensed as MIT](https://github.com/toshi-toma/eslint-config-airbnb-typescript-prettier/blob/master/LICENSE).

[npm-image]: https://img.shields.io/npm/v/eslint-config-airbnb-typescript-prettier.svg
[npm-url]: https://npmjs.org/package/eslint-config-airbnb-typescript-prettier
[license]: https://img.shields.io/npm/l/eslint-config-airbnb-typescript-prettier.svg
[circleci-image]: https://circleci.com/gh/toshi-toma/eslint-config-airbnb-typescript-prettier.svg?style=shield
[circleci-url]: https://circleci.com/gh/toshi-toma/eslint-config-airbnb-typescript-prettier
