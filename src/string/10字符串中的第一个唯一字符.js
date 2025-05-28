// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

// 例子：1. s = "leetcode" 返回 0；
//      2. s = "loveleetcode", 返回 2。

var firstUniqChar = function (s) {
  const obj = {};
  let index = -1;
  for (let i = 0, len = s.length; i < len; i++) {
    if (obj[s[i]] === void 0) {
      obj[s[i]] = i;
    } else {
      obj[s[i]] = -1;
    }
  }
  const list = Object.keys(obj);
  for (let j = 0, oLen = list.length; j < oLen; j++) {
    if (obj[list[j]] === -1) {
      continue;
    }
    if (obj[list[j]] < index || index === -1) {
      index = obj[list[j]];
    }
  }
  return index;
};

var firstUniqChar2 = function (s) {
  for (let i = 0, len = s.length; i < len; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

let res = firstUniqChar('cc');
console.log(res);
