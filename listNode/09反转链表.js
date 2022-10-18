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
const reverseList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let newHead = reverseList(head.next);
  head.next.next = newHead;
  head.next = null;
  return newHead;
}

const reverseList2 = function (head) {
  let pre = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }

  return pre;
}

var reverseList3 = function (head) {
  const dummy = new ListNode(-1);
  let p = dummy;
  const traverse = (list) => {
    if (!list) {
      return;
    }
    traverse(list.next);
    p.next = list;
    list.next = null;
    p = p.next;
  }
  traverse(head);
  return dummy.next;
};

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
