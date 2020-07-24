const longestCommonPrefix = function(strs) {
    if (!strs.length) return ''
    if (strs.length === 1) return strs[0]
    let firstNum = strs[0], str = '', reg;

    function _findSameStart (i) {
      val = firstNum.slice(0, i)
      if (!val) return str
      reg = new RegExp(`^${val}`) 
      let ret = strs.some(item => !reg.test(item))
      if (!ret) {
        if (val === firstNum) return val
        str = val
        return _findSameStart(++i)
      } else {
        return str
      }
    }

    return _findSameStart(1)
};

let arr1 = ["flower","flow","flight"]
let arr2 = ["dog","racecar","car"]
let arr3 = ['a']
let ret = longestCommonPrefix(arr3)
console.log(ret)