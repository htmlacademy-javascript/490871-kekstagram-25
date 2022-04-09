const userComment = 'Комментарий, написанный пользователем';
const maxLengthString = 140;

const checkMaxLengthString = (string, maxLength) => string.length <= maxLength;

checkMaxLengthString (userComment, maxLengthString);

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {getRandomPositiveInteger, getRandomArrayElement, debounce};
//checkMaxLengthString, getRandomPositiveInteger, getRandomArrayElement - функции htmlacademy
