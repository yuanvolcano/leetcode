/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

const preorder = function (root) {
  const result = [];
  traverse(root, result);
  return result;
};

function traverse(root, list) {
  if (!root) return list;

  if (root.val !== null) {
    list.push(root.val);
  }
  while (root.children && root.children.length) {
    const item = root.children.shift();
    traverse(item, list);
  }
}

const tree = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        {
          val: 5,
        },
        {
          val: 6,
        },
      ],
    },
    {
      val: 2,
    },
    {
      val: 4,
    },
  ],
};

const res = preorder(tree);
console.log(res);
