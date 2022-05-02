/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  const head2 = reverseList(head)
  let temp1 = head
  let temp2 = head2
  while (temp1 || temp2) {
    if (temp1.val !== temp2.val) {
      return false
    }
    temp1 = temp1.next
    temp2 = temp2.next
  }
  return true;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

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

var isPalindrom2 = function (head) {
  if (!head) {
    return true
  }
  let s = ''
  while (head) {
    s += head.val
    head = head.next
  }
  return s.split('').reverse().join('') === s
};

const head = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null
      }
    }
  }
}

const result = isPalindrom2(head)
console.log(result)
