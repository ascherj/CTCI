const BST = require('./BST');

describe('BST', () => {
  test('should create a binary search tree', () => {
    const bst = new BST();
    expect(bst).toBeDefined();
  });
});

describe('BST - insert', () => {
  test('should insert values correctly', () => {
    const bst = new BST(5);
    bst.insert(3);
    bst.insert(8);
    bst.insert(1);
    bst.insert(4);
    expect(bst.left.value).toBe(3);
    expect(bst.right.value).toBe(8);
    expect(bst.left.left.value).toBe(1);
    expect(bst.left.right.value).toBe(4);
  });
});

describe('BST - contains', () => {
  test('should return true for values that exist in the BST', () => {
    const bst = new BST(3);
    bst.insert(2);
    bst.insert(5);
    expect(bst.contains(5)).toBe(true);
  });

  test('should return false for values that do not exist in the BST', () => {
    const bst = new BST(3);
    bst.insert(2);
    bst.insert(5);
    expect(bst.contains(8)).toBe(false);
  });
});
