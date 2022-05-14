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

function checkPalindrome(childStr) {
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

// 以 [left, right] 为中心的最长子串
function checkPalindrome(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return s.slice(left + 1, right)
}

const longestPalindrome2 = function (s) {
  let res = ''
  for (let i = 0, len = s.length; i < len; i++) {
    // 以 s[i] 为中心的最长回文子串
    let s1 = checkPalindrome(s, i, i)
    // 以 s[i] 和 s[i+1] 为中心的最长回文子串
    let s2 = checkPalindrome(s, i, i + 1)
    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }
  return res
}