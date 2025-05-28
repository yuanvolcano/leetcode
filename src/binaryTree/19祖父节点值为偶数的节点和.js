// 给你一棵二叉树，请你返回满足以下条件的所有节点的值之和：

// 该节点的祖父节点的值为偶数。（一个节点的祖父节点是指该节点的父节点的父节点。）
// 如果不存在祖父节点值为偶数的节点，那么返回 0 。

const sumEvenGrandparent = function (root) {
  const arr = [];
  findGrandRoot(root, arr);
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
};

function findGrandRoot(node, arr = []) {
  if (node && node.val % 2 === 0) {
    if (node.left) {
      if (node.left.right) {
        arr.push(node.left.right.val);
      }
      if (node.left.left) {
        arr.push(node.left.left.val);
      }
      findGrandRoot(node.left, arr);
    }
    if (node.right) {
      if (node.right.right) {
        arr.push(node.right.right.val);
      }
      if (node.right.left) {
        arr.push(node.right.left.val);
      }
      findGrandRoot(node.right, arr);
    }
  } else if (node) {
    findGrandRoot(node.left, arr);
    findGrandRoot(node.right, arr);
  }
}

const treeObj = {
  val: 7,
  left: {
    val: 7,
    left: {
      val: 2,
      left: {
        val: 9,
        left: null,
        right: null,
      },
    },
    right: {
      val: 7,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  },
};
const res = sumEvenGrandparent(treeObj);
console.log(res);
