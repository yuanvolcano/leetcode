// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例:

// 给定有序数组: [-10,-3,0,5,9],

// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

const sortedArrayToBST = function (nums) {
  // 由于数组是排序好的，因此一个思路就是将数组分成两半，一半是左子树，另一半是右子树
  // 然后运用“树的递归性质”递归完成操作即可。
  if (nums.length === 0) return null;
  const mid = nums.length >> 1;
  const root = new CreateNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

function CreateNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const list = [-10, -3, 0, 5, 9];
const result = sortedArrayToBST(list);
console.log(result);
