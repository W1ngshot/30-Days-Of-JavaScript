console.group("Level 3");

console.group("Task 1");
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
console.log(`Min age: ${ages[0]}, max age: ${ages[ages.length - 1]}`); // 1.1

let median = ages.length % 2 == 0 ? (ages[ages.length / 2] + ages[ages.length / 2 - 1]) / 2 : ages[(ages.length - 1) / 2];
console.log(`Median age: ${median}`); // 1.2

let average = ages.reduce((a, b) => a + b) / ages.length;
console.log(`Average age: ${average}`); // 1.3

console.log(`Range of ages: ${Math.max(...ages) - Math.min(...ages)}`); // 1.4

console.log(`Min - average: ${Math.abs(Math.min(...ages) - average).toFixed(1)}, Max - average: ${(Math.max(...ages) - average).toFixed(1)}`); // 1.5
console.groupEnd();

console.group("Task 2");
if (countries.length % 2 == 0) {
    console.log(countries[countries.length / 2 - 1], countries[countries.length / 2]);
} else {
    console.log(countries[(countries.length - 1) / 2])
}
console.groupEnd();

console.group("Task 3");
if (countries.length % 2 == 0) {
    const arr1 = countries.slice(0, countries.length / 2);
    const arr2 = countries.slice(countries.length / 2);
    console.log(arr1, arr2);
} else {
    const arr1 = countries.slice(0, (countries.length + 1) / 2);
    const arr2 = countries.slice((countries.length + 1) / 2);
    console.log(arr1, arr2);
}
console.groupEnd();

console.groupEnd();