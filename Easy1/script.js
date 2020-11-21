let evenArr = [];
let oddArr = [];

function arrays(...nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      evenArr.push(nums[i]);
    } else {
      oddArr.push(nums[i]);
    }
  }
  console.log(evenArr);
  console.log(oddArr);
}

arrays(1, 2, 3, 4, 5);
