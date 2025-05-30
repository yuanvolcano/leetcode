// 238. 除自身以外数组的乘积

// 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

// 题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

// 请 不要使用除法，且在 O(n) 时间复杂度内完成此题。

// 示例 1:

// 输入: nums = [1,2,3,4]
// 输出: [24,12,8,6]
// 示例 2:

// 输入: nums = [-1,1,0,-3,3]
// 输出: [0,0,9,0,0]
// 提示：

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
// 进阶：你可以在 O(1) 的额外空间复杂度内完成这个题目吗？（ 出于对空间复杂度分析的目的，输出数组 不被视为 额外空间。）

// 题目来源：力扣 238. 除自身以外数组的乘积。

const productExceptSelf = function (nums) {
  const len = nums.length;

  const prefixList = new Array(len).fill(1);
  const suffixList = new Array(len).fill(1);

  prefixList[0] = nums[0];
  for (let i = 1; i < len; i++) {
    // prefixList[i] 表示 nums 中 0 …… i 的乘积
    prefixList[i] = prefixList[i - 1] * nums[i];
  }

  suffixList[len - 1] = nums[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    // suffix 表示 i …… n 的乘积
    suffixList[i] = suffixList[i + 1] * nums[i];
  }

  const res = [];
  res[0] = suffixList[1];
  res[len - 1] = prefixList[len - 2];
  for (let i = 1; i < len - 1; i++) {
    res[i] = prefixList[i - 1] * suffixList[i + 1];
  }

  return res;
};

const nums = [1, 2, 3, 4];
const res = productExceptSelf(nums);
console.log(res);
