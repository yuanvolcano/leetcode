class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = new Map();
    // 使用虚拟头尾节点简化操作
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    const node = this.cache.get(key);
    this.moveToHead(node);
    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;
      this.moveToHead(node);
    } else {
      const node = new ListNode(key, value);
      this.cache.set(key, node);
      this.addToHead(node);
      this.size++;
      if (this.size > this.capacity) {
        const removed = this.removeTail();
        this.cache.delete(removed.key);
        this.size--;
      }
    }
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addToHead(node);
  }

  removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  addToHead(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  removeTail() {
    const node = this.tail.prev;
    this.removeNode(node);
    return node;
  }
}

// 测试用例
const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 返回 1
cache.put(3, 3); // 该操作会使得密钥 2 作废
console.log(cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回 3
console.log(cache.get(4)); // 返回 4
