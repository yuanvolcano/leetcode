// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

const generateParenthesis = function(n) {
  if (n < 1) return []
  else if (n === 1) return ['()']

  const baseParenthesis = '()', res = []
  let i = 1, j = -1, stack = ['()']
  while (i < n) {
    res.length = 0
    while (stack.length) {
      let item = stack.shift(), len = item.length
      j = -1
      while (j < len) {
        if (j === -1) {
          res.push(`${baseParenthesis}${item}`)
        } else if (item[j] === '(') {
          res.push(`${item.slice(0, j + 1)}${baseParenthesis}${item.slice(j + 1)}`)
        }
        j++
      }
    }
    stack = res.slice()
    i++
  }
  return [...new Set(res)]
}
// ['()()', '(())']
let res = generateParenthesis(4)
console.log(res)