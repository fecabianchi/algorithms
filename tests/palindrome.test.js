const palindrome = require('../others/palindrome')

describe('palindrome', () => {
  test('it should be a palindrome', () => {
    expect(palindrome('ana')).toBe(true)
  })
  test('it should not be a palindrome', () => {
    expect(palindrome('not palindrome')).toBe(false)
  })
})
