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
  // 定义：将以 root 为根的树拉平为链表
  // base case
  if (root === null) return;

  // 把左右子树拉平
  flatten(root.left);
  flatten(root.right);

  // *** 后序遍历位置 ***
  // 1、左右子树已经被拉平成一条链表
  let left = root.left;
  let right = root.right;

  // 2、将左子树作为右子树
  root.left = null;
  root.right = left;

  // 3、将原先的右子树接到当前右子树的末端
  let temp = root;
  while (temp.right != null) {
    temp = temp.right;
  }
  temp.right = right;
};
