// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt(min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return 'Error';
}
getRandomInt();
// console.log(getRandomInt(0, 100));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFloat(min, max, digits) {
  if (min >= 0 && max > min && digits >= 0) {
    return (Math.random() * (max - min) + min).toFixed(digits);
  }
  return 'Error';
}
getRandomFloat();
// console.log(getRandomFloat(0, 100, 5));
