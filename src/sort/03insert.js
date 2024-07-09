// 插入排序

const insertSort = function (arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    let curItem = arr[i]
    let preIndex = i - 1
    while (preIndex >= 0 && arr[preIndex] > curItem) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = curItem
  }
}

module.exports = insertSort
