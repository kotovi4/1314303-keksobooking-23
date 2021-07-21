const HOUSE_PRICE_MIN = 10000;
const HOUSE_PRICE_MAX = 50000;

const houseType = document.querySelector('#housing-type');
const houseRooms = document.querySelector('#housing-rooms');
const houseGuests = document.querySelector('#housing-guests');
const housePrice = document.querySelector('#housing-price');
const houseFeatures = document.querySelector('#housing-features');


const filterByPrice = (item) => {
  switch (housePrice.value) {
    case 'middle':
      return item.offer.price >= HOUSE_PRICE_MIN && item.offer.price <= HOUSE_PRICE_MAX;

    case 'low':
      return item.offer.price < HOUSE_PRICE_MIN;

    case 'high':
      return item.offer.price > HOUSE_PRICE_MAX;

    default:
      return true;
  }
};

const filterByFeatures = (item) => {
  const selectedFeatures = [].map.call(houseFeatures.querySelectorAll('input:checked'), (input) => input.value);
  return selectedFeatures.every((feature) => item.offer.features !== undefined ? item.offer.features.includes(feature) : false);
};

const filterData = (data) => {
  const result = data.filter((offer) => (houseType.value === offer.offer.type || houseType.value === 'any')
  && (+houseRooms.value === offer.offer.rooms || houseRooms.value === 'any')
  && (+houseGuests.value === offer.offer.guests || houseGuests.value === 'any')
  && filterByPrice(offer)
  && filterByFeatures(offer));
  return result.slice(0, 10);
};

export {
  filterData
};

