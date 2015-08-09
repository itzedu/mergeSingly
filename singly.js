var Node = require("./node.js");

var SinglyLinkedList = function() {
  //singly list has a deafult node of head
  this.head = new Node("head")
}

SinglyLinkedList.prototype.add = function(element) {
  var newNode = new Node(element);
  var current = this.head;
  while(current.next !== null) {
    current = current.next;
  }
  current.next = newNode;
}

SinglyLinkedList.prototype.find = function(element) {
  var current = this.head;
  while(current.element !== element) {
    current = current.next;
  }
  return current;
}

SinglyLinkedList.prototype.insert = function(newElement, element) {
  var newNode = new Node(newElement);
  var nodeElement = this.find(element)
  newNode.next = nodeElement.next;
  nodeElement.next = newNode;
}

SinglyLinkedList.prototype.findPrevious = function(element) {
  var current = this.head;
  while(current.next.element !== element) {
    current = current.next
  }
  return current;
}

SinglyLinkedList.prototype.remove = function(element) {
  var previous = this.findPrevious(element);
  previous.next = previous.next.next;
}

SinglyLinkedList.prototype.display = function() {
  var current = this.head;
  while(current.next !== null) {
    console.log(current.element)
    current = current.next
  }
  console.log(current.element)
}

SinglyLinkedList.prototype.nodeCount = function() {
  var current = this.head;
  var count = 0;
  if(current.next == null) {
    return 0;
  } else {
    while(current.next !== null) {
      count++;
      current = current.next;
    }
  }
  return count;
}

module.exports = SinglyLinkedList;





