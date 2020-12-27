class LRUCache  {
  constructor (capacity) {
    this.capacity = capacity
    this.keys = new Set()
    this.cache = new Map()
  }
  get (key) {
    if (this.cache.has(key)) {
      this.keys.delete(key)
      this.keys.add(key)
      return this.cache.get(key)
    }
    return -1
  }
  delete (key) {
    this.keys.delete(key)
    this.cache.delete(key)
  }
  put (key, val) {
    if (this.cache.has(key)) {
      this.keys.delete(key)
    }
    this.cache.set(key, val)
    this.keys.add(key)
    if (this.keys.size > this.capacity) {
      const removedKey = this.keys.values().next().value
      this.delete(removedKey)
    }
  }
}

const cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);
