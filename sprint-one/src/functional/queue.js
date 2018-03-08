var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value
    counter++;
  };

  someInstance.dequeue = function() {
    var temp = storage[0]
    counter--;
    delete storage[0]
    for(var i = 0; i < counter; i++) {
      storage[i] = storage[i+1]
    }
    return temp
  };

  someInstance.size = function() {
    return Math.max(0,counter);
  };

  return someInstance;
};
