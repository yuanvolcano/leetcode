// 冒泡排序

const bubbleSort = function (arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len - i; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

module.exports = bubbleSort
