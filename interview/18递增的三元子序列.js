// 给你一个整数数组 nums ，判断这个数组中是否存在长度为 3 的递增子序列。

// 如果存在这样的三元组下标 (i, j, k) 且满足 i < j < k ，使得 nums[i] < nums[j] < nums[k] ，返回 true ；否则，返回 false 。

// 示例 1：

// 输入：nums = [1,2,3,4,5]
// 输出：true
// 解释：任何 i < j < k 的三元组都满足题意


// 最大递增子序列的长度 > 3
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  let max = dp[0];
  for (i = 1; i < len; i++) {
    if (dp[i] > max) {
      max = dp[i]
    }
  }
  return max >= 3
};


var increasingTriplet2 = function (nums) {
  let small = Number.MAX_SAFE_INTEGER, mid = Number.MAX_SAFE_INTEGER
  for (const num of nums)
    if (num <= small)
      small = num
    else if (num <= mid)
      mid = num
    else
      return true
  return false
};

const nums = [20, 100, 10, 12, 5, 13]
const result = increasingTriplet(nums)
console.log(result)
