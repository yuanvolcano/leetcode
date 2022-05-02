function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

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
var reverseList = function (head) {
  const listNode = new ListNode(0)
  const orderList = []
  while (head) {
    orderList.push({
      val: head.val,
      next: null
    })
    head = head.next
  }

  let temp = listNode
  while (orderList.length) {
    temp.next = orderList.pop()
    temp = temp.next
  }
  return listNode.next
};

const reverseList2 = function (head) {
  let pre = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }

  return pre
}

const head1 = {
  val: 2,
  next: {
    val: 1,
    next: null
  }
}

const head2 = {
  val: null,
  next: null,
}

const head3 = {
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

const result = reverseList2(head3)
console.log(result)
