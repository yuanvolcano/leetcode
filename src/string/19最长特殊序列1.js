// 给你两个字符串，请你从这两个字符串中找出最长的特殊序列。

// 「最长特殊序列」定义如下：该序列为某字符串独有的最长子序列（即不能是其他字符串的子序列）。

// 子序列 可以通过删去字符串中的某些字符实现，但不能改变剩余字符的相对顺序。空序列为所有字符串的子序列，任何字符串为其自身的子序列。

// 输入为两个字符串，输出最长特殊序列的长度。如果不存在，则返回 -1。
const findLUSlength = function (a, b) {
  // 如果两数相等则返回-1，两数不等则返回两者之间长度最长的
  if (a === b) {
    return -1;
  }

  return a.length > b.length ? a.length : b.length;
};
// "horbxeemlgqpqbujbdagizcfairalg"
// "iwvtgyojrfhyzgyzeikqagpfjoaeen"
let str1 = 'aba',
  str2 = 'cdc';
let res = findLUSlength(str1, str2);
console.log(res);
