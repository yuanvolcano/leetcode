// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
// 示例 1：

// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。
// 示例 2：

// 输入: "cbbd"
// 输出: "bb"

/**
 * 传入的字符串
 * @param {string} s
 * @returns {string} 返回回文字符串
 */
const longestPalindrome = function (s) {
  if (!s) return ''
  let startIndex = 0, maxLen = 1, maxStr = s[0]
  const sLen = s.length
  while (startIndex <= sLen - 1) {
    let endIndex = s.indexOf(s[startIndex], startIndex + 1)
    while (endIndex !== -1) {
      let item = s.slice(startIndex, endIndex + 1)
      if (item.length > maxLen && checkPalindrome(item)) {
        maxLen = item.length
        maxStr = item
      }

      endIndex = s.indexOf(s[startIndex], endIndex + 1)
    }
    startIndex++
  }
  return maxStr
}

/**
 * 检测是否是回文字符串
 * @params {string} 传入的字符串
 * @return {boolean}
 */
function checkPalindrome (childStr) {
  let i = 0, j = childStr.length - 1
  while (i <= j) {
    if (childStr[i] !== childStr[j]) {
      return false
    }
    i++
    j--
  }
  return true
}

const res = longestPalindrome('a')
console.log(res)
