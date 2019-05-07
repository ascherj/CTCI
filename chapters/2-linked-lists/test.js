const LinkedList = require('./LinkedList');

describe('LinkedList', () => {
  test('should create a linked list', () => {
    const list = new LinkedList();
    expect(list).toBeDefined();
  });
});

describe('LinkedList - addToTail', () => {
  test('should append a node to the tail', () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    expect(list.tail.value).toBe(3);
  });
});

describe('LinkedList - removeHead', () => {
  test('should remove the head node', () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    expect(list.head.value).toBe(1);
    list.removeHead();
    expect(list.head.value).toBe(2);
  });

  test('should do nothing if the head is null', () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);
    list.removeHead();
    expect(list.head).toBe(null);
  });
});

describe('LinkedList - contains', () => {
  test('should return true for a node that exists', () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    expect(list.contains(2)).toBe(true);
  });

  test('should return false for a node that does not exist', () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    expect(list.contains(10)).toBe(false);
  });
});

describe('LinkedList - size', () => {
  test('should return the size of an empty linked list', () => {
    const list = new LinkedList();
    expect(list.size()).toBe(0);
  });

  test('should return the size of a linked list', () => {
    const list = new LinkedList();
    list.addToTail(7);
    list.addToTail(20);
    list.addToTail(99);
    expect(list.size()).toBe(3);
  });
});

describe('LinkedList - deleteNode', () => {
  test('should delete a node from the linked list', () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.deleteNode(2);
    expect(list.size()).toBe(2);
  });

  test('should update the head if the head was removed', () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.deleteNode(1);
    expect(list.head.value).toBe(2);
  });

  test('should update the tail if the tail was removed', () => {
    const list = new LinkedList();
    list.addToTail(1);
    list.addToTail(2);
    list.addToTail(3);
    list.deleteNode(3);
    expect(list.tail.value).toBe(2);
  });
});
