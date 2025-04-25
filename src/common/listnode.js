export class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

export class LinkedList {
  constructor() {
    this.head = new ListNode(null)
    this.tail = this.head
    this.size = 0
  }

  addLast(val) {
    const newNode = new ListNode(val)
    this.tail.next = newNode
    this.tail = newNode
    this.size++
  }

  addFirst(val) {
    const newNode = new ListNode(val)
    newNode.next = this.head.next
    this.head.next = newNode
    if (this.size === 0) {
      this.tail = newNode
    }

    this.size++
  }

  add(index, val) {
    if (index === this.size) {
      this.addLast(val)
    } else if (index === 0) {
      this.addFirst(val)
    } else {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      const newNode = new ListNode(val)
      newNode.next = current.next
      current.next = newNode
      this.size++
    }
  }

  removeLast() {
    if (this.size === 0) {
      return null
    }

    const val = this.tail.val
    const current = this.head
    while (current.next !== this.tail) {
      current = current.next
    }
    current.next = null
    this.tail = current
    this.size--
    return val
  }


  removeFirst() {
    if (this.size === 0) {
      return null
    }

   const current = this.head;
   current.next = current.next.next
   this.size--
  }

  remove(index) {
    if (index === 0) {
      return this.removeFirst()
    } else if (index === this.size - 1) {
      return this.removeLast()
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      current.next = current.next.next
      this.size--
    }
  }

  getLast() {
    if (this.size === 0) {
      return null
    }

    return this.tail.val
  }

  getFirst() {
    if (this.size === 0) {
      return null
    }

    return this.head.next
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      return null
    }

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }

    return current.next
  }

  isEmpty() {
    return this.size === 0
  }

  clear() {
    this.head = new ListNode(null)
    this.tail = this.head
    this.size = 0
  }

  set(index, val) {
    if (index < 0 || index >= this.size) {
      return null
    }
  }
}

const list = new LinkedList()
list.addFirst(1)
list.addFirst(2)
list.addLast(3)
list.add(1, 4)
list.add(0, 5)
list.add(4, 6)

console.log(list)
console.log(list.getFirst())
console.log(list.getLast())
console.log(list.get(1))
console.log(list.size)
console.log(list.isEmpty())

