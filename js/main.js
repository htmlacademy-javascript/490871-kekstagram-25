let minNumber = 0;
let maxNumber = 6;

function getRandomInt (min, max) {
  if (min < 0 || max < 0) {
    alert('Ошибка! Число не может быть меньше нуля. Пожалуйста, введите другое число');
    return;
  }

  if (max <= min) {
    alert('Ошибка! Наибольшее число не может быть меньше или равно наименьшему числу. Пожалуйста, введите другое число');
    return;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // Функция, возвращающая случайное целое число взята с сайта MDN (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
}

getRandomInt (minNumber,maxNumber);

let userComment = 'Комментарий, написанный пользователем';
let maxLength = 140;

function checkMaxLengthString (string, maxLength) {
  if (string.length > maxLength) {
    return false;
  }
  return true;
}

checkMaxLengthString (userComment, maxLength);
