/*
Write code to remove duplicates from an unsorted linked list
*/

function ListNode(val, node){
  this.val = val;
  this.next = node ? node : null;
}

function deleteDuplicates(list){
  var hash = {};
  var prev = null;
  var curr = list;
  while(curr){
    if(curr.val in hash){
      prev.next = curr.next;
    }else{
      hash[curr.val] = true;
      prev = curr;
    }
    curr = curr.next;
  }
  return list;
}

list = new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(5, new ListNode(5))))))));
console.log(deleteDuplicate(list));

// Follow-up no buffer allowed

/*
These use constant space time O(1) but O(N^2) time complexity
*/

/*
We use a runner to check all the next elements and remove
the duplicate values
*/
function ListNode(val, next) {
this.val = val;
  this.next= next || null;
}

function removeDuplicates(head, val) {
  let current = head;
  let runner;
  
  while(current) {
   runner = current;
    while(runner.next) {
     if(runner.next.val === val) {
       runner.next = runner.next.next;
      } else {
       runner = runner.next; 
      }
    }
    current = current.next;
  }
  return head;
}

list = new ListNode(1, new ListNode(6, new ListNode(4, new ListNode(6, new ListNode(5, new ListNode(6, new ListNode(6, new ListNode(3, new ListNode(6)))))))));
val = 6;
console.log(removeDuplicates(list, val));
