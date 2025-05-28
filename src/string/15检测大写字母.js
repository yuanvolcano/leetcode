// 给定一个单词，你需要判断单词的大写使用是否正确。

// 我们定义，在以下情况时，单词的大写用法是正确的：

// 全部字母都是大写，比如"USA"。
// 单词中所有字母都不是大写，比如"leetcode"。
// 如果单词不只含有一个字母，只有首字母大写， 比如 "Google"。

const detectCapitalUse = function (word) {
  if (word === word.toUpperCase()) {
    return true;
  } else if (word === word.toLowerCase()) {
    return true;
  } else if (word[0] === word[0].toUpperCase() && word.slice(1) === word.slice(1).toLowerCase()) {
    return true;
  }
  return false;
};

let res = detectCapitalUse('GooglE');
console.log(res);
