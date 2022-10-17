// 计算排序

const countingSort = function (arr) {
  const maxValue = findMaxVal(arr)
  const maxLen = maxValue + 1
  const countList = new Array(maxLen)
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (countList[arr[i]] === void 0) {
      countList[arr[i]] = 0
    }
    countList[arr[i]]++
  }
  let sortedIndex = 0
  for (let j = 0; j < maxLen; j++) {
    while (countList[j] > 0) {
      arr[sortedIndex++] = j
      countList[j]--
    }
  }
  return arr
}

function findMaxVal (arr) {
  let maxVal = arr[0]
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i]
    }
  }
  return maxVal
}

module.exports = countingSort
