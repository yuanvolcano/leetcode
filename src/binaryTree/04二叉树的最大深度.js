// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

const maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  const nums = [];
  genArr(nums, root, 1);
  let max = Math.max.apply(null, nums);
  return max;
};

function genArr(nums, n, level) {
  if (n.left !== null) {
    genArr(nums, n.left, level + 1);
  }

  nums.push(level);

  if (n.right !== null) {
    genArr(nums, n.right, level + 1);
  }
}

const maxDepth2 = function (root) {
  const traverse = (node, level) => {
    if (!node) {
      return level;
    }
    let left = traverse(node.left, level + 1);
    let right = traverse(node.right, level + 1);
    return Math.max(left, right);
  };

  return traverse(root, 0);
};

const maxDepth3 = function (root) {
  if (!root) {
    return 0;
  }
  let leftDepth = maxDepth3(root.left);
  let rightDepth = maxDepth3(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: {
        val: 6,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: null,
  },
};

const result = maxDepth3(root);
console.log(result);
