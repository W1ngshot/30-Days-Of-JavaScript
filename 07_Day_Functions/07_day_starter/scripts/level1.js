console.group("Level 1");

console.group("Task 1");
function logFullName() {
    let firstName = 'Kirill';
    let lastName = 'Samsonov';
    console.log(`${firstName} ${lastName}`);
}
logFullName();
console.groupEnd();

console.group("Task 2");
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(getFullName('Kirill', 'Samsonov'));
console.groupEnd();

console.group("Task 3");
function addNumber(value1, value2) {
    return value1 + value2;
}
console.log(addNumber(1, 2));
console.groupEnd();

console.group("Task 4");
function calculateRectangeArea(length, width) {
    return length * width;
}
console.log(calculateRectangeArea(10, 20));
console.groupEnd();

console.group("Task 5");
function calculateRectangePerimetr(length, width) {
    return 2 * (length + width);
}
console.log(calculateRectangePerimetr(10, 20));
console.groupEnd();

console.group("Task 6");
function calculatePrismVolume(length, width, height) {
    return length * width * height;
}
console.log(calculatePrismVolume(10, 20, 5));
console.groupEnd();

console.group("Task 7");
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}
console.log(calculateCircleArea(5));
console.groupEnd();

console.group("Task 8");
function calculateCircleCircum(radius) {
    return Math.PI * radius * 2;
}
console.log(calculateCircleCircum(5));
console.groupEnd();

console.group("Task 9");
function calculateDensity(mass, volume) {
    return mass / volume;
}
console.log(calculateDensity(10, 5));
console.groupEnd();

console.group("Task 10");
function calculateSpeed(distance, time) {
    return distance / time;
}
console.log(calculateSpeed(20, 5));
console.groupEnd();

console.group("Task 11");
function calculateWeight(mass) {
    return mass * 9.81
}
console.log(calculateWeight(20));
console.groupEnd();

console.group("Task 12");
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(convertCelsiusToFahrenheit(36.6));
console.groupEnd();

console.group("Task 13");
function calculateBMI(weight, height) {
    return weight / (height * height);
}
const weight = 80;
const height = 1.86;
let bmi = calculateBMI(weight, height);

switch (true) {
    case bmi < 18.5:
        console.log('Underweight');
        break;
    case bmi < 25:
        console.log('Normal weight');
        break;
    case bmi < 30:
        console.log('Overweight');
        break;
    default:
        console.log('Obese');
}
console.groupEnd();

console.group("Task 14");
function checkSeason(month) {
    switch (month.toLowerCase()) {
        case 'september':
        case 'october':
        case 'november':
            return "Autumn";
        case 'december':
        case 'january':
        case 'february':
            return "Winter";
        case 'march':
        case 'april':
        case 'may':
            return "Spring";
        case 'june':
        case 'july':
        case 'august':
            return "Summer";
        default:
            return "Wrong month";
    }
} 

let month = 'August';
console.log(checkSeason(month));
console.groupEnd();

console.group("Task 15");
function findMax(arg1, arg2, arg3) {
    if (arg1 >= arg2 && arg1 >= arg3) {
        return arg1;
    }
    if (arg2 >= arg1 && arg2 >= arg3){
        return arg2;
    }
    else {
        return arg3;
    }
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));
console.groupEnd();

console.groupEnd();