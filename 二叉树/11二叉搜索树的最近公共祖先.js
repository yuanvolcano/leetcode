const lowestCommonAncestor = function (root, p, q) {
  const val1 = Math.min(p, q);
  const val2 = Math.max(p, q);
  return find(root, val1, val2);
}

function find (root, val1, val2) {
  if (root === null) {
    return null
  }
  if (root.val > val2) {
    return find(root.left, val1, val2);
  }

  if (root.val < val1) {
    return find(root.right, val1, val2);
  }

  return root
}