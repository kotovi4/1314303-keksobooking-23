import {getOffers, NUMBER_OF_OFFERS} from './data.js';

const cardListElement = document.querySelector('.map');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

// const cardElement = cardTemplate.cloneNode(true);
// cardListElement.appendChild(cardElement);

const similarCards = getOffers(NUMBER_OF_OFFERS);

similarCards.forEach(() => {
  const cardElement = cardTemplate.cloneNode(true);
  cardListElement.appendChild(cardElement);
});
