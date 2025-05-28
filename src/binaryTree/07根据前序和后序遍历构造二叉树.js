// 给定两个整数数组，preorder 和 postorder ，其中 preorder 是一个具有 无重复 值的二叉树的前序遍历，postorder 是同一棵树的后序遍历，重构并返回二叉树。

// 如果存在多个答案，您可以返回其中 任何 一个。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  if (pre.length == 0) {
    return null;
  }

  let tmp = pre[0];
  let index = post.indexOf(pre[1]);
  let root = new TreeNode(tmp);
  root.left = constructFromPrePost(pre.slice(1, index + 2), post.slice(0, index + 1));
  root.right = constructFromPrePost(pre.slice(index + 2), post.slice(index + 1, post.length - 1));
  return root;
};
