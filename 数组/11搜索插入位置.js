const searchInsert = function (nums, target) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] >= target) {
      return i
    }
  }
  return nums.length
}