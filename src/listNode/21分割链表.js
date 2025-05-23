import { ListNode } from '../../utils/util.js';
// 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

// 你应当 保留 两个分区中每个节点的初始相对位置。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const dummy1 = new ListNode(-1),
    dummy2 = new ListNode(-1);
  let p1 = dummy1,
    p2 = dummy2,
    p = head;
  while (p) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    let temp = p.next;
    p.next = null;
    p = temp;
  }
  p1.next = dummy2.next;
  return dummy1.next;
};

const ln = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 2,
        next: {
          val: 5,
          next: {
            val: 2,
          },
        },
      },
    },
  },
};

const res = partition(ln, 3);
