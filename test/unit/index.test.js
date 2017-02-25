const path = require('path')
const test = require('tape')
const mod = require('../..')
const subject = mod['framework:jasmine-diff'][1]

const createFiles = () =>
  [
    {
      pattern: path.join(__dirname, '../../node_modules/jasmine-core/lib/jasmine-core/jasmine.js'),
      included: true,
      served: true,
      watched: false
    },
    {
      pattern: path.join(__dirname, '../../node_modules/karma-jasmine/lib/boot.js'),
      included: true,
      served: true,
      watched: false
    },
    {
      pattern: path.join(__dirname, '../../node_modules/karma-jasmine/lib/adapter.js'),
      included: true,
      served: true,
      watched: false
    }
  ]
const expectedFiles = createFiles().concat([
  {
    pattern: path.join(path.dirname(require.resolve('jasmine-diff')), 'dist/jasmine-diff.js'),
    included: true,
    served: true,
    watched: false
  },
  {
    pattern: path.join(__dirname, '../../src/adapter.js'),
    included: true,
    served: true,
    watched: false
  }
])

test('module export', t => {
  t.deepEqual(mod, { 'framework:jasmine-diff': ['factory', subject] },
    'exports a karma framework factory function')
  t.end()
})

test('$inject', t => {
  t.deepEqual(subject.$inject, ['config'], 'depends on karma config')
  t.end()
})

test('called with invalid karma files config', t => {
  const config = { files: [], colors: true }
  t.throws(subject.bind(null, config), 'throws if jasmine dependency cannot be found')
  t.end()
})

test('init with no options specified, colors:true', t => {
  const config = { files: createFiles(), colors: true }
  subject(config)

  t.deepEqual(config.files, expectedFiles, 'adds expected files')
  t.deepEqual(config.client.jasmineDiff, { colors: true, inline: true },
    'configures jasmine-diff with colors:true inline:true')

  t.end()
})

test('init with no options specified, colors:false', t => {
  const config = { files: createFiles(), colors: false }
  subject(config)

  t.deepEqual(config.files, expectedFiles, 'adds expected files')
  t.deepEqual(config.client.jasmineDiff, { colors: false, inline: false },
    'configures jasmine-diff with colors:false inline:false')

  t.end()
})

test('init with options specified', t => {
  const config = { files: createFiles(), colors: true, jasmineDiff: { colors: true } }
  subject(config)

  t.deepEqual(config.files, expectedFiles, 'adds expected files')
  t.deepEqual(config.client.jasmineDiff, { colors: true },
    'configures jasmine-diff with designated options')

  t.end()
})
