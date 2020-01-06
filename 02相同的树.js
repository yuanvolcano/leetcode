var isSameTree = function(p, q) {
  function serilaze (root) {
    if (!root) return '#!'
    return `${root.val}!${serilaze(root.left)}${serilaze(root.right)}`
  }
  return serilaze(p) === serilaze(q)
};