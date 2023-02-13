console.group("Level 2");

console.group("Task 1");
const idCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomId = '';
for (let i = 0; i < 10; i++) {
    randomId += idCharacters.charAt(Math.floor(Math.random() * idCharacters.length));
}
console.log(randomId);
console.groupEnd();

console.group("Task 2");
const hexadecimalCharacters = '0123456789abcdef';
let hexadecimal = '#';
for (let i = 0; i < 6; i++) {
    hexadecimal += hexadecimalCharacters.charAt(Math.floor(Math.random() * hexadecimalCharacters.length));
}
console.log(hexadecimal);
console.groupEnd();

console.group("Task 3");
const randomRGB = [];
for (let i = 0; i < 3; i++) {
    randomRGB[i] = Math.floor(Math.random() * 256);
}
console.log(`rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`);
console.groupEnd();

console.group("Task 4");
let upperCountries = [];
for (const country of countries) {
    upperCountries.push(country.toUpperCase());
}
console.log(upperCountries);
console.groupEnd();

console.group("Task 5");
let countriesLength = [];
for (const country of countries) {
    countriesLength.push(country.length);
}
console.log(countriesLength);
console.groupEnd();

console.group("Task 6");
let countriesArr = [];
for (const country of countries) {
    countriesArr.push([country, country.slice(0, 3).toUpperCase(), country.length]);
}
console.log(countriesArr);
console.groupEnd();

console.group("Task 7");
let landCountries = [];
for (const country of countries) {
    if (country.includes('land')) {
        landCountries.push(country);
    }
}
landCountries.length === 0 ? console.log('All these countries are without land') : console.log(landCountries);
console.groupEnd();

console.group("Task 8");
let iaCountries = [];
for (const country of countries) {
    if (country.slice(-2) === 'ia') {
        iaCountries.push(country);
    }
}
iaCountries.length === 0 ? console.log('These are countries ends without ia') : console.log(iaCountries);
console.groupEnd();

console.group("Task 9");
let longestCountry = '';
let longestLength = 0;
for (const country of countries) {
    if (country.length > longestLength) {
        longestLength = country.length;
        longestCountry = country;
    }
}
console.log(longestCountry);
console.groupEnd();

console.group("Task 10");
let fiveLetterCountries = [];
for (const country of countries) {
    if (country.length === 5) {
        fiveLetterCountries.push(country);
    }
}
console.log(fiveLetterCountries);
console.groupEnd();

console.group("Task 11");
let longestTech = '';
let longestTechLength = 0;
webTechs.forEach(tech => {
    if (tech.length > longestTechLength) {
        longestTech = tech;
        longestTechLength = tech.length;
    }
});
console.log(longestTech);
console.groupEnd();

console.group("Task 12");
const webTechsWithLength = [];
webTechs.forEach(tech => {
    webTechsWithLength.push([tech, tech.length]);
});
console.log(webTechsWithLength);
console.groupEnd();

console.group("Task 13");
let acronim = '';
for (tech of mernStack) {
    acronim += tech[0].toUpperCase();
}
console.log(acronim);
console.groupEnd();

console.group("Task 14");
for (tech of webTechs) {
    console.log(tech);
}
console.groupEnd();

console.group("Task 15");
const fruitArray = ['banana', 'orange', 'mango', 'lemon'];
const reversedFruitArray = [];
for (let i = fruitArray.length - 1; i >= 0; i--) {
    reversedFruitArray.push(fruitArray[i]);
}
console.log(reversedFruitArray);
console.groupEnd();

console.group("Task 16");
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
for (stack of fullStack) {
    for (tech of stack) {
        console.log(tech.toUpperCase());
    }
}
console.groupEnd();

console.groupEnd();