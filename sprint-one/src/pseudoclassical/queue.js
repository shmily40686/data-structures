var storage;
var counter;

var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
this.storage = {};
this.counter = 0;
};


 Queue.prototype.enqueue =
  function(value) {
    this.storage[this.counter] = value
    this.counter++;
  };

  Queue.prototype.dequeue =
  function() {
    var temp = this.storage[0]
    this.counter--;
    delete this.storage[0]
    for(var i = 0; i < this.counter; i++) {
      this.storage[i] = this.storage[i+1]
    }
    return temp
  };


  Queue.prototype.size = function() {
    return Math.max(0,this.counter);
  };

