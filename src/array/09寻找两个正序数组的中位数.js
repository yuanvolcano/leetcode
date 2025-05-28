const findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length,
    len2 = nums2.length;
  let count = 0;
  let isOdd = (len1 + len2) % 2 === 1;
  let res1, res2;
  if (isOdd) {
    const target = (len1 + len2 + 1) / 2;
    while (count < target) {
      if (nums1[0] <= nums2[0]) {
        res1 = nums1.length ? nums1.shift() : nums2.shift();
      } else {
        res1 = nums2.length ? nums2.shift() : nums1.shift();
      }
      count++;
    }
  } else {
    const target = (len1 + len2) / 2;
    while (count < target) {
      if (nums1[0] <= nums2[0]) {
        res1 = nums1.length ? nums1.shift() : nums2.shift();
      } else {
        res1 = nums2.length ? nums2.shift() : nums1.shift();
      }

      if (nums1[nums1.length - 1] <= nums2[nums2.length - 1]) {
        res2 = nums2.length ? nums2.pop() : nums1.pop();
      } else {
        res2 = nums1.length ? nums1.pop() : nums2.pop();
      }

      count++;
    }
  }

  return isOdd ? res1 : (res1 + res2) / 2;
};

const findMedianSortedArrays2 = function (nums1, nums2) {
  for (var i = 0; i < nums1.length; i++) {
    if (nums2[0] <= nums1[i]) {
      nums1.splice(i, 0, nums2[0]);
      nums2.shift();
    }
    if (nums2.length === 0) {
      break;
    }
  }
  if (nums2.length) {
    nums1 = nums1.concat(nums2);
  }
  let isOdd = nums1.length % 2 === 1;
  return isOdd
    ? nums1[(nums1.length - 1) / 2]
    : parseFloat((nums1[nums1.length / 2] + nums1[nums1.length / 2 - 1]) / 2);
};

const nums1 = [1, 2],
  nums2 = [3, 4];
let res = findMedianSortedArrays2(nums1, nums2);
console.log(res);
