// 使用 d(i, j)代替到达(i, j)最小步数
// d(i, j) 可以从 d(i - 1, j - 1) 、d(i - 1, j)、d(i, j - 1) 三步得到

// 状态转移方程
// 当word[i] === word[j]时
// d(i, j) = Math.min(d(i - 1, j - 1), d(i - 1, j) + 1, d(i, j - 1) + 1)
// 当word[i] !== word[j]时
// d(i, j) = Math.min(d(i - 1, j - 1) + 1, d(i - 1, j) + 1, d(i, j - 1) + 1)

const minDistance = function(word1, word2) {
  const mLen = word1.length, nLen = word2.length

  const minDisArr = Array.from(new Array(mLen), () => new Array(nLen))
  for (let i = 0; i < mLen; i++) {
    if (word1[i] === word2[0]) {
      minDisArr[i][0] = i
    } else {
      if (i == 0) {
        minDisArr[i][0] = 1
      } else {
        minDisArr[i][0] = minDisArr[i - 1][0] + 1
      }
    }
  }

  for (let j = 0; j < nLen; j++) {
    if (word2[j] === word1[0]) {
      minDisArr[0][j] = j
    } else {
      if (j == 0) {
        minDisArr[0][j] = 1
      } else {
        minDisArr[0][j] = minDisArr[0][j - 1] + 1
      }
    }
  }

  for (let m = 1; m < mLen; m++) {
    for (let n = 1; n < nLen; n++) {
      if (word1[m] === word2[n]) {
        minDisArr[m][n] = Math.min(minDisArr[m - 1][n - 1], minDisArr[m - 1][n] + 1, minDisArr[m][n - 1] + 1)
      } else {
        minDisArr[m][n] = Math.min(minDisArr[m - 1][n - 1] + 1, minDisArr[m - 1][n] + 1, minDisArr[m][n - 1] + 1)
      }
    }
  }

  return minDisArr[mLen - 1][nLen - 1]
}

const str1 = 'intention', str2 = 'execution'
const result = minDistance(str1, str2)
console.log(result)
