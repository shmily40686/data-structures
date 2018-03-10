var BinarySearchTree = function(value) {

  var tree = Object.create(btreeMethods);
  tree.left = null;
  tree.right = null;
  tree.value = value;
  return tree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var btreeMethods = {};

btreeMethods.insert = function(target) {
  
  if(target < this.value) {
    if(this.left === null) {
      this.left = BinarySearchTree(target);
    } else {
      this.left.insert(target)
    }
  } else {
    if(this.right === null) {
      this.right = BinarySearchTree(target);
    } else {
      this.right.insert(target)
    }
  }
};


btreeMethods.contains = function(target) {
  if(this.value === undefined) {
    return false
  }
  
  if(this.value === target) {
    return true
  }
  if(this.left === null && this.right === null) {
    return false
  }
  if(this.value < target) { 
    return this.right.contains(target)
  }
  if(this.value > target) {
    return this.left.contains(target)
  }
  return false
};


btreeMethods.depthFirstLog = function(target) {
  debugger;
  var value = this.value

  var recurse = function(value) {
    if(value === null) {
      return
    };

    target.apply(this, arguments)
     
 return recurse(this.left)
    // recurse(this.right)
  };

recurse(value)

};



















