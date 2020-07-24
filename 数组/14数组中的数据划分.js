// 完成一个函数 partition，它接受一个数组作为参数。它会搬动数组中的元素，使得所有小于第一个项的元素都搬动到它的左边，所有大于第一个项的元素都搬动到右边。
// 例如：
// const arr = [3, 1, 6, 2, 4, 5]
// partition(arr)
// console.log(arr) // => [2, 1, 3, 6, 4, 5]

// function partition (nums) {
//   let baseVal = nums[0]
//   const res = [baseVal]
//   for (let i = 1, len = nums.length; i < len; i++) {
//     if (nums[i] < baseVal) {
//       res.unshift(nums[i])
//     } else {
//       res.push(nums[i])
//     }
//   }
//   return res
// }

function partition (nums) {
  let baseVal = nums[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    if (nums[i] < baseVal) {
      let item = nums.splice(i, 1)
      nums.unshift(...item)
    }
  }
  return nums
}

const arr = [3, 1, 6, 2, 4, 5]
const res = partition(arr)
console.log(res)