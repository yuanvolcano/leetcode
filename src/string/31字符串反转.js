function reverse (str) {
  const arr = str.split('.')
  let start = 0, end = arr.length - 1
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++
    end--
  }
  return arr.join('.')
}

let str = 'www.toutiao.com.cn'
let result = reverse(str)
console.log(result)
