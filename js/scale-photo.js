const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const userPhoto = document.querySelector('.img-upload__preview').querySelector('img');

const MIN_VALUE = 25;
const MAX_VALUE = 100;
const STEP = 25;

let scaleNumber = 100;

scaleValue.value = `${scaleNumber}%`;

const changeScale = () => {
  const fraction = scaleNumber/100;
  userPhoto.style = `transform: scale(${fraction})`;
};

buttonSmaller.addEventListener('click',() => {
  if (scaleNumber >= MIN_VALUE + STEP) {
    scaleNumber = scaleNumber - STEP;
    scaleValue.value = `${scaleNumber}%`;
    changeScale ();
  }});

buttonBigger.addEventListener('click',() => {
  if (scaleNumber <= MAX_VALUE - STEP) {
    scaleNumber = scaleNumber + STEP;
    scaleValue.value = `${scaleNumber}%`;
    changeScale ();
  }});

const resetScale = () => {
  scaleNumber = 100;
};

export {resetScale};
