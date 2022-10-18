// 给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const memo = new Array(n + 1).fill(0).map(i => new Array(n + 1).fill(0));
  const count = (low, high) => {
    if (low > high) {
      return 1;
    }
    if (memo[low][high] !== 0) {
      return memo[low][high];
    }
    let res = 0;
    for (let i = low; i <= high; i++) {
      let left = count(low, i - 1);
      let right = count(i + 1, high);
      res += left * right;
    }
    memo[low][high] = res;
    return res;
  }
  return count(1, n);
};

const res = numTrees(3);
console.log(res);