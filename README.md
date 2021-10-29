# config-lint-staged

_config-lint-staged_ is a configuration preset for [lint-staged] used by the [fundamend.dev] ecosystem.

## Installation

Use your favorite Node.js package manager, for example [npm], like so:

    npm install --save-dev @fundamend/config-lint-staged

... or [yarn], like so:

    yarn add --dev @fundamend/config-lint-staged

## Usage

In your [.lintstagedrc.js], import _config-lint-staged_ and use it in the exported object, like so:

```js
const config = require('@fundamend/config-lint-staged');

module.exports = {
	...config
};
```

You can extend the imported preset by adding additional [configuration options] to the exported configuration object, for example like this:

```js
const config = require('@fundamend/config-lint-staged');

module.exports = {
	...config,
	'*.{js,ts}': 'eslint'
};
```

## License

[MIT]

[configuration options]: https://github.com/okonet/lint-staged#configuration
[fundamend.dev]: https://fundamend.dev
[lint-staged]: https://github.com/okonet/lint-staged
[.lintstagedrc.js]: https://github.com/okonet/lint-staged#configuration
[mit]: https://choosealicense.com/licenses/mit/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
