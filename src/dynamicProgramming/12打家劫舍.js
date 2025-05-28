// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

// 示例 1：

// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const len = nums.length;
  const dp = Array.from(new Array(len), () => new Array(2).fill(0));

  // dp[i][k] i 代表房子，0 <= i < nums.length, k 代表抢或者不抢， k = 1 | 0
  for (let i = 0; i < len; i++) {
    if (i === 0) {
      dp[i][0] = 0;
      dp[i][1] = nums[i];
      continue;
    }
    if (i === 1) {
      dp[i][0] = dp[i - 1][1];
      dp[i][1] = nums[i];
      continue;
    }
    dp[i][1] = Math.max(dp[i - 2][1] + nums[i], dp[i - 1][0] + nums[i]);
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1]);
  }
  return Math.max(dp[len - 1][1], dp[len - 1][0]);
};

var rob2 = function (nums) {
  const len = nums.length;
  // dp_i 表示从 i 开始抢劫，抢到的最多钱
  let dp_i_1 = 0,
    dp_i_2 = 0,
    dp_i = 0;
  for (let i = len - 1; i >= 0; i--) {
    dp_i = Math.max(dp_i_1, nums[i] + dp_i_2);
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i;
};

const nums = [2, 1, 1, 2];
const result = rob2(nums);
console.log(result);
