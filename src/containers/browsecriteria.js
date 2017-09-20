import React from 'react';
import { connect } from 'react-redux';

import NowPlaying from './nowplaying';
import SelectedTag from '../components/selected-tag';

import store from '../store';
import axios from 'axios';

class BrowseCriteria extends React.Component {

  search(){
    var searchVal = document.getElementById("tag-input").value;
    var searching = document.getElementById("searching");
    console.log(searchVal);

    store.dispatch({
      type: 'ADD_TAG',
      tag: searchVal
    })
    store.dispatch({
      type: 'NEEDSUPDATE'
    });
    document.getElementById("tag-input").value = "";
  }

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
      <form >
        <input id="butt-dial" type="checkbox"/>
        <label>Butt Dial</label>
      </form>
      <form>
        <input id="drunk" type="checkbox"/>
        <label>Drunk Dial</label>
      </form>
      <form id="tag-form">
        <input id="tag-input" type="text" placeholder="search by tag"/>
        <div onClick={this.search} id="searchAdd">Add Tag</div>
      </form>
      <div id="searching">
      </div>
      <div id="selected-tags">
        { tagArray }
      </div>
    </div>
  }
}

var tagArray;
var showTags = function(){
  tagArray = [];
  for (var i=0; i < store.getState().search.tags.length; i++){
    tagArray.push(<SelectedTag
      key = { Math.random() }
      tag = { store.getState().search.tags[i] }
      index = { i }
    />)
  }
}

const mapStateToProps = function(store) {
    return {
        song: store.songManager.song,
        tags: store.search.tags,
    };
};

export default connect(mapStateToProps)(BrowseCriteria);
