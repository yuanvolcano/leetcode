// 快速排序

const quickSort = function (arr) {
  if (arr.length < 2) return arr
  const middle = arr[0], len = arr.length, left = [], right = []
  for (let i = 1; i < len; i++) {
    if (arr[i] > middle) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat([middle], quickSort(right))
}

// const nums = [7, 23, 5, 43, 5, 7, 18, 2, 35, 9]
// const result = quickSort(nums)
// console.log(result)

module.exports = quickSort
