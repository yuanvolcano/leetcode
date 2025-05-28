// 给定一个二叉树，统计该二叉树数值相同的子树个数。

// 同值子树是指该子树的所有节点都拥有相同的数值。

// 示例：

// 输入: root = [5,1,5,5,5,null,5]

//               5
//              / \
//             1   5
//            / \   \
//           5   5   5

// 输出: 4

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countUnivalSubtrees = function (root) {
  let count = 0;
  const countTraverse = (root) => {
    if (!root) {
      return;
    }
    if (checkUnivalSubtrees(root, root.val)) {
      count++;
    }
    countTraverse(root.left);
    countTraverse(root.right);
  };
  countTraverse(root);
  return count;
};

function checkUnivalSubtrees(root, val) {
  if (!root) {
    return true;
  }
  if (root.val !== val) {
    return false;
  }
  let leftFlag = checkUnivalSubtrees(root.left, val);
  let rightFlag = checkUnivalSubtrees(root.right, val);

  return leftFlag && rightFlag;
}
