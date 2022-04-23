// 给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
// 示例 1:

// 输入: nums = [1,2,3,4,5,6,7], k = 3
// 输出: [5,6,7,1,2,3,4]
// 解释:
// 向右轮转 1 步: [7,1,2,3,4,5,6]
// 向右轮转 2 步: [6,7,1,2,3,4,5]
// 向右轮转 3 步: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length
  const leftList = nums.splice(nums.length - k, k)
  nums.unshift(...leftList)
  return nums
};

const nums = [1,2]
const k = 5
const result = rotate(nums, k)
console.log(result)