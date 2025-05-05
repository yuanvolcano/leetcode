import { TreeNode } from '../common/treeNode';

/**
 * 二叉搜索树类
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * 查找节点
   * @param {number} val - 要查找的值
   * @returns {TreeNode|null} - 找到的节点或null
   */
  find(val) {
    return this._traverse(this.root, val);
  }

  /**
   * 遍历查找辅助方法
   * @private
   */
  _traverse(node, val) {
    if (!node) return null;
    if (node.val === val) return node;
    else if (node.val < val) return this._traverse(node.right, val);
    else return this._traverse(node.left, val);
  }

  /**
   * 插入节点
   * @param {number} val - 要插入的值
   * @returns {TreeNode} - 插入后的节点
   */
  insert(val) {
    if (!this.root) {
      this.root = new TreeNode(val);
      return this.root;
    }
    return this._traverseInsert(this.root, val);
  }

  /**
   * 插入遍历辅助方法
   * @private
   */
  _traverseInsert(node, val) {
    if (node === null) {
      return new TreeNode(val);
    }

    if (node.val === val) {
      return node;
    } else if (node.val < val) {
      if (node.right === null) {
        node.right = new TreeNode(val);
        return node.right;
      }
      return this._traverseInsert(node.right, val);
    } else {
      if (node.left === null) {
        node.left = new TreeNode(val);
        return node.left;
      }
      return this._traverseInsert(node.left, val);
    }
  }

  /**
   * 删除节点
   * @param {number} val - 要删除的值
   * @returns {TreeNode|null} - 删除后的树根节点
   */
  delete(val) {
    this.root = this._deleteNode(this.root, val);
    return this.root;
  }

  /**
   * 删除节点辅助方法
   * @private
   */
  _deleteNode(node, val) {
    // 树为空或未找到节点
    if (!node) return null;

    // 找到要删除的节点
    if (val < node.val) {
      node.left = this._deleteNode(node.left, val);
    } else if (val > node.val) {
      node.right = this._deleteNode(node.right, val);
    } else {
      // 情况1：叶子节点
      if (!node.left && !node.right) {
        return null;
      }

      // 情况2：只有一个子节点
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      // 情况3：有两个子节点，找左子树最大值或右子树最小值替换
      // 这里选择找左子树最大值（最右侧节点）
      const successor = this._findMax(node.left);
      node.val = successor.val;

      // 删除替换的节点
      node.left = this._deleteNode(node.left, successor.val);
    }

    return node;
  }

  /**
   * 查找子树最大值
   * @private
   */
  _findMax(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }
}

// 测试代码
const bst = new BinarySearchTree();
bst.insert(3);
bst.insert(6);
bst.insert(2);
bst.insert(4);
bst.insert(7);
bst.insert(8);
bst.insert(9);
bst.insert(0);
bst.insert(1);
bst.delete(3);
console.log(JSON.stringify(bst, null, 2));

// 导出类便于其他模块使用
module.exports = {
  TreeNode,
  BinarySearchTree,
};
