// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

// 回文串 是正着读和反着读都一样的字符串。

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const dfs = (i) => {
    if (i === n) {
      ret.push(ans.slice());
      return;
    }
    for (let j = i; j < n; ++j) {
      if (f[i][j]) {
        ans.push(s.slice(i, j + 1));
        dfs(j + 1);
        ans.pop();
      }
    }
  };

  const n = s.length;
  const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
  let ret = [],
    ans = [];

  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      f[i][j] = s[i] === s[j] && f[i + 1][j - 1];
    }
  }
  dfs(0);
  return ret;
};

const str = 'aab';
const res = partition(str);
console.log(res);
