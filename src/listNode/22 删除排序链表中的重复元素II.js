// 给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

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
var deleteDuplicates = function (head) {
  if (head === null) {
    return head;
  }
  let lastVal = head.val, isRepeat = false;
  let fast = head.next, slow = head, res = new ListNode(-1), temp = res;
  while (fast) {
    if (fast.val !== lastVal) {
      if (!isRepeat) {
        temp.next = slow;
        temp = temp.next;
      }
      lastVal = fast.val;
      isRepeat = false;
    } else {
      isRepeat = true;
    }
    slow = fast
    fast = fast.next;
  }

  if (isRepeat) {
    temp.next = null;
  }

  return res.next;
};
