import {renderUsersPictures} from './show-miniatures.js';
import {closeEditFile} from './upload-file.js';
import {loseSubmit, successSubmit} from'./submit-form.js';
import {setUserFormSubmit} from './validate-form.js';
import './scale-photo.js';
import './filter-photo.js';
import {getData} from './api.js';
import './fullscreen-mode.js';

getData(renderUsersPictures);

setUserFormSubmit(successSubmit, loseSubmit, closeEditFile);
