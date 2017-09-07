import { combineReducers } from 'redux';

import songManager from './song-reducer';
import searchCriteria from './search-criteria';
import about from './about-reducer';

const reducers = combineReducers({
  songManager: songManager,
  searchCriteria: searchCriteria,
  about: about
})

export default reducers;
