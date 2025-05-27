// 424. 替换后的最长重复字符 | 力扣 | LeetCode |  🟠
// 给你一个字符串 s 和一个整数 k 。你可以选择字符串中的任一字符，并将其更改为任何其他大写英文字符。该操作最多可执行 k 次。

// 在执行上述操作后，返回 包含相同字母的最长子字符串的长度。

// 示例 1：

// 输入：s = "ABAB", k = 2
// 输出：4
// 解释：用两个'A'替换为两个'B',反之亦然。
// 示例 2：

// 输入：s = "AABABBA", k = 1
// 输出：4
// 解释：
// 将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
// 子串 "BBBB" 有最长重复字母, 答案为 4。
// 可能存在其他的方法来得到同样的结果。
// 提示：

// 1 <= s.length <= 105
// s 仅由大写英文字母组成
// 0 <= k <= s.length

const characterReplacement = function (s, k) {
  let left = 0,
    right = 0;
  let windowMaxCount = 0;
  let res = 0;

  const len = s.length;
  const countList = new Array(26).fill(0);

  while (right < len) {
    const index = s.charCodeAt(right) - 'A'.charCodeAt();
    countList[index] = (countList[index] || 0) + 1;
    windowMaxCount = Math.max(windowMaxCount, countList[index]);
    right++;

    while (left < right && k < right - left - windowMaxCount) {
      const leftIndex = s.charCodeAt(left) - 'A'.charCodeAt();
      countList[leftIndex]--;
      left++;
    }

    res = Math.max(res, right - left);
  }

  return res;
};

const s = 'AABABBA',
  k = 1;
const res = characterReplacement(s, k);
console.log(res);
