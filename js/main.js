import {renderUsersPictures, showLoadFail} from './show-miniatures.js';
import {closeEditFile} from './upload-file.js';
import {loseSubmit, successSubmit} from'./submit-form.js';
import {setUserFormSubmit} from './validate-form.js';
import './scale-photo.js';
import './filter-photo.js';
import {getData} from './api.js';
import './fullscreen-mode.js';
import {showSortPhotosBlock, reShowPhotos} from './sort-photos.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

getData((photos) => {
  renderUsersPictures(photos);
  reShowPhotos(debounce(() => renderUsersPictures(photos),RERENDER_DELAY,));
  showSortPhotosBlock();
}, showLoadFail);

setUserFormSubmit(successSubmit, loseSubmit, closeEditFile);
