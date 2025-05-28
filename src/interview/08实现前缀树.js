var Trie = function () {
  this.wordDict = new Set();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  this.wordDict.add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return this.wordDict.has(word);
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  for (let word of this.wordDict) {
    if (word.startsWith(prefix)) {
      return true;
    }
  }
  return false;
};
