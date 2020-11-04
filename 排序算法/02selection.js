// 选择排序

const selectionSort = function (arr) {
  const len = arr.length
  let minIndex
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[i] < minIndex) {
        minIndex = i
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

module.exports = selectionSort
