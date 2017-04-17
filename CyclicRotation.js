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
  var rotateNum;
  var currentRotationElements;

  while (rotations > 0){
    console.log(rotations)
    //prevent error if rotations are longer than the array
    if (rotations > array.length){
      rotateNum = rotations - array.length;
      rotations -= rotateNum;
    } else {
      rotateNum = rotations;
      rotations -= rotateNum;
    }

    currentRotationElements = array.splice(-rotateNum);
    array = currentRotationElements.concat(array);
  }
  return array;
}




