// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const result = []
  for (let len = nums1.length, i = len - 1; i >= 0; i--) {
    if (nums2.indexOf(nums1[i]) > -1) {
      result.push(nums2.splice(nums2.indexOf(nums1[i]), 1));
    }
  }
  return result
};

var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)
  const result = [], len1 = nums1.length, len2 = nums2.length
  let i = 0, j = 0
  while (i < len1 && j < len2) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++
      j++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else if (nums1[i] < nums2[j]) {
      i++
    }
  }
  return result;
};

const nums1 = [4,9,5]
const nums2 = [9,4,9,8,4]
const result = intersect(nums1, nums2)
console.log(result)
