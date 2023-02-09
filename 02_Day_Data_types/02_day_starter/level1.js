console.group("Level 1");

const str = '30 Days Of JavaScript'; // 1

console.log(str); // 2
console.log(str.length); // 3
console.log(str.toUpperCase()); // 4
console.log(str.toLowerCase()); // 5

const firstWord = str.substring(3, 7); // 6
console.log(firstWord);
const words = str.substring(3); // 7
console.log(words);

console.log(str.includes('Script')); // 8

console.log(str.split('')); // 9
console.log(str.split(' ')); // 10

const companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', ')); // 11

console.log(str.replace('JavaScript', 'Python')); // 12
console.log(str.charAt(15)); // 13
console.log(str.charCodeAt(11)); // 14

console.log(str.indexOf('a')); // 15
console.log(str.lastIndexOf('a')); // 16

const sentence = 'You cannot end a sentence with because because because is a conjunction';

console.log(sentence.indexOf('because')); // 17
console.log(sentence.lastIndexOf('because')); // 18
console.log(sentence.search('because')); // 19

const strWithSpaces = ' 30 Days Of JavaScript ';
console.log(strWithSpaces.trim()); // 20

console.log(str.startsWith('30 D')); // 21
console.log(str.endsWith('ript')); // 22

console.log(str.match(/a/gm)); // 23

console.log('30 Days of'.concat(' ', 'JavaScript')); // 24
console.log(str.repeat(2)); // 25

console.groupEnd();