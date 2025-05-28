// 以字符串作为输入，反转该字符串中的元音字母。

// 输入: "hello" 输出: "holle"

const reverseVowels = function (s) {
  const originList = s.split('');
  const reg = /[aeiou]/i;
  let i = 0,
    x = originList.length - 1;
  while (i < x) {
    if (reg.test(originList[i]) && reg.test(originList[x])) {
      [originList[i], originList[x]] = [originList[x], originList[i]];
      i++;
      x--;
    } else if (!reg.test(originList[i])) {
      i++;
    } else if (!reg.test(originList[x])) {
      x--;
    }
  }
  return originList.join('');
};

let res = reverseVowels('hello');
console.log(res);
