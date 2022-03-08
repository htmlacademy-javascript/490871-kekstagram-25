import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';

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

let cardId = 1;
let urlNumber = 1;
let descriptionNumberArrayIndex = 0;
let commentId = 130;

const calculateCardID =  () => cardId++;

const calculateUrlNumber = () => urlNumber++;

const calculateDescriptionNumber = () => descriptionNumberArrayIndex++;

const calculateCommentID = () => commentId++;

const createCard = function () {
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
};

const publishedPhotos = () => Array.from({length: PUBLISHED_PHOTOS_COUNT}, createCard);

publishedPhotos();
