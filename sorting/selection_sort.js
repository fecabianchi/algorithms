function selectionSort (list) {
  let aux
  for (let i = 0; i < list.length; i++) {
    for(let j = 0; j < list.length; j++) {
      if (list[i] < list[j]) {
        aux = list[i]
        list[i] = list[j]
        list[j] = aux
      }
    }
  }
  return list
}

module.exports = selectionSort
