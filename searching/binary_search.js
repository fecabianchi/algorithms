function binarySearch (list, target) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let attempt = list[mid]

    if (attempt === target) {
      return true
    }
    if (attempt < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return false
}

module.exports = binarySearch
