const Node = function(value) {
  this.value = value;
  this.next = null;
};

const Queue = function() {
  this.first = null;
  this.last = null;
  this.count = 0;
};

Queue.prototype.add = function(item) {
  const newNode = new Node(item);
  if (this.last !== null) {
    this.last.next = newNode;
  }
  this.last = newNode;
  if (this.first === null) {
    this.first = this.last;
  }
  this.count++;
};

Queue.prototype.remove = function() {
  if (!this.first) throw new Error('Queue is empty');
  const toBeRemoved = this.first.value;
  this.first = this.first.next;
  if (!this.first) this.last = null;
  return toBeRemoved;
};

Queue.prototype.peek = function() {
  if (!this.first) throw new Error('Queue is empty');
  return this.first.value;
};

Queue.prototype.isEmpty = function() {
  return this.first === null;
};

Queue.prototype.size = function() {
  return this.count;
};

module.exports = Queue;
