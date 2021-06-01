// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomInt();
// console.log(getRandomInt(0, 100));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
getRandomFloat();
console.log(getRandomFloat(0, 100).toFixed(2));


let min = 60;
let max = 40;

if (min >= max) {
  console.log('Все не очень');
} else {
  console.log('Все круто');
}

