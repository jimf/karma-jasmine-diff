var path = require('path')

function createPattern (pattern) {
  return { pattern: pattern, included: true, served: true, watched: false }
}

function findIndexWith (f, xs) {
  for (var i = 0, len = xs.length; i < len; i += 1) {
    if (f(xs[i])) { return i }
  }
  return -1
}

function isJasminePattern (pattern) {
  return pattern.pattern.search(/karma-jasmine(\/|\\)lib(\/|\\)adapter\.js/) !== -1
}

function initJasmineDiff (config) {
  var jasmineDiffPath = path.dirname(require.resolve('jasmine-diff'))
  var jasminePatternIdx = findIndexWith(isJasminePattern, config.files)

  if (jasminePatternIdx === -1) {
    throw new Error('"jasmine" must be listed before "jasmine-diff" in Karma "frameworks" configuration')
  }

  config.files.splice(jasminePatternIdx + 1, 0,
    createPattern(path.join(jasmineDiffPath, 'dist/jasmine-diff.js')),
    createPattern(path.join(__dirname, 'src/adapter.js'))
  )

  config.client = config.client || {}
  config.client.jasmineDiff = config.client.jasmineDiff || {}

  if (config.jasmineDiff) {
    config.client.jasmineDiff = config.jasmineDiff
  } else if (config.colors) {
    config.client.jasmineDiff.colors = true
    config.client.jasmineDiff.inline = true
  } else {
    config.client.jasmineDiff.colors = false
    config.client.jasmineDiff.inline = false
  }
}

initJasmineDiff.$inject = ['config']

module.exports = {
  'framework:jasmine-diff': ['factory', initJasmineDiff]
}
