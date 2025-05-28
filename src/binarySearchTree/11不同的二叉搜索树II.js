// 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) {
    return [];
  }

  const memo = new Map();
  const build = (low, high) => {
    const res = [];
    if (low > high) {
      res.push(null);
      return res;
    }
    const itemStr = `${low}-${high}`;
    if (memo.has(itemStr)) {
      return memo.get(itemStr);
    }
    for (let i = low; i <= high; i++) {
      const left = build(low, i - 1);
      const right = build(i + 1, high);
      for (let leftChild of left) {
        for (let rightChild of right) {
          res.push(new TreeNode(i, leftChild, rightChild));
        }
      }
    }
    memo.set(itemStr, res);
    return res;
  };

  return build(1, n);
};
