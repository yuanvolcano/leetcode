/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1, mid
  while (left <= right) {
    mid = Math.floor((right - left) / 2) + left
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }
  return -1
};

const nums = [-1,0,3,5,9,12]
const target = 9
const result = search(nums, target)
console.log(result)