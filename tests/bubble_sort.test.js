const bubbleSort = require('../sorting/bubble_sort')

describe('selection sort', () => {
  const integers = [312, 123, 523, 164, 125, 12, 0, 1]
  const characters = ['C', 'A', 'D', 'Z', 'J', 'W', 'B']
  test('it should sort the array of numbers', () => {
    expect(bubbleSort(integers)).toEqual([0, 1, 12, 123, 125, 164, 312, 523])
  })
  test('it should sort the array of characters', () => {
    expect(bubbleSort(characters)).toEqual(['A', 'B', 'C', 'D', 'J', 'W', 'Z'])
  })
})
