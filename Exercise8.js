// This is Exercise 8

/*const patientName = "Evelyn Park";
let apptTime = "2:30pm";
let apptDay = "Thursday";

let reminderMessage = `Hi ${patientName}! This is a reminder that you have an appointment at ${apptTime} on ${apptDay}. See you then!`;

console.log(reminderMessage);*/

const firstName = "Joshua" //add your first name
const lastName = "Shook"//add your last name
const fullNameConcat = firstName + " " + lastName  //create your full name from the first two variables using concatenation 
const fullNameInterp = `${firstName} ${lastName}`//create your full name from the first two variables using interpolation

//don't change the following line, checks to see that concatenation and interpolation gave results
console.log("Are your fullNameConcat and fullNameInterp variables equal?")
console.log(fullNameConcat)
console.log(fullNameInterp)
console.log(fullNameConcat == fullNameInterp); 

let myAge = "36" //add your age
let faveFood = "Tacos" //add your favorite food
let faveColor = "Green" //add your favorite color
let miniBio = `My Name is ${fullNameInterp}. I am ${myAge}. My favorite food is ${faveFood} and my favorite color is ${faveColor}.` //use string interpolation to create summary that includes your full name, age, favorite food, and favorite color
console.log("Your mini bio is:");
console.log(miniBio);

