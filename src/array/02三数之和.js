const threeSum = function (nums, target) {
  const result = [];
  if (nums.length < 3) return result;

  // 使用比较函数进行排序
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    // 跳过重复的基准数
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]]);

        // 跳过重复的左指针
        while (left < right && nums[left] === nums[left + 1]) left++;
        // 跳过重复的右指针
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
};

// hash 检索
const threeSum2 = function (nums) {
  const res = [],
    hash = {},
    len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; i < len - 1; j++) {
      if (hash[j] === void 0) {
        const mark = 0 - nums[i] - nums[j];
        hash[mark] = [nums[i], nums[j]];
      } else {
        res.push(hash[j].concat(nums[j]));
      }
    }
  }
  return res;
};

// 双指针
const twoSum = function (nums, start, target) {
  let len = nums.length,
    left = start,
    right = len - 1;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return [nums[left], nums[right]];
    }
  }
  return [];
};

const threeSum3 = function (nums, target) {
  nums.sort((a, b) => a - b);
  let len = nums.length,
    res = [];
  for (let i = 0; i < len - 2; ) {
    const list = twoSum(nums, i + 1, target - nums[i]);
    if (list.length) {
      list.unshift(nums[i]);
      res.push(list);
    }
    while (nums[i++] === nums[i]) {}
  }
};

// let nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
// let nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
// let nums = [0,2,2,3,0,1,2,3,-1,-4,2]
let nums = [0, 0, 0, 0, 0, -5, 5];
// let res1 = threeSum(nums)
// let res2 = threeSum(nums)
let res3 = threeSum3(nums, 0);
// console.log(res1)
// console.log(res2)
console.log(res3);
