var fourSumCount = function (A, B, C, D) {
  const countAB = new Map();
  //在A和B中取出两个数的组合，将这两个数的和作为键，出现次数作为值加入哈希表中，
  A.forEach((u) => B.forEach((v) => countAB.set(u + v, (countAB.get(u + v) || 0) + 1)));
  let ans = 0;
  for (let u of C) {
    //循环C、D
    for (let v of D) {
      if (countAB.has(-u - v)) {
        //判断C和D中是否存在两个数的和 加 AB中的俩元素的和正好是0
        ans += countAB.get(-u - v); //累加组合数
      }
    }
  }
  return ans;
};
