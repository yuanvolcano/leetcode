// 给定一个 N 叉树，返回其节点值的后序遍历。

// 递归法
const postorder = function (root) {
  if (!root) return []

  const res = []
  pushChild(root, res)
  return res
}

function pushChild (node, arr = []) {
  if (node.val !== null) {
    arr.unshift(node.val)
  }
  while (node.children && node.children.length) {
    let item = node.children.pop()
    pushChild(item, arr)
  }
}

// 出入栈
const postorder2 = function (root) {
  if (!root) return []

  const stack = []
  const res = []
  stack.push(root)

  while (stack.length) {
    let node = stack.shift()
    if (node.val !== null) {
      res.unshift(node.val)
    }
    if (node.children) {
      while (node.children.length) {
        let item = node.children.shift()
        stack.unshift(item)
      }
    }
  }
  return res
}
