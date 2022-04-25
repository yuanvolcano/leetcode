// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请不要使用除法，且在 O(n) 时间复杂度内完成此题。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length
  const res = new Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    res[i] = nums[i - 1] * res[i - 1]
  }

  let rightAll = 1
  for (let j = len - 1; j > 0; j--) {
    res[i] *= rightAll
    rightAll *= nums[i]
  }
  return res
}
