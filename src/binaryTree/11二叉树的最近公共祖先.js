// 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

// 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

const lowestCommonAncestor2 = function (root, p, q) {
  return find(root, p, q);
};

const find = function (root, p, q) {
  if (root == null) {
    return null;
  }

  if (root.val === p || root.val === q) {
    return root;
  }

  let left = find(root.left, p, q);
  let right = find(root.right, p, q);

  if (left !== null && right !== null) {
    return root;
  }

  return left !== null ? left : right;
};

const root = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: {
        val: 5,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 8,
    left: {
      val: 7,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    },
  },
};

const result = lowestCommonAncestor(root, 2, 4);
console.log(result);
