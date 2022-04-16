const picturesContainer = document.querySelector('.pictures.container');

const bigPictureContainer = document.querySelector('.big-picture.overlay');

const bigPictureImage = bigPictureContainer.querySelector('.big-picture__img img');

const bigPictureLikesCount = bigPictureContainer.querySelector('.likes-count');

const bigPictureCommentsCount = bigPictureContainer.querySelector('.comments-count');

const bigPictureSocialCaption = bigPictureContainer.querySelector('.social__caption');

const bigPictureSocialComments = bigPictureContainer.querySelector('.social__comments');

const loadedCommentsCount = bigPictureContainer.querySelector('.loaded-comments');

const commentsLoader = bigPictureContainer.querySelector('.comments-loader');

const body = document.querySelector('body');

const bigPictureCancel = document.querySelector('.big-picture__cancel');

bigPictureSocialComments.textContent = '';

let commentsNumber = 5;

let comments = [];

const isEscapeKey = (evt) => evt.key === 'Escape';

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const loadComments = () => {
  if (comments.length - comments.slice(0,commentsNumber).length <= 5) {
    commentsLoader.classList.add('hidden');
    commentsNumber+=comments.length - comments.slice(0,commentsNumber).length;
  } else {
    commentsNumber+=5;
  }

  loadedCommentsCount.textContent = commentsNumber;
  bigPictureSocialComments.textContent = '';
  comments.slice(0,commentsNumber).forEach((comment) => bigPictureSocialComments.insertAdjacentHTML('beforeend', comment));
};

function closeUserModal () {
  bigPictureContainer.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPictureSocialComments.textContent = '';

  document.removeEventListener('keydown', onPopupEscKeydown);

  bigPictureCancel.removeEventListener('click', closeUserModal);

  commentsLoader.removeEventListener('click', loadComments);
}

const fillComments = (photoNumber, usersPictures) => {
  comments = [];

  for (let j=0;j<usersPictures[photoNumber].comments.length;j++) {
    comments.push(`<li class="social__comment"><img class="social__picture" src="${usersPictures[photoNumber].comments[j].avatar}" alt='${usersPictures[photoNumber].comments[j].name}' width="35" height="35"><p class="social__text">${usersPictures[photoNumber].comments[j].message}</p></li>`);
  }

  if (comments.length > 5) {
    commentsLoader.classList.remove('hidden');
    loadedCommentsCount.textContent = '5';
  } else {
    commentsLoader.classList.add('hidden');
    loadedCommentsCount.textContent = comments.length;
  }

  commentsNumber = 5;
  comments.slice(0,commentsNumber).forEach((comment) => bigPictureSocialComments.insertAdjacentHTML('beforeend', comment));
  commentsLoader.addEventListener('click', loadComments);
};

const fillPicturesContainer =  (loadedPhotos) => {
  picturesContainer.addEventListener('click', (evt) => {
    if (evt.target.nodeName === 'IMG') {
      bigPictureContainer.classList.remove('hidden');

      bigPictureImage.src = evt.target.src;

      const pictureLikes = evt.target.closest('a').querySelector('.picture__likes');

      bigPictureLikesCount.textContent = pictureLikes.textContent;

      const pictureComments = evt.target.closest('a').querySelector('.picture__comments');

      bigPictureCommentsCount.textContent = pictureComments.textContent;

      const pictureNumber = evt.target.closest('a').dataset.pictureNumber;

      bigPictureSocialCaption.textContent = loadedPhotos[pictureNumber].description;

      fillComments(pictureNumber, loadedPhotos);

      body.classList.add('modal-open');

      document.addEventListener('keydown', onPopupEscKeydown);

      bigPictureCancel.addEventListener('click', closeUserModal);
    }
  });
};

export {fillPicturesContainer};
