/**
 * 查找数组中第一个大于等于目标值的元素索引
 * @param {number[]} nums - 已排序的数组
 * @param {number} target - 目标值
 * @returns {number} - 返回找到的索引，如果不存在则返回-1
 */
function searchFirstGreaterThanOrEqualTo(nums, target) {
  // 处理空数组的情况
  if (!nums.length) return -1;

  let left = 0;
  let right = nums.length - 1;

  if (nums[left] >= target) return left;

  if (nums[right] < target) return -1;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);

    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // 检查最终结果是否满足条件
  return nums[left] >= target ? left : -1;
}

// 测试用例
const testCases = [
  { nums: [1, 3, 5, 7, 9], target: 5, expected: 2 },
  { nums: [1, 3, 5, 7, 9], target: 4, expected: 2 },
  { nums: [1, 3, 5, 7, 9], target: 10, expected: -1 },
  { nums: [1, 3, 3, 5, 7, 9], target: 3, expected: 1 },
  { nums: [], target: 1, expected: -1 },
  { nums: [1, 2, 3], target: 0, expected: 0 },
];

// 运行测试用例
testCases.forEach(({ nums, target, expected }, index) => {
  const result = searchFirstGreaterThanOrEqualTo(nums, target);
  console.log(`测试用例 ${index + 1}:`);
  console.log(`输入: nums = [${nums}], target = ${target}`);
  console.log(`预期输出: ${expected}`);
  console.log(`实际输出: ${result}`);
  console.log(`测试结果: ${result === expected ? '通过' : '失败'}`);
  console.log('-------------------');
});
