// 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

// 假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

// 你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。

// 输入：nums = [1,3,4,2,2]
// 输出：2

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums.lastIndexOf(nums[i]) !== i) {
      return nums[i];
    }
  }
};

// 快慢指针
var findDuplicate2 = function (nums) {
  let slow = 0,
    fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};

var findDuplicate3 = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    while (nums[i] !== i) {
      if (nums[i] === nums[nums[i]]) {
        return nums[i];
      }
      [nums[nums[i]], nums[i]] = [nums[i], nums[nums[i]]];
    }
  }
};
