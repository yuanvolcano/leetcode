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
var maxPathSum = function (root) {
  let res = Number.MIN_SAFE_INTEGER
  const traverse = (node) => {
    if (!node) return 0

    const left = Math.max(0, traverse(node.left))
    const right = Math.max(0, traverse(node.right))
    res = Math.max(left + right + node.val, res)

    return Math.max(left, right) + node.val
  }
  traverse(root)
  return res
};

const root = {
  val: -10,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

const result = maxPathSum(root)
console.log(result)
