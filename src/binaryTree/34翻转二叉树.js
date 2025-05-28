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
      return node;
    }
    let left = node.left;
    node.left = node.right;
    node.right = left;
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  return root;
};

var invertTree2 = function (root) {
  if (root === null) {
    return null;
  }

  const leftTemp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(leftTemp);

  return root;
};

const invertTree3 = function (root) {
  if (root === null) {
    return root;
  }
  const leftNode = root.left;
  const rightNode = root.right;

  root.right = leftNode;
  root.left = rightNode;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
