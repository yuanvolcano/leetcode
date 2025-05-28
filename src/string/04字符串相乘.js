function multiply(str1, str2) {
  // 处理特殊情况
  if (str1 === '0' || str2 === '0') return '0';

  const len1 = str1.length,
    len2 = str2.length;
  const result = new Array(len1 + len2).fill(0);

  // 预计算数字字符到数字的映射，避免重复转换
  const num1 = str1.split('').map((c) => c - '0');
  const num2 = str2.split('').map((c) => c - '0');

  // 从低位到高位相乘
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const product = num1[i] * num2[j];
      const pos = i + j + 1; // 当前位
      const carryPos = i + j; // 进位位

      // 计算当前位的总和（包括进位）
      const sum = result[pos] + product;

      // 更新当前位和进位
      result[pos] = sum % 10;
      result[carryPos] += Math.floor(sum / 10);
    }
  }

  // 处理可能的进位
  for (let i = result.length - 1; i > 0; i--) {
    if (result[i] >= 10) {
      result[i - 1] += Math.floor(result[i] / 10);
      result[i] %= 10;
    }
  }

  // 去除前导零
  let start = 0;
  while (start < result.length - 1 && result[start] === 0) {
    start++;
  }

  return result.slice(start).join('');
}

let res = multiply2('24', '36');
console.log(res);
