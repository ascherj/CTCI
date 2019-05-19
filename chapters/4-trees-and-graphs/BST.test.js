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

describe('BST - preOrderLog', () => {
  test('should visit all nodes using pre-order traversal', () => {
    const bst = new BST(7);
    bst.insert(4);
    bst.insert(1);
    bst.insert(6);
    bst.insert(5);
    bst.insert(10);
    const result = [];
    bst.preOrderLog((val) => {
      result.push(val);
    });
    expect(result).toEqual([7, 4, 1, 6, 5, 10]);
  });
});

describe('BST - inOrderLog', () => {
  test('should visit all nodes using in-order traversal', () => {
    const bst = new BST(7);
    bst.insert(4);
    bst.insert(1);
    bst.insert(6);
    bst.insert(5);
    bst.insert(10);
    const result = [];
    bst.inOrderLog((val) => {
      result.push(val);
    });
    expect(result).toEqual([1, 4, 5, 6, 7, 10]);
  });
});

describe('BST - postOrderLog', () => {
  test('should visit all nodes using post-order traversal', () => {
    const bst = new BST(7);
    bst.insert(4);
    bst.insert(1);
    bst.insert(6);
    bst.insert(5);
    bst.insert(10);
    const result = [];
    bst.postOrderLog((val) => {
      result.push(val);
    });
    expect(result).toEqual([1, 5, 6, 4, 10, 7]);
  });
});
