const isSymmetric = function (root) {
  if (!root) {
    return true
  }
  const nums = []
  genArr(nums, root, 1)
  let i = 0, j = nums.length - 1
  while (i < j) {
    if (nums[i] !== nums[j]) {
      return false
    }
    i++
    j--
  }
  return true
}


function genArr (nums, n, level) {
  if (n.left !== null) {
    genArr(nums, n.left, level + 1)
  }

  nums.push(`${n.val}~${level}`)

  if (n.right !== null) {
    genArr(nums, n.right, level + 1)
  }
}