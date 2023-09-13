// 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

// 形式上，如果可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。

const canThreePartsEqualSum = function(A) {
  let sum = 0, len = A.length
  for (let i = 0; i < len; i++) {
    sum += A[i]
  }
  if (sum % 3 !== 0) {
    return false
  }
  const target = sum / 3
  let startIndex = 0, endIndex = len - 1
  while (startIndex < endIndex - 1) {
    if (getSum(A, 0, startIndex) === target && getSum(A, endIndex, len - 1) === target) {
      return true
    }
    if (getSum(A, 0, startIndex) !== target) {
      startIndex++
    }
    if (getSum(A, endIndex, len - 1) !== target) {
      endIndex--
    }
  }

  return false
}

function getSum (arr, startIndex, endIndex) {
  let sum = 0
  for (let i = startIndex; i < endIndex + 1; i++) {
    sum += arr[i]
  }
  return sum
}


const arr = [1,-1,1,-1]
let res = canThreePartsEqualSum(arr)
console.log(res)