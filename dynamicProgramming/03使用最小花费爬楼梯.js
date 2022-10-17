// 数组的每个索引作为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。

// 每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。

// 您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。

const minCostClimbingStairs = function (cost) {
  const d = []
  d[0] = cost[0]
  d[1] = cost[1]
  for (var i = 2, len = cost.length; i < len + 1; i++) {
    if (i === len) {
      d[i] = Math.min(d[i - 1], d[i - 2])
    } else {
      d[i] = Math.min(d[i - 1] + cost[i], d[i - 2] + cost[i])
    }
  }
  return d[i - 1]
}

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

const res = minCostClimbingStairs(cost)
console.log(res)