import React from 'react';
import axios from 'axios';

import FeedItem from '../components/feed-item';
import voicemails from '../sample';



class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      feed: [],
    };
  }

  fillFeed(){
    axios.get(this.props.url).then(res => {
      this.setState({ data: res.data });

      var data = this.state.data;
      var feed_items = [];

      for (var i=0; i < data.length; i++){
        feed_items.push(<FeedItem
          key = { data[i]._id}
          id = { data[i]._id }
          title = { data[i].title }
          name = { data[i].name }
          time = { data[i].time }
          date = { data[i].date }
        />)
      }
      this.setState({ feed: feed_items });
    });
  }

  componentWillMount(){
    this.fillFeed();
  }
  componentWillReceiveProps(){
    this.fillFeed();
  }
  render(){
    return <div id='feed'>
      {this.state.feed}
    </div>
  }
}

export default Feed
