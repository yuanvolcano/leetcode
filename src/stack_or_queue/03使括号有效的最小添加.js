// 921. 使括号有效的最少添加 | 力扣 | LeetCode |  🟠
// 只有满足下面几点之一，括号字符串才是有效的：

// 它是一个空字符串，或者
// 它可以被写成 AB （A 与 B 连接）, 其中 A 和 B 都是有效字符串，或者
// 它可以被写作 (A)，其中 A 是有效字符串。
// 给定一个括号字符串 s ，在每一次操作中，你都可以在字符串的任何位置插入一个括号

// 例如，如果 s = "()))" ，你可以插入一个开始括号为 "(()))" 或结束括号为 "())))" 。
// 返回 为使结果字符串 s 有效而必须添加的最少括号数。

// 示例 1：

// 输入：s = "())"
// 输出：1
// 示例 2：

// 输入：s = "((("
// 输出：3
// 提示：

// 1 <= s.length <= 1000
// s 只包含 '(' 和 ')' 字符。

const minAddToMakeValid = function (s) {
  const stk = [];

  let hasPop = false;
  for (let i = 0, len = s.length; i < len; i++) {
    hasPop = false;
    if (s[i] === ')') {
      for (let stkLen = stk.length, j = stkLen - 1; j >= 0; j--) {
        if (stk[j] === '(') {
          stk.splice(j, 1);
          hasPop = true;
          break;
        }
      }
    }

    if (!hasPop) {
      stk.push(s[i]);
    }
  }

  return stk.length;
};

var minAddToMakeValid = function (s) {
  // res 记录插入次数
  let res = 0;
  // need 变量记录右括号的需求量
  let need = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      // 对右括号的需求 + 1
      need++;
    }

    if (s[i] === ')') {
      // 对右括号的需求 - 1
      need--;

      if (need === -1) {
        need = 0;
        // 需插入一个左括号
        res++;
      }
    }
  }

  return res + need;
};

const s = '()';
const res = minAddToMakeValid(s);
console.log(res);
