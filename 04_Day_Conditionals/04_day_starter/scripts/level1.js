console.group("Level 1");

console.group("Task 1");
let age = prompt("Enter your age: ");
age >= 18 ? console.log("You are old enough to drive.") : console.log(`You are left with ${18 - age} years to drive.`)
console.groupEnd();

console.group("Task 2");
let yourAge = prompt("Enter your age: ");
const myAge = 20;
if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`);
} else if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`);
} else {
    console.log("We are the same age.");
}
console.groupEnd();

console.group("Task 3");
const a = 4
const b = 3
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else if (a < b) {
    console.log(`${a} is less than ${b}`);
}
else {
    console.log(`${a} = ${b}`);
}

a > b ? console.log(`${a} is greater than ${b}`) : a < b ? console.log(`${a} is less than ${b}`) : console.log(`${a} = ${b}`);
console.groupEnd();

console.group("Task 4");
let number = prompt("Enter a number: ");
if (number % 2 == 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}
console.groupEnd();

console.groupEnd();