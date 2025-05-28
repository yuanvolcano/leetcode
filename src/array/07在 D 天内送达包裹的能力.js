// 传送带上的包裹必须在 D 天内从一个港口运送到另一个港口。

// 传送带上的第 i 个包裹的重量为 weights[i]。每一天，我们都会按给出重量的顺序往传送带上装载包裹。我们装载的重量不会超过船的最大运载重量。

// 返回能在 D 天内将传送带上的所有包裹送达的船的最低运载能力。

// 找出可能的最小值 min，和最大值 max
// 当 min < max, 做暴力破解是否满足条件
const shipWithinDays = function (weights, day) {
  let sum = getSum(weights);
  let max = Math.max.call(null, ...weights);
  let baseVal = Math.ceil(sum / day, max);
  while (baseVal < sum) {
    if (hasFill(weights, day, baseVal)) {
      return baseVal;
    } else baseVal++;
  }
  return baseVal;
};

function getSum(arr) {
  let sum = 0;
  for (let i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }
  return sum;
}

function hasFill(weights, day, baseVal) {
  let j = 0,
    len = weights.length,
    sum = 0,
    count = 0;
  while (j < len) {
    sum += weights[j];
    if (sum < baseVal) {
      j++;
    } else {
      sum = 0;
      count++;
      if (sum === baseVal) {
        j++;
      }
      if (count === day) {
        return false;
      }
    }
  }
  return true;
}

const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  day = 1;

let res = shipWithinDays(weights, day);
console.log(res);
