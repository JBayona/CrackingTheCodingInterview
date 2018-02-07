/*Append to tail and remove node*/

function Node(val, next) {
  this.val = val || null;
  this.next = next || null;  
}

function LinkedList(){
  this.head = null;
}

LinkedList.prototype.appendToTail = function(val) {
  let node = new Node(val);
  
  // 1st use case: an empty list
  if(!this.head) {
    this.head = node;
    return node;
  }
   //2nd use case: a non-empty list
   let current = this.head;
   while(current.next) {
    current = current.next;
   }
   current.next = node;
   return this.head;
}

LinkedList.prototype.deleteNode = function(val) {
  let node = this.head;
  // Si el valor está en el head
  if(node.val === val) {
    return this.head.next;
  }

  while(node.next) {
    if(node.next.val === val) {
      node.next = node.next.next;
      return this.head; // Head no cambia
    }
    node = node.next;
  }
  return this.head;
}

let list = new LinkedList();
list.appendToTail(1);
list.appendToTail(2);
list.appendToTail(3);
list.appendToTail(4);
list.appendToTail(5);
console.log(list);
console.log(list.deleteNode(1));
console.log(list.deleteNode(3));