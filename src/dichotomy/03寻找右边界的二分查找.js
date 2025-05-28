const searchRight = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = (left + (right - left)) >> 1;
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  if (right >= nums.length || right < 0 || nums[right] !== target) return -1;
  return right;
};

const searchRight2 = function (nums, target) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = (left + (right - left)) >> 1;
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }

  if (left == 0) return -1;

  return nums[left - 1] == target ? left - 1 : -1;
};
