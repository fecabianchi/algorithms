function sequentialSearch (list, item) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) return true
  }
  return false
}

module.exports = sequentialSearch
