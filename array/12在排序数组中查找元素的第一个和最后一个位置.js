// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
// 你的算法时间复杂度必须是 O(log n) 级别。
// 如果数组中不存在目标值，返回 [-1, -1]。

const searchRange = function(nums, target) {
  let i = 0, len = nums.length, j = len - 1, arr = [-1, -1]
  while (i <= j) {
    if (nums[i] !== target) {
      i++
    }

    if (target !== nums[j]) {
      j--
    }

    if (nums[i] === nums[j] && nums[i] === target) {
      arr = [i, j]
      break
    }
  }

  return arr
}

const nums = [5,7,7,8,8,10], target = 6
let res = searchRange(nums, target)
console.log(res)
