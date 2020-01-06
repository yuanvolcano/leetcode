var isValidBST = function(root) {
  const arr = tree2Arr(root);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] <= arr[i]) return false;
  }
  return true;
};

function tree2Arr(root) {
  return root ? tree2Arr(root.left).concat(root.val, tree2Arr(root.right)) : [];
}