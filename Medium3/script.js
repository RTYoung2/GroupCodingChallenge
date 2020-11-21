// Write a function that takes in two numbers and determines the largest positive integer that divides the two numbers without a remainder.
// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24

// Example 2:
// Input: gdc_two_numbers(78,126)
// Output: 6

let Equation = function (a, b) {
  if (!b) {
    return a;
  }
  //   } else if (!a) {
  //     return b;
  //   }
  return Equation(b, a % b);
};
console.log(Equation(336, 360));
console.log(Equation(78, 126));
