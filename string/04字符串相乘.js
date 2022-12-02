const multiply = function (num1, num2) {
	const left = '0'.charCodeAt(0);
	// 首先将字符串用 charCodeAt 转换成对应的数字。
	// num1Arr 取较短的数字， num2Arr 取较长的数字，用 num1Arr 去分别乘 num2Arr 速度会提升15ms
	const num1Arr = (num1.length > num2.length ? num2 : num1).split('').map(item => item.charCodeAt(0) - left);
	const num2Arr = (num1.length > num2.length ? num1 : num2).split('').map(item => item.charCodeAt(0) - left);
	let res = [];
	for (let i = num1Arr.length - 1; i > -1; i--) {
		for (let j = num2Arr.length - 1; j > -1; j--) {
			// 数字的相乘的结果转换为数组，并且 reverse，方便计算
			const resArr = (num1Arr[i] * num2Arr[j]).toString().split('');
			resArr.reverse();
			const index = num2Arr.length - 1 - j + num1Arr.length - 1 - i;
			let next = 0, k = 0;
			while (k < resArr.length || next !== 0) {
				// 结果当前位数加上前一位的进位
				let sum = (res[index + k] | 0) + next;
				// 若 k < resArr，即非最后一位进位
				if (k < resArr.length) {
					sum += +resArr[k];
				}
				res[index + k] = sum % 10;
				// 若 sum 大于10，进位 = 1
				next = sum / 10 >= 1 ? 1 : 0;
				k++;
			}
		}
	}
	// 去除结果前的 0
	while (res.length > 1 && res[res.length - 1] === 0) {
		res.pop();
	}
	return res.reverse().join('');
}

const multiply2 = function (str1, str2) {
	const len1 = str1.length, len2 = str2.length
	const result = new Array(len1 + len2).fill(0)
	for (let i = len1 - 1; i >= 0; i--) {
		for (let j = len2 - 1; j >=0; j--) {
			const product = (str1[i] - 0) * (str2[j] - 0)
			const p1 = i + j, p2 = i + j + 1
			const sum = result[p2] + product
			result[p2] = sum % 10
			result[p1] += Math.floor(sum / 10)
		}
	}

	while (result[0] === 0) {
		result.shift()
	}
	const res = result.join('')
	return res ? res : '0'
}

let res = multiply2('24', '36')
console.log(res)