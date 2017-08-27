import React from 'react';
import { connect } from 'react-redux';

import NowPlaying from './nowplaying';

import store from '../store';

class BrowseCriteria extends React.Component {
  render(){
    return <div id="browse-criteria">
      <NowPlaying
        id = {store.getState().songManager.song}
      />
    </div>
  }
}

const mapStateToProps = function(store) {
    return {
        song: store.songManager.song,
    };
};

export default connect(mapStateToProps)(BrowseCriteria);
