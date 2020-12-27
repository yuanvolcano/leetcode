// 实现一个函数，检查一棵二叉树是否为二叉搜索树。

const isValidBST = function (root) {
  const result = []
  milldeOrder(root, result)
  for (let i = 1, len = result.length; i < len; i++) {
    if (result[i - 1] > result[i]) {
      return false
    }
  }
  return true
}

function milldeOrder (root, list) {
  if (!root) return list

  if (root.left) {
    milldeOrder(root.left, list)
  }

  if (root.val !== null) {
    list.push(root.val)
  }

  if (root.right) {
    milldeOrder(root.right, list)
  }
}

const tree = {
  val: 5,
  left: {
    val: 1
  },
  right: {
    val: 4,
    left: {
      val: 3
    },
    right: {
      val: 6
    }
  }
}

const res = isValidBST(tree)
console.log(res)
