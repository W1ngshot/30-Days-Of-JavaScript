console.group("Level 1");

console.group("Task 1");
let firstName = "Kirill", 
    lastName = "Samsonov", 
    country = "Russia",
    city = "Kazan",
    age = 20,
    isMarried = false,
    year = new Date().getFullYear();
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year); // 1
console.groupEnd();

console.group("Task 2");
console.log(typeof '10' === typeof 10); // 2
console.groupEnd();

console.group("Task 3");
console.log(parseInt('9.8') === 10); // 3
console.groupEnd();

console.group("Task 4");
console.log(1 + 1 === 2, 'a' === 'a', 0 == false); // 4.1
console.log(2 + 3 == 4, 2 === true, 'a' === 'b'); // 4.2
console.groupEnd();

console.group("Task 5");
console.log(4 > 3); // 5.1
console.log(4 >= 3); // 5.2
console.log(4 < 3); // 5.3
console.log(4 <= 3); //5.4
console.log(4 == 4); // 5.5
console.log(4 === 4); // 5.6
console.log(4 != 4); // 5.7
console.log(4 !== 4); // 5.8
console.log(4 != '4'); // 5.9
console.log(4 == '4'); // 5.10
console.log(4 === '4'); // 5.11
console.log('python'.length !== 'jargon'.length); // 5.12
console.groupEnd();

console.group("Task 6");
console.log(4 > 3 && 10 < 12); // 6.1
console.log(4 > 3 && 10 > 12); // 6.2
console.log(4 > 3 || 10 < 12); // 6.3
console.log(4 > 3 || 10 > 12); // 6.4
console.log(!(4 > 3)); // 6.5
console.log(!(4 < 3)); // 6.6
console.log(!(false)); // 6.7
console.log(!(4 > 3 && 10 < 12)); // 6.8
console.log(!(4 > 3 && 10 > 12)); // 6.9
console.log(!(4 === '4')); // 6.10
console.log(!'dragon'.includes('on') && !'python'.includes('on')); // 6.11
console.groupEnd();

console.group("Task 7");
const date = new Date();
console.log(date.getFullYear()); // 7.1
console.log(date.getMonth()); // 7.2
console.log(date.getDate()); // 7.3
console.log(date.getDay()); // 7.4
console.log(date.getHours()); // 7.5
console.log(date.getMinutes()); // 7.6
console.log(date.getSeconds()); // 7.7
console.groupEnd();

console.groupEnd();