import {getRandomInt, getRandomFloat, addZero, getArray, getRandomArrayElement} from './utils.js';

const NUMBER_OF_OFFERS = 10;

const OFFER_TITLE = [
  'Квартира в центре города',
  'Загородный таун-хаус',
  'Капсульный отель в центре Токио',
  'Лучший вид из окна',
  'Почасовая аренда',
  'Коворкинг твоей мечты',
  'Как на Бали, только лучше',
  'Лучшее предложение',
  'Зайди - увидишь!',
  'Панорамный вид из окна',
];

const OFFER_CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const OFFER_DESTRICTION = [
  'Предлагаем вашему вниманию премиальные видовые апартаменты от застройщика в башне Меркурий Тауэр, которые имеют панорамное энергосберегающее остекление с золотым напылением, что поддерживает комфортную температуру внутри, а также отражает около 75% вредного ультрафиолетового излучения.',
  'Апартамент включает просторную кухню, совмещенную с гостиной, мастер-спальню с вместительной гардеробной и ванной комнатой, гостевой санузел, постирочную комнату и холл.',
  'Клубный дом, находится в 2-ух минутах ходьбы до Патриарших Прудов; построен компании Vesper в 2014 году, оснащен современными инженерными системами, которые отвечают требованиям премиального сегмента.',
  'Квартира чистая, светлая, с косметическим ремонтом. Сан узел совмещенный. Окна квартиры выходят в тихий зеленый двор. Перед домом большая аллея с детскими площадками. До метро Домодедовская 15 минут пешей доступности.',
  'Добротный теплый кирпичный Дом на берегу озера , утопает в зелени. В квартире свежий качественный косметический ремонт с заменой электрики и окон (ПВХ), пол - паркет, в ванной Плитка, газ',
  'Территория ЖК огорожена. Работает круглосуточная охрана и консьерж. Имеется подземный паркинг, в который можно войти не выходя из подъезда.',
  'Поблизости расположены теннисный корт, фитнес, продуктовые магазины, парки, выход на Мосфильмовский пруд.',
  'Можно с детьми, можно с животными. Возможна оплата по безналичному расчету. Сдается на длительный срок.',
  'Планировка: холл, кухня-столовая, гостиная, мастер спальня с большой гардеробной комнатой, ванная комната, детская спальня на двоих детей, гостевой санузел.',
  'Жилой комплекс построен в 57 этажей, имеет высоту 264 метра.',
];

const createOffer = function () {
  const locationX = getRandomFloat(35.65000, 35.70000, 5);
  const locationY = getRandomFloat(139.70000, 139.80000, 5);

  return {
    author: {
      avatar: `img/avatars/user${addZero(getRandomInt(1, 10))}.png`,
    },
    offer: {
      title: getRandomArrayElement(OFFER_TITLE),
      address: `${locationX}, ${locationY}`,
      price: getRandomInt(1, 5000),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomInt(1, 3),
      guests: getRandomInt(1, 6),
      checkin: getRandomArrayElement(OFFER_CHECKIN),
      checkout: getRandomArrayElement(OFFER_CHECKOUT),
      features: getArray(OFFER_FEATURES),
      description: getRandomArrayElement(OFFER_DESTRICTION),
      photos: getArray(OFFER_PHOTOS),
    },
    location: {
      lat: locationX,
      lng: locationY,
    },
  };
};

const getOffers = function (count) {
  return new Array(count).fill(null).map(() => createOffer());
};

getOffers(NUMBER_OF_OFFERS);

export {
  getOffers,
  NUMBER_OF_OFFERS
};
