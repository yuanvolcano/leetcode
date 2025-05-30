/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// map 收集
var detectCycle = function (head) {
  const map = new Map();
  let index = 0;
  while (head) {
    if (map.has(head)) {
      return head;
    }
    map.set(head, index++);
    head = head.next;
  }

  return null;
};

// 快慢指针
var detectCycle = function (head) {
  if (head === null) {
    return null;
  }

  let slow = head,
    fast = head;
  while (fast !== null) {
    slow = slow.next;
    if (fast.next !== null) {
      fast = fast.next.next;
    } else {
      return null;
    }
    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next;
      }
      return ptr;
    }
  }
  return null;
};
