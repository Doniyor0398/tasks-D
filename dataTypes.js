// Переменные и Типы данных
/* const lastName = "Doniyorbek";
let age = 26;

age = true;

age = 27;
console.log(lastName);
console.log(age); */

// Условия
/* let firstName = "Petrov";
let age = 40;
let city = "Moskow";

if (firstName === "Petrov") {
  console.log(`Ваша Фамилия ${firstName}`);
}

if (age == 10) {
  console.log("Проходите");
} else {
  console.log("Запрещено");
}

if (age >= 40) {
  console.log(`Ваш возраст ${age}`);
} else {
  console.log(`ТЫ еще мелький`);
}

if (age < 50) {
  console.log("Вы уже Старый");
}

if (age !== 10) {
  console.log("Вы уже не малыш");
} else {
  console.log("Малыш иди спи"); */
// }

//Циклы
/* for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

while (numbers) {
  console.log(numbers);
  numbers++;
}

do {
  console.log(`Элементы массивы ${numbers}`);
  numbers++;
} while (numbers);

function maxMin(max, min) {
  return max > min || `Max меньше min`;
}

console.log(maxMin(10, 20));

for (let i = 1; i <= 100; i++) {
  console.log(i);
}
  
function outputArray(arr) {
  arr.forEach((allArr) => {
    console.log(allArr);
  });
  return arr;
}

console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


*/

// Задачи для практики

// let userInput = prompt("Введите 2 числа");

// let [a, b] = userInput.split(" ").map(Number);

// if (a > b) {
//   console.log(`${a} больше ${b}`);
// } else if (a < b) {
//   console.log(`${a} меньше ${b}`);
// } else {
//   console.log("Числв равны");
// }

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// function eventArray(arr) {
//   let event = arr.filter((arrEvent) => arrEvent % 2 === 0);
//   let odd = arr.filter((arrEvent) => arrEvent % 2 !== 0);

//   return `четные число ${event}${"\n"}нечетные ${odd}`;
// }

// console.log(eventArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
