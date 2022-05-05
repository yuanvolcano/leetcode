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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const list = []
  const inorderTraverse = (node) => {
    if (!node) {
      return;
    }
    inorderTraverse(node.left)
    list.push(node.val)
    inorderTraverse(node.right)
  }

  inorderTraverse(root)

  return list[k - 1]
};

var kthSmallest2 = function (root, k) {
  let res = 0
  let rank = 0
  const traverse = (node) => {
    if (!node) return

    traverse(node.left)
    rank++
    if (rank === k) {
      res = node.val
      return
    }
    traverse(node.right)
  }

  traverse(root)
  return res
}

const root = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2
    }
  },
  right: {
    val: 4,
    left: null,
    right: null,
  }
}

const result = kthSmallest2(root, 1)
console.log(result)
