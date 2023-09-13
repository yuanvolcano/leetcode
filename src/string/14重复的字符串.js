// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。

// 输入: "abab" 输出: True

// 输入: "aba" 输出: False

// 输入: "abcabcabcabc" 输出: True

const repeatedSubstringPattern = function(s) {
  return (s + s).slice(1, -1).indexOf(s) != -1
}

let res = repeatedSubstringPattern('abcabcabcabc')
console.log(res)