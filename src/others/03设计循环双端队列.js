// 设计实现双端队列。

// 实现 MyCircularDeque 类:

// MyCircularDeque(int k) ：构造函数,双端队列最大为 k 。
// boolean insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。
// boolean insertLast() ：将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。
// boolean deleteFront() ：从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。
// boolean deleteLast() ：从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。
// int getFront() )：从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。
// int getRear() ：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。
// boolean isEmpty() ：若双端队列为空，则返回 true ，否则返回 false  。
// boolean isFull() ：若双端队列满了，则返回 true ，否则返回 false 。
//

// 示例 1：

// 输入
// ["MyCircularDeque", "insertLast", "insertLast", "insertFront", "insertFront", "getRear", "isFull", "deleteLast", "insertFront", "getFront"]
// [[3], [1], [2], [3], [4], [], [], [], [4], []]
// 输出
// [null, true, true, true, false, 2, true, true, true, 4]

// 解释
// MyCircularDeque circularDeque = new MycircularDeque(3); // 设置容量大小为3
// circularDeque.insertLast(1);			        // 返回 true
// circularDeque.insertLast(2);			        // 返回 true
// circularDeque.insertFront(3);			        // 返回 true
// circularDeque.insertFront(4);			        // 已经满了，返回 false
// circularDeque.getRear();  				// 返回 2
// circularDeque.isFull();				        // 返回 true
// circularDeque.deleteLast();			        // 返回 true
// circularDeque.insertFront(4);			        // 返回 true
// circularDeque.getFront();				// 返回 4

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.capacity = k;
  this.curLen = 0;
  this.queue = null;
  this.lastNode = null;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.curLen >= this.capacity) {
    return false;
  }
  if (this.queue === null) {
    this.queue = new ListNode(value);
    this.queue.next = this.queue;
    this.lastNode = this.queue;
  } else {
    const newNode = new ListNode(value);
    const head = this.lastNode.next;
    this.lastNode.next = newNode;
    newNode.next = head;
    this.queue = newNode;
  }
  this.curLen++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.curLen >= this.capacity) {
    return false;
  }
  if (this.queue === null) {
    this.queue = new ListNode(value);
    this.queue.next = this.queue;
    this.lastNode = this.queue;
  } else {
    const newNode = new ListNode(value);
    const head = this.lastNode.next;
    this.lastNode.next = newNode;
    newNode.next = head;
    this.lastNode = newNode;
  }
  this.curLen++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.queue === null || this.curLen === 0) {
    return false;
  }
  if (this.curLen === 1) {
    this.lastNode = null;
    this.queue = null;
    this.curLen--;
    return true;
  }
  const head = this.queue.next;
  this.queue.next = null;
  this.lastNode.next = head;
  this.queue = head;
  this.curLen--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.queue === null || this.curLen === 0) {
    return false;
  }
  if (this.curLen === 1) {
    this.lastNode = null;
    this.queue = null;
    this.curLen--;
    return true;
  }
  let l = this.queue;
  while (l.next !== this.lastNode) {
    if (l === this.lastNode) {
      return false;
    }
    l = l.next;
  }
  const head = this.lastNode.next;
  l.next = head;
  this.lastNode = l;
  this.curLen--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.queue === null) {
    return -1;
  }
  return this.queue.val;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.lastNode === null) {
    return -1;
  }
  return this.lastNode.val;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.curLen === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.curLen === this.capacity;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
