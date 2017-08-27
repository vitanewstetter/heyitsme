const initialSong = {
  song: 'null',
  playing: false
};

const songManager = (state = initialSong, action) => {
  switch(action.type){
    case 'NEW_SONG':
      return Object.assign({}, state, {playing: true, song: action.id});
    case 'PAUSE_SONG':
      return Object.assign({}, state, {playing: false});
    case 'PLAY_SONG':
      return Object.assign({}, state, {playing: true});
    default:
      return state;
  }

}

export default songManager;
