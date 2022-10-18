const deleteNode = function (head, node) {
  if (node && node.next) {
    node.val = node.next.val
    node.next = node.next.next
  }
}
