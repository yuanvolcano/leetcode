// 计算排序

const countingSort = function (arr) {
  const maxValue = findMaxVal(arr);
  const size = arr.length;
  const countList = new Array(size + 1);
  for (let i = 0; i < size; i++) {
    if (countList[arr[i]] === void 0) {
      countList[arr[i]] = 0;
    }
    countList[arr[i]]++;
  }

  for (let i = 1, len = countList.length; i < len; i++) {
    countList[i] = countList[i - 1] + countList[i];
  }

  /** 稳定的排序算法 */
  const tempRes = [];
  for (let i = size - 1; i >= 0; i--) {
    const index = countList[arr[i]];
    tempRes[index - 1] = arr[i];
    countList[arr[i]]--;
  }

  for (let i = 0; i < size; i++) {
    arr[i] = tempRes[i];
  }

  return arr;
}

function findMaxVal (arr) {
  let maxVal = arr[0]
  for (let i = 1, len = arr.length; i < len; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i]
    }
  }
  return maxVal
}

module.exports = countingSort
