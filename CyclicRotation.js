// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// *****SUDO CODING*****
// pop off array.length - rotations
// save to var
// rotations - array.length - rotations
// perpend popped off array elements to original array
// repeat until rotations == 0
// return new array

function solution(array, rotations) {
  console.log("initial array: ", array)
  var rotateNum;
  var currentRotationElements;

  while (rotations > 0){
    console.log("rotations: ", rotations);
    //prevent error if rotations are longer than the array
    if (rotations > array.length){
      rotateNum = rotations - array.length;
      rotations -= rotateNum;
      console.log("rotations: ", rotations);
      console.log("rotateNum:", rotateNum);
    } else {
      rotateNum = rotations;
      rotations -= rotateNum;
      console.log("rotations: ", rotations);
      console.log("rotateNum:", rotateNum);
    }
    console.log("before: ", array)
    currentRotationElements = array.splice(-rotateNum);
    array = currentRotationElements.concat(array);
    console.log("after: ", array);
  }
  return array;
}

// testing

console.log("return value: ", solution( [1,2,3,4,5,6,6,7,8], 5 ) );
// console.log( solution( [1,2], 3 ) );
// console.log( solution( [1,2,3,4,5,6,6,7,8], 20 ) );
// console.log( solution( [1,2,3,4,5,6,6,7,8], 3 ) );
// console.log( solution( [1,2,3], 3 ) );
