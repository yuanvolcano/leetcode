
const findLUSlength = function(strs) {
  const strNum = {}
  for (let i = 0, len = strs.length; i < len; i++) {
    if (!strNum[strs[i]]) {
      strNum[strs[i]] = 1
    } else {
      strNum[strs[i]] += 1
    }
  }
  let maxLen = -1, keys = Object.keys(strNum)
  for (let j = 0, mLen = keys.length; j < mLen; j++) {
    // 是否是子串
    if (strNum[keys[j]] === 1 && isValid(keys[j], strs)) {
      maxLen = keys[j].length > maxLen ? keys[j].length : maxLen
    }
  }
  return maxLen
};

function isValid (str, strList) {
  for (let i = 0, len = strList.length; i < len; i++) {
    if (strList[i] !== str && strList[i].includes(str)) {
      return false
    }
  }
  return true
}

const strs1 = ['aaa', 'aaaa', 'aaaab', 'aaaab']
// const strs2 = ['aaa', 'bbbb', 'bbbbb']
let res = findLUSlength(strs1)
console.log(res)