/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const len1 = s.length, len2 = t.length
  if (len1 !== len2) {
    return false
  }
  const res = new Map();

  for (let i = 0; i < len1; i++) {
    let count1 = res.get(s[i])
    if (!count1) {
      count1 = [0, 0]
      res.set(s[i], count1)
    }
    let count2 = res.get(t[i])
    if (!count2) {
      count2 = [0, 0]
      res.set(t[i], count2)
    }
    count1[0]++
    count2[1]++
  }

  for (let [key, value] of res.entries()) {
    if (value[0] !== value[1]) {
      return false;
    }
  }
  return true;
};

const str1 = 'anagram'
const str2 = 'nagaram'
const result = isAnagram(str1, str2)
console.log(result)