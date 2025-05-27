var lengthLongestPath = function (input) {
  const arr = input.split('\n');
  const stk = [];
  let maxLen = 0;

  for (const s of arr) {
    const level = s.lastIndexOf('\t') + 1;
    while (level < stk.length) {
      stk.pop();
    }
    stk.push(s.slice(level));

    // 文件名
    if (s.includes('.')) {
      let strLen = stk.reduce((l, val) => l + val.length, 0);
      strLen += stk.length - 1;
      maxLen = Math.max(strLen, maxLen);
    }
  }

  return maxLen;
};

const str =
  'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext';
const res = lengthLongestPath(str);
console.log(res);
