

class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.counter = 0;
  	this.storage = {};
  };

  	enqueue(value) {
    this.storage[this.counter] = value
    this.counter++;
  };

    dequeue() {
    var temp = this.storage[0]
    this.counter--;
    delete this.storage[0]
    for(var i = 0; i < this.counter; i++) {
      this.storage[i] = this.storage[i+1]
    }
    return temp
  };

    size() {
    return Math.max(0,this.counter);
  };
  

};
