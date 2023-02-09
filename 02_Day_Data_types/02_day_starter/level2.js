console.group("Level 2");

console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.") // 1
console.log("\"Love is not patronizing and charity isn\'t about pity, it is about love. \
Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\""); // 2

console.log(typeof '10' == typeof 10);
console.log (typeof +'10' == typeof 10); // 3

console.log(parseFloat('9.8') == 10);
console.log(Math.ceil(parseFloat('9.8')) == 10); // 4

console.log('python'.includes('on') && 'jargon'.includes('on')); // 5

console.log("I hope this course is not full of jargon.".includes('jargon')); // 6

let randomNumber = Math.floor(Math.random() * 101); // 7
console.log(randomNumber);

let randomNumber2 = Math.floor(Math.random() * 51) + 50; // 8
console.log(randomNumber2);

let randomNumber3 = Math.floor(Math.random() * 256); // 9
console.log(randomNumber3);

let randomNumber4 = Math.floor(Math.random() * 10);
console.log('JavaScript'[randomNumber4]); // 10

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125"); // 11

const sent = 'You cannot end a sentence with because because because is a conjunction';
console.log(sent.substring(31, 54)); // 12

console.groupEnd();