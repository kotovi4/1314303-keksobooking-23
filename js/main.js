// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomInt(0, 100));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandomFloat(0, 100));
