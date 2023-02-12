console.group("Level 2");

console.group("Task 2");
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
const words = text.match(/\w+/g);
console.log(words)
console.log(words.length)
console.groupEnd();

console.group("Task 3");
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
const isAlergic = false;
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');    
}
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');    
}
if (isAlergic) {
    let honeyIndex = shoppingCart.indexOf('Honey');
    if (honeyIndex !== -1) {
        shoppingCart.splice(honeyIndex, 1);
    }
}
let teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
    shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart);
console.groupEnd();

console.group('Task 4');
let country = 'Ethiopia'
if (countries.includes(country)) {
    console.log(country.toUpperCase());
}
else {
    countries.push(country);
}
console.groupEnd();

console.group('Task 5');
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
}
else {
    webTechs.push('Sass');
    console.log(webTechs);
}
console.groupEnd();

console.group('Task 6');
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
console.groupEnd();

console.groupEnd();