const countSubstrings = function (s) {
  let count = 0
  for (let i = 0, len = s.length; i < len; i++) {
    for (let j = i + 1; j < len + 1; j++) {
      let str = s.slice(i, j)
      if (checkValid(str)) {
        count++
      }
    }
  }
  return count
}

function checkValid (s) {
  let i = 0, j = s.length - 1
  while (i <= j) {
    if (s[i] !== s[j]) {
      return false
    }
    i++
    j--
  }
  return true
}

const count = countSubstrings('abc')
console.log(count)
