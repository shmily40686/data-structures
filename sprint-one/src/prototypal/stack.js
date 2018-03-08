  var storage 
  var counter 


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  storage = {};
  counter = 0;
  var someInstance = Object.create(stackMethods);

return someInstance

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

