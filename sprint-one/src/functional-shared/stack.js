var counter;
var storage;

var Stack = function() {
  var someInstance = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  storage = {}
  counter = 0
  extend(someInstance, stackMethods)
  return someInstance
};

var extend = function(someInstance, stackMethods) {
  for(var key in stackMethods) {
    someInstance[key] = stackMethods[key]
  }
};

var stackMethods = {
  push: function(value) {
    storage[counter] = value;
    counter++;
  },
  pop: function() {
    counter--;
    return storage[counter]
  },
  size: function() {
  	return Math.max(0,counter);
  }
};





