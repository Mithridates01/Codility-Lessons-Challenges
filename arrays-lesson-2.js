// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//test array
var testArray = [6,6,3,4,6,4,3,7,4,77,7,77,100,10000,100,6,10000];

function solution(array) {
  // create empty storage array
  var b = [];

  // iterate through array
  for (var i = 0; i < array.length; i++){
    //
    var index = b.indexOf(array[i]);

    if (index > -1) {
      b.splice(index, 1);
    } else {
      b.push(array[i]);
    }
  }
  return b[0]
}


console.log(solution(testArray));
