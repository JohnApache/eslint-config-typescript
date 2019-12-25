# EsLint-Config-Typescript

<!-- [![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/:packageName.svg?style=flat-square
[npm-url]: https://npmjs.org/package/:packageName
[travis-image]: https://www.travis-ci.org/JohnApache/:packageName.svg
[travis-url]: https://travis-ci.org/JohnApache/:packageName
[codecov-image]: https://codecov.io/gh/JohnApache/:packageName/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/JohnApache/:packageName
[snyk-image]: https://snyk.io/test/github/JohnApache/:packageName/badge.svg?targetFile=package.json
[snyk-url]: https://snyk.io/test/github/JohnApache/:packageName?targetFile=package.json
[download-image]: https://img.shields.io/npm/dm/:packageName.svg?style=flat-square
[download-url]: https://npmjs.org/package/:packageName -->

- [English](README.en_US.md)
- [简体中文](README.md)

> This configuration is the general configuration of eslint for **Typescript** project, which is applicable to any basic configuration of the project, and provides a good automatic repair effect.

- [Install](#install)
- [Configuration](#configuration)
- [TIPS](#tips)
- [Questions](#questions)
- [License](#license)

## Install
```bash
$ npx install-peerdeps --dev @dking/eslint-config-typescript
```

## Configuration

```js
// .eslintrc.js
module.exports = {
    extends: [ '@dking/typescript' ],
    rules: {

    }
}
```

## TIPS

> You can use different eslint config for different types of projects to get a better experience

- Only projects requiring basic configuration can use [@dking/eslint-config-base](https://github.com/JohnApache/eslint-config-base)
- Projects using **Typescript** can use [@dking/eslint-config-typescript](https://github.com/JohnApache/eslint-config-typescript)
- Projects that use **React** can use [@dking/eslint-config-react](https://github.com/JohnApache/eslint-config-react)
- Projects that use **Typescript** and **React** can use [@dking/eslint-config-typescript-react](https://github.com/JohnApache/eslint-config-typescript-react)

## Questions
Please open an issue [here](https://github.com/JohnApache/eslint-config-typescript/issues).

## License

[MIT](LICENSE)
