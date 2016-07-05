var DataStructures = require('algorithms').DataStructures;
var Stack = DataStructures.Stack;
var Queue = DataStructures.Queue;

var stack = new Stack();

for (var i = 0; i < 10; i++) {
  stack.push(i);
}

function print(stack) {

  var queue = new Queue();

  while (!stack.isEmpty()) {
    queue.push(stack.pop());
    if (queue.length > 6) {
      queue.pop();
  }

 }

 return queue.peek();
}

console.log(print(stack));
