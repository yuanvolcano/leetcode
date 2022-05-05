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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0
  const maxDepth = (node) => {
    if (!node) {
      return 0
    }
    let leftDepth = maxDepth(node.left)
    let rightDepth = maxDepth(node.right)
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth)

    return Math.max(leftDepth, rightDepth) + 1
  }
  maxDepth(root)
  return maxDiameter
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null
      },
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: null
  }
}

const result = diameterOfBinaryTree(root)
console.log(result)