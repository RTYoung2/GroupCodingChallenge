// Create a function that accepts two strings, then determines whether or not the first string is an anagram of the second string by returning a boolean.
// Example:
// Input: String 1: So dark the con of man
//  String 2: Madonna of the Rocks
// Output: True
// Input: String 1: Things are good
// 	  String 2: Dogs eat ants
// Output: False

let strings = function (phrase1, phrase2) {
  var joined1 = phrase1
    .toLowerCase()
    .replace(/[^a-z\d]/g, "")
    .split("")
    .sort()
    .join("");
  var joined2 = phrase2
    .toLowerCase()
    .replace(/[^a-z\d]/g, "")
    .split("")
    .sort()
    .join("");

  if (joined1 === joined2) {
    console.log(true);
  } else {
    console.log(false);
  }
};

strings(`iceman`, `cinema`);

//split
//replace
//join
//

// let array = `1,2,3,4,5,6,7`;
// console.log(array.split(`,`));
// console.log(Number(array[0]));

// iceman
//Cinema
// ===
//aceimn
//aceimn
