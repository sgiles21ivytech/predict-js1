/*
Shanon Giles
12/20/24
Problems 1-3
Prediting Outcomes
*/

/* Problem 1: Why did the code produce that output? 
If applicable, how would you get the index value that did not output? */  

/*const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
Predict the output
console.log(randomCar)
console.log(otherRandomCar)*/

//My Prediction:
/* 1. prediction output: 
//Tesla
//Mercedes    
//2. Actual output was: 
//Tesla 
//Mercedes
//3. In order to get the last index value it would be: const [, ,lastRandomCar] = cars
const [, ,lastRandomCar] = cars
console.log(lastRandomCar)
//output:
//Honda */

/*Problem 2: Why did the code produce that output? If applicable, 
what would you need to do to solve any potential problems?*/
/*const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
Predict the output
console.log(otherName);
console.log(employeeName); */

/*My Prediction:
//1. Prediction output:
//Elon 
//2. Actual output was:
//Uncaught ReferenceError ReferenceError: employeeName is not defined
//3. The above code produced the Reference error because employeeName isn't definded. Only othername was definded in the deconstruction.
//In order to correct the above error, in const object curly braces, employeeName must be defined, then a comma, follow by employeeName: otherName, as this is the copy of the orginal.
const {employeeName, employeeName: otherName} = employee;
console.log(otherName, employeeName) */

/* Problem 3: Why did the code produce that outout? 
If applicable, how would you alter this code without changing either console.log?
*/
/*const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: '12345' // Added key passowrd with a value of 12345
}

const { password, password: hashedPassword } = person;  // Added password followed a comma
//Predict the output
console.log(password);
console.log(hashedPassword); */

// My Prediction:
//1. Prediction output:
// I predict an error becasue password is not a property within the object person. So even if we wanted to created a copy of password, there no place in memory for it.
//2. Actual output:
//12345
//undefined
//3. Based on the unexpected result of undefinded for console.log(hashedPassword), there is no password key in the object person to deconstruct.
//Alerting the code to have adding password as a property key, will display the correct information. Also to created a copy and overwrite the key password, password must also be inside
// of the curly braces on line 63 followed by a comma.



