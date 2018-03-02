const selectionSort = require('../sorting/selection_sort')

describe('selection sort', () => {
  const input = [312, 123, 523, 164, 125, 12, 0, 1]
  test('it should sort the array', () => {
    expect(selectionSort(input)).toEqual([0, 1, 12, 123, 125, 164, 312, 523])
  })
})
