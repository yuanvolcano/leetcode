const convert = function(s, numRows) {
  let len = s.length, roundLen = numRows * 2 - 2;
  let roundCount = 0, res = '', index = 0, middle = 0 // 是否在中间

  roundLen = roundLen > 0 ? roundLen : 1
  while(roundCount < numRows) {
    index = roundCount
    middle = 0
    while (index < len) {
      res += s[index]
      if (roundCount === 0 || roundCount === numRows -1) {
        index += roundLen
      } else {
        if (middle === 1) {
          index += 2 * roundCount
          middle = 0
        } else {
          index += roundLen - 2 * roundCount
          middle = 1
        }
      }
    }
    roundCount++
  }
  return res
}
let s = 'LEETCODEISHIRING';
let s1 = 'A'
let res = convert(s, 4)
console.log(res)