import { combineReducers } from 'redux';

import songManager from './song-reducer';

const reducers = combineReducers({
  songManager: songManager
})

export default reducers;
