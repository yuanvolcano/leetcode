// 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

// 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。

const minWindow = function (s, t) {
  let res = '', window = ''
  let left = 0, right = 0, len = s.length, match = 0
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
    window += s[right]
    right++
    // 匹配长度是否相等
    while (match === keysLen) {
      if (!res) res = window
      res = res.length < window.length ? res : window
      str1 = s[left]
      if (objMap[str1]) {
        windosMap[str1]--
        if (windosMap[str1] < objMap[str1]) {
          match--
        }
      }
      window = window.slice(1)
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

const parent = 'a', son = 'aa'
const result = minWindow(parent, son)
console.log(result)