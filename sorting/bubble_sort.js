function bubbleSort (list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length; j++) {
      if (list[j] > list[j + 1]) {
        let tmp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = tmp
      }
    }
  }
  return list
}

module.exports = bubbleSort
