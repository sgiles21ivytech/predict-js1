/*
Shanon Giles
12/20/24
Problems 7-9
Prediting Outcomes
*/

//Problem 7: Why did the code produce that output?

/*function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }*/
  
  // My Predictions
  //1. Prediction Output:
  // There is going to be error due to a naming conflict, names is not defined. Neither console.log on line 13 or 15 will print.
  //2. Actual Output (Nothing showed up in node.js debug, output based on browser console):
  //function: undefined
  //name: ""
  //names: ReferenceError: names is not defined
  //3. The output was produced because name and index have block within the for loop which also has block scope, 
  // which means after the for loop runs the variables will not be accessible outside of the for loop.
  // Moving both let name and index to the inner scope of actuallyPrintingNames should address the issue like so so names to name within the for loop:
  /*function actuallyPrintingNames() {
    let name;
    let index;
    for (index = 0; index < name.length; index++) {
      name = name[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }*/
  
 /*Problem 8: Why did the code produce that output? 
 Explain the output, including any possible errors and why they occurred. 
 If there are no errors, explain the justification for each keyword used to declare variables.
 */
 /*const beatles = ['Paul', 'George', 'John', 'Ringo'];
 function printNames(names) {
   function actuallyPrintingNames() {
     for (let index = 0; index < names.length; index++) {
       const name = names[index];
       console.log(name + ' was found at index ' + index);
     }
   }
   actuallyPrintingNames();
 }
 printNames(beatles);*/
 
//1. The above code produced this output because beatles has a gloabl scope.
// The function printNames also has a gloabl scope and has a param of names, the innerscope function actuallyPrintingNames
// calls the for loop. 
//2. Since printNames need at least one arugment, the code uses the global beatles.
// This allowed the for the loop to run name was at index index on each line until the variable index is equal to the length of the names array.
//3. There are no errors present in the above code. 
// For the gloabl variable beatles, the keyword const was needed because the names in the array needed not to be changed.
// The let index was needed because the index will need to update +1 each time for the loop made a pass through the code.
// const name was needed store the collection of names according to the index.

/*Problem 9: Why did the code produce that output? 
Explain why each console.log looks the way it does.  
 */

/*const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)*/
//1. The code above produced the output:
//true
//false
// because a copy of the object planet was and comparsions were with booleans to see if they were indeed still the same.
//2. The console log on line 75 is designed in that  way because we need the orginal object and it's copy planetCopy to be compared
//and with the solutions returning true that compostion at index[0] matches the index[0] in planetCopy.
// The console log on line 76 is designed to see if both objects are the same and have the same memory location.
// The solution returned false, thus meaning that planetCopy has a different memory location than the object planet. 

