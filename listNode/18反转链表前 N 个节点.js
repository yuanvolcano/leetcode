/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
let successor = null
var reverseN = function (head, n) {
  if (n === 1) {
    successor = head.next;
    return head;
  }
  let newHead = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = successor
  return newHead
};