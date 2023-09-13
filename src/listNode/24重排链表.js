var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
  let cur = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return cur;
};
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = dummy,
    slow = dummy;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
    if (fast.next) {
      fast = fast.next;
    }
  }
  // slow指向的节点就是后半段的头节点
  let temp = slow.next;
  slow.next = null;
  const link = (node1, node2, head) => {
    let prev = head;
    while (node1 && node2) {
      let temp = node1.next;
      prev.next = node1;
      node1.next = node2;
      prev = node2;
      node1 = temp;
      node2 = node2.next;
    }
    if (node1) {
      prev.next = node1;
    }
  };
  // 反转链表的后半段
  link(head, reverseList(temp), dummy);
};

