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

let str = 'abcaba'
let res = lengthOfLongestSubstring(str)
console.log(res)