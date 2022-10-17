// 给定二叉树的根节点 root，找出存在于 不同 节点 A 和 B 之间的最大值 V，其中 V = |A.val - B.val|，且 A 是 B 的祖先。

// （如果 A 的任何子节点之一为 B，或者 A 的任何子节点是 B 的祖先，那么我们认为 A 是 B 的祖先）

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxAncestorDiff = function (root) {
  let res = 0;

  const findMinMax = (node) => {
      if (!node) {
          return [Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
      }

      const leftMinMax = findMinMax(node.left);
      const rightMinMax = findMinMax(node.right);

      const minVal = Math.min(node.val, leftMinMax[0], rightMinMax[0]);
      const maxVal = Math.max(node.val, leftMinMax[1], rightMinMax[1]);

      res = Math.max(res, maxVal - node.val, node.val - minVal);

      return [minVal, maxVal];
  }

  findMinMax(root);
  return res;
};