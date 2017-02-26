const spawn = require('cross-spawn')
const test = require('tape')

test('failure', t => {
  const result = spawn.sync('karma', [
    'start',
    'test/functional/karma.conf.js'
  ]).stdout.toString().replace(/\t/g, '        ')
  t.ok(result.includes(`
        \x1B[31mactual\x1B[0m \x1B[32mexpected\x1B[0m
  `.trim()), 'includes jasmine-diff output with failure')
  t.end()
})
