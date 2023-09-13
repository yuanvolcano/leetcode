// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  s = s.toLowerCase();
  s = s.replace(/[^a-z0-9]/g, '');
  let start = 0, end = s.length - 1;
  while (start <= end) {
    if (s[start++] === s[end--]) {
      continue;
    } else {
      return false
    }
  }
  return true;
};

const str = 'ab_a';
const res = isPalindrome(str);
console.log(res);