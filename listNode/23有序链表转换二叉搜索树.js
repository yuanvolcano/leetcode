// 给定一个单链表的头节点  head ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) {
    return null;
  }
  return build(head, null);
};

function build(left, right) {
  if (left === right) {
    return null;
  }
  const middle = getMiddle(left, right);
  const root = new TreeNode(middle.val);
  root.left = build(left, middle);
  root.right = build(middle.next, right);

  return root;
}

function getMiddle(left, right) {
  if (left === null) {
    return left;
  }
  let fast = slow = left;
  while (fast !== right && fast.next !== right) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}