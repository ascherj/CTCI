const Node = function(value) {
  this.value = value;
  this.next = null;
};

const Stack = function() {
  this.top = null;
  this.count = 0;
};

Stack.prototype.pop = function() {
  if (!this.top) throw new Error('Stack is empty');
  const item = this.top.value;
  this.top = this.top.next;
  this.count -= 1;
  return item;
};

Stack.prototype.push = function(item) {
  const newNode = new Node(item);
  newNode.next = this.top;
  this.top = newNode;
  this.count += 1;
};

Stack.prototype.peek = function() {
  if (!this.top) throw new Error('Stack is empty');
  return this.top.value;
};

Stack.prototype.isEmpty = function() {
  return this.top === null;
};

Stack.prototype.size = function() {
  return this.count;
};

module.exports = Stack;
