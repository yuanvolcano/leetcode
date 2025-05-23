/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  let i = 0,
    temp1 = head,
    temp2 = head;

  while (i < h) {
    temp1 = temp1.next;
    i++;
  }

  while (temp1) {
    temp1 = temp1.next;
    temp2 = temp2.next;
  }

  return temp2?.val;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};

const res = getKthFromEnd(head, 2);
console.log(res);
