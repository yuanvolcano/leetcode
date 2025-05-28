// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let num1,
    num2,
    sum,
    temp = 0,
    result = (curNode = new ListNode(0));

  while (l1 || l2 || temp) {
    num1 = l1 ? ~~l1.val : 0;
    num2 = l2 ? ~~l2.val : 0;
    sum = num1 + num2 + temp;
    curNode.next = new ListNode(sum % 10);
    curNode = curNode.next;
    temp = sum > 9 ? 1 : 0;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  return result.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const listNode1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: null,
    },
  },
};

const listNode2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 6,
      next: null,
    },
  },
};

const result = addTwoNumbers(listNode1, listNode2);
console.log(result);
