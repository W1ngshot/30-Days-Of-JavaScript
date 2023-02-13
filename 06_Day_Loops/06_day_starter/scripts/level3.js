console.group("Level 3");

console.group("Task 1");
const newCountries = countries;
console.log(newCountries === countries);
console.groupEnd();

console.group("Task 2");
const sortedCountries = countries.slice(0).sort();
console.log(sortedCountries);
console.groupEnd();

console.group("Task 3");
webTechs.sort();
mernStack.sort();
console.log(webTechs);
console.log(mernStack);
console.groupEnd();

console.group("Task 4");
const landArray = [];
while (countries.findIndex(element => element.includes('land')) > -1) {
    let index = countries.findIndex(element => element.includes('land'))
    landArray.push(countries[index]);
    countries.splice(index, 1);
}
console.log(landArray);
console.log(countries);
console.groupEnd();

console.group("Task 5");
let highestLength = 0;
let word = '';
for (country of countries) {
    if (country.length > highestLength) {
        highestLength = country.length;
        word = country;
    }
}
console.log(word);
console.groupEnd();

console.group("Task 6");
while (countries.findIndex(element => element.includes('land')) > -1) {
    let index = countries.findIndex(element => element.includes('land'))
    landArray.push(countries[index]);
    countries.splice(index, 1);
}
console.log(landArray);
console.log(countries);
console.groupEnd();

console.group("Task 7");
let fourLetterCountries = [];
while (countries.findIndex(element => element.length == 4) > -1) {
    let index = countries.findIndex(element => element.length == 4)
    fourLetterCountries.push(countries[index]);
    countries.splice(index, 1);
}
console.log(fourLetterCountries);
console.log(countries);
console.groupEnd();

console.group("Task 8");
let twoWordsCountries = [];
while (countries.findIndex(element => element.split(' ').length > 1) > -1) {
    let index = countries.findIndex(element => element.split(' ').length > 1)
    twoWordsCountries.push(countries[index]);
    countries.splice(index, 1);
}
console.log(twoWordsCountries);
console.log(countries);
console.groupEnd();

console.group("Task 9");
countries.reverse();
for (let i = 0; i < countries.length; i++) {
    countries[i] = [countries[i].toUpperCase()];
}
console.log(countries);
console.groupEnd();

console.groupEnd();