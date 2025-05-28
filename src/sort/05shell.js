// 希尔排序

function shellSort(arr) {
  for (let gap = arr.length >> 1; gap > 0; gap >>= 1) {
    for (let i = gap; i < arr.length; i++) {
      let temp = arr[i],
        j;
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}

const nums = [2, 4, 8, 6, 1, 9, 10, 7, 15, 5];
const result = shellSort(nums);
console.log(result);
