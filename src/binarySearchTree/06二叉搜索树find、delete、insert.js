class Node {
  constructor(val) {
    this.val = val !== void 0 ? val : null
    this.left = null
    this.right = null
  }
}

function Tree(val) {
  this.root = new Node(val)
}

Tree.prototype.find = function (val) {
  return travser(this.root, val)
}

function travser(node, val) {
  if (!node) return null
  if (node.val === val) return node
  else if (node.val < val) return travser(node.right, val)
  else if (node.val > val) return travser(node.left, val)
}

Tree.prototype.insert = function (val) {
  travserInsert(this.root, val)
}

function travserInsert(node, val) {
  if (node === null) {
    return new Node(val);
  }
  if (node.val === val) {
    return;
  } else if (node.val < val) {
    travserInsert(node.right, val)
  } else {
    travserInsert(node.left, val)
  }
}

Tree.prototype.delete = function (val) {
  let node = this.find(val)
  if (!node) return this.root
  if (!node.left && !node.right) {
    node.val = null
  } else if (node.left) {
    node = node.left
  } else if (node.right) {
    node = node.right
  } else {
    // 左分支的最右侧节点
    let left = node.left
    while (left.right) {
      left = left.right
    }
    const lastVal = left.val
    // 有分支的最左侧节点
    // let right = node.right
    // while (right.left) {
    //   right = right.left
    // }
    // const lastVal = right.val
    this.delete(lastVal)
    node.val = lastVal
  }
}

const t = new Tree()
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
