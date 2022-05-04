const searchLeft = function (nums, target) {
  let left = 0, right = nums.length - 1, mid
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      right = mid - 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }

  if (left >= nums.length || nums[left] !== target) return -1
  return left
}

const searchLeft2 = function (nums, target) {
  let left = 0, right = nums.length, mid
  while (left < right) {
    mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      right = mid
    } else if (nums[mid] > target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }

  if (left >= nums.length || nums[left] !== target) return -1
  return left
}