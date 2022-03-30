import {publishedPhotos} from './data.js';

const picturesContainer = document.querySelector('.pictures.container');

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const usersPictures = publishedPhotos();

const picturesFragment = document.createDocumentFragment();

usersPictures.forEach(({url, likes, comments,},index) => {
  const picture = templatePicture.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.dataset.pictureNumber = index;
  picturesFragment.append(picture);
});

picturesContainer.append(picturesFragment);

export {usersPictures};
