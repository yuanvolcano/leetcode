// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 整数除法仅保留整数部分。

// 你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

// 注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

//  

// 示例 1：

// 输入：s = "3+2*2"
// 输出：7
// 示例 2：

// 输入：s = " 3/2 "
// 输出：1
// 示例 3：

// 输入：s = " 3+5 / 2 "
// 输出：5

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.replace(/\s/g, '');
  const stack = [];
  let preSign = '+';
  let num = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    if (!isNaN(s[i])) {
      num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
    }
    if (isNaN(s[i]) || i === len - 1) {
      switch (preSign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push(stack.pop() / num | 0);
          break;
      }
      num = 0;
      preSign = s[i];
    }
  }

  let sum = 0;
  while (stack.length) {
    sum += stack.pop();
  }
  return sum;
};
