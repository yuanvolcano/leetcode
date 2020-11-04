// 珂珂喜欢吃香蕉。这里有 N 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 H 小时后回来。

// 珂珂可以决定她吃香蕉的速度 K （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 K 根。如果这堆香蕉少于 K 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

// 返回她可以在 H 小时内吃掉所有香蕉的最小速度 K（K 为整数）。

const minEatingSpeed = function (piles, H) {
  const minVal = Math.min(...piles)
  const maxVal = Math.max(...piles)
  let val = minVal
  if (H === piles.length) return maxVal
  while (val <= maxVal) {
    if (checkValid(piles, H, val)) {
      return val
    } else {
      val++
    }
  }
}

function checkValid (piles, h, val) {
  let item
  for (let i = 0, len = piles.length; i < len; i++) {
    item = piles[i]
    do {
      if (h <= 0 && item > 0) {
        return false
      }
      item -= val
      h--
    } while (item > 0)
  }
  return true
}

const piles = [30,11,23,4,20], H = 5
const result = minEatingSpeed(piles, H)
console.log(result)
