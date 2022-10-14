// 给你二叉搜索树的根节点 root ，同时给定最小边界low 和最大边界 high。通过修剪二叉搜索树，使得所有节点的值在[low, high]中。修剪树 不应该 改变保留在树中的元素的相对结构(即，如果没有被移除，原有的父代子代关系都应当保留)。 可以证明，存在 唯一的答案 。

// 所以结果应当返回修剪好的二叉搜索树的新的根节点。注意，根节点可能会根据给定的边界发生改变。

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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  if (root === null) {
    return null;
  }

  if (root.val < low) {
    // 直接返回 root.right，等于删除了左子树
    return trimBST(root.right, low, high);
  }

  if (root.val > high) {
    // 直接返回 root.left，等于删除了右子树
    return trimBST(root.left, low, high);
  }

  // 在闭合区间内，什么都不做
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
};