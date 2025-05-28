// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

// 示例 1：

// 输入：nums = [2,3,2]
// 输出：3
// 解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。

var rob = function (nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  const dp1 = Array.from(new Array(len), () => new Array(2).fill(0));
  const dp2 = Array.from(new Array(len), () => new Array(2).fill(0));
  let i = 0;

  // dp[i][k] i 代表房子，0 <= i < nums.length, k 代表抢或者不抢， k = 1 | 0
  for (i = 0; i < len - 1; i++) {
    if (i === 0) {
      dp1[i][0] = 0;
      dp1[i][1] = nums[i];
      continue;
    }
    if (i === 1) {
      dp1[i][0] = dp1[i - 1][1];
      dp1[i][1] = nums[i];
      continue;
    }
    dp1[i][1] = Math.max(dp1[i - 2][1] + nums[i], dp1[i - 1][0] + nums[i]);
    dp1[i][0] = Math.max(dp1[i - 1][1], dp1[i - 2][1]);
  }

  for (i = 1; i < len; i++) {
    if (i === 1) {
      dp2[i][0] = dp2[i - 1][1];
      dp2[i][1] = nums[i];
      continue;
    }
    dp2[i][1] = Math.max(dp2[i - 2][1] + nums[i], dp2[i - 1][0] + nums[i]);
    dp2[i][0] = Math.max(dp2[i - 1][1], dp2[i - 2][1]);
  }

  return Math.max(dp1[len - 2][1], dp1[len - 2][0], dp2[len - 1][1], dp2[len - 1][0]);
};

const nums = [200, 3, 140, 20, 10];
const result = rob(nums);
console.log(result);
