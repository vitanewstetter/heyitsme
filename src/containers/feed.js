import React from 'react';
import axios from 'axios';

import FeedItem from '../components/feed-item';

import store from '../store';
import { connect } from 'react-redux';

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      feed: [],
      update: store.getState().update
    };
  }

  fillFeed(){
    // axios.post('/api/tags', {
    //   num: store.getState().search.tags.length,
    //   tags: store.getState().search.tags
    // }).then(function(response){
    //   console.log(response)
    // })
    console.log("fill feed called")
    axios.post('/api/tags', {
        num: store.getState().search.tags.length,
        tags: store.getState().search.tags
    }).then(res => {
      this.setState({ data: res.data });

      var data = this.state.data;
      var feed_items = [];

      for (var i=0; i < data.length; i++){
        feed_items.push(<FeedItem
          key = { data[i]._id}
          id = { data[i]._id }
          title = { data[i].title }
          name = { data[i].name }
        />)
      }
      this.setState({ feed: feed_items });

    });
  }

  componentDidMount(){
    this.fillFeed();
    store.dispatch({
      type: 'UPDATED'
    })
  }
  componentWillReceiveProps(){
    console.log("recieving props called");
    console.log(this.state.update)
    this.fillFeed();
    store.dispatch({
      type: 'UPDATED'
    })
  }
  render(){
    return <div id='feed'>
      {this.state.feed}
    </div>
  }
}

const mapStateToProps = function(store) {
    return {
        update: store.num.needsUpdate
    };
};

export default connect(mapStateToProps)(Feed);
