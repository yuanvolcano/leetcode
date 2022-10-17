var MedianFinder = function () {
  this.orderList = []
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.orderList.length) {
    this.orderList.push(num)
    return
  }

  let i = 0, len = this.orderList.length, isChange = false
  while (i < len) {
    if (num < this.orderList[i]) {
      isChange = true
      this.orderList.splice(i, 0, num)
      break;
    }
    i++
  }
  if (!isChange) {
    this.orderList.push(num)
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const len = this.orderList.length
  if (len % 2) {
    return this.orderList[(len - 1) / 2]
  } else {
    return (this.orderList[len / 2] + this.orderList[len / 2 - 1]) / 2
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const obj = new MedianFinder()
obj.addNum(-1)
obj.findMedian()
obj.addNum(-2)
obj.findMedian()
obj.addNum(-3)
obj.findMedian()
obj.addNum(-4)
obj.findMedian()
obj.addNum(-5)