// 在歌曲列表中，第 i 首歌曲的持续时间为 time[i] 秒。
// 返回其总持续时间（以秒为单位）可被 60 整除的歌曲对的数量。形式上，我们希望索引的数字 i 和 j 满足  i < j 且有 (time[i] + time[j]) % 60 == 0。

// 1 <= time.length <= 60000
// 1 <= time[i] <= 500

const numPairsDivisibleBy60 = function (time) {
  let count = 0;
  for (let i = 0, len = times.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if ((times[i] + times[j]) % 60 === 0) {
        count++;
      }
    }
  }
  return count;
};

const times = [30, 20, 150, 100, 40];
let res = numPairsDivisibleBy60(times);
console.log(res);
