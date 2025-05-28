// 方法一使用归并

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists.length) {
    return null;
  }
  return mergeList(lists, 0, lists.length - 1);
};

function mergeList(lists, start, end) {
  if (start === end) {
    return lists[start];
  }
  let mid = start + ((end - start) >> 1);
  let left = mergeList(lists, start, mid);
  let right = mergeList(lists, mid + 1, end);
  return merge(left, right);
}

function merge(head1, head2) {
  const dump = new ListNode(0);
  let temp = dump;
  while (head1 && head2) {
    if (head1.val > head2.val) {
      temp.next = head2;
      head2 = head2.next;
    } else {
      temp.next = head1;
      head1 = head1.next;
    }
    temp = temp.next;
  }

  if (head1) {
    temp.next = head1;
  }
  if (head2) {
    temp.next = head2;
  }
  return dump.next;
}

// 方法二，先遍历添加到数组中，然后通过 sort 排序，之后遍历即可
var mergeKLists2 = function (lists) {
  const arr = [];
  for (let i = 0, len = lists.length; i < len; i++) {
    let list = list[i];
    while (list) {
      arr.push(list.val);
      list = list.next;
    }
  }
  arr.sort((a, b) => a - b);
  const listNode = new ListNode(0);
  let now = listNode;
  for (let i = 0; i < arr.length; i++) {
    now.next = new ListNode(arr[i]);
    now = now.next;
  }
  return listNode.next;
};
