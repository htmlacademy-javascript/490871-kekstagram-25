const uploadInput = document.querySelector('#upload-file');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('#upload-cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onFormEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditFile();
  }
};

const resetFilters = function () {
  uploadInput.value = '';
  textHashtags.value = '';
  textDescription.value = '';
};

const openEditFile = function () {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

function closeEditFile () {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadCancel.removeEventListener('click', closeEditFile);
  document.removeEventListener('keydown', onFormEscKeydown);
  resetFilters();
}

textDescription.addEventListener('focus', () => {
  document.removeEventListener('keydown', onFormEscKeydown);
});

textDescription.addEventListener('blur', () => {
  document.addEventListener('keydown', onFormEscKeydown);
});

textHashtags.addEventListener('focus', () => {
  document.removeEventListener('keydown', onFormEscKeydown);
});

textHashtags.addEventListener('blur', () => {
  document.addEventListener('keydown', onFormEscKeydown);
});

uploadInput.addEventListener('change', () => {
  openEditFile();
  uploadCancel.addEventListener('click', closeEditFile);
  document.addEventListener('keydown', onFormEscKeydown);
});

export {closeEditFile};
