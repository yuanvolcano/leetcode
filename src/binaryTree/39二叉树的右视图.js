// 199. 二叉树的右视图
// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 示例 1:

// 输入: [1,2,3,null,5,null,4]
// 输出: [1,3,4]
// 示例 2:

// 输入: [1,null,3]
// 输出: [1,3]
// 示例 3:

// 输入: []
// 输出: []
// 提示:

// 二叉树的节点个数的范围是 [0,100]
// -100 <= Node.val <= 100

const rightSideView = function (root) {
  const res = [];
  if (root === null) {
    return res;
  }

  const stack = [root];

  while (stack.length) {
    const levelLen = stack.length;
    res.push(stack[levelLen - 1].val);
    for (let i = 0; i < levelLen; i++) {
      const cur = stack.shift();
      if (cur.left !== null) {
        stack.push(cur.left);
      }

      if (cur.right !== null) {
        stack.push(cur.right);
      }
    }
  }

  return res;
};
