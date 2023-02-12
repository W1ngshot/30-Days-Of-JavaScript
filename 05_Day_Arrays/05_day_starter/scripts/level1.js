console.group("Level 1");
  
console.group("Task 1");
const emptyArr = [];
console.log(emptyArr);
console.groupEnd();

console.group("Task 2");
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(arr);
console.groupEnd();

console.group("Task 3");
console.log(arr.length);
console.groupEnd();

console.group("Task 4");
console.log(arr[0], arr[arr.length / 2], arr[arr.length - 1]);
console.groupEnd();

console.group("Task 5");
const mixedDataTypes = [20, 'random str', true, null, false, 'a)'];
console.log(mixedDataTypes);
console.groupEnd();

console.group("Task 6");
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.groupEnd();

console.group("Task 7");
console.log(itCompanies);
console.groupEnd();

console.group("Task 8");
console.log(itCompanies.length);
console.groupEnd();

console.group("Task 9");
console.log(itCompanies[0], itCompanies[(itCompanies.length - 1) / 2], itCompanies[itCompanies.length - 1]);
console.groupEnd();

console.group("Task 10");
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6]);
console.groupEnd();

console.group("Task 11");
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
console.groupEnd();

console.group("Task 12");
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`);
console.groupEnd();

console.group("Task 13");
let company1 = 'Amazon';
let company2 = 'Cisco';
itCompanies.includes(company1) ? console.log(company1) : console.log(`${company1} not found`);
itCompanies.includes(company2) ? console.log(company2) : console.log(`${company2} not found`);
console.groupEnd();

console.group("Task 14");
console.log(itCompanies.slice(3));
console.groupEnd();

console.group("Task 15");
console.log(itCompanies.sort());
console.groupEnd();

console.group("Task 16");
console.log(itCompanies.reverse());
console.groupEnd();

console.group("Task 17");
console.log(itCompanies.slice(3));
console.groupEnd();

console.group("Task 18");
console.log(itCompanies.slice(-4));
console.groupEnd();

console.group("Task 19");
let firstIndex = itCompanies.length % 2 == 0 ? itCompanies.length / 2 - 1 : (itCompanies.length - 1) / 2;
let secondIndex = firstIndex + (itCompanies.length % 2 == 0 ? 2 : 1);
console.log(itCompanies.slice(0, firstIndex).concat(itCompanies.slice(secondIndex)));
console.groupEnd();

console.group("Task 20");
itCompanies.shift();
console.log(itCompanies);
console.groupEnd();

console.group("Task 21");
itCompanies.splice(itCompanies.length % 2 == 0 ? itCompanies.length / 2 - 1 : (itCompanies.length - 1) / 2, itCompanies.length % 2 == 0 ? 2 : 1);
console.log(itCompanies);
console.groupEnd();

console.group("Task 22");
itCompanies.pop();
console.log(itCompanies);
console.groupEnd();

console.group("Task 23");
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
console.groupEnd();

console.groupEnd();