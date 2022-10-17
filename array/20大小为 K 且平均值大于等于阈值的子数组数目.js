// 给你一个整数数组 arr 和两个整数 k 和 threshold 。

// 请你返回长度为 k 且平均值大于等于 threshold 的子数组数目。

const numOfSubarrays = function (arr, k, threshold) {
  const list = arr.map(item => item - threshold)
  let count = 0
  for (let i = 0, len = arr.length; i < len - k + 1; i++) {
    if (sum(list, i, i + k - 1) >= 0) {
      count++
    }
  }
  return count
}

function sum (arr, startIndex, endIndex) {
  let sum = 0
  for (let i = startIndex; i < endIndex + 1; i++) {
    sum += arr[i]
  }
  return sum
}

const numOfSubarrays2 = function (arr, k, threshold) {
  let count = 0, sum = 0, len = arr.length, target = k * threshold
  for (let i = 0; i <= k; i++) sum += arr[i]

  if (sum >= target) count++

  for (let i = k; i < len; i++) {
    // 这两步是整个算法的关键
    // 新子数组和计算，即老子数组的和减去老子数组的第一个index的值，再加上当前index的值
    // 可以理解为长度为k的窗口往后移动一位
    sums -= arr[i - k]; // i = 3, k = 3, 就是减去arr[0]
    sums += arr[i]; // 再加上arr[3]
    if (sums >= target) nums++;
  }

  return count
}

const arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 4
const result = numOfSubarrays2(arr, k, threshold)
console.log(result)