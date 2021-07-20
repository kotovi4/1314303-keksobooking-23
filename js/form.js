import {sendData, onSuccess, onFail} from './api.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_PER_NIGHT = 1000000;

const minPrices = {
  'flat': 1000,
  'palace': 10000,
  'house': 5000,
  'bungalow': 0,
  'hotel': 3000,
};

const guests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const titleInput = adForm.querySelector('#title');
const priceInput = adForm.querySelector('#price');
const typeField = adForm.querySelector('#type');
const capacitySelect = adForm.querySelector('#capacity');
const capacityInput = capacitySelect.querySelectorAll('option');
const roomNumberSelect = adForm.querySelector('#room_number');
const checkInField = adForm.querySelector('#timein');
const checkOutField = adForm.querySelector('#timeout');


const disabledMapForm = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.disabled = true;
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.disabled = true;
  });
  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.disabled = true;
  });
};

disabledMapForm();

const activateMapForm = () => {
  adForm.classList.remove('ad-form--disabled');

  adForm.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

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

const onTypeChange = () => {
  priceInput.placeholder = minPrices[typeField.value];
  priceInput.min = minPrices[typeField.value];
};

typeField.addEventListener('change', onTypeChange);

const switchGuests = (rooms) => {
  capacityInput.forEach((item) => {
    item.disabled = !guests[rooms].includes(`${item.value}`);
  });
};

switchGuests('1');

roomNumberSelect.addEventListener('change', (evt) => {
  switchGuests(evt.target.value);
});

const checkInChange = () => {
  checkOutField.value = checkInField.value;
};

const checkOutChange = () => {
  checkInField.value = checkOutField.value;
};

checkInField.addEventListener('change', checkInChange);
checkOutField.addEventListener('change', checkOutChange);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  sendData(onSuccess, onFail, new FormData(evt.target));
});

export {
  activateMapForm,
  disabledMapForm
};
