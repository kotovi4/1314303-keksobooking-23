// Функция, возвращающая случайное целое число из переданного диапазона включительно
function getRandomInt(min, max) {
  if (min >= 0 && max > min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return 'Error';
}

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFloat(min, max, digits) {
  if (min >= 0 && max > min && digits >= 0) {
    return (Math.random() * (max - min) + min).toFixed(digits);
  }
  return 'Error';
}

const addZero = function (number) {
  return number < 10 ? `0${number}` : number;
};

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

const getArray = function (array) {
  const maxLength = array.length;
  const lengthOfArray = getRandomInt(1, maxLength);
  const result = [];

  while (result.length < lengthOfArray) {
    const indexOfEl = getRandomInt(0, maxLength - 1);
    const el = array[indexOfEl];

    if (!result.includes(el)) {
      result.push(el);
    }
  }
  return result;
};

// Сообщение с ошибкой на 5 секунд
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export {
  getRandomInt,
  getRandomFloat,
  addZero,
  getArray,
  getRandomArrayElement,
  showAlert
};
