const myAtoi = function(str) {
    str = str.trim()
    if(!/^[-+\d]/.test(str)) return 0
    let sign = '', ret = 0
    if (str[0] === '-' || str[0] === '+') {
      sign = str[0]
      str = str.slice(1)
    }
    let match = str.match(/^\d+/)
    if (match) {
      ret = match[0]
    }

    if (sign === '-' && Number(ret) > 2147483648) {
      ret = 2147483648
    } else if ((sign === '+' || sign === '') && Number(ret) > 2147483647) {
      ret = 2147483647
    }
    return sign == '-' ? -ret : ret
};

let str = '+1'
let ret = myAtoi(str)

console.log(ret)