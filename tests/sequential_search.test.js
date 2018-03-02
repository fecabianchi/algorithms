const sequentialSearch = require('../searching/sequential_search')

describe('sequential search', () => {
  const input = [0, 1 ,2, 3, 4, 5, 6]
  test('it should find the item', () => {
    expect(sequentialSearch(input, 3)).toBe(true)
  })
  test('it should not find the item', () => {
    expect(sequentialSearch(input, 7)).toBe(false)
  })
})
