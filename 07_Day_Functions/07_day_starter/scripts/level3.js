console.group("Level 3");

console.group("Task 1");
function userIdGeneratedByUser() {
    let charsNumber = prompt('Write numbers count in id: ');
    let idCount = prompt('Write amount of id to be generated: ');
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ids = [];
    for (let count = 0; count < idCount; count++) {
        let id = '';
        for (let i = 0; i < charsNumber; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        ids.push(id);
    }
    return ids;
}
console.log(userIdGeneratedByUser());
console.groupEnd();

console.group("Task 2");
function generateRgbColor() {
    const randomRGB = [];
    for (let i = 0; i < 3; i++) {
        randomRGB[i] = Math.floor(Math.random() * 256);
    }
    return `rgb(${randomRGB[0]}, ${randomRGB[1]}, ${randomRGB[2]})`;
}
console.log(generateRgbColor());
console.log(generateRgbColor());
console.log(generateRgbColor());
console.groupEnd();

console.group("Task 3");
function arrayOfHexaColors(numbers) {
    let hexas = [];
    for (let i = 0; i < numbers; i++) {
        hexas.push(generateRandomHexadecimal());
    }
    return hexas;
}
console.log(arrayOfHexaColors(3));
console.log(arrayOfHexaColors(5));
console.groupEnd();

console.group("Task 4");
function arrayOfRgbColors(numbers) {
    let rgbs = [];
    for (let i = 0; i < numbers; i++) {
        rgbs.push(generateRgbColor());
    }
    return rgbs;
}
console.log(arrayOfRgbColors(3));
console.log(arrayOfRgbColors(5));
console.groupEnd();

console.group("Task 5");
function convertHexaToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}
console.log(convertHexaToRgb('#2a4b5c'));
console.groupEnd();

console.group("Task 6");
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function convertRgbToHexa(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

console.log(convertRgbToHexa(100, 20, 50));
console.groupEnd();

console.group("Task 7");
function generateColors(type, number) {
    let colors = [];
    for (let i = 0; i < number; i++) {
        if (type === 'hexa') {
            colors.push(generateRandomHexadecimal());
        } else {
            colors.push(generateRgbColor());
        }
    }
    return colors;
}
console.log(generateColors('hexa', 3));
console.log(generateColors('hexa', 1));
console.log(generateColors('rgb', 3));
console.log(generateColors('rgb', 1));
console.groupEnd();

console.group("Task 8");
function shuffleArray(arr) {
    let currentIndex = arr.length;
    let randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
  
    return arr;
}
const arrayToShuffle = [10, 2, 5, 7, 9, 20, 13];
shuffleArray(arrayToShuffle);
console.log(arrayToShuffle);
console.groupEnd();

console.group("Task 9");
function factorial(number) {
    let fact = 1;
    for (let i = 2; i <= number; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));
console.log(factorial(7));
console.groupEnd();

console.group("Task 10");
function isEmpty(arr) {
    return arr.length === 0;
}
const emptyArr = [];
const notEmptyArr = ['1', '2'];
console.log(isEmpty(emptyArr));
console.log(isEmpty(notEmptyArr));
console.groupEnd();

console.group("Task 11");
function sumElements(...args) {
    let sum = 0;
    for (element of args) {
        sum += element;
    }
    return sum;
}
console.log(sumElements(1, 2, 3, 4, 5,));
console.log(sumElements(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.groupEnd();

console.group("Task 12");
function sumOfArrayItems(arr) {
    let sum = 0;
    for (element of arr) {
        if (typeof element !== typeof 1) {
            return `${typeof element} ${element} is not a number`;
        }
        sum += element;
    }
    return sum;
}
console.log(sumOfArrayItems([10, 15, 20, 25]));
console.log(sumOfArrayItems([10, 20, '10', 20]));
console.groupEnd();

console.group("Task 13");
function average(arr) {
    let sum = 0;
    for (element of arr) {
        if (typeof element !== typeof 1) {
            return `${typeof element} ${element} is not a number`;
        }
        sum += element;
    }
    return sum / arr.length;
}
console.log(average([10, 15, 20, 25]));
console.log(average([10, 20, '10', 20]));
console.groupEnd();

console.group("Task 14");
function modifyArray(arr) {
    if (arr.length < 5) {
        return 'Item not found';
    } else {
        arr[4] = arr[4].toUpperCase();
    }
    return arr;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));
console.groupEnd();

console.group("Task 15");
const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(9));
console.groupEnd();

console.group("Task 16");
function isUnique(arr) {
    newArr = [];
    for (element of arr) {
        if (newArr.includes(element)) {
            return false;
        }
        newArr.push(element);
    }
    return true;
}

console.log(isUnique([1, 2, 3, 4, 5, ,6 ,7, 8]));
console.log(isUnique([1, 2, 3, 1, 5]));
console.groupEnd();

console.group("Task 17");
function isSameType(arr) {
    let type;
    for (element of arr) {
        if (type === undefined) {
            type = typeof element;
        }
        if (typeof element !== type) {
            return false;
        }
    }
    return true;
}
console.log(isSameType([1, 2, 3, 1, 5]));
console.log(isSameType([1, 2, '3', 1, 5]));
console.groupEnd();

console.group("Task 18");
function isValidVariable(name) {
    const validChars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$_';
    for (char of name) {
        if (!validChars.includes(char)) {
            return false;
        }
    }
    return true;
}

console.log(isValidVariable('abCd12'));
console.log(isValidVariable('$66t'));
console.log(isValidVariable('hello-there'));
console.log(isValidVariable('jj&jj'));
console.groupEnd();

console.group("Task 19");
function sevenRandomNumbers() {
    const arr = []
    while (arr.length < 7) {
        let number = Math.floor(Math.random() * 10);
        if (!arr.includes(number)) {
            arr.push(number);
        }
    }
    return arr;
}
console.log(sevenRandomNumbers());
console.log(sevenRandomNumbers());
console.log(sevenRandomNumbers());
console.groupEnd();

console.group("Task 20");
function reverseCountries(arr) {
    return arr.slice().reverse();
}
console.log(reverseCountries(countries));
console.groupEnd();

console.groupEnd();