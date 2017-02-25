(function (window) {
  'use strict'

  function configureJasmineDiff (karma, jasmine, jasmineDiff) {
    var clientConfig = karma.config || {}
    var jasmineDiffConfig = clientConfig.jasmineDiff
    var jasmineDiffMatchers = jasmineDiff(jasmine, jasmineDiffConfig)

    jasmine.getEnv().beforeEach(function () {
      jasmine.addMatchers(jasmineDiffMatchers)
    })
  }

  configureJasmineDiff(
    window.__karma__,
    window.jasmine,
    window.jasmineDiff
  )
})(typeof window !== 'undefined' ? window : global)
