// 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

// 实现 Solution class:

// Solution(int[] nums) 使用整数数组 nums 初始化对象
// int[] reset() 重设数组到它的初始状态并返回
// int[] shuffle() 返回数组随机打乱后的结果

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
  this.origal = JSON.parse(JSON.stringify(nums))
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums = this.origal;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const nums = this.nums
  for (let i = 0, randomIndex = 0, len = this.nums.length; i < len; i++) {
    randomIndex = Math.floor(Math.random() * len);
    if (randomIndex !== i) {
      [nums[i], nums[randomIndex]] = [nums[randomIndex], nums[i]]
    }
  }
  return this.nums;
};

const s = new Solution([1, 2, 3])
s.shuffle()
s.reset()