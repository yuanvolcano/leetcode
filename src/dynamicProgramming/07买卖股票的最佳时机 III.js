// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

const maxProfit = function (prices) {
  const len = prices.length;
  let dp_i_2_0 = 0,
    dp_i_2_1 = -Infinity;
  let dp_i_1_0 = 0,
    dp_i_1_1 = -Infinity;

  for (let i = 0; i < len; i++) {
    dp_i_2_0 = Math.max(dp_i_2_0, dp_i_2_1 + prices[i]);
    dp_i_2_1 = Math.max(dp_i_2_1, dp_i_1_0 - prices[i]);
    dp_i_1_0 = Math.max(dp_i_1_0, dp_i_1_1 + prices[i]);
    dp_i_1_1 = Math.max(dp_i_1_1, -prices[i]);
  }
  return dp_i_2_0;
};

const maxProfit2 = function (prices) {
  const len = prices.length;
  const dp = Array.from(new Array(len), () => Array.from(new Array(3), () => new Array(2).fill(0)));

  for (let i = 0; i < len; i++) {
    for (let k = 1; k < 3; k++) {
      // base case
      if (i === 0) {
        dp[i][k][0] = 0;
        dp[i][k][1] = -prices[i];
        continue;
      }

      dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]);
      dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i]);
    }
  }
  return dp[len - 1][2][0];
};

const list = [1];
const res = maxProfit2(list);
console.log(res);
