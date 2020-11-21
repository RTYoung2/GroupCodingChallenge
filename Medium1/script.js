var vowelCheck = function (y) {
  var x = y.toUpperCase();
  if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U") {
    console.log(`${x} is a vowel`);
  } else if (x == "Y") {
    console.log(`${x} is sometimes a vowel`);
  } else {
    console.log(`${x} is not a vowel`);
  }
};

vowelCheck("y");
