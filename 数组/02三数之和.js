const threeSum = function(nums) {
  let list = []
  if (nums.length < 3) {
    return list
  }
  nums.sort((a, b) => {
    if (a < b) {
      return -1
    } else {
      return 1
    }
  })
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

// let nums = [-4,-2,1,-5,-4,-4,4,-2,0,4,0,-2,3,1,-5,0]
// let nums = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
// let nums = [0,2,2,3,0,1,2,3,-1,-4,2]
let nums = [0, 0, 0]
let res = threeSum(nums)
console.log(res)