// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]

// 递归
// const inorderTraversal = function (root) {
//   if (!root) return []
//   return inorderTraversal(root.left).concat([root.val], inorderTraversal(root.right))
// }

// 迭代
const inorderTraversal = function (root) {
  const nums = [], stacks = []
  while (root || stacks.length) {
    while (root) {
      stacks.push(root)
      root = root.left
    }
    root = stacks.pop()
    nums.push(root.val)
    root = root.right
  }
  return nums
}


const tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

const result = inorderTraversal(tree)
console.log(result)
