// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

const lowestCommonAncestor = function (root, p, q) {
  if (!root) return root
  let leftFlag = findChildNode(root.left, p) && findChildNode(root.left, q)
  let rightFlag = findChildNode(root.right, p) && findChildNode(root.right, q)
  if (!leftFlag && !rightFlag) {
    return root.val
  } else if (leftFlag) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (rightFlag) {
    return lowestCommonAncestor(root.right, p, q)
  }
}

const findChildNode = function (node, p) {
  if (!node) return false
  if (node.val === p) return true
  let leftHas = false, rightHas = false
  if (node.left) {
    leftHas = findChildNode(node.left, p)
  }
  if (node.right) {
    rightHas = findChildNode(node.right, p)
  }
  return leftHas || rightHas
}

const root = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null
    },
    right: {
      val: 8,
      left: null,
      right: null
    }
  },
}

const result = lowestCommonAncestor(root, 6, 4)
console.log(result)
