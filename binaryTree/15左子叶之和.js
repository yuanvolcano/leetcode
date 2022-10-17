// 计算给定二叉树的所有左叶子之和。

// 示例：

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

const sumOfLeftLeaves = function (root) {
  if (!root) return 0
  return findAllLeft(root)
}

function findAllLeft (node, res = 0) {
  if (!node) return res
  if (node.left) {
    res += node.left.val
  }
  let leftVal = findAllLeft(node.left, res)
  let rightVal = findAllLeft(node.right, 0)
  return leftVal + rightVal
}
