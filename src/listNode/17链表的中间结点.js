/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fast = head,
    slow = head;
  while (fast && fast.next) {
    fast = fast.next;
    if (fast) {
      fast = fast.next;
    }
    slow = slow.next;
  }
  return slow;
};
