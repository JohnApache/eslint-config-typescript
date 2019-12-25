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

> 该配置为eslint针对**Typescript**项目的通用配置, 适用于任何项目的基础配置, 提供了好看的自动修复效果

- [安装](#安装)
- [配置](#配置)
- [注意](#注意)
- [建议](#建议)
- [License](#license)

## 安装

```bash
$ npx install-peerdeps --dev @dking/eslint-config-typescript
```

## 配置

```js
// .eslintrc.js
module.exports = {
    extends: [ '@dking/typescript' ],
    rules: {

    }
}
```

## 注意
> 可以针对不同类型项目使用不同的eslint-config，以获得更好的体验

- 只需要基础配置的项目可以使用 [@dking/eslint-config-base](https://github.com/JohnApache/eslint-config-base)
- 使用**Typescript**项目可以使用 [@dking/eslint-config-typescript](https://github.com/JohnApache/eslint-config-typescript)
- 使用**React**项目可以使用 [@dking/eslint-config-react](https://github.com/JohnApache/eslint-config-react)
- 使用**Typescript**和**React**的项目可以使用 [@dking/eslint-config-typescript-react](https://github.com/JohnApache/eslint-config-typescript-react)

## 建议
欢迎创建issue 或者 pr [here](https://github.com/JohnApache/eslint-config-typescript/issues).

## License

[MIT](LICENSE)
