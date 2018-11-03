/*
Get the middle node of a linked list
*/

function ListNode(val, next) {
  this.val = val;
  this.next= next || null;
}

function middleNode(head) {
  let slow = head;
  let fast = head;
  
  while(slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  return slow;
}

list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(middleNode(list));