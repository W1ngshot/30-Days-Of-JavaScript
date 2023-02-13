console.group("Level 1");

console.group("Task 1");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}
i = 0;
do {
    console.log(i);
    i++;
} while (i <= 10)
console.groupEnd();

console.group("Task 2");
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
i = 10;
while (i >= 0) {
    console.log(i);
    i--;
}
i = 10;
do {
    console.log(i);
    i--;
} while (i >= 0)
console.groupEnd();

console.group("Task 3");
const n = 5;
for (let i = 0; i <= n; i++) {
    console.log(i);
}
console.groupEnd();

console.group("Task 4");
for (let i = 0; i <= 7; i++) {
    console.log('#'.repeat(i));
}
console.groupEnd();

console.group("Task 5");
for (let i = 0; i<= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}
console.groupEnd();

console.group("Task 6");
console.log('i i^2 i^3');
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i * i} ${i * i * i}`);
}
console.groupEnd();

console.group("Task 7");
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.groupEnd();

console.group("Task 8");
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}
console.groupEnd();

console.group("Task 9");
for (let i = 0; i <= 100; i++) {
    if (i == 0 || i == 1) continue;

    let start = 2;
    const limit = Math.sqrt(i);
    let isPrime = true;
    while (start <= limit) {
        if (i % start++ == 0) {
            isPrime = false;
            break;
        };
    }
    if (isPrime) {
        console.log(i);
    }
}
console.groupEnd();

console.group("Task 10");
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);
console.groupEnd();

console.group("Task 11");
let evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all evens from 0 to 100 is ${oddSum}.`);
console.groupEnd();

console.group("Task 12");
console.log([evenSum, oddSum]);
console.groupEnd();

console.group("Task 13");
let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 6));
}
console.log(randomArray);
console.groupEnd();

console.group("Task 14");
let anotherRandomArray = [];
while (anotherRandomArray.length < 5) {
    let num = Math.floor(Math.random() * 6);
    if (!anotherRandomArray.includes(num)) {
        anotherRandomArray.push(num);
    }
}
console.log(anotherRandomArray);
console.groupEnd();

console.group("Task 15");
let randomString = '';
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
for (let i = 0; i < 6; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(randomString);
console.groupEnd();

console.groupEnd();