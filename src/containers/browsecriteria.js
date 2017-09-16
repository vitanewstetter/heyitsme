import React from 'react';
import { connect } from 'react-redux';

import NowPlaying from './nowplaying';
import SelectedTag from '../components/selected-tag';

import store from '../store';

class BrowseCriteria extends React.Component {
  componentWillMount(){
    showTags();
  }
  componentWillReceiveProps(){
    showTags();
  }

  render(){
    return <div id="browse-criteria">
      <NowPlaying
        id = {store.getState().songManager.song}
      />
      // <form>
      //   <input id="butt-dial" type="checkbox"/>
      //   <label>Butt Dial</label>
      // </form>
      // <form>
      //   <input id="drunk" type="checkbox"/>
      //   <label>Drunk Dial</label>
      // </form>
      <form>
        <input id="tag-input" type="text" placeholder="search by tag"/>
      </form>
      <div id="selected-tags">
        { tagArray }
      </div>
    </div>
  }
}

var tagArray;
var showTags = function(){
  tagArray = [];
  for (var i=0; i < store.getState().searchCriteria.tags.length; i++){
    tagArray.push(<SelectedTag
      key = { Math.random() }
      tag = { store.getState().searchCriteria.tags[i] }
      index = { i }
    />)
  }
}

const mapStateToProps = function(store) {
    return {
        song: store.songManager.song,
        tags: store.searchCriteria.tags,
    };
};

export default connect(mapStateToProps)(BrowseCriteria);
