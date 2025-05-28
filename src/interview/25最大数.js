// 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

// 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

// 输入：nums = [10,2]
// 输出："210"

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const res = nums.sort((a, b) => b + '' + a - (a + '' + b)).join('');
  return res.startsWith('0') ? '0' : res;
};

const nums = [78, 91, 9, 7, 71];
const result = largestNumber(nums);
console.log(result);
