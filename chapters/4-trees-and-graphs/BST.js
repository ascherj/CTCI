const BST = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BST.prototype.insert = function(value) {
  const insertLeft = () => {
    if (this.left === null) {
      this.left = new BST(value);
    } else {
      this.left.insert(value);
    }
  };

  const insertRight = () => {
    if (this.right === null) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
  };

  if (this.value === null) {
    this.value = new BST(value);
    return;
  }

  if (value <= this.value) {
    insertLeft();
  } else {
    insertRight();
  }
};

BST.prototype.contains = function(value) {
  if (this.value === value) return true;
  if (value <= this.value) return this.left ? this.left.contains(value) : false;
  else return this.right ? this.right.contains(value) : false;
};

BST.prototype.preOrderLog = function(cb) {
  if (this.value) cb(this.value);
  if (this.left) this.left.preOrderLog(cb);
  if (this.right) this.right.preOrderLog(cb);
};

BST.prototype.inOrderLog = function(cb) {
  if (this.left) this.left.inOrderLog(cb);
  if (this.value) cb(this.value);
  if (this.right) this.right.inOrderLog(cb);
};

BST.prototype.postOrderLog = function(cb) {
  if (this.left) this.left.postOrderLog(cb);
  if (this.right) this.right.postOrderLog(cb);
  if (this.value) cb(this.value);
};

module.exports = BST;
