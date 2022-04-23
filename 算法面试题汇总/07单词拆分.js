// 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。

// 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

// 示例 1：

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。


// 采用动态规划：

// dp[i]含义：子串s[0,i]是否满足，为boolean
// dp[i]初始化：除了dp[0]为true，其他为false。
// 从0到n遍历字符串，判断当前dp[i]含义是否满足
// 在判断当前dp[i]中，从0到i遍历分割点j：
// 若[0,j]满足，且剩下的在wordDict中出现过，则当前[0,i]子串就满足
// 若当前[0,i]子串满足，就不用继续遍历当前子串的分割点了，跳过，判断下一轮子串[0,i+1]

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const set = new Set(wordDict)
  const len = s.length
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.slice(j, i))) {
        dp[i] = true
        break;
      }
    }
  }
  return dp[len];
};

const str = 'leetcode'
const list = ["leet", "code"]

const result = wordBreak(str, list)
console.log(result)
