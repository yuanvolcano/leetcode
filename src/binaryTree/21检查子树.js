// 检查子树。你有两棵非常大的二叉树：T1，有几万个节点；T2，有几万个节点。设计一个算法，判断 T2 是否为 T1 的子树。

// 如果 T1 有这么一个节点 n，其子树与 T2 一模一样，则 T2 为 T1 的子树，也就是说，从节点 n 处把树砍断，得到的树与 T2 完全相同。

// 示例1:

//  输入：t1 = [1, 2, 3], t2 = [2]
//  输出：true
// 示例2:

//  输入：t1 = [1, null, 2, 4], t2 = [3, 2]
//  输出：false

var checkSubTree = function (t1, t2) {
  const rootFlag = traverse(t1, t2);

  let leftFlag = false,
    rightFlag = false;

  if (t1.left) {
    leftFlag = checkSubTree(t1.left, t2);
  }
  if (t1.right) {
    rightFlag = checkSubTree(t1.right, t2);
  }
  return rootFlag || leftFlag || rightFlag;
};

function traverse(node1, node2) {
  if (!node1 && !node2) {
    return true;
  } else if (!node1 || !node2) {
    return false;
  } else if (node1.val !== node2.val) {
    return false;
  }
  return traverse(node1.left, node2.left) && traverse(node1.right, node2.right);
}
s;
