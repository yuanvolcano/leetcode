// 实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器。

// 调用 next() 将返回二叉搜索树中的下一个最小的数。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
const BSTIterator = function (root) {
  this.rootTree = root
  this.orderList = []
  this.curIndex = null
  this.init()
}

BSTIterator.prototype.init = function () {
  const stack = []
  if (this.rootTree) {
    stack.push(this.rootTree)
    this.curIndex = -1
  }

  while (stack.length) {
    let item = stack.shift()
    this.orderList.push(item.val)
    if (item.left) {
      stack.push(item.left)
    }
    if (item.right) {
      stack.push(item.right)
    }
  }
  this.orderList.sort((a, b) => a - b)

}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.curIndex === null) return null
  if (this.curIndex < this.orderList.length - 1) return this.orderList[++this.curIndex]
}

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  if (this.curIndex === null) return false
  if (this.curIndex < this.orderList.length - 1) return true
  return false
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

const root = {
  val: 7,
  left: {
    val: 3,
    left: null,
    right: null
  },
  right: {
    val: 15,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: {
      val: 20,
      left: null,
      right: null
    }
  }
}

const i = new BSTIterator(root)

let r1 = i.next()
let r2 = i.hasNext()
let r3 = i.next()
let r4 = i.next()
let r5 = i.next()
let r6 = i.next()
let r7 = i.next()
let r8 = i.hasNext()

console.log(r1)
console.log(r2)
console.log(r3)
console.log(r4)
console.log(r5)
console.log(r6)
console.log(r7)
console.log(r8)