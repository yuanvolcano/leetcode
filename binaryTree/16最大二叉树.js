// 给定一个不重复的整数数组 nums 。 最大二叉树 可以用下面的算法从 nums 递归地构建:

// 创建一个根节点，其值为 nums 中的最大值。
// 递归地在最大值 左边 的 子数组前缀上 构建左子树。
// 递归地在最大值 右边 的 子数组后缀上 构建右子树。
// 返回 nums 构建的 最大二叉树 。

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) {
    return null
  }
  const maxIndex = getMaxIndex(nums, 0, nums.length - 1)
  const root = new TreeNode(nums[maxIndex])
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1))
  return root
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

function getMaxIndex(nums, start, end) {
  let max = nums[start], maxIndex = start
  while (start <= end) {
    if (nums[start] > max) {
      max = nums[start]
      maxIndex = start
    }
    start++
  }
  return maxIndex
}

const list = [3, 2, 1, 6, 0, 5]
const result = constructMaximumBinaryTree(list)
console.log(result)