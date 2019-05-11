const Tree = require('./Tree');

describe('Tree', () => {
  test('should create a new tree', () => {
    const tree = new Tree();
    expect(tree).toBeDefined();
  });
});

describe('Tree - addChild', () => {
  test('should add a child node to the tree', () => {
    const tree = new Tree(1);
    tree.addChild(2);
    expect(tree.children.length).toBeGreaterThan(0);
  });
});

describe('Tree - contains', () => {
  test('should return true for a node that exists in the tree', () => {
    const tree = new Tree(1);
    tree.addChild(2);
    tree.addChild(3);
    const firstChild = tree.children[0];
    firstChild.addChild(4);
    expect(tree.contains(4)).toBe(true);
  });

  test('should return false for a node that does not exist in the tree', () => {
    const tree = new Tree(1);
    tree.addChild(2);
    tree.addChild(3);
    const firstChild = tree.children[0];
    firstChild.addChild(4);
    expect(tree.contains(5)).toBe(false);
  });
});

describe('Tree - removeChild', () => {
  test('should throw an error if tree has no children', () => {
    const tree = new Tree(1);
    expect(() => tree.removeChild(1)).toThrow();
  });

  test('should successfully remove the child of a tree', () => {
    const tree = new Tree(1);
    tree.addChild(2);
    tree.addChild(3);
    const firstChild = tree.children[0];
    firstChild.addChild(4);
    expect(tree.contains(4)).toBe(true);
    tree.removeChild(4);
    expect(tree.contains(4)).toBe(false);
  });
});
