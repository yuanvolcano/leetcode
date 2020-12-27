const isSameTree = function(p, q) {
  function serilaze (root) {
    if (!root) return '#!'
    return `${root.val}!${serilaze(root.left)}${serilaze(root.right)}`
  }
  return serilaze(p) === serilaze(q)
};

const isSameTree = function(p, q) {
  if (p === null && q === null) return true
  if (p === null || q === null) return false

  if (p.val !== p.val) return false

  return isSameTree(p.left, p.left) && isSameTree(p.right, p.right)
}