class Stack {
  constructor () {
    this.stackSize = 0
    this.data = {}
  }

  push (value) {
    this.data[this.stackSize] = value
    this.stackSize++
  }

  pop () {
    if (!this.stackSize) return undefined
    this.stackSize--
    const result = this.data[this.stackSize]
    delete this.data[this.stackSize]
    return result
  }

  size () {
    return this.stackSize
  }

  peek () {
    return this.data[this.stackSize - 1]
  }
}

module.exports = Stack
