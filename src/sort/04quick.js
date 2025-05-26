// 快速排序
export const quickSort = function (arr) {
  if (arr.length < 2) return arr;
  const middle = arr[0],
    len = arr.length,
    left = [],
    right = [];

  for (let i = 1; i < len; i++) {
    if (arr[i] > middle) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return quickSort(left).concat([middle], quickSort(right));
};

/** 原地分区快排 */
export const quickSort2 = function (arr) {
  return quickSortByIndex(arr, 0, arr.length - 1);
};

/**
 * 快速排序的分区函数
 * @param {number[]} arr - 待分区的数组
 * @param {number} left - 分区左边界
 * @param {number} right - 分区右边界
 * @returns {number} 基准值的最终位置
 */
const partition = function (arr, left, right) {
  // 选择最右边的元素作为基准值
  const pivot = arr[right];
  // smallerIndex 表示小于基准值的区域边界
  let smallerIndex = left;
  // currentIndex 表示当前遍历的位置
  let currentIndex = smallerIndex;

  // 遍历数组，将小于基准值的元素移到左侧
  while (currentIndex < right) {
    if (arr[currentIndex] < pivot) {
      // 交换元素，扩大小于基准值的区域
      [arr[currentIndex], arr[smallerIndex]] = [arr[smallerIndex], arr[currentIndex]];
      smallerIndex++;
    }
    currentIndex++;
  }

  // 将基准值放到正确的位置
  [arr[right], arr[smallerIndex]] = [arr[smallerIndex], arr[right]];

  return smallerIndex;
};

const quickSortByIndex = function (arr, left, right) {
  if (left >= right) {
    return arr;
  }

  const index = partition(arr, left, right);

  quickSortByIndex(arr, left, index - 1);
  quickSortByIndex(arr, index + 1, right);

  return arr;
};

// const nums = []
// for (let i = 0; i < 100; i++) {
//   nums.push(Math.ceil(Math.random() * 100))
// }
// const result = quickSort2(nums);
// console.log(result);

const nums = [9, 10, 2, 3, 1, 7, 8, 4, 5];
const result = quickSort2(nums);
console.log(result);
