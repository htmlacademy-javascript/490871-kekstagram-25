const sortPhotosBlock = document.querySelector('.img-filters');
const sortingForm = document.querySelector('.img-filters__form');

const showSortPhotosBlock = () => {
  sortPhotosBlock.classList.remove('img-filters--inactive');
};

const onSortChange = (evt) => {
  if (evt.target.matches('.img-filters__button')) {
    sortingForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
  }
};

sortingForm.addEventListener('click', onSortChange);

const reShowPhotos = (cb) => {
  sortingForm.addEventListener('click', (evt) => {
    if (evt.target.matches('.img-filters__button')) {
      cb();
    }});
};


export {showSortPhotosBlock, reShowPhotos};
