function range (start,end,step) {
  var array = [];
  if(start != null && end != null && step != null && start < end && step > 0) {
    for(var i = start;i <= end;i += step) {
      array.push(i);
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(0, 8, 2));
console.log(range(-9, 3, 3));
console.log(range());
console.log(range(0, 10, -2));