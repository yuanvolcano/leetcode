const maxDepth = function (root) {
  if (!root) {
    return 0
  }
  const nums = []
  genArr(nums, root, 1)
  let max = Math.max.apply(null, nums)
  return max
}

function genArr (nums, n, level) {
  if (n.left !== null) {
    genArr(nums, n.left, level + 1)
  }

  nums.push(level)

  if (n.right !== null) {
    genArr(nums, n.right, level + 1)
  }
}