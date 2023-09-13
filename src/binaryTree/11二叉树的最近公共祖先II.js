// 给定一棵二叉树的根节点 root，返回给定节点 p 和 q 的最近公共祖先（LCA）节点。如果 p 或 q 之一 不存在 于该二叉树中，返回 null。树中的每个节点值都是互不相同的。

// 根据维基百科中对最近公共祖先节点的定义：“两个节点 p 和 q 在二叉树 T 中的最近公共祖先节点是 后代节点 中既包括 p 又包括 q 的最深节点（我们允许 一个节点为自身的一个后代节点 ）”。一个节点 x 的 后代节点 是节点 x 到某一叶节点间的路径中的节点 y。

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (node, p, q) {
  let hasP = false, hasQ = false;

  function find (root, p, q) {
    if (root === null) {
      return null
    }

    let left = find(root.left, p, q);
    let right = find(root.right, p, q);

    if (left !== null && right !== null) {
      return root;
    }

    if (root.val === p || root.val === q) {
      if (root.val === p) {
        hasP = true;
      }
      if (root.val === q) {
        hasQ = true;
      }
      return root;
    }

    return left !== null ? left : right;
  }

  const res = find(node, p, q);
  if (hasP && hasQ) {
    return res;
  }

  return null;
};



const root = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: 5,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 7,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  },
};


const result = lowestCommonAncestor(root, 2, 8)
console.log(result);