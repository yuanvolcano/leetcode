// 给定一个不为空的二叉搜索树和一个目标值 target，请在该二叉搜索树中找到最接近目标值 target 的数值。

// 注意：

// 给定的目标值 target 是一个浮点数
// 题目保证在该二叉搜索树中只会存在一个最接近目标值的数
// 示例：

// 输入: root = [4,2,5,1,3]，目标值 target = 3.714286

//     4
//    / \
//   2   5
//  / \
// 1   3

// 输出: 4



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} node
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let low = Number.MIN_SAFE_INTEGER, high = Number.MAX_SAFE_INTEGER;
  const traverse = (node) => {
    if (!node) {
      return;
    }

    if (node.val === low || node.val === high) {
      return;
    }

    if (node.val <= target) {
      low = Math.max(node.val, low);
      traverse(node.right, target)
    }

    if (node.val >= target) {
      high = Math.min(node.val, high);
      traverse(node.left, target);
    }
  }
  traverse(root, target);
  return (high - target) > (target - low) ? low : high;
};