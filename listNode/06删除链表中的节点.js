const deleteNode = function (head, node) {
  const map = new Map()
  while (head) {
    map.set(head, head.next)
    head = head.next
  }
  let nextNode, prevNode
  for (let [key, val] of map.entries()) {
    if (val === node) {
      prevNode = key
      continue
    }
    if (key === node) {
      nextNode = val
      continue
    }
    if (nextNode !== void 0 && prevNode !== void 0) break
  }
  prevNode.next = nextNode
}

const listNode = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 1,
      next: {
        val: 9,
        next: null
      }
    }
  }
}
