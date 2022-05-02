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
var reverseKGroup = function (head, k) {
  let stack = [], curList, res
  while (head) {
    if (!curList || curList.length >= k) {
      curList = []
      stack.push(curList)
    }
    curList.unshift(head)
    head = head.next
  }

  if (stack[stack.length - 1] && stack[stack.length - 1].length !== k) {
    stack[stack.length - 1].reverse()
  }

  stack = stack.flat()
  res = head = stack.shift()
  while (head && stack.length) {
    head.next = stack.shift()
    head = head.next
    head.next = null
  }

  return res
};

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

const head = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}

// const head = {
//   val: 1,
//   next: {
//     val: 2,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: null
//       }
//     }
//   }
// }

const reverseKGroup2 = function (head, k) {

}

const result = reverseKGroup(head, 1)
console.log(result)