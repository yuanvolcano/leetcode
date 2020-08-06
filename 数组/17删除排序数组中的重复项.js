// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

const removeDuplicates = function (nums) {
  if (!nums.length) return nums
  let curItem, i
  for (i = nums.length - 1; i >= 0; i--) {
    if (curItem === void 0 || curItem !== nums[i]) {
      curItem = nums[i]
    } else if (curItem === nums[i]) {
      nums.splice(i, 1)
    }
  }
  return nums
}

const list = [1, 1, 2]
const result = removeDuplicates(list)
console.log(result)
