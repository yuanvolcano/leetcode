// 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai)。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。不能倾斜容器

// 面积 = Math.min(arr[j], arr[i]) * (j - i)
// 使用双指针，i < j, 当 arr[j] >= arr[i], i++; 当arr[j] < arr[i], j--;
const maxArea = function (heights) {
  let area = 0,
    max = 0,
    i = 0,
    j = heights.length - 1;
  while (i < j) {
    area = Math.min(heights[i], heights[j]) * (j - i);
    if (area > max) max = area;
    if (heights[j] >= heights[i]) {
      i++;
    } else if (heights[j] < heights[i]) {
      j--;
    }
  }
  return max;
};

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let res = maxArea(arr);
console.log(res);
