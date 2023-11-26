// 冒泡排序

const bubbleSort = function (arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }

  for (let i = 0; i < len; i++) {
    // 提前退出冒泡循环的标志位
    let flag = false;
    for (let j = i + 1; j < len - i; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        flag = true;
      }
    }
    if (!flag) return arr;
  }
  return arr;
}

module.exports = bubbleSort
