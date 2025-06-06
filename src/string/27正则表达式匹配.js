// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

const isMatch = function (s, p) {
  const reg = new RegExp(p, 'gim');
  const matches = s.match(reg);
  if (matches && matches[0] === s) return true;
  return false;
};

const s = 'ab';
const p = '.*c';
const result = isMatch(s, p);
console.log(result);
