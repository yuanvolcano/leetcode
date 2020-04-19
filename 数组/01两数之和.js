// 用一个对象去保存当当前值的
// 判断是否 target - nums[i] 的key是否在对象中，如果在对象中，返回，否则继续判断

const twoSum = function(nums, target) {
  let obj = {}
  for (let i = 0, len = nums.length; i < len; i++) {
    if (obj[target - nums[i]] === undefined) {
      obj[nums[i]] = i
    } else {
      return obj[target - nums[i]] > i ? [i, obj[target - nums[i]]] : [obj[target - nums[i]], i]
    }
  }
  return []
}

let nums = [2, 7, 11, 15], target = 9
let res = twoSum(nums, target)
console.log(res)