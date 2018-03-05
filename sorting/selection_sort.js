function selectionSort (list) {
  let aux
  for (let i = 0; i < list.length; i++) {
    for(let j = i + 1; j < list.length; j++) {
      if (list[j] < list[i]) {
        aux = list[i]
        list[i] = list[j]
        list[j] = aux
      }
    }
  }
  return list
}

module.exports = selectionSort
