//if else statement
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

console.log(testElse(198));
// ternary operator
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage);

// .indexof and .filter
const arry = [1, 2, 1, 3, 4, 3, 5];
const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
const duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);
// Output: [1, 3]

//how to send file to an array
// import {readFileSync, promises as fsPromises} from 'fs';
const {readFileSync, promises: fsPromises} = require('fs');

// ✅ read file ASYNCHRONOUSLY
async function asyncReadFile(filename) {
  try {
    const contents = await fsPromises.readFile(filename, 'utf-8');

    const arr = contents.split(/\r?\n/);

    console.log(arr); // 👉️ ['One', 'Two', 'Three', 'Four']

    return arr;
  } catch (err) {
    console.log(err);
  }
}

asyncReadFile('./example.txt');
// ez way to input txt file
var fs = require('fs');
var text = fs.readFileSync("./second_hands_validation_input.txt", 'utf-8');
var textByLine = text.split('\n')
blue = textByLine;
console.log(blue);

//
