const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const disabledMapForm = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.disabled = true;
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.disabled = true;
  });
  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.disabled = true;
  });
};

const activateMapForm = () => {
  adForm.classList.remove('ad-form--disabled');

  adForm.querySelectorAll('fieldset').forEach((fieldset) => {
    fieldset.disabled = false;
  });

  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('.map__filter').forEach((filter) => {
    filter.disabled = false;
  });
  mapFilters.querySelectorAll('.map__features').forEach((feature) => {
    feature.disabled = false;
  });
};

export {
  disabledMapForm,
  activateMapForm
};
