var RandomizedSet = function() {
  this.map = {}
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map[val] === void 0) {
    this.map[val] = val
    return true
  } else {
    return false
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.map[val] !== void 0) {
    delete this.map[val]
    return true
  } else {
    return false
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const keys = Object.keys(this.map)
  const index = Math.floor(Math.random() * keys.length)
  return this.map[keys[index]]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const r = new RandomizedSet()
r.insert(1)
r.remove(2)
r.insert(2)
r.getRandom()
r.remove(1)
r.insert(2)
r.getRandom()