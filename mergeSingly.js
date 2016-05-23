var SinglyLinkedList = require("./singly.js");

function mergeSortLinkedList(sll) {
  var left = new SinglyLinkedList();
  var right = new SinglyLinkedList();
  var middle = Math.floor(sll.nodeCount()/2)
  if(sll.nodeCount() < 2) {
    return sll;
  }
  var current = sll.head.next;
  var i = 0;
  while(current !== null) {
    if (i < middle) {
      left.add(current.element);
    } else {
      right.add(current.element);
    }
    current = current.next;
    i++;
  }
  return mergeLinkedLists(mergeSortLinkedList(left), mergeSortLinkedList(right));
}

function mergeLinkedLists(left, right) {
  var output = new SinglyLinkedList();
  while(left.nodeCount() > 0 && right.nodeCount() > 0) {
    var rFirst = right.head.next.element;
    var lFirst = left.head.next.element;
    if(lFirst > rFirst) {
      output.add(rFirst);
      right.remove(rFirst);
    } else {
      output.add(lFirst);
      left.remove(lFirst);
    }
  }
  if(left.nodeCount() > 0) {
    var current = left.head.next;
    while(current !== null) {
      output.add(current.element);
      current = current.next;
    }
  } 
  if(right.nodeCount() > 0) {
    var current = right.head.next;
    while(current !== null) {
      output.add(current.element);
      current = current.next;
    }
  }
  return output;
}

sll = new SinglyLinkedList();
sll.add(15);
sll.add(10);
sll.add(8);
sll.add(35);
sll.add(87);
sll.add(-10);
sll.add(-200);


sorted = mergeSortLinkedList(sll);
sorted.display();