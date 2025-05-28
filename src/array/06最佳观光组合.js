// 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。
// 一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。
// 返回一对观光景点能取得的最高分。

// 暴力破解
const maxScoreSightseeingPair = function (arr) {
  let max = 0,
    len = arr.length,
    item = -1;
  for (let i = 0; i < len - 1; i++) {
    for (let j = len - 1; j > i; j--) {
      item = arr[i] + arr[j] + i - j;
      if (item > max) max = item;
    }
  }
  return max;
};

// 可以拆解为 A[i] + i 和 A[j] - j
// 只要分别找到最大的就可以了
const maxScoreSightseeingPair1 = function (arr) {
  let base = arr[0],
    max = -Infinity,
    item = 0;
  for (let i = 1, len = arr.length; i < len; i++) {
    item = base + arr[i] - i;
    if (item > max) max = item;
    if (arr[i] + i > base) base = arr[i] + i;
  }
  return max;
};

const arr = [8, 1, 5, 2, 6];
let res = maxScoreSightseeingPair1(arr);
console.log(res);
