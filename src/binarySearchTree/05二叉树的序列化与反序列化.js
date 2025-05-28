/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// 前序遍历
var serialize = function (root) {
  if (!root) {
    return '#';
  }
  const leftVal = serialize(root.left);
  const rightVal = serialize(root.right);
  return `${root.val},${leftVal},${rightVal}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const list = data.split(',');
  const treeNode = buildTree(list);
  return treeNode;
};

const buildTree = function (list) {
  if (!list.length) {
    return null;
  }
  let item = list.shift();
  if (item === '#') return null;
  let root = new TreeNode(item);
  root.left = buildTree(list);
  root.right = buildTree(list);

  return root;
};

function TreeNode(val) {
  this.val = val != null ? val : null;
  this.left = null;
  this.right = null;
}

// 后序遍历
var serialize = function (root) {
  if (!root) {
    return '#';
  }
  const leftVal = serialize(root.left);
  const rightVal = serialize(root.right);
  return `${leftVal},${rightVal},${root.val},`;
};

var deserialize2 = function (data) {
  const list = data.split(',');
  const treeNode = buildTree(list);
  return treeNode;
};

const buildTree2 = function (list) {
  if (!list.length) {
    return null;
  }
  let item = list.pop();
  if (item === '#') return null;
  let root = new TreeNode(item);
  root.right = buildTree(list);
  root.left = buildTree(list);

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

const root = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 7,
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
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    },
  },
};

const serRes = serialize(root);
const treeNode = deserialize(serRes);
console.log(serRes);
