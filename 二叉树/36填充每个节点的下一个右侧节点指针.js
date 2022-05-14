/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// 采用层序遍历
var connect = function (root) {
  if (!root) {
    return root
  }
  const stack = [root]
  let stackLen, item
  while (stack.length) {
    stackLen = stack.length
    for (let i = 0; i < stackLen; i++) {
      item = stack.shift()
      if (i !== stackLen - 1) {
        item.next = stack[0]
      }
      if (item.left) stack.push(item.left)
      if (item.right) stack.push(item.right)
    }
  }

  return root
};