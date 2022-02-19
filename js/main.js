const minNumber = 0;
const maxNumber = 6;

function getRandomInt (min, max) {
  if (min < 0 || max < 0) {
    return 'Ошибка! Число не может быть меньше нуля. Пожалуйста, введите другое число';
  }

  if (max <= min) {
    return 'Ошибка! Наибольшее число не может быть меньше или равно наименьшему числу. Пожалуйста, введите другое число';
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // Функция, возвращающая случайное целое число взята с сайта MDN (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
}

getRandomInt (minNumber,maxNumber);

const userComment = 'Комментарий, написанный пользователем';
const maxLengthString = 140;

function checkMaxLengthString (string, maxLength) {
  if (string.length > maxLength) {
    return false;
  }
  return true;
}

checkMaxLengthString (userComment, maxLengthString);
