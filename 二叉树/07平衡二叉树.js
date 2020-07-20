
// 实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。

/**
 * @param {Object} root 根节点
 * @returns {boolean}
 */
const isBalanced = function(root) {
  // 比较根节点
  if (!root) return true
  let left = getHeight(root.left)
  let right = getHeight(root.right)

  if (Math.abs(right - left) > 1) return false
  // 递归检查
  return isBalanced(root.left) && isBalanced(root.right)
}

function getHeight (node) {
  if (!node) return 0
  let left = getHeight(node.left), right = getHeight(node.right)
  return Math.max(left, right) + 1
}
