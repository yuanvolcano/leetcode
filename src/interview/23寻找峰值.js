// 峰值元素是指其值严格大于左右相邻值的元素。

// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

// 你可以假设 nums[-1] = nums[n] = -∞ 。

// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间复杂度 O(n)
var findPeakElement = function (nums) {
  if (nums.length === 1) {
    return 0;
  } else if (nums.length === 2) {
    return nums[0] > nums[1] ? 0 : 1;
  }
  let len = nums.length;
  for (let i = 1; i < len - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return nums[0] > nums[len - 1] ? 0 : len - 1;
};
