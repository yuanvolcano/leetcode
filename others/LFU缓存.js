// 请你为 最不经常使用（LFU）缓存算法设计并实现数据结构。

// 实现 LFUCache 类：

// LFUCache(int capacity) - 用数据结构的容量 capacity 初始化对象
// int get(int key) - 如果键 key 存在于缓存中，则获取键的值，否则返回 -1 。
// void put(int key, int value) - 如果键 key 已存在，则变更其值；如果键不存在，请插入键值对。当缓存达到其容量 capacity 时，则应该在插入新项之前，移除最不经常使用的项。在此问题中，当存在平局（即两个或更多个键具有相同使用频率）时，应该去除 最近最久未使用 的键。
// 为了确定最不常使用的键，可以为缓存中的每个键维护一个 使用计数器 。使用计数最小的键是最久未使用的键。

// 当一个键首次插入到缓存中时，它的使用计数器被设置为 1 (由于 put 操作)。对缓存中的键执行 get 或 put 操作，使用计数器的值将会递增。

// 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。


/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.keyToCount = new Map();
  this.countToKeys = new Map();
  this.caches = new Map();
  this.minFreq = Number.MAX_SAFE_INTEGER;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.caches.has(key)) {
    // keyToCount 中 count + 1
    let count = this.keyToCount.get(key);
    this.keyToCount.set(key, count + 1);
    // countToKeys 中删除 count 对应的 key，并把 key 设置到 count + 1 中
    const keys = this.countToKeys.get(count)
    keys.delete(key);
    // 如果次数 keys 长度为 0，从 keyToCount 中删除
    if (keys.size === 0) {
      this.countToKeys.delete(count);
      if (this.minFreq === count) {
        this.minFreq++;
      }
    }
    let newCount = count + 1;
    let newCountKeys = this.countToKeys.get(newCount) || new Set();
    newCountKeys.add(key);
    this.countToKeys.set(newCount, newCountKeys);
    return this.caches.get(key);
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.capacity === 0) {
    return;
  }
  if (this.caches.has(key)) {
    this.caches.set(key, value);
    let count = this.keyToCount.get(key);
    let keys = this.countToKeys.get(count);
    keys.delete(key);
    if (keys.size === 0) {
      this.countToKeys.delete(count);
      if (this.minFreq === count) {
        this.minFreq++;
      }
    }
    let newCount = count + 1;
    this.keyToCount.set(key, newCount);
    let newCountKeys = this.countToKeys.get(newCount) || new Set();
    newCountKeys.add(key);
    this.countToKeys.set(newCount, newCountKeys);
  } else {
    if (this.caches.size >= this.capacity) {
      // 取频次最小的那个
      const minFreq = this.minFreq;
      const keys = this.countToKeys.get(minFreq);
      const deletedKey = keys.values().next().value;
      keys.delete(deletedKey);
      if (keys.size === 0) {
        this.countToKeys.delete(minFreq);
        // 后面会处理 this.minFreq，this.minFreq 最小为 1，当 this.caches.has(key) 为 false，this.minFreq 必然为 1.
      }
      // 处理 keyToCount 和 caches
      this.keyToCount.delete(deletedKey);
      this.caches.delete(deletedKey);
    }
    let count = 1;
    this.caches.set(key, value);
    this.keyToCount.set(key, count);
    let countToKeys = this.countToKeys.get(count) || new Set();
    countToKeys.add(key);
    this.countToKeys.set(count, countToKeys);
    this.minFreq = Math.min(count, this.minFreq);
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */