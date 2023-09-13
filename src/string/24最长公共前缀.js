const longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]
  let firstNum = strs[0], str = '', reg;

  function _findSameStart (i) {
    val = firstNum.slice(0, i)
    if (!val) return str
    reg = new RegExp(`^${val}`)
    let ret = strs.some(item => !reg.test(item))
    if (!ret) {
      if (val === firstNum) return val
      str = val
      return _findSameStart(++i)
    } else {
      return str
    }
  }

  return _findSameStart(1)
};

const longestCommonPrefix2 = function (strs) {
  if (!strs.length) return ''
  let ants = strs[0]
  const len = strs.length
  for (let i = 1; i < len; i++) {
    let j = 0
    const antsLen = ants.length, itemLen = strs[i].length
    for (; j < antsLen && j < itemLen; j++) {
      if (ants[j] !== strs[i][j]) {
        break
      }
    }
    ants = ants.slice(0, j)
    if (!ants) return ants
  }
  return ants
}

let arr1 = ["flower","flow","flight"]
let arr2 = ["dog","racecar","car"]
let arr3 = ['a']
let ret = longestCommonPrefix2(arr2)
console.log(ret)