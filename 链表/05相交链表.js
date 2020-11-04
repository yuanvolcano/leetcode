// 编写一个程序，找到两个单链表相交的起始节点。

// map 方法
const getIntersectionNode = function (headA, headB) {
  const map = new Map()
  while (headA || headB) {
    if (headA === headB) return headA
    if (map.has(headA)) return headA
    if (map.has(headB)) return headB

    if (headA) {
      map.set(headA, true)
      headA = headA.next
    }

    if (headB) {
      map.set(headB, true)
      headB = headB.next
    }
  }
}

// flag 标记法
const getIntersectionNode2 = function (headA, headB) {
  while (headA) {
    headA.flag = true
    headA = headA.next
  }

  while (headB) {
    if (headB.flag) return headB
    headB = headB.next
  }
  return null
}
