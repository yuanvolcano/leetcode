const deleteNode = function (head, val) {
  let p = head, pre = null;

    while (p && p.val !== val) {
        pre = p;
        p = p.next;
    }
    if (pre === null) {
        return head.next;
    }
    pre.next = p.next;
    return head;
}
