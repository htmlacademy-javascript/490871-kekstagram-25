const userComment = 'Комментарий, написанный пользователем';
const maxLengthString = 140;

function checkMaxLengthString (string, maxLength) {
  return string.length <= maxLength;
}

checkMaxLengthString (userComment, maxLengthString);

const PUBLISHED_PHOTOS_COUNT = 25;

const DESCRIPTIONS = [
  'Солнышко.',
  'Опять снег.',
  'Не ждали.',
  'Могло быть хуже.',
  'Вечереет.',
  'Туман.',
  'Дождь.',
  'Утро.',
  'Вечер.',
  'На концерте.',
  'Веселимся.',
  'Любимая работа.',
  'Мост.',
  'Река.',
  'Приплыли.',
  'Кораблик.',
  'Размытое пятно.',
  'Чей-то палец.',
  'Люди.',
  'Утренний туман.',
  'Вечерний дождь.',
  'Диван.',
  'Цветочек.',
  'Скамейка.',
  'Парк.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Иван',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function getRandomArrayElement (elements) {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
}
//checkMaxLengthString, getRandomPositiveInteger, getRandomArrayElement - функции htmlacademy

let cardId = 1;
let urlNumber = 1;
let descriptionNumberArrayIndex = 0;
let commentId = 130;

const calculateCardID = function () {
  return cardId++;
};

const calculateUrlNumber = function () {
  return urlNumber++;
};

const calculateDescriptionNumber = function () {
  return descriptionNumberArrayIndex++;
};

const calculateCommentID = function () {
  return commentId++;
};

function createCard () {
  return {
    id: calculateCardID(),
    url: `photos/${calculateUrlNumber()}.jpg`,
    description: DESCRIPTIONS[calculateDescriptionNumber()],
    likes: getRandomPositiveInteger(15,200),
    comments: [{
      id: calculateCommentID(),
      avatar: `img/avatar-${getRandomPositiveInteger(1,6)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES),
    }]
  };
}

function publishedPhotos () {
  return Array.from({length: PUBLISHED_PHOTOS_COUNT}, createCard);
}

publishedPhotos();
