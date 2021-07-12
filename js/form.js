const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_PER_NIGHT = 1000000;

const minPrices = {
  'flat': 1000,
  'palace': 10000,
  'house': 5000,
  'bungalow': 0,
};

const guests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const adForm = document.querySelector('.ad-form');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const typeField = adForm.querySelector('#type');
const capacityInput = adForm.querySelectorAll('option');


// const disabledMapForm = () => {
//   adForm.classList.add('ad-form--disabled');
//   adForm.querySelectorAll('fieldset').forEach((fieldset) => {
//     fieldset.disabled = true;
//   });

//   mapFilters.classList.add('map__filters--disabled');
//   mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
//     filter.disabled = true;
//   });
//   mapFilters.querySelectorAll('.map__features').forEach((feature) => {
//     feature.disabled = true;
//   });
// };

// const activateMapForm = () => {
//   adForm.classList.remove('ad-form--disabled');

//   adForm.querySelectorAll('fieldset').forEach((fieldset) => {
//     fieldset.disabled = false;
//   });

//   mapFilters.classList.remove('map__filters--disabled');
//   mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
//     filter.disabled = false;
//   });
//   mapFilters.querySelectorAll('.map__features').forEach((feature) => {
//     feature.disabled = false;
//   });
// };

if (titleInput) {
  titleInput.addEventListener('invalid', () => {
    if (titleInput.validity.valueMissing) {
      titleInput.setCustomValidity('Обязательное поле');
    } else {
      titleInput.setCustomValidity('');
    }
  });

  titleInput.addEventListener('input', () => {
    const valueLength = titleInput.value.length;

    if (valueLength < MIN_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Минимальная длина ${MIN_TITLE_LENGTH} символов. Нужно ввести ещё ${MIN_TITLE_LENGTH - valueLength}`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      titleInput.setCustomValidity(`Максимальная длина не может быть больше ${MAX_TITLE_LENGTH} символов. Удалите лишние ${valueLength - MAX_TITLE_LENGTH} симв.`);
    } else {
      titleInput.setCustomValidity('');
    }
  });
  titleInput.reportValidity();
}

if (priceInput) {
  priceInput.addEventListener('invalid', () => {
    if (priceInput.validity.valueMissing) {
      priceInput.setCustomValidity('Обязательное поле');
    } else {
      priceInput.setCustomValidity('');
    }
  });

  priceInput.addEventListener('input', () => {
    const price =priceInput.value;
    const type = typeField.value;
    const minPrice = minPrices[type];

    if (price < minPrice) {
      priceInput.setCustomValidity(`Стоимость должна быть не менее ${minPrice}`);
    } else if (price > MAX_PRICE_PER_NIGHT) {
      priceInput.setCustomValidity(`Стоимость не должна превышать ${MAX_PRICE_PER_NIGHT}`);
    } else {
      priceInput.setCustomValidity('');
    }
  });
  priceInput.reportValidity();
}

if (guests) {
  guests.forEach((roomsNumber) => {
    capacityInput.forEach((option) => {
      if (Number(option.value) === roomsNumber) {
        option.disabled = false;
        option.selected = true;
      }
    });
  });
}

// export {
//   disabledMapForm,
//   activateMapForm
// };
