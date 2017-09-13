import { combineReducers } from 'redux';

import songManager from './song-reducer';
import searchCriteria from './search-criteria';
import about from './about-reducer';
import upload from './upload-data-reducer';
import num from './voicemail-reducer';

const reducers = combineReducers({
  songManager: songManager,
  searchCriteria: searchCriteria,
  about: about,
  upload: upload,
  num: num
})

export default reducers;
