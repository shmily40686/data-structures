

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
var index = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(index) === undefined) {
    var bucket = [[k,v]];
    this._storage.set(index, bucket);
  } else {
    var holder = this._storage.get(index)
    for(var i = 0; i < holder.length; i++) {
      if(holder[i][0] === k) {
        holder[i][1] = v;
      } 
    }
    this._storage.get(index).push([k,v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if(bucket === undefined) {
    return undefined
  }

  for(var i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === k) {
      return bucket[i][1]
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if(bucket === undefined) {
    return;
  }

  var callback = function(buck, storageindex) {
    if(storageindex === index) {
      for(var i = 0; i < buck.length; i++) {
        if(buck[i][0] === k) {
          buck[i][0] = null 
        }
      }
    }
  }
     this._storage.each(callback)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


