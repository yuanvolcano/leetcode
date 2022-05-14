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

var reverseN = (function (head, n) {
  let successor = null
  return function () {
    if (n === 1) {
      successor = head.next;
      return head;
    }
    let newHead = reverseN(head.next, n - 1)
    head.next.next = head
    head.next = successor
    return newHead
  }
})();

var reverseBetween = function (head, left, right) {
  if (left === 1) {
    return reverseN(head, right)
  }
  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
};