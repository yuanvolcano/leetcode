// 先序：考察到一个节点后，即刻输出该节点的值，并继续遍历其左右子树。(根左右)

// 中序：考察到一个节点后，将其暂存，遍历完左子树后，再输出该节点的值，然后遍历右子树。(左根右)

// 后序：考察到一个节点后，将其暂存，遍历完左右子树后，再输出该节点的值。(左右根)

const buildTree = function (preOrder, inOrder) {
  if (preOrder.length === 0 || (inOrder.length === 0 && preOrder.length !== inOrder.length)) {
    return null;
  }
  let root = {};
  root.val = preOrder[0];

  let rootIndex = inOrder.indexOf(root.val);
  let inLeftChildTree = inOrder.slice(0, rootIndex);
  let preLeftChildTree = preOrder.slice(1, inLeftChildTree.length + 1);

  root.left = buildTree(preLeftChildTree, inLeftChildTree);

  let inRightChildTree = inOrder.slice(rootIndex + 1);
  let preRightChildTree = preOrder.slice(inLeftChildTree.length + 1);
  root.right = buildTree(preRightChildTree, inRightChildTree);

  return root;
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const res = buildTree(preorder, inorder);
console.log(res);
