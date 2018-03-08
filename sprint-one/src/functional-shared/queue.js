var storage;
var counter;

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  storage = {};
  counter = 0;
  var someInstance = {};
  extend(someInstance, queueMethods)
  return someInstance
};

var extend = function(someInstance, queueMethods) {
  for(var key in queueMethods) {
    someInstance[key] = queueMethods[key]
  }
};



var queueMethods = {
  enqueue : function(value) {
    storage[counter] = value
    counter++;
  },

  dequeue : function() {
    var temp = storage[0]
    counter--;
    delete storage[0]
    for(var i = 0; i < counter; i++) {
      storage[i] = storage[i+1]
    }
    return temp
  },


  size : function() {
    return Math.max(0,counter);
  }
};






