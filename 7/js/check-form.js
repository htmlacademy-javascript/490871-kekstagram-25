const hashtagsField = document.querySelector('.text__hashtags');

const createHashtagArray = function () {
  return hashtagsField.value.split(' ');
};

const checkHashtag = function () {
  if (createHashtagArray().length < 6) {
    const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
    return createHashtagArray().every((hashtag) => re.test(hashtag) || !hashtagsField.value);
  }
  return false;
};

const checkHashtagRepeats = function () {
  for (let i = 0; i < createHashtagArray().length; i++) {
    for (let j = 0; j < i; j++) {
      if (createHashtagArray()[j].toUpperCase() === createHashtagArray()[i].toUpperCase()) {
        return false;
      }
    }
  } return true;
};

export {checkHashtag, checkHashtagRepeats};


