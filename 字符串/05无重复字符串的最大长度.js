// 遍历当前字符串，当前元素不在数组内，就push进数组，如果在清空数组，添加当前元素进数组，数组的长度和max作比较
const lengthOfLongestSubstring = function (s) {
  let arr = []
  let max = 0
  for (let item of s) {
    if (arr.includes(item)) {
      let index = arr.indexOf(item)
      arr.splice(0, index + 1)
    }
    arr.push(item)
    max = max > arr.length ? max : arr.length
  }
  return max
}

const lengthOfLongestSubstring2 = function (s) {
  let left = 0, right = 0, char1 = '', char2, res = 0
  const len = s.length, winObj = {}
  while (right < len) {
    char1 = s[right]
    if (winObj[char1] === void 0) {
      winObj[char1] = 0
    }
    winObj[char1]++
    right++
    while (winObj[char1] > 1) {
      char2 = s[left]
      winObj[char2]--
      left++
    }
    res = Math.max(res, right - left)
  }
  return res
}

let str = 'abcaba'
let res = lengthOfLongestSubstring2(str)
console.log(res)