// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
const isValid = function (s) {
  const stack = [], pushList = ['(', '[', '{'], map = { ')': '(', ']': '[', '}': '{'}
  let str = ''
  for (let i = 0, len = s.length; i < len; i++) {
    str = s[i]
    // 为空字符串跳过
    if (str === ' ') {
      continue
    } else if (pushList.includes(str)) {
      // 如果是开始括号则入栈
      stack.push(str)
    } else if (map[str] && map[str] === stack[stack.length - 1]) {
      // 与上一级匹配则出栈
      stack.pop()
    } else {
      // 直接是闭合括号直接返回
      return false
    }
  }
  if (stack.length) {
    return false
  }
  return true
}

let str = ']'
let res = isValid(str)
console.log(res)