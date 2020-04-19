// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。

// 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// 输入：["h","e","l","l","o"] 输出：["o","l","l","e","h"]

function reverse (s) {
  let i = 0, x = s.length - 1

  while (i < x) {
    [s[i], s[x]] = [s[x], s[i]]
    i++
    x--
  }
}


let s = ["h","e","l","l","o"]
let res = reverse(s)
console.log(s)
