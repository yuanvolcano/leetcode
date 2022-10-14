// 实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器：
// BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
// boolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。
// int next()将指针向右移动，然后返回指针处的数字。
// 注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。

// 你可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 的中序遍历中至少存在一个下一个数字。



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
  if (this.curIndex === null || this.curIndex >= this.orderList.length) return false;
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