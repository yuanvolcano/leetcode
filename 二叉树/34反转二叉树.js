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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const traverse = (node) => {
    if (!node) {
      return node
    }
    let left = node.left
    node.left = node.right
    node.right = left
    traverse(node.left)
    traverse(node.right)
  }

  traverse(root)
  return root
};