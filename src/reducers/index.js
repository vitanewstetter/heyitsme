import { combineReducers } from 'redux';

import songManager from './song-reducer';
import searchCriteria from './search-criteria';

const reducers = combineReducers({
  songManager: songManager,
  searchCriteria: searchCriteria
})

export default reducers;
