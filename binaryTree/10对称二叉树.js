// 给定一个二叉树，检查它是否是镜像对称的。

// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

//    1
//   / \
//  2   2
// / \ / \
//3  4 4  3

// 把二叉树按中序展开成数组，然后遍历数组判断是否arr[arr.length - 1 - i] === arr[i]
const isSymmetric = function (root) {
  if (!root) return true
  const res = []
  genArr(root, res, 1)
  let i = 0, j = res.length - 1
  while (i < j) {
    if (res[i] !== res[j]) {
      return false
    }
    i++
    j--
  }
  return true
}

function genArr (node, arr, level = 1) {
  if (node.left) {
    genArr(node.left, arr, level + 1)
  }

  arr.push(`${node.val}~${level}`)

  if (node.right) {
    genArr(node.right, arr, level + 1)
  }
}
