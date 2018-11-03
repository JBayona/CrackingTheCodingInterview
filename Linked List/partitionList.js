/*
Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.
*/

function ListNode(val, next) {
  this.val = val;
  this.next= next || null;
}

function partitionList(node, val) {
  let head = node;
  let tail = node;
  
  while(node) {
   let next = node.next;
    if(node.val < val) {
      // Insert node at head
      node.next = head
      head = node;
    } else {
     // Insert node at tail
     tail.next = node;
     tail = node;
    }
    node = next;
  }
  // clean tail
  tail.next = null;
  
  // Tail has changed so we need to return the head
  return head;
}

list = new ListNode(3, new ListNode(5, new ListNode(8, new ListNode(5, new ListNode(10, new ListNode(2, new ListNode(1)))))));
console.log(partitionList(list, 5));