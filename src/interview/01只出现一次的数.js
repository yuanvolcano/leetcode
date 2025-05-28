// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 使用按位异或，0 按位异或 某数 结果为某数，0 按位异或 某数两次结果为 0
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  let res = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    res ^= nums[i];
  }
  return res;
};
