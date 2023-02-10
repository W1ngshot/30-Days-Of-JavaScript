console.group("Level 3");

console.group("Task 1");
let year = prompt("Enter current year: ");
let month = prompt("Enter current month: ");
switch (month.toLowerCase()) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        console.log(`${month[0].toUpperCase() + month.toLowerCase().slice(1)} has 31 day.`);
        break;
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        console.log(`${month[0].toUpperCase() + month.toLowerCase().slice(1)} has 30 days.`);
        break;
    case 'february':
        console.log(`${month[0].toUpperCase() + month.toLowerCase().slice(1)} in ${year} year has ${year % 4 === 0 ? 29 : 28} days.`);
        break;
    default:
        console.log(`Wrong month`);
}
console.groupEnd();

console.groupEnd();