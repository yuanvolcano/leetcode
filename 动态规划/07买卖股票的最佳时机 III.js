// 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

// 设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

const maxProfit = function (prices) {
  if (!prices.length) return
  const len = prices.length
  let dp_i_2_0 = 0, dp_i_2_1 = -Infinity
  let dp_i_1_0 = 0, dp_i_1_1 = -Infinity

  for (let i = 0; i < len; i++) {
    dp_i_2_0 = Math.max(dp_i_2_0, dp_i_2_1 + prices[i])
    dp_i_2_1 = Math.max(dp_i_2_1, dp_i_1_0 - prices[i])
    dp_i_1_0 = Math.max(dp_i_1_0, dp_i_1_1 + prices[i])
    dp_i_1_1 = Math.max(dp_i_1_1, - prices[i])
  }˜
  return dp_i_2_0
}

const list = [7, 1, 5, 3, 6, 4]
const res = maxProfit(list)
console.log(res)