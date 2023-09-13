// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

const levelOrder = function (root) {
  const res = []
  if (!root) return res
  const stack = []
  stack.push(root)
  let stackLen, item
  while (stack.length) {
    // 保存当前 level 的长度
    stackLen = stack.length
    res.push([])
    for (let i = 0; i < stackLen; i++) {
      item = stack.shift()
      res[res.length - 1].push(item.val)
      if (item.left) stack.push(item.left)
      if (item.right) stack.push(item.right)
    }
  }
  return res
}

const root = {
  val: 7,
  left: {
    val: 3,
    left: null,
    right: null
  },
  right: {
    val: 15,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: {
      val: 20,
      left: null,
      right: null
    }
  }
}
