export function TreeNode(val, left, right) {
  this.val = val;
  this.left = left === void 0 ? null : left;
  this.right = right === void 0 ? null : right;
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