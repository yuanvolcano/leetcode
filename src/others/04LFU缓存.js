// 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。

// 实现 LFUCache 类：

// LFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象
// int get(int key) - 如果键 key 存在于缓存中，则获取键的值，否则返回 -1 。
// void put(int key, int value) - 如果键 key 已存在，则变更其值；如果键不存在，请插入键值对。当缓存达到其容量 capacity 时，则应该在插入新项之前，移除最不经常使用的项。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最近最久未使用 的键。
// 为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。

// 当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。

// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.freq = 1;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  addToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
    this.size++;
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }

  removeTail() {
    if (this.size === 0) return null;
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.minFreq = 0;
    this.keyToNode = new Map();
    this.freqToDLL = new Map();
  }

  get(key) {
    if (!this.keyToNode.has(key)) {
      return -1;
    }

    const node = this.keyToNode.get(key);
    this.updateFreq(node);
    return node.value;
  }

  put(key, value) {
    if (this.capacity === 0) return;

    if (this.keyToNode.has(key)) {
      const node = this.keyToNode.get(key);
      node.value = value;
      this.updateFreq(node);
    } else {
      if (this.size === this.capacity) {
        const dll = this.freqToDLL.get(this.minFreq);
        const node = dll.removeTail();
        this.keyToNode.delete(node.key);
        this.size--;
      }

      const node = new Node(key, value);
      this.keyToNode.set(key, node);
      this.addToFreqList(node);
      this.minFreq = 1;
      this.size++;
    }
  }

  updateFreq(node) {
    const dll = this.freqToDLL.get(node.freq);
    dll.removeNode(node);

    if (dll.size === 0) {
      this.freqToDLL.delete(node.freq);
      if (this.minFreq === node.freq) {
        this.minFreq++;
      }
    }

    node.freq++;
    this.addToFreqList(node);
  }

  addToFreqList(node) {
    if (!this.freqToDLL.has(node.freq)) {
      this.freqToDLL.set(node.freq, new DoublyLinkedList());
    }
    this.freqToDLL.get(node.freq).addToHead(node);
  }
}

// 测试用例
const lfu = new LFUCache(2);
lfu.put(1, 1);
lfu.put(2, 2);
console.log(lfu.get(1)); // 返回 1
lfu.put(3, 3); // 移除键 2
console.log(lfu.get(2)); // 返回 -1（未找到）
console.log(lfu.get(3)); // 返回 3
lfu.put(4, 4); // 移除键 1
console.log(lfu.get(1)); // 返回 -1（未找到）
console.log(lfu.get(3)); // 返回 3
console.log(lfu.get(4)); // 返回 4
