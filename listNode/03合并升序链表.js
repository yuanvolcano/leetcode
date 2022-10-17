// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// 示例：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4

const mergeTwoLists = function (l1, l2) {
  let num1, num2, curNode= null, result = null
  while (l1 || l2) {
    num1 = l1 ? l1.val : undefined
    num2 = l2 ? l2.val : undefined

    let min
    if (num1 !== void 0 && num1 !== void 0) {
      if (num1 > num2) {
        l2 = l2.next
        min = num2
      } else {
        l1 = l1.next
        min = num1
      }
    } else if (num1 !== void 0) {
      min = num1
      l1 = l1.next
    } else if (num2 !== void 0) {
      min = num2
      l2 = l2.next
    }


    if (result === null) {
      curNode = result = new ListNode(min)
    } else {
      curNode.next = new ListNode(min)
      curNode = curNode.next
    }
  }
  return result
}

function ListNode (val) {
  this.val = val
  this.next = null
}

const listNode1 = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}

const listNode2 = {
  val: -1,
  next: {
    val: 3,
    next: null
  }
}

const result = mergeTwoLists(listNode1, listNode2)
console.log(result)
