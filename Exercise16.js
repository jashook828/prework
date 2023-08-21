//This is exercise 16

/*Given an array of numbers, remove numbers from the end of the array until it's empty. With each number, if it's bigger than 100 log that it's a big number to the console. 
Otherwise log that it's a small number to the console.*/

let numArray = [45, 234, 93, 2, 457, 982, 99, 1000, 21, 19]

//we want to continue until the list is empty. An empty list has a length of 0. Use this fact to fill in the required condition
while (numArray.length > 0) {
    let removedNum =  numArray.pop(); //use the pop method to remove the number at the end of the list and store it in a new variable
   
    //now you need to check if the number is big (over 100)
    if (removedNum > 100) {
        console.log(`${removedNum} is a big number`);
    } else {
        console.log(`${removedNum} is a small number`)
    }
}
console.log("The loop is done!") //will only run once the loop has finished