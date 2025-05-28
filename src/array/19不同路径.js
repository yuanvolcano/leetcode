// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。

// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。

// 问总共有多少条不同的路径？

const map = new Map();
const uniquePaths = function (m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }
  const mapKey = `${m},${n}`;
  if (map.has(mapKey)) return map.get(mapKey);
  const mirroKey = `${n},${m}`;
  if (map.has(mirroKey)) return map.get(mirroKey);

  const uniqueVal = uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
  map.set(mapKey, uniqueVal);

  return uniqueVal;
};

const vertical = 23,
  horizon = 12;
const result = uniquePaths(vertical, horizon);
console.log(result);
