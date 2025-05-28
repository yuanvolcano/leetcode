//1、实现超出JS整数存储范围的两个大整数（含负数）相加 function add(a, b) ，a,b为字符串
function add(a, b) {
  let aSymbol = '',
    bSymbol = '',
    aArr,
    bArr,
    temp = 0,
    res = '',
    last = '',
    num1,
    num2;
  if (a < 0) {
    aSymbol = '-';
    a = a.substring(1);
  }
  if (b < 0) {
    bSymbol = '-';
    b = b.substring(1);
  }
  aArr = a.split('');
  bArr = b.split('');
  while (aArr.length || bArr.length || temp) {
    if (aSymbol === bSymbol) {
      temp += ~~aArr.pop() + ~~bArr.pop();
      res = (temp % 10) + res;
      temp = temp > 9 ? 1 : 0;
      last = aSymbol;
    } else {
      num1 = ~~aArr.pop();
      num2 = ~~bArr.pop();
      if (parseInt(a, 10) < parseInt(b, 10)) {
        temp += num2 - num1;
        if (temp < 0) {
          temp += 10;
          res = (temp % 10) + res;
          temp = -1;
        } else {
          res = (temp % 10) + res;
          temp = 0;
        }
        last = bSymbol;
      } else {
        temp += num1 - num2;
        if (temp < 0) {
          temp += 10;
          res = (temp % 10) + res;
          temp = -1;
        } else {
          res = (temp % 10) + res;
          temp = 0;
        }
        last = aSymbol;
      }
    }
  }

  res = res.replace(/^0+/, '');
  if (!res) {
    res = '0';
  } else {
    res = last + res;
  }
  return res;
}

let res = add('-237987435748957349857987348534895743853934534', '66');
console.log(res);
