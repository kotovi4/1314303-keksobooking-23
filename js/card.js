import {createOffer} from './data.js';

const mapCanvas = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const TYPES = {
  flat: 'Квартира',
  palace: 'Дворец',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const fillTextContent = (element, property, textContent) => {
  if (property.length === 0) {
    element.classList.add('hidden');
    return false;
  } else {
    element.textContent = textContent;
  }
};

const fillTextContentProperties = (element, propertyOne, propertyTwo, textContent) => {
  if (propertyOne.length === 0 || propertyTwo.length === 0) {
    element.add('hidden');
    return false;
  } else {
    element.textContent = textContent;
  }
};

const renderOffer = (card) => {
  const cardElement = cardTemplate.cloneNode(true);

  const title = cardElement.querySelector('.popup__title');
  const address = cardElement.querySelector('.popup__text--address');
  const description = cardElement.querySelector('.popup__description');
  const type = cardElement.querySelector('.popup__type');
  const time = cardElement.querySelector('.popup__text--time');
  const features = cardElement.querySelector('.popup__features');

  fillTextContent(title, card.offer.title, card.offer.title);
  fillTextContent(address, card.offer.address, card.offer.address);
  fillTextContent(description, card.offer.description, card.offer.description);
  fillTextContent(type, card.offer.type, card.offer.type);
  fillTextContentProperties(time, card.offer.checkin, card.offer.checkout, `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);

  type.textContent = TYPES[card.offer.type];

  cardElement.querySelector('.popup__text--price').style.fill = `${card.offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__text--capacity').textContent = `${card.offer.rooms} комнаты для ${card.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`;
  cardElement.querySelector('.popup__avatar').src = card.author.avatar;

  const modifiers = card.offer.features.map((feature) => `popup__feature--${feature}`);
  features.querySelectorAll('.popup__feature').forEach((item) => {
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
