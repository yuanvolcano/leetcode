// 给定一个字符串，编写一个函数判定其是否为某个回文串的排列之一。

// 回文串是指正反两个方向都一样的单词或短语。排列是指字母的重新排列。

// 回文串不一定是字典当中的单词。

// 统计单个字符出现的次数，出现奇数次数的字符数不能超过1
const canPermutePalindrome = function (s) {
  const strNum = {}
  for (let i = 0, len = s.length; i < len; i++) {
    if (!strNum[s[i]]) {
      strNum[s[i]] = 1
    } else {
      strNum[s[i]] += 1
    }
  }
  let index = 0
  let nums = Object.values(strNum)
  for (let j = 0, nLen = nums.length; j < nLen; j++) {
    if (nums[j] % 2 && ++index > 1) {
      return false
    }
  }
  return true
}

let str = 'tactcoa'
let res = canPermutePalindrome(str)
console.log(res)
