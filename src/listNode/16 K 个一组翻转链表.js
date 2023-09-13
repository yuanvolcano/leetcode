// 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。

// k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

// 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup2 = function (head, k) {
  const stack = [], res = new ListNode(0);
  let curList = null, temp = res;;
  while (head) {
    if (!curList || curList.length >= k) {
      curList = [];
      stack.push(curList);
    }
    curList.unshift(head);
    head = head.next;
  }

  const stackLen = stack.length - 1;
  if (stack[stackLen] && stack[stackLen].length !== k) {
    stack[stackLen].reverse();
  }

  stack = stack.flat();
  while (stack.length) {
    temp.next = new ListNode(stack.shift());
    temp = temp.next;
  }

  return res.next;
};


// 反转前 [a, b) 之间的链表
var reverse = function (a, b) {
  let pre = null, cur = a, next
  while (cur !== b) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  // 返回反转后的头结点
  return pre
}

var reverseKGroup = function (head, k) {
  let a = head, b = head
  for (let i = 0; i < k; i++) {
    // 不足 k 个返回头结点
    if (b == null) return head
    b = b.next
  }
  // 反转前 k 个元素
  let newHead = reverse(a, b)
  // 递归反转后续链表并连接起来
  a.next = reverseKGroup(b, k)
  return newHead
}

// const head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 5,
//           next: {
//             val: 6,
//             next: null
//           }
//         }
//       }
//     }
//   }
// }

const result = reverseKGroup(head, 1)
console.log(result)