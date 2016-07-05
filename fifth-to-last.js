var DataStructures = require('algorithms').DataStructures;
var Stack = DataStructures.Stack;
var Queue = DataStructures.Queue;

var stack = new Stack();

for (var i = 0; i < 10; i++)
 stack.push(i);

function print(stack) {

  var queue = new Queue();

  do {
    queue.push(stack.pop());
    if (queue.length > 5) {
      queue.pop();
    }

  } while (!stack.isEmpty());

  return queue.top();
}

console.log(print(stack));
