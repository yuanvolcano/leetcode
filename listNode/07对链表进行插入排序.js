// 对链表进行插入排序。
const insertionSortList = function (head) {
  let last = null, source = head
  // 改造成双向链表
  while (head && head.next) {
    last = head
    head = head.next
    head.last = last
  }
  const target = source
  // 插入排序
  while (source) {
    const curVal = source.val
    let lastNode = null
    head = source
    while ((lastNode = head.last) && lastNode.val > curVal) {
      head.val = lastNode.val
      head = lastNode
    }
    head.val = curVal
    source = source.next
  }
  // 删除 last 指针
  source = target
  while (source) {
    source = source.next
    if (source && source.last) {
      Reflect.deleteProperty(source, 'last')
    }
  }
  return target
}

const instance = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 1,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

const result = insertionSortList(instance)
console.log(result)
