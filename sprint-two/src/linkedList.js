 var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //list.last = list.tail;

  list.addToTail = function(value) {
    if (list.tail === null && list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      var last = Node(value)
      list.tail.next = last;
      list.tail = last;
    }
    
  };

  list.removeHead = function(){
    if(list.head === null && list.tail === null){
      return undefined;
    }
    if(list.head === list.tail) {
      var result = list.head.value;
      list.head = null;
      list.tail = null;
      return result;
    }
      var result = list.head.value;
      list.head = list.head.next;
      return result;
  };

  list.contains = function(target) {

  var recurse = function(node) {

      if(node === null) {
        return false
      }
      if(node.value === target) { 
        return true;
      } else {
       return recurse(node.next);
      }
    }; 


    if(list.head === null && list.tail === null) {
      return false;
    }

    if(list.head === list.tail) {
      if(list.head.value === target) {
        return true;
      } else {
        return false;
      }
    } 
   
    return recurse(list.head)
  };
   
  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */