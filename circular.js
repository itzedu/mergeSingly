var SLL = require("./singly.js")

sll = new SLL();
sll.add(5);
sll.add(15);
sll.add(25);
sll.add(2);
sll.circle(15); //made the sll circular

sll2 = new SLL();
sll2.add(1);
sll2.add(2);
sll2.add(3);
sll2.add(4);
sll2.add(5);
sll2.add(10);

function isCircular(list) {
  var tortoise = list.head;
  var hare = list.head;

  while(hare.next !== null) {
    hare = hare.next;
    if(hare == tortoise) {
      return true
    }
    hare = hare.next;
    tortoise = tortoise.next;
    //move the hare two steps at a time and the tortoise two steps at a time. If they ever meet, it means that we have a circle. This is using Floyd's cycle finding algorithm
  }
  return false //if it ever gets out of the while loop it means that we have hit a node.next === null so it is not a loop
}

function lengthCircle(list) {
  var tortoise = list.head;
  var hare = list.head;
  var count = 0;
  var start_counting = false;

  if(isCircular(list) == false) {
    return "list is not circular"
  }

 
  while(hare.next !== null) {
    hare = hare.next;

    if(hare == tortoise) {
      if(count == 0) {
        start_counting = true;
      } else {
        break;
      }
    } //when the hare and tortoise first meet the count will be zero. We only want to increment the count after they meet the first time. Once they meet again, the count will equal to the amount of nodes that the circle cointains

    hare = hare.next;
    tortoise = tortoise.next;

    if(start_counting) {
      count++;
    }
  }

  return count;
}

console.log(isCircular(sll));
console.log(isCircular(sll2));
console.log(lengthCircle(sll));
console.log(lengthCircle(sll2));