const Stack = require('./Stack');

describe('Stack', () => {
  test('should create a stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

  test('should have four Stack methods', () => {
    const stack = new Stack();
    expect(stack.pop).toBeDefined();
    expect(stack.push).toBeDefined();
    expect(stack.peek).toBeDefined();
    expect(stack.isEmpty).toBeDefined();
  });

  test('pop() should throw an error when given an empty stack', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow();
  });

  test('pop() should remove the top-most item in the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
  });

  test('peek() should throw an error when given an empty stack', () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow();
  });

  test('peek() should return (not remove) the top-most item in the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.peek()).toBe(3);
  });

  test('isEmpty() should return true given an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  test('isEmpty() should return false for a non-empty stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });
});
