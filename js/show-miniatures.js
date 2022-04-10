const picturesContainer = document.querySelector('.pictures.container');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

let photosCount = 25;

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
  photosCount = 25;
});

filterRandom.addEventListener('click', () => {
  comparePhotos = () => {
    const valuePhotoA = Math.random();
    const valuePhotoB = Math.random();
    return valuePhotoB - valuePhotoA;
  };
  photosCount = 10;
});

filterDiscussed.addEventListener('click', () => {
  comparePhotos = (photoA, photoB) => {
    const valuePhotoA = getCommentsNumber(photoA);
    const valuePhotoB = getCommentsNumber(photoB);
    return valuePhotoB - valuePhotoA;
  };
  photosCount = 25;
});

const renderUsersPictures = (usersPictures) => {
  const picturesFragment = document.createDocumentFragment();

  usersPictures
    .slice()
    .sort(comparePhotos)
    .slice(0, photosCount)
    .forEach(({url, likes, comments,},index) => {
      const picture = templatePicture.cloneNode(true);
      picture.querySelector('.picture__img').src = url;
      picture.querySelector('.picture__comments').textContent = comments.length;
      picture.querySelector('.picture__likes').textContent = likes;
      picture.dataset.pictureNumber = index;
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
