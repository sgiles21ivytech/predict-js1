/*
Shanon Giles
12/20/24
Problems 4-6
Prediting Outcomes
*/

/* Problem 4: Why did the code produce that output? 
Declare a new variable for the value at the 
4th index of the array and console.log it
*/

/*const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third); */

//My Prediction:
/* 1. prediction output: 
//false
//true    
//2. Actual output was: 
//false 
//true
//3. The output for the code was produce because inside of the brackets, a (,) can skip a index in an array, 
// thus if index[1] is defined as first and index[3] is defined as second, 2 is not equal 5, making console.log false.
// Folliwng the same logic, index[1] and index[8] are equal to each as 2 is equal to 2.
//Below is the 4th index and it's console.log
const[,,,,forth] = numbers;
console.log(forth)
*/

/* Problem 5: Why did the code produce that output? 
Console.log the last value in the secondKey property's array.
*/
/*const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);*/

//My Prediction:
/* 1. prediction output: 
//value
// [1,5,1,8,3,3]
// 1
// console.log(willThisWork) will produce an error   
//2. Actual output was:
//value
//[1,5,1,8,3,3] 
//1
//5 /I belived that willThisWork would produce and error because it was undefined but after reviewing, I see willThisWork is in the memory location
//3. The code produced the above outputs because the properties key and secondkey are stored in the object lastTest.
//There console.logs displayed all values stored within the keys.
// willThisWork is value inside of the array that is stored in key secondKey. Thus willThisWork is stored at index[1] which has the value 5.
console.log(secondKey[5]) // since secondKey is now accessible outside of the object lastTest, any index stored in secondKey will display
*/

/* Problem 6: First, how many scopes does the following code block contain? 
Define each scope and guess what the output will be.
*/


/*var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);*/

//My Prediction:
/* 1. prediction output: 
// Every index will be printed with the proper message as result the (2 scope)innerscope function actuallyPritingNames
// 'name and index after loop is Ringo: 3 '
//2. Actual output was:
//Paul was found at index 0
//George was found at index 1
//John was found at index 2
//Ringo was found at index 3
//name and index after loop is Ringo:4 // I'm not sure why the index is 4, there is only an index upto 3?
*/
//3. There are 3 scopes currently: There is a global scope with: var beatles and function printNames
// There is a innerscope with function actuallyPrintingNames and the console.log on line 81. 
// There is a block scope with for the loop.







