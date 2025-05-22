const preTraversal = function (root) {
  const result = [];
  const preOrder = (rootNode) => {
    if (!rootNode) {
      return;
    }
    result.push(rootNode.val);
    preOrder(rootNode.left);
    preOrder(rootNode.right);
  };

  preOrder(root);
  return result;
};

const preTraversal2 = function (root) {
  const stack = [],
    res = [];

  while (root || stack.length) {
    while (root) {
      stack.push(root);
      res.push(root.val);
      root = root.left;
    }

    root = stack.pop();
    root = root.right;
  }

  return res;
};

const preTraversal3 = function (root) {
  const stack = [root],
    res = [];
  while (stack.length) {
    const item = stack.shift();
    if (!item) {
      continue;
    }
    if (item.right) {
      stack.unshift(item.right);
    }

    if (item.left) {
      stack.unshift(item.left);
    }

    if (item.val) {
      res.push(item.val);
    }
  }
  return res;
};

const root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: {
        val: 9,
        left: null,
        right: null,
      },
    },
    right: {
      val: 5,
      left: {
        val: 10,
        left: null,
        right: null,
      },
      right: {
        val: 11,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: {
        val: 12,
        left: null,
        right: null,
      },
      right: {
        val: 13,
        left: null,
        right: null,
      },
    },
    right: {
      val: 7,
      left: {
        val: 14,
        left: null,
        right: null,
      },
      right: {
        val: 15,
        left: null,
        right: null,
      },
    },
  },
};

// const result = preTraversal(root)
const result = preTraversal(root);
console.log(result);
