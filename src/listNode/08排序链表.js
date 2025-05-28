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
var sortList = function (head) {
  const orderList = [];
  while (head) {
    if (!orderList.length) {
      orderList.push({
        val: head.val,
        next: null,
      });
    } else {
      let i = 0,
        len = orderList.length,
        isChange = false;
      for (; i < len; i++) {
        if (head.val < orderList[i].val) {
          orderList.splice(i, 0, { val: head.val, next: null });
          isChange = true;
          break;
        }
      }

      if (!isChange) {
        orderList.push({
          val: head.val,
          next: null,
        });
      }
    }

    head = head.next;
  }

  let res, source;

  if (!orderList.length) {
    return null;
  } else {
    source = res = orderList[0];
  }

  for (let i = 1, len = orderList.length; i < len; i++) {
    res.next = orderList[i];
    res = res.next;
  }

  return source;
};

// const head = {
//   val: -1,
//   next: {
//     val: 5,
//     next: {
//       val: 3,
//       next: {
//         val: 4,
//         next: {
//           val: 0,
//           next: null
//         }
//       }
//     }
//   }
// }

const head = { val: null };

const result = sortList(head);
console.log(result);
