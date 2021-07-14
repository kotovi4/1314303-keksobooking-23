// import {renderOffer} from './card.js';
import {activateMapForm} from './form.js';

const addressField = document.querySelector('#address');

const cityCenter = {
  lat: 35.681700,
  lng: 139.753891,
};

const map = L.map('map-canvas')
  .on('load', () => {
    activateMapForm('active');
  }).setView(cityCenter, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
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

const secondaryPinMarker = L.marker(cityCenter, {
  draggable: true,
  icon: secondaryPinIcon,
});
secondaryPinMarker.addTo(map);

const mainPinMarker = L.marker(cityCenter, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

const setAddress = ({lat, lng}) => {
  addressField.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  addressField.disabled = true;
};

setAddress(cityCenter);

mainPinMarker.on('moveend', (evt) => {
  setAddress(evt.target.getLatLng());
});