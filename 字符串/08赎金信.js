// 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

const canConstruct = function (ransom, magazine) {
  const ransomList = ransom.split('')
  const magazineList = magazine.split('')
  let item = ''
  while (ransomList.length) {
    item = ransomList.shift()
    let index = magazineList.findIndex(str => str === item)
    if (index > -1) magazineList.splice(index, 1)
    else {
      return false
    }
  }
  return true
}


let res = canConstruct("aa", "aab")
console.log(res)