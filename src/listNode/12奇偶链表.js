// 给定单链表的头节点 head ，将所有索引为奇数的节点和索引为偶数的节点分别组合在一起，然后返回重新排序的列表。

// 第一个节点的索引被认为是 奇数 ， 第二个节点的索引为 偶数 ，以此类推。

// 请注意，偶数组和奇数组内部的相对顺序应该与输入时保持一致。

// 你必须在 O(1) 的额外空间复杂度和 O(n) 的时间复杂度下解决这个问题。

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const oddEvenList = function (head) {
  if (!head) return head;
  let evenHead = head.next;
  let odd = head,
    even = evenHead;
  while (even !== null && even.next !== null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};

const result = oddEvenList(head);
console.log(result);
