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

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var oddEvenList = function (head) {
  if (!head || !head.next) {
    return head
  }
  let temp1 = head, count = 0
  let odd = new ListNode(0), even = new ListNode(0)
  let temp2 = odd, temp3 = even
  while (temp1) {
    if (!(count % 2)) {
      temp2.next = temp1
      temp2 = temp2.next
    } else {
      temp3.next = temp1
      temp3 = temp3.next
    }
    count++
    temp1 = temp1.next
  }
  if (count % 2) {
    temp3.next = null
  } else {
    temp2.next = null
  }
  temp2.next = even.next

  return odd.next
};

const oddEvenList = function (head) {
  if (!head) return head
  let evenHead = head.next
  let odd = head, even = evenHead
  while (even !== null && even.next !== null) {
    odd.next = even.next
    odd = odd.next
    even.next = odd.next
    even = even.next
  }
  odd.next = evenHead
  return head
}

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
          next: null
        }
      }
    }
  }
}

const result = oddEvenList(head)
console.log(result)