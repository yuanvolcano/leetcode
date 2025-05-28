// 先序：考察到一个节点后，即刻输出该节点的值，并继续遍历其左右子树。(根左右)

// 中序：考察到一个节点后，将其暂存，遍历完左子树后，再输出该节点的值，然后遍历右子树。(左根右)

// 后序：考察到一个节点后，将其暂存，遍历完左右子树后，再输出该节点的值。(左右根)

const buildTree = function (inorder, postorder) {
  if (postorder.length === 0 || inorder.length === 0 || postorder.length !== inorder.length) {
    return null;
  }
  let root = {};
  root.val = postorder[postorder.length - 1];

  let rootIndex = inorder.indexOf(root.val);
  let inLeftChildTree = inorder.slice(0, rootIndex);
  let posLeftChildTree = postorder.slice(0, inLeftChildTree.length);

  root.left = buildTree(inLeftChildTree, posLeftChildTree);

  let inRightChildTree = inorder.slice(rootIndex + 1);
  let posRightChildTree = postorder.slice(inLeftChildTree.length, -1);
  root.right = buildTree(inRightChildTree, posRightChildTree);

  return root;
};

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];
const res = buildTree(inorder, postorder);
console.log(res);
