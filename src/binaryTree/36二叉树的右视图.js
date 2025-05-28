// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

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
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return [];
  }
  const stack = [root],
    res = [];
  while (stack.length) {
    const stackLen = stack.length;
    for (let i = 0; i < stackLen; i++) {
      const item = stack.shift();
      if (i === stackLen - 1) {
        res.push(item.val);
      }
      if (item.left) {
        stack.push(item.left);
      }
      if (item.right) {
        stack.push(item.right);
      }
    }
  }
  return res;
};
