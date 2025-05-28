// 257. 二叉树的所有路径
// 给你一个二叉树的根节点 root ，按 任意顺序 ，返回所有从根节点到叶子节点的路径。

// 叶子节点 是指没有子节点的节点。

// 示例 1：

// 输入：root = [1,2,3,null,5]
// 输出：["1->2->5","1->3"]
// 示例 2：

// 输入：root = [1]
// 输出：["1"]
// 提示：

// 树中节点的数目在范围 [1, 100] 内
// -100 <= Node.val <= 100
const binaryTreePaths = function (root) {
  const res = [];
  const path = [];
  const traverse = function (node) {
    if (node === null) {
      return;
    }

    if (node.left === null && node.right === null) {
      path.push(`${node.val}`);
      res.push(path.join('->'));
      path.pop();
      return;
    }

    path.push(`${node.val}`);
    traverse(node.left);
    traverse(node.right);
    path.pop();
  };
  traverse(root);

  return res;
};
