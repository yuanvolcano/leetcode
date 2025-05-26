const longestCommonPrefix = function (strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];
  let firstNum = strs[0],
    str = '',
    reg;

  function _findSameStart(i) {
    val = firstNum.slice(0, i);
    if (!val) return str;
    reg = new RegExp(`^${val}`);
    let ret = strs.some((item) => !reg.test(item));
    if (!ret) {
      if (val === firstNum) return val;
      str = val;
      return _findSameStart(++i);
    } else {
      return str;
    }
  }

  return _findSameStart(1);
};

/**
 * 查找字符串数组中的最长公共前缀
 * @param {string[]} strs - 字符串数组
 * @returns {string} 最长公共前缀
 */
const longestCommonPrefix2 = function (strs) {
  // 处理空数组的情况
  if (!strs.length) return '';

  // 以第一个字符串作为初始公共前缀
  let commonPrefix = strs[0];

  // 遍历剩余字符串，不断缩小公共前缀
  for (let i = 1; i < strs.length; i++) {
    const currentStr = strs[i];
    let matchLength = 0;

    // 比较当前字符串与公共前缀的每个字符
    while (
      matchLength < commonPrefix.length &&
      matchLength < currentStr.length &&
      commonPrefix[matchLength] === currentStr[matchLength]
    ) {
      matchLength++;
    }

    // 更新公共前缀
    commonPrefix = commonPrefix.slice(0, matchLength);

    // 如果公共前缀为空，直接返回
    if (!commonPrefix) return commonPrefix;
  }

  return commonPrefix;
};

let arr1 = ['flower', 'flow', 'flight'];
let arr2 = ['dog', 'racecar', 'car'];
let arr3 = ['a'];
let ret = longestCommonPrefix2(arr2);
console.log(ret);
