// 归并排序

const mergeSort = function (arr) {
  const len = arr.length;
  if (len < 2) return arr;

  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());

  while (right.length) result.push(right.shift());

  return result;
}

module.exports = mergeSort;
