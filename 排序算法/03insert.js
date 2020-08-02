// 插入排序

const insertSort = function (arr) {
  const len = arr.length
  let curItem, preIndex
  for (let i = 1; i < len; i++) {
    curItem = arr[i]
    preIndex = i - 1
    while (preIndex >= 0 && arr[preIndex] > curItem) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = curItem
  }
}

module.exports = insertSort
