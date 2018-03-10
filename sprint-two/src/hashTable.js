

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // var callback = function(item, key,storage) {
  //   if(key === index) {
  //       // set this value to tube have same index
  //   }
  // }
  //   this._storage.each(callback)
    this._storage.set(index, v);
//   }
// }


// if(storage[index] === undefined) {
//   this._storage.set(index, v);
// } else {
//   var bucket = []
//     bucket[0] = k;
//     bucket[1] = v;
// }




};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
   return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var callback = function(item, key,storage) {
    if(key === index) {
        storage[key] = undefined;
    }
  }
     this._storage.each(callback)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


