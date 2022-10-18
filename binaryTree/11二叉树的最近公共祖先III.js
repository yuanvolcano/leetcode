/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function (p, q) {
  const parentSet = new Set();
  while (p) {
    parentSet.add(p);
    p = p.parent;
  }

  while (q) {
    if (parentSet.has(q)) {
      return q;
    }
    q = q.parent
  }

  return null;
};

var lowestCommonAncestor = function (p, q) {
  let a = p, b = q;
  while (a !== b) {
    if (a === null) {
      a = q;
    } else {
      a = a.parent;
    }
    if (b === null) {
      b = p;
    } else {
      b = b.parent;
    }
  }

  return a;
};