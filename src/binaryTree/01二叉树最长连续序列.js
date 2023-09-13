// 给你一棵指定的二叉树的根节点 root ，请你计算其中 最长连续序列路径 的长度。

// 最长连续序列路径 是依次递增 1 的路径。该路径，可以是从某个初始节点到树中任意节点，通过「父 - 子」关系连接而产生的任意路径。且必须从父节点到子节点，反过来是不可以的。

// 输入：root = [1,null,3,2,4,null,null,null,5]
// 输出：3
// 解释：当中，最长连续序列是 3-4-5 ，所以返回结果为 3 。

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
var longestConsecutive = function (root) {
  let res = 0;
  const findLong = (node, len, target) => {
    if (!node) {
      return 0;
    }

    if (node.val - 1 === target) {
      len++
    } else {
      len = 1
    }


    findLong(node.left, len, node.val);
    findLong(node.right, len, node.val);
    res = Math.max(len, res);
  }

  findLong(root, 1, Number.MIN_SAFE_INTEGER);
  return res;
};