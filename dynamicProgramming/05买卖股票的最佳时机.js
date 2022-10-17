// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

// 注意：你不能在买入股票前卖出股票。

// 0 代表没有持有， 1 代表持有

/*
  通用case:

    有三个变量，prices 0 <= i < price.length, 交易次数 0 <=  k <= K, 持有状态 0 | 1

    dp[i][1][0] = max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i])
    dp[i][1][1] = max(dp[i - 1][1][1], dp[i - 1][0][0] - prices[i])
                = max(dp[i - 1][1][1], - prices[i])

 base case :
    dp[-1][k][0] = dp[i][0][0] = 0

    dp[-1][k][1] = dp[i][0][1] = -Infinity
*/

const maxProfit = function (prices) {
  if (!prices.length) return 0
  const len = prices.length, dp = Array.from(new Array(len), () => new Array(2).fill(0))
  let i = 0
  for (; i < len; i++) {
    if (i === 0) {
      dp[0][0] = 0
      dp[0][1] = -prices[i]
      continue
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
  }
  return dp[i - 1][0]
}

const maxProfit2 = function (prices) {
  if (!prices.length) return 0
  const len = prices.length
  let i = 0, dp_i_0 = 0, dp_i_1 = -Infinity
  for (; i < len; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, - prices[i])
  }
  return dp_i_0
}

const list = [7, 1, 5, 3, 6, 4]
const res = maxProfit2(list)
console.log(res)