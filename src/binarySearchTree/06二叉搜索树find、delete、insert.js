class TreeNode {
  constructor(val) {
    this.val = val !== void 0 ? val : null;
    this.left = null;
    this.right = null;
  }
}

function Tree(val) {
  this.root = null;
}

Tree.prototype.find = function (val) {
  return traverse(this.root, val)
}

function traverse(node, val) {
  if (!node) return null
  if (node.val === val) return node
  else if (node.val < val) return traverse(node.right, val)
  else if (node.val > val) return traverse(node.left, val)
}

Tree.prototype.insert = function (val) {
  traverseInsert(this.root, val)
}

function traverseInsert(node, val, parent, key) {
  if (node === null || node.val === null) {
    return node = new Node(val);
  }

  if (node.val === val) {
    return node;
  } else if (node.val < val) {
    traverseInsert(node.right, val, node, 'right');
  } else {
    traverseInsert(node.left, val, node, 'left');
  }
}

Tree.prototype.delete = function (val) {
  let node = this.find(val);
  if (node === null) {
    return this.root;
  }

  if (!node.left && !node.right) {
    node.val = null;
  } else if (node.left) {
    node = node.left;
  } else if (node.right) {
    node = node.right;
  } else {
    // 左分支的最右侧节点
    let left = node.left;
    while (left.right) {
      left = left.right;
    }
    const lastVal = left.val;
    // 有分支的最左侧节点
    // let right = node.right
    // while (right.left) {
    //   right = right.left
    // }
    // const lastVal = right.val
    this.delete(lastVal);
    node.val = lastVal;
  }
}

const t = new Tree();
// t.insert(5)
t.insert(3)
t.insert(6)
t.insert(2)
t.insert(4)
t.insert(7)
t.insert(8)
t.insert(9)
t.insert(0)
t.insert(1)
t.delete(3)
console.log(t)
