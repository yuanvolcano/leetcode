// 有一个楼梯，你一次只能往上走一阶或者两阶。请编写函数 climbStairs，它接受一个整数 n 作为参数，表示这个楼梯有多少阶。请你返回一个整数，表示这个楼梯一共有多少种走法。例如：
// climbStairs(1) // => 1
// climbStairs(2) // => 2
// climbStairs(3) // => 3
// climbStairs(10) // => 89

// function climbStairs (n) {
//   if (n === 1) {
//     return 1
//   } else if (n === 2) {
//     return 2
//   } else if (n === 3) {
//     return 3
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }

const map = new Map();

function climbStairs(n) {
  if (n <= 3) {
    return n;
  }
  if (map.has(n)) return map.get(n);

  let stairs = climbStairs(n - 1) + climbStairs(n - 2);
  map.set(n, stairs);
  return stairs;
}

let res = climbStairs(10);
console.log(res);
