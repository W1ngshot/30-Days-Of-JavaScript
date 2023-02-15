console.group("Level 2");

console.group("Task 1");
function solveLinEquation(a, b, c, y) {
    return (-c - b * y) / a;
}
console.log(solveLinEquation(2, 5, 2, 10));
console.groupEnd();

console.group("Task 2");
function solveQuadEquation(a, b, c) {
    let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    if (isNaN(x1) || isNaN(x2)) {
        return {x1: 0};
    }
    if (x1 === x2) {
        return {x1};
    } else {
        return {x1, x2};
    }
}
console.log(solveQuadEquation()) // {0}
console.log(solveQuadEquation(1, 4, 4)) // {-2}
console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
console.log(solveQuadEquation(1, -1, 0)) // {1, 0}
console.groupEnd();

console.group("Task 3");
function printArray(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}
printArray(['a', 'b', 'c', 'd', 'e', 'f']);
console.groupEnd();

console.group("Task 4");
function showDateTime() {
    let d = new Date();
    console.log(`${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth() + 1)).slice(-2)}/${d.getFullYear()} ${('0' + d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`);
}
showDateTime();
console.groupEnd();

console.group("Task 5");
function swapValues(x, y) {
    let a = x;
    x = y;
    y = a;
    return {x, y};
}
console.log(swapValues(3, 4));
console.log(swapValues(4, 5));
console.groupEnd();

console.group("Task 6");
function reverseArray(arr) {
    const newArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))
console.groupEnd();

console.group("Task 7");
function capitalizeArray(arr) {
    const newArr = []
    for (item of arr) {
        newArr.push(item.toUpperCase());
    }
    return newArr;
}
console.log(capitalizeArray(['a', 'b', 'c', 'd']));
console.groupEnd();

console.group("Task 8");
const arr = [0, 1, 3, 4, 5];
function addItem(item) {
    arr.push(item);
    return arr;
}
console.log(addItem(1));
console.groupEnd();

console.group("Task 9");
function removeItem(index) {
    arr.splice(index, 1);
    return arr;
}
console.log(removeItem(0));
console.groupEnd();

console.group("Task 10");
function sumOfNumbers(from, to) {
    let sum = 0;
    for (item of arr.slice(from, to)) {
        sum += item;
    }
    return sum;
}
console.log(sumOfNumbers(0, 4));
console.groupEnd();

console.group("Task 11");
function sumOfOdds(from, to) {
    let sum = 0;
    for (item of arr.slice(from, to)) {
        sum += (item % 2 == 1 ? item : 0);
    }
    return sum;
}
console.log(sumOfOdds(0, 4));
console.groupEnd();

console.group("Task 12");
function sumOfEven(from, to) {
    let sum = 0;
    for (item of arr.slice(from, to)) {
        sum += (item % 2 == 0 ? item : 0);
    }
    return sum;
}
console.log(sumOfEven(0, 4));
console.groupEnd();

console.group("Task 13");
function evensAndOdds(number) {
    let evensCount = 0;
    let oddsCount = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            evensCount++;
        } else {
            oddsCount++;
        }
    }
    console.log(`The number of odds are ${oddsCount}.`);
    console.log(`The number of evens are ${evensCount}.`);
}
evensAndOdds(100);
console.groupEnd();

console.group("Task 14");
function sum(...args) {
    let sum = 0;
    for (element of args) {
        sum += element;
    }
    return sum;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.groupEnd();

console.group("Task 15");
function generateRandomIp() {
    const ip = [];
    for (let i = 0; i < 4; i++) {
        ip.push(Math.floor(Math.random() * 256));
    }
    return `${ip[0]}.${ip[1]}.${ip[2]}.${ip[3]}`;
}
console.log(generateRandomIp());
console.log(generateRandomIp());
console.log(generateRandomIp());
console.groupEnd();

console.group("Task 16");
function generateRandomMac() {
    const macChars = 'abcdef0123456789';
    let mac = '';
    for (let i = 0; i < 12; i++) {
        mac += macChars.charAt(Math.floor(Math.random() * macChars.length));
        if (i % 2 != 0) {
            mac += ':';
        }
    }
    return mac.slice(0, mac.length - 1);
}
console.log(generateRandomMac());
console.log(generateRandomMac());
console.log(generateRandomMac());
console.groupEnd();

console.group("Task 17");
function generateRandomHexadecimal() {
    const hexaCharacters = '0123456789abcdef';
    let hexadecimal = '#';
    for (let i = 0; i < 6; i++) {
        hexadecimal += hexaCharacters.charAt(Math.floor(Math.random() * hexaCharacters.length));
    }
    return hexadecimal;
}
console.log(generateRandomHexadecimal());
console.log(generateRandomHexadecimal());
console.log(generateRandomHexadecimal());
console.groupEnd();

console.group("Task 18");
function generateUserId() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id = '';
    for (let i = 0; i < 7; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}
console.log(generateUserId());
console.log(generateUserId());
console.log(generateUserId());
console.groupEnd();

console.groupEnd();