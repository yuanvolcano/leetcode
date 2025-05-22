/**
 * 数组全排列
 * @param {number[]} nums - 输入数组
 * @returns {number[][]} - 所有可能的排列
 */
function permute(nums) {
  const result = [];

  // 使用回溯算法
  function backtrack(current, remaining) {
    // 如果剩余数组为空，说明已经得到一个完整的排列
    if (remaining.length === 0) {
      result.push([...current]);
      return;
    }

    // 遍历剩余数组中的每个数字
    for (let i = 0; i < remaining.length; i++) {
      // 将当前数字加入排列
      current.push(remaining[i]);
      // 从剩余数组中移除当前数字
      const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
      // 继续递归
      backtrack(current, newRemaining);
      // 回溯，移除最后加入的数字
      current.pop();
    }
  }

  backtrack([], nums);
  return result;
}

/**
 * 使用栈实现数组全排列
 * @param {number[]} nums - 输入数组
 * @returns {number[][]} - 所有可能的排列
 */
function permute2(nums) {
  const result = [];
  const stack = [];
  const used = new Array(nums.length).fill(false);

  // 初始化栈，将每个数字作为起始点
  for (let i = 0; i < nums.length; i++) {
    stack.push({
      current: [nums[i]],
      used: new Array(nums.length).fill(false),
    });
    stack[stack.length - 1].used[i] = true;
  }

  // 使用栈进行深度优先搜索
  while (stack.length > 0) {
    const { current, used } = stack.pop();

    // 如果当前排列长度等于输入数组长度，说明得到一个完整排列
    if (current.length === nums.length) {
      result.push([...current]);
      continue;
    }

    // 尝试添加未使用的数字
    for (let i = 0; i < nums.length; i++) {
      if (!used[i]) {
        const newUsed = [...used];
        newUsed[i] = true;
        stack.push({
          current: [...current, nums[i]],
          used: newUsed,
        });
      }
    }
  }

  return result;
}

// 测试代码
const nums = [1, 2, 3];
console.log(permute(nums));
// 输出: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
