# Karma Jasmine Diff

[Karma][] plugin for injecting [Jasmine Diff][].

[![npm Version][npm-badge]][npm]
[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![Dependency Status][dep-badge]][dep-status]

## Installation

Install using [npm][]:

    $ npm install karma-jasmine-diff --save-dev

## Usage

Add `"jasmine-diff"` (along with `"jasmine"`) to the `frameworks` section of
your karma configuration file:

```js
// karma.conf.js
module.exports = function (config) {
  config.set({
    // Add jasmine-diff AFTER jasmine
    frameworks: ['jasmine', 'jasmine-diff'],

    // Override default jasmine-diff options here
    // jasmineDiff: {}

    // ... other settings
  })
}
```

__karma-jasmine-diff__ attempts to pre-configure jasmine-diff for you, based on
the value of `colors`. If `colors` is `true`, jasmine-diff will be configured
to use colors and inline diffs. If `false`, jasmine-diff will be configured to
use no colors and unified diffs. To override auto-configuration, specify all
desired [jasmine-diff options](https://github.com/jimf/jasmine-diff#available-options)
via a `jasmineDiff` object in your karma configuration.

## License

MIT

[build-badge]: https://img.shields.io/travis/jimf/karma-jasmine-diff/master.svg
[build-status]: https://travis-ci.org/jimf/karma-jasmine-diff
[npm-badge]: https://img.shields.io/npm/v/karma-jasmine-diff.svg
[npm]: https://www.npmjs.org/package/karma-jasmine-diff
[coverage-badge]: https://img.shields.io/coveralls/jimf/karma-jasmine-diff.svg
[coverage-result]: https://coveralls.io/r/jimf/karma-jasmine-diff
[dep-badge]: https://img.shields.io/david/jimf/karma-jasmine-diff.svg
[dep-status]: https://david-dm.org/jimf/karma-jasmine-diff
[Karma]: https://karma-runner.github.io/
[Jasmine Diff]: https://github.com/jimf/jasmine-diff
