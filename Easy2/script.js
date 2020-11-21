let primeNums = [];

function primeArr(...nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0 && nums[i] != 1) {
      primeNums.push(nums[i]);
    } else if (nums[i] == 2) {
      primeNums.push(nums[i]);
    }
  }
  console.log(primeNums);
}

primeArr(1, 2, 3, 4, 5, 6, 7);
