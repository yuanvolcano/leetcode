// 给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.

const findPairs = function (nums, k) {
  if (k < 0) return 0;
  let diff = new Set(),
    saw = new Set();
  for (let i of nums) {
    if (saw.has(i - k)) {
      diff.add(i - k);
    }
    if (saw.has(i + k)) {
      diff.add(i);
    }
    saw.add(i);
  }
  return diff.size;
};

const nums = [6, 5, 3, 4, 2, 1],
  k = 1;
let res = findPairs(nums, k);
console.log(res);
