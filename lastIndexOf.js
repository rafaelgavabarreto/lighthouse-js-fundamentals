
function lastIndexOf (array,value) {
  var lastPosition = -1;
  if(array != null){
    for(var i = 0;i < array.length;i++) {
      if(array[i] === value)
        lastPosition = i;
    }
    return lastPosition;
  }
  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);