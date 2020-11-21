<<<<<<< HEAD
// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.

// Example:
// Input: [2, 4, 7, 11, 15, 16]

// Output: Even numbers: [2, 4, 16]
// 	  Odd Numbers: [7, 11, 15]

let even = [];
let odd = [];

let Array1 = function (...Nums) {
  console.log(Nums);

  // even = Nums.filter((individual) => individual % 2 == 0 )
  even = Nums.filter((individual) => {
    if (individual % 2 == 0) {
      return true;
    }
  });
  odd = Nums.filter((individual) => {
    if (individual % 2 == 1) {
      return true;
    }
  });

  //   Nums.forEach((individual) => {
  //     if (individual % 2 == 0) {
  //       even.push(individual);
  //     } else {
  //       odd.push(individual);
  //     }
  //   });
};

Array1(2, 3, 4, 5, 6, 7, 8);
console.log(even);
console.log(odd);

//   for (var i = 0; i < array.length; i++) {
//     if (Nums[i] % 2) {
//       console.log(array.Nums);
//     } else {
//       console.log(i);
//     }
//   }
// }

// array(1, 2, 3, 4, 5, 6, 7);

// var Input = Nums(forEach())

// var outEven= [];
// var outOdd= [] ;

// console.log(outEven)
// console.log(outOdd)
// =======
// let evenArr = [];
// let oddArr = [];

// function arrays(...nums) {
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//       evenArr.push(nums[i]);
//     } else {
//       oddArr.push(nums[i]);
//     }
//   }
//   console.log(evenArr);
//   console.log(oddArr);
// }

// arrays(1, 2, 3, 4, 5);
// >>>>>>> ea7428ed70de1d0e86db16d2dbd6ec96e350878b
