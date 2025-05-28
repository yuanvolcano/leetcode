/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSubPath = function (head, root) {
  const rootFlag = rootSearchPath(head, root);
  let leftFlag = false,
    rightFlag = false;
  if (root.left) {
    leftFlag = isSubPath(head, root.left);
  }
  if (root.right) {
    rightFlag = isSubPath(head, root.right);
  }
  return rootFlag || leftFlag || rightFlag;
};

function rootSearchPath(head, root) {
  if (head && root === null) {
    return false;
  } else if (head && root) {
    if (root.val !== head.val) {
      return false;
    }
    return rootSearchPath(head.next, root.left) || rootSearchPath(head.next, root.right);
  }
  return true;
}

const listNode = {
  val: 4,
  next: {
    val: 2,
    next: {
      val: 8,
      next: null,
    },
  },
};
