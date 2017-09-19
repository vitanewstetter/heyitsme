import React from 'react';
import axios from 'axios';

import FeedItem from '../components/feed-item';

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      feed: [],
    };
  }

  fillFeed(){
    console.log("fillfeed called")
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
        />)
      }
      this.setState({ feed: feed_items });
    });
  }

  componentDidMount(){
    this.fillFeed();
  }
  componentWillReceiveProps(){
    console.log("recieving props called")
    this.fillFeed();
  }
  render(){
    return <div id='feed'>
      {this.state.feed}
    </div>
  }
}

export default Feed
