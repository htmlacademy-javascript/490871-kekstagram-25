import {usersPictures} from './show-miniatures.js';

const picturesContainer = document.querySelector('.pictures.container');

const bigPictureContainer = document.querySelector('.big-picture.overlay');

const bigPictureImage = bigPictureContainer.querySelector('.big-picture__img img');

const bigPictureLikesCount = bigPictureContainer.querySelector('.likes-count');

const bigPictureCommentsCount = bigPictureContainer.querySelector('.comments-count');

const bigPictureSocialCaption = bigPictureContainer.querySelector('.social__caption');

const bigPictureSocialComments = bigPictureContainer.querySelector('.social__comments');

const socialCommentCount = bigPictureContainer.querySelector('.social__comment-count');

const commentsLoader = bigPictureContainer.querySelector('.comments-loader');

const body = document.querySelector('body');

const bigPictureCancel = document.querySelector('.big-picture__cancel');

bigPictureSocialComments.textContent = '';

const isEscapeKey = (evt) => evt.key === 'Escape';

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const fillComments = function (photoNumber) {
  for (let j=0;j<usersPictures[photoNumber].comments.length;j++) {
    bigPictureSocialComments.insertAdjacentHTML('beforeend', `<li class="social__comment"><img class="social__picture" src="${usersPictures[photoNumber].comments[j].avatar}" alt='${usersPictures[photoNumber].comments[j].name}' width="35" height="35"><p class="social__text">${usersPictures[photoNumber].comments[j].message}</p></li>`);
  }
  return bigPictureSocialComments;
};

const fillPicturesContainer = function (evt) {
  if (evt.target.nodeName === 'IMG') {
    bigPictureContainer.classList.remove('hidden');

    bigPictureImage.src = evt.target.src;

    const pictureLikes = evt.target.closest('a').querySelector('.picture__likes');

    bigPictureLikesCount.textContent = pictureLikes.textContent;

    const pictureComments = evt.target.closest('a').querySelector('.picture__comments');

    bigPictureCommentsCount.textContent = pictureComments.textContent;

    const pictureNumber = evt.target.closest('a').dataset.pictureNumber;

    bigPictureSocialCaption.textContent = usersPictures[pictureNumber].description;

    fillComments(pictureNumber);

    socialCommentCount.classList.add('hidden');

    commentsLoader.classList.add('hidden');

    body.classList.add('modal-open');

    document.addEventListener('keydown', onPopupEscKeydown);

    bigPictureCancel.addEventListener('click', closeUserModal);
  }
};

picturesContainer.addEventListener('click', fillPicturesContainer);

function closeUserModal () {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureSocialComments.textContent = '';

  document.removeEventListener('keydown', onPopupEscKeydown);

  bigPictureCancel.removeEventListener('click', closeUserModal);
}
