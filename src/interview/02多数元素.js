// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 进阶：
// 尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

/**
 * @param {number[]} nums
 * @return {number}
 */

// 通过对象，统计处各个数出现的最大次数，然后找出最大的那个
const majorityElement1 = function (nums) {
  const res = {},
    n = nums.length;
  for (let i = 0; i < n; i++) {
    if (!res[nums[i]]) {
      res[nums[i]] = 0;
    }
    res[nums[i]] += 1;
  }

  const keys = Object.keys(res);
  for (let j = 0, len = keys.length; j < len; j++) {
    if (res[keys[j]] > n / 2) {
      return Number(keys[j]);
    }
  }
};

// 摩尔投票法：从第一个数开始算起，初始值为 1，遇到相同的 +1，遇到不同的 -1，减到0换下个数重新开始计数
const majorityElement1 = function (nums) {
  let count = 1,
    diff = nums[0];
  for (let i = 1, len = nums.length; i < len; i++) {
    if (diff === nums[i]) {
      count++;
    } else {
      count--;
      if (count === 0) {
        diff = nums[i + 1];
      }
    }
  }
  return diff;
};
