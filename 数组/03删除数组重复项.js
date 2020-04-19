const removeDuplicates = function (nums) {
  return nums.filter((item, key) => {
    return nums.indexOf(item) === key
  }).length
}

let nums = [0,0,1,1,1,2,2,3,3,4]
let res = removeDuplicates(nums)
console.log(res)