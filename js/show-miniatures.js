const picturesContainer = document.querySelector('.pictures.container');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const PHOTOS_ON_PAGE = 25;
const RANDOM_PHOTOS_ON_PAGE = 10;

let photosCount = PHOTOS_ON_PAGE;

const getCommentsNumber = (photo) => photo.comments.length;

const getPhotoId = (photo) => photo.id;

let comparePhotos = (photoA, photoB) => {
  const valuePhotoA = getPhotoId(photoA);
  const valuePhotoB = getPhotoId(photoB);
  return valuePhotoA - valuePhotoB;
};

filterDefault.addEventListener('click', () => {
  comparePhotos = (photoA, photoB) => {
    const valuePhotoA = getPhotoId(photoA);
    const valuePhotoB = getPhotoId(photoB);
    return valuePhotoA - valuePhotoB;
  };
  photosCount = PHOTOS_ON_PAGE;
});

filterRandom.addEventListener('click', () => {
  comparePhotos = () => {
    const valuePhotoA = Math.random();
    const valuePhotoB = Math.random();
    return valuePhotoB - valuePhotoA;
  };
  photosCount = RANDOM_PHOTOS_ON_PAGE;
});

filterDiscussed.addEventListener('click', () => {
  comparePhotos = (photoA, photoB) => {
    const valuePhotoA = getCommentsNumber(photoA);
    const valuePhotoB = getCommentsNumber(photoB);
    return valuePhotoB - valuePhotoA;
  };
  photosCount = PHOTOS_ON_PAGE;
});

const renderUsersPictures = (usersPictures) => {
  const picturesFragment = document.createDocumentFragment();

  usersPictures
    .slice()
    .sort(comparePhotos)
    .slice(0, photosCount)
    .forEach(({id, url, likes, comments,}) => {
      const picture = templatePicture.cloneNode(true);
      picture.querySelector('.picture__img').src = url;
      picture.querySelector('.picture__comments').textContent = comments.length;
      picture.querySelector('.picture__likes').textContent = likes;
      picture.dataset.pictureNumber = id;
      picturesFragment.append(picture);
    });

  const pictures = picturesContainer.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
  picturesContainer.append(picturesFragment);
};

const showLoadFail = () => {
  picturesContainer.insertAdjacentText ('afterbegin', 'Не получилось загрузить фотографии...');
};

export {renderUsersPictures, showLoadFail};
