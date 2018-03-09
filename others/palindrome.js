const reverseString = (s) => s.split('').reverse().join('')
const palindrome = (s) => s ? s.toLowerCase() === reverseString(s).toLowerCase() : 'invalid string'

module.exports = palindrome
