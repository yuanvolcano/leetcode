export function TreeNode(val, left, right) {
  this.val = val;
  this.left = left === void 0 ? null : left;
  this.right = right === void 0 ? null : right;
}

export function ListNode(val, next) {
  this.val = val;
  this.next = next !== void 0 ? next : null;
}

export function buildPreTreeNode(list) {
  if (!list.length) {
    return;
  }
  const item = list.shift();
  const root = new TreeNode(item);
  root.left = buildPreTreeNode(list);
  root.right = buildPreTreeNode(list);

  return root;
}

export function buildListNode(list) {
  const head = new ListNode(-1),
    len = list.length;
  let temp = head,
    i = 0;
  while (i < len) {
    temp.next = new ListNode(list[i]);
    temp = temp.next;
    i++;
  }
  return head.next;
}
