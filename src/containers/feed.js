import React from 'react';

import FeedItem from '../components/feed-item';
import voicemails from '../sample';

class Feed extends React.Component {
  componentWillMount(){
    fillFeed();
  }
  componentWillReceiveProps(){
    fillFeed();
  }
  render(){
    return <div id='feed'>
      {feed_items}
    </div>
  }
}

export default Feed

var feed_items = [];

var fillFeed = function(){
  for (var i=1; i <= Object.keys(voicemails).length; i++){
    feed_items.push(<FeedItem
      key = { voicemails["vm_" + i].id }
      id = { voicemails["vm_" + i].id }
      title = { voicemails["vm_" + i].title }
      name = { voicemails["vm_" + i].name }
      time = { voicemails["vm_" + i].time }
      date = { voicemails["vm_" + i].date }
    />)
  }
}
