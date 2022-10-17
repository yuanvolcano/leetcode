// 给定一组字符，使用原地算法将其压缩。 压缩后的长度必须始终小于或等于原数组长度。

// 数组的每个元素应该是长度为1 的字符（不是 int 整数类型）。

// 在完成原地修改输入数组后，返回数组的新长度。

// 例如输入： ["a","a","b","b","c","c","c"]，输出：返回6，输入数组的前6个字符应该是：["a","2","b","2","c","3"]

// 输入：["a","b","b","b","b","b","b","b","b","b","b","b","b"]，输出：返回4，输入数组的前4个字符应该是：["a","b","1","2"]。

const compress = function(chars) {
  let res = []
  let temp = '', size = 1
  for (let i =0, len = chars.length; i < len; i++) {
    if (temp !== chars[i]) {
      temp = chars[i]
      size = 1
      res.push(temp)
    } else {
      if (size > 1) {
        res.pop()
      }
      size++
      res.push(size)
    }
  }
  console.log(res)
  return res.join('').split('')
}

let list = ["a","a","b","b","c","c","c"]
let res = compress(list)
console.log(res)
