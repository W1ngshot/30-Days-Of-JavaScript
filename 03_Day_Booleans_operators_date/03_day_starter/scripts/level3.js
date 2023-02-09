console.group("Level 3");

console.group("Task 1");
let d = new Date();
console.log(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${('0' + d.getHours()).slice(-2)}:${('0' + d.getMinutes()).slice(-2)}`);
console.groupEnd();

console.groupEnd();