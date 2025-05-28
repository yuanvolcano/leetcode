const searchRange = function (nums, target) {
  let i = 0,
    arr = [-1, -1],
    len = nums.length,
    j = 0;
  for (; i < len; i++) {
    if (nums[i] > target) {
      break;
    } else if (nums[i] === target) {
      arr[0] = i;
      j = i;
      while (nums[j] === target && j < len) {
        j++;
      }
      arr[1] = j - 1;
      break;
    }
  }
  return arr;
};

const searchRange2 = function (nums, target) {
  let i = 0,
    len = nums.length,
    j = len - 1,
    arr = [-1, -1];
  while (j > -1 && i < len) {
    if (nums[i] !== target) {
      i++;
    }

    if (target !== nums[j]) {
      j--;
    }

    if (nums[i] === nums[j] && nums[i] === target) {
      arr = [i, j];
      break;
    }
  }

  return arr;
};

let list = [5, 7, 7, 8, 8, 10];
let ret = searchRange(list, 8);
// let ret = searchRange2(list, 8)
console.log(ret);
