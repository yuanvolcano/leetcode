// 统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

const countSegments = function (s) {
  let isStart = false,
    size = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] !== ' ' && !isStart) {
      isStart = true;
      size++;
    } else if (s[i] === ' ') {
      isStart = false;
    }
  }
  return size;
};
let str = ' Hello,  my name is John ';
let res = countSegments(str);
console.log(res);
