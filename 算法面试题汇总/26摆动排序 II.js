// 给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。

// 你可以假设所有输入数组都可以得到满足题目要求的结果。

//  输入：nums = [1,5,1,1,6,4]
// 输出：[1,6,1,5,1,4]
// 解释：[1,4,1,5,1,6] 同样是符合题目要求的结果，可以被判题程序接受。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  let copyNums = nums.sort((a, b) => b - a).slice(0)
  let N = 0;
  for (let i = 1; i < nums.length; i += 2) {
    // 依次把排序好的大的数放在奇数位
    nums[i] = copyNums[N++]
  }
  for (let i = 0; i < nums.length; i += 2) {
    // 依次把排序好的小的数放在偶数位
    nums[i] = copyNums[N++]
  }
  return nums;
};