const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const disabledMapForm = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.classList.add('disabled');
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.classList.add('disabled');
  });
  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.classList.add('disabled');
  });
};

const activateMapForm = () => {
  adForm.classList.remove('ad-form--disabled');

  adForm.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.classList.remove('disabled');
  });

  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.classList.remove('disabled');
  });
  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.classList.remove('disabled');
  });
};

export {
  disabledMapForm,
  activateMapForm
};
