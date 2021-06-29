import {createOffer} from './data.js';

const TYPES = {
  flat: 'Квартира',
  palace: 'Дворец',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const mapCanvas = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderOffer = (card) => {
  const cardElement = cardTemplate.cloneNode(true);

  if (card.offer.title) {
    cardElement.querySelector('.popup__title').textContent = card.offer.title;
  } else {
    cardElement.querySelector('.popup__title').classList.add('hidden');
  }

  cardElement.querySelector('.popup__text--address').style.fill = card.offer.adress;
  cardElement.querySelector('.popup__text--price').style.fill = `${card.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = TYPES[card.offer.type];
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;
  cardElement.querySelector('.popup__description').textContent = card.offer.description;


  const featureListElement = cardElement.querySelector('.popup__features');
  const modifiers = card.offer.features.map((feature) => `popup__feature--${feature}`);
  featureListElement.querySelectorAll('.popup__feature').forEach((item) => {
    const modifier = item.classList[1];

    if (!modifiers.includes(modifier)) {
      item.remove();
    }
  });

  const popupPhoto = cardElement.querySelector('.popup__photos');
  const clonePhotoTemplate = popupPhoto.querySelector('img');

  for (let index = 0; index < card.offer.photos.length; index++) {
    const clonePhoto = clonePhotoTemplate.cloneNode(true);
    clonePhoto.src = card.offer.photos[index];
    popupPhoto.appendChild(clonePhoto);
  }
  clonePhotoTemplate.remove();

  return cardElement;
};

mapCanvas.appendChild(renderOffer(createOffer()));
