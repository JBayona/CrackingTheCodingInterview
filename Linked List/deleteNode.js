/*
Implement an algorithm to delete a node in the middle of a singly linked list, given
only access to that node.
*/

/*
Copy the data from the next node over to
the current node, and then to delete the next node
*/
function ListNode(val,node){
  this.val = val;
  this.next = node ? node : null;
}

function deleteNode(middle){
  if(middle === null || middle.next === null){
    return false;
  }
  var next = middle.next;
  middle.val = next.val;
  middle.next = next.next;
  console.log(middle);
  return true;

}

list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
middle = list.next.next;
console.log(deleteNode(middle));
console.log(list);