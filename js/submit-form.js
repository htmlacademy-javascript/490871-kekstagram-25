import {checkHashtag, checkHashtagRepeats} from './check-form.js';
import {closeEditFile} from './upload-file.js';

const uploadForm = document.querySelector('.img-upload__form');
const templateError = document.querySelector('#error').content.querySelector('.error');
const errorMessage = templateError.cloneNode(true);
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const successMessage = templateSuccess.cloneNode(true);
const errorButton = errorMessage.querySelector('.error__button');
const successButton = successMessage.querySelector('.success__button');

const loseSubmit = function () {
  document.body.append(errorMessage);
  document.addEventListener('keydown', onFormEscKeydown);
  errorButton.addEventListener('click', closeErrorMessage);
  errorMessage.addEventListener('click', closeErrorMessage);
  const errorInner = errorMessage.querySelector('.error__inner');
  errorInner.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
};

const successSubmit = function () {
  document.body.append(successMessage);
  document.addEventListener('keydown', onFormEscKeydown);
  successButton.addEventListener('click', closeSuccessMessage);
  successMessage.addEventListener('click', closeSuccessMessage);
  const successInner = successMessage.querySelector('.success__inner');
  successInner.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
};

const isEscapeKey = (evt) => evt.key === 'Escape';

function onFormEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
    closeSuccessMessage();
  }
}

function closeErrorMessage () {
  errorMessage.remove();
  document.removeEventListener('keydown', onFormEscKeydown);
  errorButton.removeEventListener('click', closeErrorMessage);
  errorMessage.removeEventListener('click', closeErrorMessage);
}

function closeSuccessMessage () {
  successMessage.remove();
  document.removeEventListener('keydown', onFormEscKeydown);
  successButton.removeEventListener('click', closeSuccessMessage);
  successMessage.removeEventListener('click', closeSuccessMessage);
}

const pristine = new Pristine(uploadForm);

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid && checkHashtag() && checkHashtagRepeats()) {
    uploadForm.submit();
    successSubmit();
    closeEditFile();
  } else {
    loseSubmit();
    closeEditFile();
  }
});
