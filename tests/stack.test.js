const Stack = require('../data_structures/stack')

describe('stack', () => {
  let stack
  test('it should create a stack', () => {
    stack = new Stack()
    expect(stack.stackSize).toBe(0)
    expect(stack.data).toEqual({})
  })

  test('it should push data to the stack', () => {
    stack.push(100)
    expect(stack.stackSize).toBe(1)
    expect(stack.data[stack.stackSize - 1]).toBe(100)
  })

  test('it should get the stack size', () => {
    const result = stack.size()
    expect(result).toBe(1)
  })

  test('it should peek the stack', () => {
    const result = stack.peek()
    expect(result).toBe(100)
  })

  test('it should pop data to the stack', () => {
    const result = stack.pop()
    expect(result).toBe(100)
    expect(stack.stackSize).toBe(0)
    expect(stack.data).toEqual({})
  })
})