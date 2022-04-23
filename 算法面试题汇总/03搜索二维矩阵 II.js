// 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

// 每行的元素从左到右升序排列。
// 每列的元素从上到下升序排列。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length, n = matrix[0].length, j = n - 1, i = 0;

  while (j >= 0 && i < m) {
    let init = matrix[i][j];
    if (init < target) {
      i++;
    } else if (init === target) {
      return true;
    } else {
      j--;
    }
  }

  return false;
};

const matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
const target = 19;
const res = searchMatrix(matrix, target);
console.log(res);