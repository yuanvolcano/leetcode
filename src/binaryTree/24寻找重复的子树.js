// 给定一棵二叉树，返回所有重复的子树。对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

// 两棵树重复是指它们具有相同的结构以及相同的结点值。

// 示例 1：

//         1
//        / \
//       2   3
//      /   / \
//     4   2   4
//        /
//       4
// 下面是两个重复的子树：

//       2
//      /
//     4
// 和

//     4
// 因此，你需要以列表的形式返回上述重复子树的根结点。

// JSON.stringify 序列化子树，通过 Map 实例，如果不存在子树，set 为 1，如果存在子树，在原来基础上 +1
const findDuplicateSubtrees = function (root) {
  if (!root) return [];
  const treeMap = new Map(),
    result = [];
  const stacks = [root];
  while (stacks.length) {
    const item = stacks.shift();
    const stringifyItem = JSON.stringify(item);
    const curTreeVal = treeMap.get(stringifyItem);
    if (!curTreeVal) {
      treeMap.set(stringifyItem, 1);
    } else {
      treeMap.set(stringifyItem, curTreeVal + 1);
    }
    if (item.left) {
      stacks.push(item.left);
    }
    if (item.right) {
      stacks.push(item.right);
    }
  }

  for (const item of treeMap.keys()) {
    if (treeMap.get(item) > 1) {
      result.push(JSON.parse(item));
    }
  }
  return result;
};

const findDuplicateSubtrees = function (root) {
  if (!root) return [];
  const treeMap = new Map(),
    result = [];

  const traverse = (node) => {
    if (node === null) {
      return '#';
    }
    let left = traverse(node.left);
    let right = traverse(node.right);
    const stringifyItem = left + ',' + right + ',' + node.val;
    const curTreeVal = treeMap.get(stringifyItem);
    if (!curTreeVal) {
      treeMap.set(stringifyItem, 1);
    } else {
      if (curTreeVal === 1) {
        result.push(node);
      }
      treeMap.set(stringifyItem, curTreeVal + 1);
    }
    return stringifyItem;
  };

  traverse(root);
  return result;
};
