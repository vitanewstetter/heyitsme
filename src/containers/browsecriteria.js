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
      <form>
        <input id="butt-dial" type="checkbox"/>
        <label for="butt-dial">Butt Dial</label>
      </form>
      <form>
        <input id="drunk" type="checkbox"/>
        <label for="drunk-dial">Drunk Dial</label>
      </form>
    </div>
  }
}

const mapStateToProps = function(store) {
    return {
        song: store.songManager.song,
    };
};

export default connect(mapStateToProps)(BrowseCriteria);
