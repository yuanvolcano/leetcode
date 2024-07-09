// 快速排序
export const quickSort = function (arr) {
  if (arr.length < 2) return arr;
  const middle = arr[0], len = arr.length, left = [], right = [];

  for (let i = 1; i < len; i++) {
    if (arr[i] > middle) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return quickSort(left).concat([middle], quickSort(right));
}

/** 原地分区快排 */
export const quickSort2 = function(arr) {
  return quickSortByIndex(arr, 0, arr.length - 1);
}

const partition = function(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  for (let j = i; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      i++;
    }
  }
  [arr[right], arr[i]] = [arr[i], arr[right]];

  return i;
}

const quickSortByIndex = function(arr, left, right) {
  if (left >= right) {
    return arr;
  }

  const index = partition(arr, left, right);

  quickSortByIndex(arr, left, index - 1);
  quickSortByIndex(arr, index + 1, right);

  return arr;
}

const nums = []
for (let i = 0; i < 100; i++) {
  nums.push(Math.ceil(Math.random() * 100))
}
const result = quickSort2(nums);
console.log(result);

