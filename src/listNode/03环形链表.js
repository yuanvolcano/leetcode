// 给定一个链表，判断链表中是否有环。

// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

// 标记法
const hasCycle = function (head) {
  if (!head || !head.next) return false;
  while (head) {
    if (head.tag) return true;
    head.tag = true;
    head = head.next;
  }
  return false;
};

// map 标记法
var hasCycle2 = (head) => {
  if (!head || !head.next) return false;
  let map = new Map();
  while (head) {
    if (map.has(head)) return true;
    map.set(head, true);
    head = head.next;
  }
  return false;
};
