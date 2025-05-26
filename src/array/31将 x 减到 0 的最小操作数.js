// 1658. 将 x 减到 0 的最小操作数 | 力扣 | LeetCode |  🟠
// 给你一个整数数组 nums 和一个整数 x 。每一次操作时，你应当移除数组 nums 最左边或最右边的元素，然后从 x 中减去该元素的值。请注意，需要 修改 数组以供接下来的操作使用。

// 如果可以将 x 恰好 减到 0 ，返回 最小操作数 ；否则，返回 -1 。

// 示例 1：

// 输入：nums = [1,1,4,2,3], x = 5
// 输出：2
// 解释：最佳解决方案是移除后两个元素，将 x 减到 0 。
// 示例 2：

// 输入：nums = [5,6,7,8,9], x = 4
// 输出：-1
// 示例 3：

// 输入：nums = [3,2,20,1,1,3], x = 10
// 输出：5
// 解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。
// 提示：

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 104
// 1 <= x <= 109

/**
 * 将 x 减到 0 的最小操作数
 * @param {number[]} nums - 整数数组
 * @param {number} x - 目标值
 * @returns {number} 最小操作数，如果无法实现则返回 -1
 */
const minOperations = function (nums, x) {
  // 特殊情况处理
  if (!nums.length) return -1;
  if (x === 0) return 0;

  // 计算数组总和，用于快速判断
  const totalSum = nums.reduce((sum, num) => sum + num, 0);
  if (totalSum < x) return -1;
  if (totalSum === x) return nums.length;

  // 使用记忆化搜索优化递归
  const memo = new Map();

  function minOperationsCount(x, left, right) {
    // 生成记忆化key
    const key = `${x}-${left}-${right}`;
    if (memo.has(key)) return memo.get(key);

    // 边界条件处理
    if (x < 0) return -1;
    if (x === 0) return 0;
    if (left > right) return -1;

    // 尝试从左边移除
    const leftCount = minOperationsCount(x - nums[left], left + 1, right);
    // 尝试从右边移除
    const rightCount = minOperationsCount(x - nums[right], left, right - 1);

    let result;
    if (leftCount === -1 && rightCount === -1) {
      result = -1;
    } else if (leftCount === -1) {
      result = rightCount + 1;
    } else if (rightCount === -1) {
      result = leftCount + 1;
    } else {
      result = Math.min(leftCount, rightCount) + 1;
    }

    // 存储结果到记忆化Map
    memo.set(key, result);
    return result;
  }

  return minOperationsCount(x, 0, nums.length - 1);
};

const minOperations2 = function (nums, x) {
  const len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }

  if (sum < x) {
    return -1;
  }

  const target = sum - x;
  let left = 0,
    right = 0,
    windowVal = 0,
    res = -Infinity;

  while (right < len) {
    windowVal += nums[right];
    right++;

    while (windowVal > target && left <= right) {
      windowVal -= nums[left];
      left++;
    }

    if (windowVal === target) {
      res = Math.max(res, right - left);
    }
  }

  return res == -Infinity ? -1 : len - res;
};

const nums = [1, 1],
  x = 3;
const res = minOperations2(nums, x);
console.log(res);
