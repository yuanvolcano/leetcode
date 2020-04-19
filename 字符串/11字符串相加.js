// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

const addStrings = function(num1, num2) {
  if (num1[0] === '+') {
    num1 = num1.slice(1)
  }
  if (num2[0] === '+') {
    num2 = num2.slice(1)
  }
  const arr1 = num1.split(''), arr2 = num2.split(''), item = []
  let res = '', init = 0

  while(arr1.length || arr2.length || init) {
    res = ~~arr1.pop() + ~~arr2.pop() + init
    init = res > 9 ? 1 : 0
    res = res % 10
    item.unshift(res)
  }

  if (item.length) {
    return item.join('')
  }
  return ''
}

let res = addStrings('9', '2')
console.log(res)