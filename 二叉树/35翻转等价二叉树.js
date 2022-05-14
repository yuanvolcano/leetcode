/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
  if (!((!root1 && !root2) ||
    (root1 && root2 && root1.val === root2.val))
  ) {
    return false
  } else if (!root1 && !root2) {
    return true
  } else {
    let leftLeft = flipEquiv(root1.left, root2.left)
    let leftRight = flipEquiv(root1.left, root2.right)
    let rightLeft = flipEquiv(root1.right, root2.left)
    let rigthRight = flipEquiv(root1.right, root2.right)

    return (leftLeft || leftRight) && (rightLeft || rigthRight)
  }
};