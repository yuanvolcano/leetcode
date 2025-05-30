// 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 测试用例的答案是一个 32-位 整数。

// 子数组 是数组的连续子序列。

// dp[0] = nums[0]
// 假设 i, 在 0 - i 之前存在 j，若

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let len = nums.length,
    max = nums[0],
    nowMax = 1,
    nowMin = 1,
    tmp;

  for (let i = 0; i < len; i++) {
    // 遇到负数，最大值 和 最小值 一定会发生互换（题解中列出所有情况的规律总结）
    if (nums[i] < 0) {
      tmp = nowMax;
      nowMax = nowMin;
      nowMin = tmp;
    }

    // 看乘了 nums[i] 后，还是不是最大值或最小值，是的话才乘 nums[i]
    nowMax = Math.max(nowMax * nums[i], nums[i]);
    nowMin = Math.min(nowMin * nums[i], nums[i]); // 维持一个最小数，因为最小数乘负数的话 肯定是最大的

    // 看是否要更新返回的最大值
    max = Math.max(nowMax, max);
  }

  return max;
};

const nums = [-5, 2, 3];
const result = maxProduct(nums);
console.log(result);
