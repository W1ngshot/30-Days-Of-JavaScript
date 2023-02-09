console.group("Level 2");

console.group("Task 1");
let base = prompt("Enter base: ");
let height = prompt("Enter height: ");
console.log(`The area of the triangle is ${base * height * 0.5}`);
console.groupEnd();

console.group("Task 2");
let a = prompt("Enter side a: ");
let b = prompt("Enter side b: ");
let c = prompt("Enter side c: ");
console.log(`The perimeter of the triangle is ${+a + +b + +c}`);
console.groupEnd();

console.group("Task 3");
let length = prompt("Enter length: ");
let width = prompt("Enter width: ");
console.log(`The area of the rectangle is ${length * width}`);
console.log(`The perimeter of the rectangle is ${(length + width) * 2}`);
console.groupEnd();

console.group("Task 4");
let radius = prompt("Enter radius: ");
console.log(`The radius of the circle is ${Math.PI * radius * radius}`);
console.log(`The circumference of the circle is ${Math.PI * radius * 2}`);
console.groupEnd();

console.group("Task 5");
let slope1 = (2 - 0) / (2 - 1);
console.log(`The slope of the y = 2x - 2 is ${slope1}`);
console.log(`The x-intersect of the y = 2x - 2 is (0, ${2 * 0 - 2})`);
console.log(`The y-intersect of the y = 2x - 2 is (${(0 + 2) / 2}, 0)`);
console.groupEnd();

console.group("Task 6");
let slope2 = (10 - 2) / (6 - 2);
console.log(`The slope between point (2, 2) and point(6, 10) is ${slope2}`);
console.groupEnd();

console.group("Task 7");
console.log(slope1 === slope2);
console.groupEnd();

console.group("Task 8");
console.log(`The y value in y = x^2 + 6x + 9 with x = 1 is ${1 * 1 + 6 * 1 + 9}`);
console.log(`The y value in y = x^2 + 6x + 9 with x = 0 is ${0 * 0 + 6 * 0 + 9}`);
console.log(`The y value in y = x^2 + 6x + 9 with x = -1 is ${-1 * -1 + 6 * -1 + 9}`);
console.log(`The y value in y = x^2 + 6x + 9 with x = -2 is ${-2 * -2 + 6 * -2 + 9}`);
console.log(`The y value in y = x^2 + 6x + 9 with x = -3 is ${-3 * -3 + 6 * -3 + 9}`);
console.groupEnd();

console.group("Task 9");
let hours = prompt("Enter hours: ");
let rate = prompt("Enter rate per hour: ");
console.log(`Your weekly earning is ${hours * rate}`);
console.groupEnd();

console.group("Task 10");
firstName.length > 7 ? console.log('The name is long') : console.log('The name is short');
console.groupEnd();

console.group("Task 11");
console.log(`Your first name, ${firstName} is ${firstName.length > lastName.length ? 'longer' : 'shorter'} than your family name, ${lastName}`);
console.groupEnd();

console.group("Task 12");
let myAge = 20;
let yourAge = 25;
console.log(`I am ${Math.abs(myAge - yourAge)} years ${myAge > yourAge ? 'older' : 'younger'} than you`);
console.groupEnd();

console.group("Task 13");
let birthYear = prompt("Enter birth year: ");
let currentAge = date.getFullYear() - birthYear;
console.log(`You are ${currentAge}. ${currentAge >= 18 ? 
    'You are old enough to drive.' : `You will be allowed to drive after ` + (18 - currentAge) + ` years.`}`)
console.groupEnd();

console.group("Task 14");
let years = prompt('Enter number of years you live: ');
console.log(`You lived ${years * 365 * 24 * 60 * 60} seconds.`)
console.groupEnd();

console.group("Task 15");
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`) // 15.1
console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`) // 15.2
console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`) // 15.3
console.groupEnd();

console.groupEnd();