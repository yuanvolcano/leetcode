// 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

// 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
// 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

// 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
// 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
// 给你一个整数数组 nums ，找出 nums 的下一个排列。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2; // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    // 寻找第一个小于右邻居的数
    i--;
  }
  if (i >= 0) {
    // 这个数在数组中存在，从它身后挑一个数，和它换
    let j = nums.length - 1; // 从最后一项，向左遍历
    while (j >= 0 && nums[j] <= nums[i]) {
      // 寻找第一个大于 nums[i] 的数
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]; // 两数交换，实现变大
  }
  // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    // i 右边的数进行翻转，使得变大的幅度小一些
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }

  return nums;
};

const nums = [1, 4, 3, 2];
const result = nextPermutation(nums);
console.log(result);
