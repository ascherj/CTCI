const Node = function(value) {
  this.value = value;
  this.next = null;
};

const LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function() {
  const oldHead = this.head;
  this.head = this.head ? this.head.next : null;
  return oldHead;
};

LinkedList.prototype.contains = function(value) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === value) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

LinkedList.prototype.size = function() {
  let count = 0;
  let currentNode = this.head;
  while (currentNode) {
    count += 1;
    currentNode = currentNode.next;
  }
  return count;
};

module.exports = LinkedList;
