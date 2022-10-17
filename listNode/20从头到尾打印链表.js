/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }

  return result;
};

const headNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      }
    }
  }
}

reversePrint(headNode);