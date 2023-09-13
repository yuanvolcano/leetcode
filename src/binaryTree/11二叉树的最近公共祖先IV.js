/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode[]} nodes
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, nodes) {
  const traverse = (node, values) => {
    if (!node) {
      return null;
    }
    if (values.includes(node.val)) {
      return node;
    }

    let left = traverse(node.left, values);
    let right = traverse(node.right, values);

    if (left !== null && right !== null) {
      return node;
    }

    return left !== null ? left : right;
  }

  const list = [];
  for (let node of nodes) {
    list.push(node.val);
  }
  return traverse(root, list);
};