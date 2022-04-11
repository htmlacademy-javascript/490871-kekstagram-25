const sliderEffect = document.querySelector('.effect-level__slider');
const valueEffect = document.querySelector('.effect-level__value');
const userPhoto = document.querySelector('.img-upload__preview').querySelector('img');
const effectsList =document.querySelector('.effects__list');
const effectNone = document.querySelector('#effect-none');
const effectLevelBlock = document.querySelector('.effect-level');

const effects = {
  chrome: {filterName: 'grayscale', minValue: 0, maxValue: 1, step: 0.1, unitOfMeasurement: ''},
  sepia: {filterName: 'sepia', minValue: 0, maxValue: 1, step: 0.1, unitOfMeasurement: ''},
  marvin: {filterName: 'invert', minValue: 0, maxValue: 100, step: 1, unitOfMeasurement: '%'},
  phobos: {filterName: 'blur', minValue: 0, maxValue: 3, step: 0.1, unitOfMeasurement: 'px'},
  heat: {filterName: 'brightness', minValue: 1, maxValue: 3, step: 0.1, unitOfMeasurement: ''},
};

noUiSlider.create(sliderEffect, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

effectLevelBlock.style.display = 'none';

let nameOfEffect;
let unitOfEffect;

const onFilterChange = (evt) => {
  const effectName = evt.target.value;
  const arrayEffect = effects[effectName];
  if (evt.target.matches('input[type="radio"]')) {
    userPhoto.className = `effects__preview--${effectName}`;
    if (effectName === 'none') {
      sliderEffect.noUiSlider.updateOptions ({
        range: {
          min: 0,
          max: 1,
        },
        start: 0,
        step: 0.1,
        connect: 'lower',
      });
      userPhoto.style.filter = '';
      effectLevelBlock.style.display = 'none';
    } else {
      sliderEffect.noUiSlider.updateOptions ({
        range: {
          min: arrayEffect.minValue,
          max: arrayEffect.maxValue,
        },
        start: arrayEffect.maxValue,
        step: arrayEffect.step,
        connect: 'lower',
      });

      sliderEffect.removeAttribute('display', 'none');
      nameOfEffect = arrayEffect.filterName;
      unitOfEffect = arrayEffect.unitOfMeasurement;
      userPhoto.style.filter = `${nameOfEffect}(${valueEffect.value}${unitOfEffect})`;
      effectLevelBlock.style.display = 'block';
    }
  }
};

effectsList.addEventListener('change', onFilterChange);

sliderEffect.noUiSlider.on('update', () => {
  valueEffect.value = sliderEffect.noUiSlider.get();
  userPhoto.style.filter = `${nameOfEffect}(${valueEffect.value}${unitOfEffect})`;
});

const resetEffect = () => {
  userPhoto.className = '';
  effectNone.checked = true;
  sliderEffect.noUiSlider.updateOptions ({
    range: {
      min: 0,
      max: 1,
    },
    start: 0,
    step: 0.1,
    connect: 'lower',
  });
  effectLevelBlock.style.display = 'none';
  userPhoto.removeAttribute('style');
};

export {resetEffect};
