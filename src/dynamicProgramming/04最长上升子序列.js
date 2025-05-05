// 给定一个无序的整数数组，找到其中最长上升子序列的长度。

// 示例:

// 输入: [10,9,2,5,3,7,101,18]
// 输出: 4
// 解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。

const lengthOfLIS = function (nums) {
  const len = nums.length;
  const dp = new Array(len).fill(1);

  // 找到每个索引对应的最长子序列
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  // 找到 dp 中的最大值
  let res = 0;
  for (let m = 0; m < len; m++) {
    res = Math.max(res, dp[m]);
  }
  return res;
};

const list = [10, 9, 2, 5, 3, 7, 101, 18];
const result = lengthOfLIS(list);
console.log(result);
