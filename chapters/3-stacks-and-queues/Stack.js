const Node = function(value) {
  this.value = value;
  this.next = null;
};

const Stack = function() {
  this.top = null;
};

Stack.prototype.pop = function() {
  if (!this.top) throw new Error('Stack is empty');
  const item = this.top.value;
  this.top = this.top.next;
  return item;
};

Stack.prototype.push = function(item) {
  const newNode = new Node(item);
  newNode.next = this.top;
  this.top = newNode;
};

Stack.prototype.peek = function() {
  if (!this.top) throw new Error('Stack is empty');
  return this.top.value;
};

Stack.prototype.isEmpty = function() {
  return this.top === null;
};

module.exports = Stack;
