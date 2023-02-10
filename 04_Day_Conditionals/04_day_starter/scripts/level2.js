console.group("Level 2");

console.group("Task 1");
let score = prompt("Enter your score: ");
switch (true){
    case score >= 80 && score <= 100:
        console.log("\'A\' grade");
        break;
    case score >= 70 && score <= 100:
        console.log("\'B\' grade");
        break;
    case score >= 60 && score <= 100:
        console.log("\'C\' grade");
        break;
    case score >= 50 && score <= 100:
        console.log("\'D\' grade");
        break;
    case score >= 0 && score < 50:
        console.log("\'F\' grade");
        break;
    default:
        console.log("Wrong score");
}
console.groupEnd();

console.group("Task 2");
let month = prompt("Enter month: ");
switch (month.toLowerCase()) {
    case 'september':
    case 'october':
    case 'november':
        console.log("Autumn");
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log("Winter");
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log("Spring");
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log("Summer");
        break;
    default:
        console.log("Wrong month");
}
console.groupEnd();

console.group("Task 3");
let day = prompt("What is the day today? ");
switch (day.toLowerCase()) {
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log(`${day[0].toUpperCase() + day.toLowerCase().slice(1)} is a working day.`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`${day[0].toUpperCase() + day.toLowerCase().slice(1)} is a weekend.`);
        break;
    default:
        console.log("Wrong day of the week");
}
console.groupEnd();

console.groupEnd();