const Queue = require('./Queue');

describe('Queue', () => {
  test('should create a queue', () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
  });
});

describe('Queue - add', () => {
  test('should add items to the queue', () => {
    const queue = new Queue();
    queue.add(1);
    queue.add(2);
    expect(queue.first.value).toBe(1);
    expect(queue.last.value).toBe(2);
  });
});

describe('Queue - remove', () => {
  test('should throw an error if the queue is empty', () => {
    const queue = new Queue();
    expect(() => queue.remove()).toThrow();
  });

  test('should remove the first item in the queue', () => {
    const queue = new Queue();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.remove()).toBe(1);
    expect(queue.first.value).toBe(2);
  });

  test('should set first and last to null if the only item in the queue is removed', () => {
    const queue = new Queue();
    queue.add(1);
    queue.remove();
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
  });
});

describe('Queue - peek', () => {
  test('should throw an error if the queue is empty', () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrow();
  });

  test('should return the value of the first item', () => {
    const queue = new Queue();
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toBe(1);
  });
});

describe('Queue - isEmpty', () => {
  test('should return true if the queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('should return fals for a queue that is not empty', () => {
    const queue = new Queue();
    queue.add(1);
    expect(queue.isEmpty()).toBe(false);
  });
});

describe('Queue - size', () => {
  test('should return 0 for an empty queue', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);
  });

  test('should return the size of a non-empty queue', () => {
    const queue = new Queue();
    queue.add(1);
    queue.add(2);
    queue.add(3);
    expect(queue.size()).toBe(3);
  });
});
