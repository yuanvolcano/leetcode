/**
 * @description 判断一棵树是否是完全二叉树
 * @param {*} root
 * @returns
 */

function isCompleteTree(root) {
  if (!root) {
    return true;
  }

  const list = [];
  const queue = [root];

  while (queue.length) {
    const item = queue.shift();

    if (item) {
      queue.push(item.left || null);
      queue.push(item.right || null);
      list.push(item.val);
    } else {
      list.push(null);
    }
  }

  let notNull = false;
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i] !== null) {
      notNull = true;
    } else {
      if (notNull) {
        return false;
      }
    }
  }

  return true;
}

const root1 = {
  val: 1,
  left: { val: 2, left: { val: 4 }, right: { val: 5 } },
  right: { val: 3, left: { val: 6 } },
};

const root2 = {
  val: 1,
  left: { val: 2, left: { val: 4 }, right: { val: 5 } },
  right: { val: 3, right: { val: 7 } },
};

console.log(isCompleteTree(root1));
console.log(isCompleteTree(root2));
