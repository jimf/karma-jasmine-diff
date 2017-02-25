/* global describe, it, expect */
describe('Karma Jasmine Diff', function () {
  it('should show diff output with standard jasmine matchers', function () {
    var actual = {
      query: {
        bool: {
          must: [
            {
              term: { user: 'jimf' }
            }
          ]
        }
      }
    }
    var expected = {
      query: {
        bool: {
          must: [
            {
              term: { user: 'kimchy' }
            }
          ]
        }
      }
    }
    expect(actual).toEqual(expected)
  })
})
