/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let left = 0,
    right = 0,
    win = '',
    res = '',
    valid = 0;
  const needMap = genObjMap(s1),
    len = s2.length,
    needLen = Object.keys(needMap).length,
    winObj = {};

  while (right < len) {
    let char1 = s2[right];
    if (needMap[char1]) {
      if (winObj[char1] == void 0) {
        winObj[char1] = 0;
      }
      winObj[char1]++;
      if (winObj[char1] === needMap[char1]) {
        valid++;
      }
    }

    win += char1;
    right++;
    while (valid === needLen) {
      res = s2.slice(left, right);
      if (res.length === s1.length) {
        return true;
      }
      let char2 = s2[left];
      if (needMap[char2]) {
        winObj[char2]--;
        if (winObj[char2] < needMap[char2]) {
          valid--;
        }
      }
      left++;
    }
  }

  return false;
};

const genObjMap = (str) => {
  const obj = {};
  for (let s of str) {
    if (obj[s] === void 0) {
      obj[s] = 0;
    }
    obj[s]++;
  }
  return obj;
};

const result = checkInclusion('ab', 'eidbaooo');
console.log(result);
