// 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为"环形缓冲器"。

// 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

// 你的实现应该支持如下操作：

// MyCircularQueue(k): 构造器，设置队列长度为 k 。
// Front: 从队首获取元素。如果队列为空，返回 -1 。
// Rear: 获取队尾元素。如果队列为空，返回 -1 。
// enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
// deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
// isEmpty(): 检查循环队列是否为空。
// isFull(): 检查循环队列是否已满。
//

// 示例：

// MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3
// circularQueue.enQueue(1);  // 返回 true
// circularQueue.enQueue(2);  // 返回 true
// circularQueue.enQueue(3);  // 返回 true
// circularQueue.enQueue(4);  // 返回 false，队列已满
// circularQueue.Rear();  // 返回 3
// circularQueue.isFull();  // 返回 true
// circularQueue.deQueue();  // 返回 true
// circularQueue.enQueue(4);  // 返回 true
// circularQueue.Rear();  // 返回 4

class MyCircularQueue {
  /**
   * @param {number} k
   */
  constructor(k) {
    this.capacity = k;
    this.curLen = 0;
    this.queue = null;
    this.lastNode = null;
  }

  /**
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value) {
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
  }

  /**
   * @return {boolean}
   */
  deQueue() {
    if (this.queue === null) {
      return false;
    }
    if (this.curLen === 1) {
      this.lastNode = null;
      this.queue = null;
      this.curLen--;
      return true;
    }
    const next = this.lastNode.next;
    const head = next.next;
    this.queue = head;
    this.lastNode.next = head;
    this.curLen--;
    return true;
  }

  /**
   * @return {number}
   */
  Front() {
    if (this.queue === null) {
      return -1;
    }
    return this.queue.val;
  }

  /**
   * @return {number}
   */
  Rear() {
    if (this.lastNode === null) {
      return -1;
    }
    return this.lastNode.val;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.curLen === 0;
  }

  /**
   * @return {boolean}
   */
  isFull() {
    return this.curLen === this.capacity;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
