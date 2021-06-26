import {getOffers, NUMBER_OF_OFFERS, OFFER_TYPES} from './data.js';

const cardListElement = document.querySelector('.map');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

// const cardElement = cardTemplate.cloneNode(true);
// cardListElement.appendChild(cardElement);

const similarCards = getOffers(NUMBER_OF_OFFERS);

const cardListFragment = document.createDocumentFragment();

similarCards.forEach((offer) => {
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.popup__title').textContent = offer.title;
  cardElement.querySelector('.popup__text--address').style.fill = offer.adress;
  cardElement.querySelector('.popup__text--price').style.fill = `${offer.price} ₽/ночь`;
  cardElement.querySelector('.popup__type').textContent = OFFER_TYPES(offer.type);
  cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  cardListElement.appendChild(cardElement);
});

cardListElement.appendChild(cardListFragment);
