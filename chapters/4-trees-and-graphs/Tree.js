const Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  this.children.push(new Tree(value));
};

Tree.prototype.contains = function(value) {
  if (this.value === value) return true;
  for (let i = 0; i < this.children.length; i++) {
    const currentChild = this.children[i];
    if (currentChild.contains(value)) return true;
  }
  return false;
};

Tree.prototype.removeChild = function(value, parent = null, index = -1) {
  if (!parent && this.children.length === 0) {
    throw new Error('Tree has no children');
  }
  if (this.value === value) {
    parent.children.splice(index, 1);
    return true;
  }
  for (let i = 0; i < this.children.length; i++) {
    const currentChild = this.children[i];
    if (currentChild.removeChild(value, this, i)) return;
  }
};

module.exports = Tree;
