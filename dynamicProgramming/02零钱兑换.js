// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

// 你可以认为每种硬币的数量是无限的。

const coinChange = function (coins, amount) {
  const map = new Map()
  function fn (n) {
    if (n === 0) return 0
    if (n < 0) return -1
    if (map.has(n)) return map.get(n)

    let res = Infinity, preVal
    for (const coin of coins) {
      preVal = fn(n - coin)
      if (preVal === -1) continue
      res = Math.min(res, 1 + preVal)
    }
    res = res === Infinity || res === -1 ? -1 : res
    map.set(n, res)
    return res
  }
  return fn(amount)
}

const coinChange2 =  function (coins, amount) {
  // 初始值为 amount + 1 ，因为凑成 amount 金额的硬币数最多只可能等于 amount（全用 1 元面值的硬币
  const dp = new Array(amount + 1).fill(amount + 1)
  // amout 为 0 时，硬币数为 0
  dp[0] = 0
  for (let i = 0, len = dp.length; i < len; i++) {
    for (let coin of coins) {
      if (i - coin < 0) {
        continue
      }
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount]
}

const result = coinChange2([1, 2, 5], 11)
console.log(result)

