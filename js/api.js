import {showAlert} from './utils.js';
import {renderSecondaryMarkers} from './map.js';

const mapFilters = document.querySelector('.map__filters');

const onSuccessGetData = (offers) => {
  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.disabled = false;
  });
  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.disabled = false;
  });

  renderSecondaryMarkers(offers);
};

const onSuccess = () => {
  const successTemplate = document.querySelector('#success').content.querySelector('.success');
  const successFragment = document.createDocumentFragment();
  const successElement = successTemplate.cloneNode(true);

  successFragment.appendChild(successElement);
  document.body.appendChild(successFragment);

  const handleKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      successElement.remove();
      document.removeEventListener('keydown', handleKeydown);
    }
  };

  document.addEventListener('keydown', handleKeydown);

  const handleDocumentClick = (evt) => {
    if (successElement.contains(evt.target)) {
      evt.preventDefault();
      successElement.remove();
      document.removeEventListener('click', handleDocumentClick);
    }
  };

  document.addEventListener('click', handleDocumentClick);
};

const onFail = () => {
  const errorTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorFragment = document.createDocumentFragment();
  const errorElement = errorTemplate.cloneNode(true);

  errorFragment.appendChild(errorElement);
  document.body.appendChild(errorFragment);

  const handleKeydown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      errorElement.remove();
      document.removeEventListener('keydown', handleKeydown);
    }
  };

  const errorButton = document.querySelector('.error__button');
  const handleButtonClick = (evt) => {
    evt.preventDefault();
    errorElement.remove();
    errorButton.removeEventListener('click', handleButtonClick);
  };

  errorButton.addEventListener('click', handleButtonClick);

  document.addEventListener('keydown', handleKeydown);
};

// Получение данных
const getData = (success) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Не удалось получить данные');
      }
    })
    .then((offers) => {
      success(offers);
    })
    .catch((error) => {
      showAlert(error);
    });
};

// Отправка данных
const sendData = (success, fail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        success();
      } else {
        fail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      fail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {
  getData,
  sendData,
  onSuccessGetData,
  onSuccess,
  onFail
};
