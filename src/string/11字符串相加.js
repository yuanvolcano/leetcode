// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

const addStrings = function (num1, num2) {
  if (num1[0] === '+') {
    num1 = num1.slice(1);
  }
  if (num2[0] === '+') {
    num2 = num2.slice(1);
  }
  const arr1 = num1.split(''),
    arr2 = num2.split(''),
    item = [];
  let res = '',
    init = 0;

  while (arr1.length || arr2.length || init) {
    res = ~~arr1.pop() + ~~arr2.pop() + init;
    init = res > 9 ? 1 : 0;
    res = res % 10;
    item.unshift(res);
  }

  if (item.length) {
    return item.join('');
  }
  return '';
};

const addStrings2 = function (num1, num2) {
  let l1 = num1.length - 1,
    l2 = num2.length - 1;

  let temp = 0,
    res = '';

  while (l1 >= 0 || l2 >= 0) {
    let val1 = 0,
      val2 = 0;
    if (l1 >= 0) {
      val1 = num1[l1] - '0';
      l1--;
    }
    if (l2 >= 0) {
      val2 = num2[l2] - '0';
      l2--;
    }

    let sum = val1 + val2 + temp;
    if (sum > 9) {
      temp = 1;
      sum -= 10;
    } else {
      temp = 0;
    }
    res = sum + res;
  }

  if (temp) {
    res = temp + res;
  }
  return res;
};

console.time('addStrings');
let res = addStrings(
  '9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999',
  '1',
);
console.timeEnd('addStrings');

console.time('addStrings2');
let res2 = addStrings2(
  '9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999',
  '1',
);
console.timeEnd('addStrings2');
console.log(res === res2);
