import {sendData} from './api.js';

const uploadForm = document.querySelector('.img-upload__form');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const createHashtagsArray = () => hashtagsField.value.split(' ');

const pristine = new Pristine(uploadForm, {
  classTo: 'text__container',
  errorClass: 'text__container--invalid',
  successClass: 'text__container--valid',
  errorTextParent: 'text__container',
  errorTextTag: 'p',
  errorTextClass: 'text__error'
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикую...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const checkHashtagLength = () => {
  const hashtagsArray = createHashtagsArray();
  return hashtagsArray.length < 6;
};

const checkHashtag = () => {
  const hashtagsArray = createHashtagsArray();
  const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
  return hashtagsArray.every((hashtag) => re.test(hashtag)) || !hashtagsField.value;
};

const checkHashtagRepeats = () => {
  const hashtagsArray = createHashtagsArray();
  for (let i = 0; i < hashtagsArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (hashtagsArray[j].toUpperCase() === hashtagsArray[i].toUpperCase()) {
        return false;
      }
    }
  } return true;
};

pristine.addValidator(
  hashtagsField,
  checkHashtag,
  'хэш-тег начинается с символа #, содержит буквы и числа и не может содержать больше 20 символов'
);

pristine.addValidator(
  hashtagsField,
  checkHashtagLength,
  'нельзя указать больше пяти хэш-тегов'
);

pristine.addValidator(
  hashtagsField,
  checkHashtagRepeats,
  'хэш-теги не должны повторяться (хэш-теги нечувствительны к регистру)'
);

const validateCommentField = (value) => value.length <= 140;

pristine.addValidator(
  commentField,
  validateCommentField,
  'длина комментария не может составлять больше 140 символов'
);

const setUserFormSubmit = (onSuccess, onFail, closeForm) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid= pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          closeForm();
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          closeForm();
          onFail();
          unblockSubmitButton();
        },
        new FormData(evt.target),);
    }
  });
};


export {setUserFormSubmit};
