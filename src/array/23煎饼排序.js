// 给定数组 A，我们可以对其进行煎饼翻转：我们选择一些正整数 k <= A.length，然后反转 A 的前 k 个元素的顺序。我们要执行零次或多次煎饼翻转（按顺序一次接一次地进行）以完成对数组 A 的排序。

// 返回能使 A 排序的煎饼翻转操作所对应的 k 值序列。任何将数组排序且翻转次数在 10 * A.length 范围内的有效答案都将被判断为正确。

// 输入：[3,2,4,1]
// 输出：[4,2,4,3]
// 解释：
// 我们执行 4 次煎饼翻转，k 值分别为 4，2，4，和 3。
// 初始状态 A = [3, 2, 4, 1]
// 第一次翻转后 (k=4): A = [1, 4, 2, 3]
// 第二次翻转后 (k=2): A = [4, 1, 2, 3]
// 第三次翻转后 (k=4): A = [3, 2, 1, 4]
// 第四次翻转后 (k=3): A = [1, 2, 3, 4]，此时已完成排序。

const pancakeSort = function (arr) {
  const result = [];
  sort(arr, arr.length, result);
  return result;
};

function sort(arr, n, list) {
  if (n === 1) return;

  // 找到当前最大值
  let maxIndex = -1;
  let maxVal = -Infinity;
  for (let i = 0; i < n; i++) {
    if (arr[i] > maxVal) {
      maxIndex = i;
      maxVal = arr[i];
    }
  }

  // 把找到的最大的值反转到最上面
  reserve(arr, 0, maxIndex);
  // 添加操作索引
  list.push(maxIndex + 1);
  // 把最上面的反转到底部
  reserve(arr, 0, n - 1);
  list.push(n);

  sort(arr, n - 1, list);
}

function reserve(arr, i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

const list = [3, 2, 4, 1];
const result = pancakeSort(list);
console.log(result);
