// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

// 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
/*

  通用公式：

    dp[i][k][0] = max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
    dp[i][k][1] = max(dp[i - 1][k][1], dp[i -1][k - 1][0] - price[i])
                = max(dp[i - 1][k][1], dp[i -1][k][0] - price[i])

    因为可以买卖无限次，k值非变量，所以上面公式变形

    dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = max(dp[i - 1][k][1], dp[i -1][k - 1][0] - price[i])
                = max(dp[i - 1][1], dp[i - 1][0] - price[i])

  base case:

    dp[i][0] = dp[-1][0] = 0
    dp[-1][1] = dp[-1][1] = -Infinity
*/

const maxProfit = function (prices) {
  if (!prices.length) return

  const len = prices.length
  let i = 0, dp = Array.from(new Array(len), () => new Array(2).fill(0))

  for (; i < len; i++) {
    if (i === 0) {
      dp[i][0] = 0
      dp[i][1] = -prices[i]
      continue
    }
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
  }

  return dp[i - 1][0]
}


const maxProfit2 = function (prices) {
  if (!prices.length) return

  const len = prices.length
  let i = 0, d_1_0 = 0, d_1_1 = -Infinity

  for (; i < len; i++) {
    d_1_0 = Math.max(d_1_0, d_1_1 + prices[i])
    d_1_1 = Math.max(d_1_1, d_1_0 - prices[i])
  }

  return d_1_0
}

const list = [1,2,3,4,5]
const res = maxProfit2(list)
console.log(res)