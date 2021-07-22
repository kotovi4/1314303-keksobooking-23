import {renderOffer} from './card.js';
import {activateMapForm} from './form.js';
import {getData, onSuccessGetData} from './api.js';

const CITY_CENTER = {
  lat: 35.681700,
  lng: 139.753891,
};

const addressField = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activateMapForm('active');
    getData(onSuccessGetData);
  }).setView(CITY_CENTER, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [22.5, 52],
});

const secondaryPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinMarker = L.marker(CITY_CENTER, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

const setAddress = ({lat, lng}) => {
  addressField.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

setAddress(CITY_CENTER);

mainPinMarker.on('moveend', (evt) => {
  setAddress(evt.target.getLatLng());
});

const renderSecondaryMarkers = (data) => {
  data.forEach((offer) => {
    const marker = L.marker({
      lat: offer.location.lat,
      lng: offer.location.lng,
    }, {
      icon: secondaryPinIcon,
    });

    marker
      .addTo(map)
      .bindPopup(renderOffer(offer));
  });
};

const resetMap = () => {
  mainPinMarker
    .setLatLng(CITY_CENTER);
  setTimeout(() => {
    addressField.value = `${CITY_CENTER.lat}, ${CITY_CENTER.lng}`;
  }, 0);
};

// удаление маркеров
const removeSecondaryMarkers = () => {
  map
    .eachLayer((marker) => {
      if (marker instanceof L.Marker && marker !== mainPinMarker) {
        marker.remove();
      }
    });
};

export {
  renderSecondaryMarkers,
  removeSecondaryMarkers,
  resetMap
};
