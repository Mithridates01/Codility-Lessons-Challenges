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
    // prevent error if rotations are longer than the array
    if (rotations > array.length){
      rotateNum = rotations - array.length;
      rotations -= rotateNum;
    } else {
      rotateNum = rotations;
      rotations -= rotateNum;
    }
    // logic for the rotation
    currentRotationElements = array.splice(-rotateNum);
    array = currentRotationElements.concat(array);
  }
  return array;
}

// testing

var is_same = (array1.length == array2.length) && array1.every(function(element, index) {
    return element === array2[index];
});

  console.log( solution( [1,2,3,4,5,6,6,7,8], 5 ) );
  debugger
if ( solution( [1,2,3,4,5,6,6,7,8], 5 ) == [ 5, 6, 6, 7, 8, 1, 2, 3, 4 ] ) {
  console.log("true");
} else {
  console.log("false");
}

  console.log( solution( [1,2], 3 ) );
if ( solution( [1,2], 3 ) == [ 2, 1 ] ) {
  console.log("true");
} else {
  console.log("false");
}

  console.log( solution( [1,2,3,4,5,6,6,7,8], 20 ) );
if ( solution( [1,2,3,4,5,6,6,7,8], 20 ) == [ 1, 2, 3, 4, 5, 6, 6, 7, 8 ] ) {
  console.log("true");
} else {
  console.log("false");
}

  console.log( solution( [1,2,3,4,5,6,6,7,8], 3 ) );
if ( solution( [1,2,3,4,5,6,6,7,8], 3 ) == [ 6, 7, 8, 1, 2, 3, 4, 5, 6 ] ) {
  console.log("true");
} else {
  console.log("false");
}

  console.log( solution( [1,2,3], 3 ) );
if ( solution( [1,2,3], 3 ) == [ 1, 2, 3 ] ) {
  console.log("true");
} else {
  console.log("false");
}

  console.log( solution( [],5) );
if ( solution( [],5) == [] ) {
  console.log("true");
} else {
  console.log("false");
}

if ( solution( [1],5) === [ 1 ] ) {
  console.log("true");
} else {
  console.log("false");
}

// Initial scoring was 87% correctness: fail edge case for
//  input: ([1, 1, 2, 3, 5], 42)
//  (got [1, 1, 2, 3, 5] expected [3, 5, 1, 1, 2])
