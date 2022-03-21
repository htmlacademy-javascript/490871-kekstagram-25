import {publishedPhotos} from './data.js';

const picturesContainer = document.querySelector('.pictures.container');

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const usersPictures = publishedPhotos();

const picturesFragment = document.createDocumentFragment();

let pictureIndex = 0;

usersPictures.forEach(({url, likes, comments}) => {
  const picture = templatePicture.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.dataset.pictureNumber = pictureIndex++;
  picturesFragment.append(picture);
});

picturesContainer.append(picturesFragment);

export {usersPictures};
