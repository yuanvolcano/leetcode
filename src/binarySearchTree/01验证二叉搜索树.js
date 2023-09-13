// 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

const isValidBST = function(root) {
  const arr = tree2Arr(root);
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (arr[i + 1] <= arr[i]) return false
  }
  return true
};

function tree2Arr(root) {
  return root ? tree2Arr(root.left).concat(root.val, tree2Arr(root.right)) : []
}

// 通过中序遍历构造成一个有序列表
const isValidBST = function(root) {
  const arr = [];
  const inorderTraverse = (node) => {
    if (!node) {
      return null
    }
    inorderTraverse(node.left);
    arr.push(node.val);
    inorderTraverse(node.right);
  }
  inorderTraverse(root);

  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (arr[i + 1] <= arr[i]) return false;
  }
  return true;
}