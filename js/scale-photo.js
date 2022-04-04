const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const userPhoto = document.querySelector('.img-upload__preview').querySelector('img');

let scaleNumber = 100;
const minValue = 25;
const maxValue = 100;
const step = 25;

scaleValue.value = `${scaleNumber}%`;

function changeScale () {
  const fraction = scaleNumber/100;
  userPhoto.style = `transform: scale(${fraction})`;
}

buttonSmaller.addEventListener('click',() => {
  if (scaleNumber >= minValue + step) {
    scaleNumber = scaleNumber - step;
    scaleValue.value = `${scaleNumber}%`;
    changeScale ();
  }});

buttonBigger.addEventListener('click',() => {
  if (scaleNumber <= maxValue - step) {
    scaleNumber = scaleNumber + step;
    scaleValue.value = `${scaleNumber}%`;
    changeScale ();
  }});

function resetScale () {
  scaleNumber = 100;
}

export {resetScale};
