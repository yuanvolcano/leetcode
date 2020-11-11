// 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

// 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

const findAnagrams = function (s, t) {
  const res = [], len = s.length
  let left = 0, right = 0, match = 0
  // 生成 map 字符串映射 { A: 1, B: 2, C: 3 }
  const objMap = genMap(t)
  // objMap key字长度
  const keysLen = Object.keys(objMap).length
  const windosMap = {}
  while (right < len) {
    let str1 = s[right]
    if (objMap[str1]) {
      if (windosMap[str1] === void 0) {
        windosMap[str1] = 0
      }
      windosMap[str1]++
      if (windosMap[str1] === objMap[str1]) {
        match++
      }
    }
    right++
    // 匹配长度是否相等
    while (match === keysLen) {
      // 长度匹配，添加索引
      if (right - left === t.length) {
        res.push(left)
      }
      str1 = s[left]
      if (objMap[str1]) {
        windosMap[str1]--
        if (windosMap[str1] < objMap[str1]) {
          match--
        }
      }
      left++
    }
  }
  return res
}

function genMap (str) {
  const obj = {}
  // 生成 hash 表
  for (const i of str) {
    if (obj[i] === void 0) {
      obj[i] = 0
    }
    obj[i]++
  }
  return obj
}

const parent = 'abab', son = 'ab'
const result = findAnagrams(parent, son)
console.log(result)