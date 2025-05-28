// 给定一个二叉树，它的每个结点都存放着一个整数值。

// 找出路径和等于给定数值的路径总数。

// 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

// 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

const pathSum = function (root, sum) {
  if (!root) return 0;
  const flag = findPath(root, sum);
  const leftFlag = pathSum(root.left, sum);
  const rightFlag = pathSum(root.right, sum);
  return flag + leftFlag + rightFlag;
};

function findPath(node, sum) {
  if (!node) return 0;
  const flag = node.val === sum ? 1 : 0;
  const leftFlag = findPath(node.left, sum - node.val);
  const rightFlag = findPath(node.right, sum - node.val);
  return flag + leftFlag + rightFlag;
}
