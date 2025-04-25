const searchLeft = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = left + (right - left) >> 1;
    if (nums[mid] === target) {
      right = mid - 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  if (left >= nums.length || nums[left] !== target) return -1;

  return left;
}

const searchLeft2 = function (nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    let mid = left + (right - left) >> 1;
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  if (left >= nums.length || nums[left] !== target) return -1;

  return left;
}
