// 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。


// 修改节点内部值
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
var swapPairs = function (head) {
  let source = head, pre
  while (head) {
    pre = head.val
    if (head.next && head.next.val) {
      head.val = head.next.val
      head.next.val = pre
      head = head.next.next
    }
  }
  return source
};

var swapPairs2 = function (head) {
  if (head === null || head.next === null) {
    return head
  }

  let newHead = head.next
  head.next = swapPairs2(newHead.next)
  newHead.next = head

  return newHead
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

swapPairs2(head)
