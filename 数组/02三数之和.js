const threeSum = function(nums) {
  let list = []
  if (nums.length < 3) {
    return list
  }
  nums.sort()
  let rebaseIndex = 0, startIndex = 1, endIndex = nums.length - 1
  for (let i = 0, len = nums.length - 2; i < len; i++) {
    rebaseIndex = i, startIndex = rebaseIndex + 1, endIndex = nums.length - 1
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    while (startIndex < endIndex) {
      if (nums[rebaseIndex] + nums[startIndex] + nums[endIndex] === 0) {
        if (nums[startIndex] === nums[startIndex + 1] && nums[startIndex] < nums[endIndex]) {
          startIndex++
          continue
        }
        if (nums[endIndex] === nums[endIndex - 1] && nums[startIndex] < nums[endIndex]) {
          endIndex--
          continue
        }
        list.push([nums[rebaseIndex], nums[startIndex], nums[endIndex]])
        if (nums[startIndex] === nums[endIndex]) {
          break
        }
        startIndex++
        endIndex--
      } else if (nums[rebaseIndex] + nums[startIndex] + nums[endIndex] > 0) {
        endIndex--
      } else if (nums[rebaseIndex] + nums[startIndex] + nums[endIndex] < 0) {
        startIndex++
      }
    }
  }
  return list
}

// hash 检索
const threeSum2 = function (nums) {
  const res = [], hash = {}, len = nums.length
  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; i < len - 1; j++) {
      if (hash[j] === void 0) {
        const mark = 0 - nums[i] - nums[j]
        hash[mark] = [nums[i], nums[j]]
      } else {
        res.push(hash[j].concat(nums[j]))
      }
    }
  }
  return res
}

// 双指针
const twoSum = function (nums, start, target) {
  let len = nums.length, left = start, right = len - 1
  while (left < right) {
    let sum = nums[left] + nums[right]
    if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    } else {
      return [nums[left], nums[right]]
    }
  }
  return []
}

const threeSum3 = function (nums, target) {
  nums.sort((a, b) => a - b)
  let len = nums.length, res = []
  for (let i = 0; i < len - 2;) {
    const list = twoSum(nums, i + 1, target - nums[i])
    if (list.length) {
      list.unshift(nums[i])
      res.push(list)
    }
    while (nums[i++] === nums[i]) {}
  }
}

// let nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
// let nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
// let nums = [0,2,2,3,0,1,2,3,-1,-4,2]
let nums = [0, 0, 0, 0, 0, -5, 5]
// let res1 = threeSum(nums)
// let res2 = threeSum(nums)
let res3 = threeSum3(nums, 0)
// console.log(res1)
// console.log(res2)
console.log(res3)
