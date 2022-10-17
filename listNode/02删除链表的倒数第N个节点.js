// 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

// 示例：

// 给定一个链表: 1->2->3->4->5, 和 n = 2.

// 当删除了倒数第二个节点后，链表变为 1->2->3->5.
// 说明：

// 给定的 n 保证是有效的。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
  let len = 0, firstNode = head
  // 遍历单链表, 计算链表的长度
  while (head) {
    head = head.next
    len++
  }

  if (n === len) {
    return firstNode.next
  } else {
    let count = len - n
    head = firstNode
    while (count) {
      if (count === 1) {
        // head.next 是否存在
        head.next = head.next ? head.next.next : null
        return firstNode
      }
      head = head.next
      count--
    }
  }
}

const removeNthFromEnd2 = function (head, n) {
  let first = 0, target = source = head
  while (first <= n) {
    head = head.next
    first++
  }
  while (head) {
    target = target.next
    head = head.next
  }
  if (target && target.next) {
    target.next = target.next.next
  }
  return source
}

const listNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

// const listNode = {
//   val: 1,
//   next: null
// }

// const res = removeNthFromEnd(listNode, 5)
const res = removeNthFromEnd2(listNode, 5)
console.log(res)