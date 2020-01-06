// const letterCombinations = function(digits) {
//   if (!digits) {
//     return []
//   }
//   let numMap = new Map(), len = digits.length, result = [];
//   numMap.set('2', 'abc')
//   numMap.set('3', 'def')
//   numMap.set('4', 'ghi')
//   numMap.set('5', 'jkl')
//   numMap.set('6', 'mno')
//   numMap.set('7', 'pqrs')
//   numMap.set('8', 'tuv')
//   numMap.set('9', 'wxyz')

//   function _generate (i, str) {
//     if (i === len) {
//       return result.push(str)
//     }
//     let tmp = numMap.get(digits[i]);
//     for (let j = 0, tmpLen = tmp.length; j < tmpLen; j++) {
//       _generate(i + 1, str+tmp[j]);
//     }
//   }

//   _generate(0, '');
//   return result
// };

function letterCombinations2 (digits) {
  if (!digits) {
    return []
  }
  let numMap = new Map(), stack = [], result = [], tmp,  tmpLen, i = 0, digitsLen = digits.length;
  numMap.set('2', 'abc')
  numMap.set('3', 'def')
  numMap.set('4', 'ghi')
  numMap.set('5', 'jkl')
  numMap.set('6', 'mno')
  numMap.set('7', 'pqrs')
  numMap.set('8', 'tuv')
  numMap.set('9', 'wxyz')

  while(digits) {
    tmp = numMap.get(digits[0])
    tmpLen = tmp.length
    result.length = 0

    if (!stack.length) {
      for (i = 0; i < tmpLen; i++) {
        stack.push(tmp[i])
      }
    } else {
      let item
      while(stack.length) {
        item = stack.shift()
        for (i = 0; i < tmpLen; i++) {
          result.push(`${item}${tmp[i]}`)
        }
      }
      stack = [...result]
    }
    digits = digits.slice(1)
  }
  return digitsLen === 1 ? stack : result
} 

let str = '234'
let res = letterCombinations2(str)
console.log(res)