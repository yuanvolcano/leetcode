const isSameTree = function (p, q) {
  function serilaze(root) {
    if (!root) return '#!';
    return `${root.val}!${serilaze(root.left)}${serilaze(root.right)}`;
  }
  return serilaze(p) === serilaze(q);
};

const isSameTree2 = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  if (p.val !== p.val) return false;

  return isSameTree2(p.left, p.left) && isSameTree2(p.right, p.right);
};
