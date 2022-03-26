const uploadForm = document.querySelector('.img-upload__form');
const hashtagsField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const createHashtagsArray = function () {
  return hashtagsField.value.split(' ');
};

const pristine = new Pristine(uploadForm, {
  classTo: 'text__container',
  errorClass: 'text__container--invalid',
  successClass: 'text__container--valid',
  errorTextParent: 'text__container',
  errorTextTag: 'p',
  errorTextClass: 'text__error'
});

function checkHashtagLength () {
  const hashtagsArray = createHashtagsArray();
  return hashtagsArray.length < 6;
}

function checkHashtag () {
  const hashtagsArray = createHashtagsArray();
  const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
  return hashtagsArray.every((hashtag) => re.test(hashtag));
}

function checkHashtagRepeats () {
  const hashtagsArray = createHashtagsArray();
  for (let i = 0; i < hashtagsArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (hashtagsArray[j].toUpperCase() === hashtagsArray[i].toUpperCase()) {
        return false;
      }
    }
  } return true;
}

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

function validateCommentField (value) {
  return value.length <= 140;
}

pristine.addValidator(
  commentField,
  validateCommentField,
  'длина комментария не может составлять больше 140 символов'
);


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid= pristine.validate();
  if (isValid) {
    uploadForm.submit();
  }});
