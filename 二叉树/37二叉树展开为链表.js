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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (root === null) return

  // 把左右子树拉平
  flatten(root.left)
  flatten(root.right)

  let left = root.left
  let right = root.right

  // 将左子树作为右子树
  root.left = null
  root.right = left

  let temp = root
  while (temp.right != null) {
    temp = temp.right;
  }
  temp.right = right;
};