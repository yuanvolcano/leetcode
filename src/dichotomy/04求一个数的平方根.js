/**
 * 求一个数的平方根, 要求精确到小数点后6位
 */

function sqrt(num) {
  if (num < 0) return NaN;
  if (num === 0 || num === 1) return num;

  // 二分法查找平方根
  let left = 0;
  let right = num;
  let mid = 0;

  // 先找到整数部分
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);

    if (mid * mid === num) {
      return mid;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

 let result = right;
 let increment = 0.1;

 for (let i = 0; i < 6; i++) {
  while (result * result < num) {
    result += increment;
  }

  if (result * result > num) {
    result -= increment;
  }

    increment /= 10;
  }

  return Math.floor(result * 1000000) / 1000000;
}

// 测试用例
console.log(sqrt(4));      // 应该输出 2
console.log(sqrt(2));      // 应该输出 1.414214
console.log(sqrt(9));      // 应该输出 3
console.log(sqrt(0.25));   // 应该输出 0.5
console.log(sqrt(0));      // 应该输出 0
console.log(sqrt(1));      // 应该输出 1
console.log(sqrt(-4));     // 应该输出 NaN
console.log(sqrt(10000));  // 应该输出 100
console.log(sqrt(0.0001)); // 应该输出 0.01

