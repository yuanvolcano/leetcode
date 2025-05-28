// 我们可以为二叉树 T 定义一个翻转操作，如下所示：选择任意节点，然后交换它的左子树和右子树。

// 只要经过一定次数的翻转操作后，能使 X 等于 Y，我们就称二叉树 X 翻转等价于二叉树 Y。

// 编写一个判断两个二叉树是否是翻转等价的函数。这些树由根节点 root1 和 root2 给出。

const flipEquiv = function (root1, root2) {
  if (!((!root1 && !root2) || (root1 && root2 && root1.val === root2.val))) {
    return false;
  } else if (!root1 && !root2) {
    return true;
  } else {
    const leftLeft = flipEquiv(root1.left, root2.left);
    const leftRight = flipEquiv(root1.left, root2.right);
    const rightLeft = flipEquiv(root1.right, root2.left);
    const rigthRight = flipEquiv(root1.right, root2.right);

    return (leftLeft || leftRight) && (rightLeft || rigthRight);
  }
};
