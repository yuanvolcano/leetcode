const isValidSudoku = function(board) {
  // let item
  // for (let i = 0; i < 9; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     // 横向元素
  //     item = board[i][j]
  //     if (item !== '.' && board[i].indexOf(item) !== j) {
  //       return false
  //     }
  //     // 纵向
  //     let obj = {}
  //     item = board[j][i]
  //     if (item !== '.' && !obj[item]) {
  //       obj[item] = j
  //     } else {
  //       return false
  //     }
  //   }
  // }
  let arr = [];
  for (let i = 1, len = 4; i < len; i++) {
    for (let j = 3 * i - 3; j < 3 * i; j++) {
      for (let m = i; m < 3 * i; m++ ) {
        arr[j].push(board[j][m])
      }
    }
  }
  return arr
  // return true
}

let nums = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
let res = isValidSudoku(nums)
console.log(res)