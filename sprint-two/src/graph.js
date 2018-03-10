

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  // this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

   this.storage[node] =[];
   //console.log(this.storage)
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.

Graph.prototype.contains = function(node) {
  for(var key in this.storage) {
    if( key === node.toString()) {
      return true
    }
  }
  return false;
};

// Removes a node from the graph.

Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  for(var key in this.storage) {
    for(var i = 0; i < key.length; i++) {
        var index1 = [key][i].indexOf(node)
        this.storage[key[i]].splice(index1, 1)
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.storage[fromNode].indexOf(toNode) !== -1) {
   return true
  }
 return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var index2 = this.storage[toNode].indexOf(fromNode)
  this.storage[toNode].splice(index2, 1)
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // var hold = this
  for(var key in this.storage) {
     cb(parseInt(key));
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


