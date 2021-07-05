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
  } else {
    element.textContent = textContent;
  }
};

const fillTextContentProperties = (element, propertyOne, propertyTwo, textContent) => {
  if (propertyOne.length === 0 || propertyTwo.length === 0) {
    element.add('hidden');
  } else {
    element.textContent = textContent;
  }
};

const fillSrc = (element, src) => {
  if (element.length === 0) {
    element.add('hidden');
  } else {
    element.src = src;
  }
};

const fillPrice = (element, price) => {
  if (price.length === 0) {
    element.add('hidden');
  } else {
    element.textContent = `${price} ₽/ночь`;
  }
};

const fillCapacity = (number) => {
  let rooms = 'комнаты';
  let guests = 'гостей';

  if (number.rooms === 1) {
    rooms = 'комната';
  }
  if (number.rooms === 100) {
    rooms = 'комнат';
  }
  if (number.guests === 1) {
    guests = 'гостя';
  }
  if (number.guests === 'не для гостей') {
    return `${number.rooms} ${rooms} ${number.guests}`;
  } else {
    return `${number.rooms} ${rooms} для ${number.guests} ${guests}`;
  }
};

const getPhotoElement = (photo) => {
  const photoElement = document.querySelector('img');

  photoElement.classList.add('popup__photo');
  photoElement.src = photo;

  return photoElement;
};

const getFeatureElement = (feature) => {
  const featureElement = document.createElement('li');
  featureElement.classList.add('popup__feature');
  featureElement.classList.add(`popup__feature--${feature}`);
  return featureElement;
};

const fillGroupElements = (element, elementsData, elementFunction) => {
  if (elementsData.length === 0) {
    element.add('hidden');
  } else {
    const elementFragment = document.createDocumentFragment();
    elementsData.forEach((item) => {
      elementFragment.append(elementFunction(item));
    });

    element.replaceChildren(elementFragment);
  }
};

const renderOffer = (card) => {
  const {offer} = card;
  const cardElement = cardTemplate.cloneNode(true);

  const title = cardElement.querySelector('.popup__title');
  const address = cardElement.querySelector('.popup__text--address');
  const description = cardElement.querySelector('.popup__description');
  const type = cardElement.querySelector('.popup__type');
  const time = cardElement.querySelector('.popup__text--time');
  const avatar = cardElement.querySelector('.popup__avatar');
  const price = cardElement.querySelector('.popup__text--price');
  const capacity = cardElement.querySelector('.popup__text--capacity');
  const photos = cardElement.querySelector('.popup__photos');
  const features = cardElement.querySelector('.popup__features');

  fillTextContent(title, card.offer.title, card.offer.title);
  fillTextContent(address, card.offer.address, card.offer.address);
  fillTextContent(description, card.offer.description, card.offer.description);
  fillTextContent(type, card.offer.type, TYPES[card.offer.type]);
  fillTextContentProperties(time, card.offer.checkin, card.offer.checkout, `Заезд после ${card.offer.checkin}, выезд до ${card.offer.checkout}`);
  fillSrc(avatar, card.author.avatar);
  fillPrice(price, card.offer.price);
  fillTextContentProperties(capacity, card.offer.rooms, card.offer.guests, fillCapacity(offer));
  fillGroupElements(features, card.offer.features, getFeatureElement);
  fillGroupElements(photos, card.offer.photos, getPhotoElement);

  // const modifiers = card.offer.features.map((feature) => `popup__feature--${feature}`);
  // features.querySelectorAll('.popup__feature').forEach((item) => {
  //   const modifier = item.classList[1];

  //   if (!modifiers.includes(modifier)) {
  //     item.remove();
  //   }
  // });

  return cardElement;
};

mapCanvas.appendChild(renderOffer(createOffer()));
