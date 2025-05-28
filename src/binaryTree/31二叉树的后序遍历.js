const postTraversal = function (root) {
  const result = [];
  const postOrder = (rootNode) => {
    if (!rootNode) {
      return;
    }
    postOrder(rootNode.left);
    postOrder(rootNode.right);
    result.push(rootNode.val);
  };

  postOrder(root);
  return result;
};

const postTraversal2 = function (root) {
  const result = [],
    stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      result.unshift(root.val);
      root = root.right;
    }
    root = stack.pop();
    root = root.left;
  }
  return result;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

// const result = postTraversal(root)
const result = postTraversal2(root);
console.log(result);
